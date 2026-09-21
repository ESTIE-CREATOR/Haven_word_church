import { useCallback, useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ChevronsRight } from "lucide-react";
import { ShaderAnimation } from "@/components/ui/shader-animation";
import { shouldPlayIntro, markIntroSeen } from "@/lib/intro";

interface IntroAnimationProps {
  // Fires as the intro starts to leave, so the page underneath can begin its own entrance
  onReveal?: () => void;
  onComplete?: () => void;
}

const TITLE_WORDS = ["Haven", "Word", "Church"];

const IntroAnimation = ({ onReveal, onComplete }: IntroAnimationProps) => {
  const [visible, setVisible] = useState(shouldPlayIntro);
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const eyebrowRef = useRef<HTMLParagraphElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);
  const closingRef = useRef(false);
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;
  const onRevealRef = useRef(onReveal);
  onRevealRef.current = onReveal;

  const finish = useCallback(() => {
    markIntroSeen();
    setVisible(false);
    onCompleteRef.current?.();
  }, []);

  const skip = useCallback(() => {
    if (closingRef.current) return;
    closingRef.current = true;
    timelineRef.current?.kill();
    onRevealRef.current?.();
    gsap.to(containerRef.current, {
      opacity: 0,
      duration: 0.35,
      ease: "power2.out",
      onComplete: finish,
    });
  }, [finish]);

  useEffect(() => {
    if (!visible || !containerRef.current || !titleRef.current) return;

    closingRef.current = false;

    // Keep the page behind the intro from scrolling while it plays
    const root = document.documentElement;
    const previousOverflow = root.style.overflow;
    root.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") skip();
    };
    window.addEventListener("keydown", onKeyDown);

    const ctx = gsap.context(() => {
      const chars = titleRef.current!.querySelectorAll("[data-char]");

      const tl = gsap.timeline({ onComplete: finish });
      timelineRef.current = tl;

      tl.fromTo(
        logoRef.current,
        { opacity: 0, scale: 0.6 },
        { opacity: 1, scale: 1, duration: 0.7, ease: "back.out(1.6)" }
      );

      tl.fromTo(
        eyebrowRef.current,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
        "-=0.3"
      );

      // Letters rise out of a mask, one after another
      tl.fromTo(
        chars,
        { opacity: 0, yPercent: 110 },
        { opacity: 1, yPercent: 0, duration: 0.6, stagger: 0.035, ease: "power3.out" },
        "-=0.2"
      );

      tl.fromTo(
        lineRef.current,
        { scaleX: 0 },
        { scaleX: 1, duration: 0.6, ease: "power2.out" },
        "-=0.5"
      );

      tl.fromTo(
        subtitleRef.current,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
        "-=0.3"
      );

      // Hold for a moment
      tl.to({}, { duration: 0.9 });

      // Lift the whole overlay away like a curtain
      tl.call(() => {
        closingRef.current = true;
        onRevealRef.current?.();
      });
      tl.to(containerRef.current, {
        yPercent: -100,
        duration: 0.8,
        ease: "power3.inOut",
      });
    }, containerRef);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      root.style.overflow = previousOverflow;
      ctx.revert();
    };
  }, [visible, finish, skip]);

  if (!visible) return null;

  return (
    <div
      ref={containerRef}
      role="dialog"
      aria-label="Welcome to Haven Word Church"
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden bg-[#0b0d24]"
    >
      {/* Shader Animation Background, toned down so the text stays readable */}
      <div className="absolute inset-0 opacity-50">
        <ShaderAnimation />
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(11,13,36,0.55)_0%,rgba(11,13,36,0.92)_70%)]" />

      <div className="relative z-10 flex flex-col items-center px-6 text-center">
        {/* Logo */}
        <div
          ref={logoRef}
          className="mb-6 sm:mb-8 h-24 w-24 sm:h-28 sm:w-28 md:h-32 md:w-32 rounded-full bg-white overflow-hidden opacity-0 ring-1 ring-white/20 shadow-[0_0_60px_rgba(241,142,36,0.35)]"
        >
          <img
            src="/pictures/logo/20260103_114553_0000.png"
            alt=""
            className="h-full w-full object-cover scale-125"
          />
        </div>

        <p
          ref={eyebrowRef}
          className="mb-3 text-[0.65rem] sm:text-xs md:text-sm font-medium uppercase tracking-[0.4em] text-white/70 opacity-0"
        >
          Welcome to
        </p>

        <h1
          ref={titleRef}
          aria-label="Haven Word Church"
          className="font-serif font-bold text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight drop-shadow-lg"
        >
          {TITLE_WORDS.map((word) => (
            <span
              key={word}
              aria-hidden="true"
              className="inline-block overflow-hidden whitespace-nowrap align-bottom pb-1 mx-[0.14em]"
            >
              {word.split("").map((char, i) => (
                <span key={i} data-char className="inline-block font-serif opacity-0">
                  {char}
                </span>
              ))}
            </span>
          ))}
        </h1>

        <div
          ref={lineRef}
          className="mt-5 h-[2px] w-24 sm:w-32 origin-center scale-x-0 rounded-full bg-secondary"
        />

        <p
          ref={subtitleRef}
          className="font-script mt-4 text-xl sm:text-2xl md:text-3xl text-white/90 opacity-0"
        >
          The Spread City
        </p>
      </div>

      {/* Skip button */}
      <button
        type="button"
        onClick={skip}
        className="animate-fade-in absolute z-20 right-4 sm:right-6 bottom-[max(1.5rem,env(safe-area-inset-bottom))] inline-flex min-h-[44px] items-center gap-1.5 rounded-full border border-white/25 bg-white/10 px-5 text-sm font-medium text-white backdrop-blur-md transition-colors hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b0d24]"
      >
        Skip intro
        <ChevronsRight className="h-4 w-4" aria-hidden="true" />
      </button>
    </div>
  );
};

export default IntroAnimation;
