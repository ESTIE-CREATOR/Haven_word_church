import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

const STAGGER_MS = 110;
const CLEANUP_MS = 1100;

type Direction = "left" | "right" | "up" | "zoom";

// Animates content into view as it is scrolled to, on every page, without each page having to opt in.
// It looks inside every `.container-custom` in <main> and the footer, and picks a motion for each block:
//   - blocks in a section slide in from the left or the right, alternating section by section
//   - the two sides of a two-column layout come in from opposite sides
//   - the items of a wider grid rise up one after another
//   - the footer only ever rises, never slides sideways
// To override, put data-reveal-from="left|right|up|zoom" on an element, or data-no-reveal on a
// section to leave it alone.
const ScrollReveal = () => {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const timers: number[] = [];

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          io.unobserve(el);
          el.dataset.reveal = "in";
          const delay = parseFloat(el.style.getPropertyValue("--reveal-delay")) || 0;
          // Once it has played, hand the element back untouched so its own hover effects work as before
          timers.push(
            window.setTimeout(() => {
              el.dataset.reveal = "done";
              el.style.removeProperty("--reveal-delay");
            }, CLEANUP_MS + delay)
          );
        });
      },
      { rootMargin: "0px 0px -6% 0px", threshold: 0 }
    );

    const prepare = (el: Element, from: Direction, index = 0) => {
      if (!(el instanceof HTMLElement) || el.dataset.reveal) return;
      if (!el.dataset.revealFrom) el.dataset.revealFrom = from;
      if (index > 0) el.style.setProperty("--reveal-delay", `${index * STAGGER_MS}ms`);
      el.dataset.reveal = "init";
      io.observe(el);
    };

    const scan = () => {
      const sections = Array.from(document.querySelectorAll("main section, main > div, footer"));

      document.querySelectorAll("main .container-custom, footer .container-custom").forEach((container) => {
        if (container.closest("[data-no-reveal]")) return;

        // Sections take turns: one comes in from the left, the next from the right
        const sectionIndex = sections.findIndex((section) => section.contains(container));
        const side: Direction = sectionIndex % 2 === 0 ? "left" : "right";
        const otherSide: Direction = side === "left" ? "right" : "left";
        // The footer never slides sideways: everything in it simply rises into place
        const inFooter = Boolean(container.closest("footer"));

        Array.from(container.children).forEach((child) => {
          const isGrid = child.classList.contains("grid") && child.children.length > 1;
          if (!isGrid) {
            prepare(child, inFooter ? "up" : side);
            return;
          }

          const columns = getComputedStyle(child).gridTemplateColumns.split(" ").filter(Boolean).length;
          Array.from(child.children).forEach((item, i) => {
            if (inFooter) {
              prepare(item, "up", i % columns);
            } else if (columns <= 2) {
              // Two columns, or rows stacked in one column: alternate the side they arrive from
              prepare(item, i % 2 === 0 ? side : otherSide, columns === 2 ? i % 2 : 0);
            } else {
              prepare(item, "up", i % columns);
            }
          });
        });
      });
    };

    scan();

    // Pick up content that arrives later, e.g. videos loaded from YouTube or "View More" results
    const mo = new MutationObserver(scan);
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      mo.disconnect();
      io.disconnect();
      timers.forEach((t) => window.clearTimeout(t));
    };
  }, [pathname]);

  return null;
};

export default ScrollReveal;
