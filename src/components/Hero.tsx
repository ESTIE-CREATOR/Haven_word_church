import { useEffect, useMemo, useRef } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import EchoHeadline from "@/components/EchoHeadline";
import FlierDialog from "@/components/FlierDialog";
import { getNextEvent } from "@/data/events";
import { entranceSpeed } from "@/lib/motion";

interface HeroProps {
  // Hold the entrance until the intro has started to lift, so it isn't played unseen
  play?: boolean;
}

const Hero = ({ play = true }: HeroProps) => {
  const rootRef = useRef<HTMLDivElement>(null);
  // Whichever event is next by date - it moves on by itself once an event has passed
  const nextEvent = useMemo(() => getNextEvent(), []);

  useEffect(() => {
    if (!play) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      // Slower on phones, where the normal pace feels rushed
      tl.timeScale(entranceSpeed());

      tl.fromTo("[data-hero-image]", { scale: 1.12 }, { scale: 1, duration: 2.2, ease: "power2.out" }, 0);
      tl.fromTo("[data-hero-headline]", { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1 }, 0.15);
      // The outlined copies start hidden behind the headline, then fan out below it
      tl.fromTo(
        "[data-hero-headline]",
        { "--echo-spread": "0em" },
        { "--echo-spread": "0.13em", duration: 1, ease: "power2.out" },
        0.55
      );
      tl.fromTo("[data-hero-fade]", { opacity: 0, y: 28 }, { opacity: 1, y: 0, duration: 0.8, stagger: 0.18 }, 0.85);
    }, rootRef);

    return () => ctx.revert();
  }, [play]);

  return (
    <div ref={rootRef} className="relative flex min-h-[100svh] flex-col overflow-hidden max-w-full">
      <div className="absolute inset-0">
        <img
          data-hero-image
          src="/pictures/hero/605502457_855635007234941_5452367330643565962_n.jpg"
          alt="Worship at Haven Word Church"
          className="h-full w-full object-cover object-[center_40%]"
        />
        {/* Deep blue wash for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0c1140]/80 via-[#0c1140]/60 to-[#080b2c]/90" />
      </div>

      {/* Hero Content - padded well clear of the header */}
      <div className="relative z-20 flex flex-1 items-center justify-center px-4 pt-28 pb-12 sm:pt-40 text-center">
        <div className="w-full">
          {/* Phones get three short lines so the lettering can be much larger; only one of the two is ever displayed */}
          <div data-hero-headline className="opacity-0">
            <EchoHeadline as="h1" lines={["We have", "a seat", "for you"]} className="inline-block sm:hidden text-white text-[clamp(2.6rem,14.5vw,4.5rem)]" />
            <EchoHeadline as="h1" lines={["We have a seat", "for you"]} className="hidden sm:inline-block text-white text-[clamp(2.75rem,8vw,6rem)]" />
          </div>

          {/* Up Next - the next event by date, pinned under the headline */}
          {nextEvent && (
            <div
              data-hero-fade
              className="opacity-0 relative mx-auto mt-[clamp(3.25rem,7.5vw,5.5rem)] flex w-full max-w-md items-stretch gap-4 overflow-hidden rounded-2xl bg-primary p-3 text-left text-white shadow-2xl shadow-black/50 ring-1 ring-white/15"
            >
              <div className="pointer-events-none absolute -top-16 -right-16 h-40 w-40 rounded-full bg-secondary/30 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-20 -left-16 h-44 w-44 rounded-full bg-secondary/15 blur-3xl" />

              {nextEvent.image && (
                <FlierDialog title={nextEvent.title} image={nextEvent.image}>
                  <button
                    type="button"
                    aria-label={`View ${nextEvent.title} flier`}
                    className="group relative w-24 flex-shrink-0 self-center overflow-hidden rounded-xl sm:w-28 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
                  >
                    <img
                      src={nextEvent.image}
                      alt={`${nextEvent.title} flier`}
                      className="block h-auto w-full transition-transform duration-500 group-hover:scale-105"
                    />
                  </button>
                </FlierDialog>
              )}

              <div className="relative flex min-w-0 flex-1 flex-col justify-center py-1 pr-1">
                <span className="mb-1.5 inline-flex items-center gap-2 text-[0.65rem] font-bold uppercase tracking-[0.25em] text-secondary">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-secondary" />
                  </span>
                  Up Next
                </span>
                <p className="font-display text-base leading-none sm:text-xl">
                  <span>{nextEvent.title}</span>
                </p>
                <p className="mt-2 text-xs text-white/80 sm:text-sm">
                  {[nextEvent.date, nextEvent.time].filter(Boolean).join(" • ")}
                </p>
                <Link
                  to="/events"
                  className="group/link mt-3 inline-flex items-center gap-1 self-start text-xs font-semibold text-white underline-offset-4 hover:underline sm:text-sm"
                >
                  Event details
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                </Link>
              </div>
            </div>
          )}

          {/* Call to Action Buttons */}
          <div data-hero-fade className="opacity-0 mt-8 flex flex-row gap-3 sm:gap-4 justify-center items-center px-2">
            <InteractiveHoverButton asChild text="Messages" className="px-3 sm:px-6 md:px-8 py-2 sm:py-3 border-2 border-white/30 text-white bg-transparent hover:bg-white/10 text-sm sm:text-base">
              <Link to="/messages">Messages</Link>
            </InteractiveHoverButton>
            <InteractiveHoverButton asChild text="Contact" className="px-3 sm:px-6 md:px-8 py-2 sm:py-3 border-2 border-white/30 text-white bg-transparent hover:bg-white/10 text-sm sm:text-base">
              <Link to="/contact">Contact</Link>
            </InteractiveHoverButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
