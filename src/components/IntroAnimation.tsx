import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { ShaderAnimation } from "@/components/ui/shader-animation";

gsap.registerPlugin(TextPlugin);

interface IntroAnimationProps {
  onComplete?: () => void;
}

const IntroAnimation = ({ onComplete }: IntroAnimationProps) => {
  const [isComplete, setIsComplete] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !textRef.current || !subtitleRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          setIsComplete(true);
          onComplete?.();
        },
      });

      // Fade in text container
      tl.fromTo(
        textRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
      );

      // Type text character by character
      tl.to(textRef.current, {
        duration: 2.5,
        text: "WELCOME TO HAVEN WORD CHURCH",
        ease: "none",
      });

      // Animate subtitle
      tl.fromTo(
        subtitleRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
        "-=0.2"
      );

      // Scale pulse effect
      tl.to(textRef.current, { scale: 1.05, duration: 0.3 });
      tl.to(textRef.current, { scale: 1, duration: 0.3 });

      // Hold for a moment
      tl.to({}, { duration: 1.5 });

      // Fade out entire overlay
      tl.to(containerRef.current, {
        opacity: 0,
        duration: 1,
        ease: "power2.in",
      });
    });

    return () => ctx.revert();
  }, [onComplete]);

  if (isComplete) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center pointer-events-auto bg-black"
    >
      {/* Shader Animation Background */}
      <ShaderAnimation />

      {/* Logo in top left */}
      <div className="absolute top-4 left-4 md:top-6 md:left-6 z-10">
        <img
          src="/pictures/logo/20260103_114553_0000.png"
          alt="Haven Word Church Logo"
          className="h-12 w-12 md:h-16 md:w-16 lg:h-20 lg:w-20 object-contain"
        />
      </div>

      {/* Main text */}
      <div
        ref={textRef}
        className="text-white font-serif text-center px-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold z-10 drop-shadow-lg"
      >
        {/* Text will be typed by GSAP */}
      </div>

      {/* Subtitle */}
      <div
        ref={subtitleRef}
        className="text-white/80 font-serif italic text-center px-4 mt-4 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl opacity-0 z-10 drop-shadow-lg"
      >
        ...the spread city...
      </div>
    </div>
  );
};

export default IntroAnimation;
