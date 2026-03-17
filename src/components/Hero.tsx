import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (textRef.current) {
        gsap.fromTo(
          textRef.current,
          { opacity: 0, scale: 0.8 },
          { opacity: 1, scale: 1, duration: 1, ease: "power2.out", delay: 0.5 }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative h-screen overflow-hidden max-w-full">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Church worship"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Hero Content */}
      <div className="relative z-20 h-full flex items-center justify-center px-4 md:px-8 lg:px-12 pt-24 overflow-x-hidden">
        <div
          ref={textRef}
          className="opacity-0 text-center max-w-[90vw] md:max-w-4xl mx-auto w-full"
        >
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-script text-white mb-4 md:mb-6 leading-tight break-words px-2"
            style={{ fontFamily: "'Dancing Script', cursive" }}
          >
            Haven Word Church
          </h1>
          <div className="w-48 sm:w-64 h-1 bg-white/80 mx-auto mb-6 rounded-full" />

          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-200 mb-8 font-sans px-2 break-words">
            ...the spread city...
          </p>

          <div className="flex flex-row gap-3 sm:gap-4 justify-center items-center px-2">
            <InteractiveHoverButton
              asChild
              text="Messages"
              className="px-3 sm:px-6 md:px-8 py-2 sm:py-3 border-2 border-white/30 text-white bg-transparent hover:bg-white/10 text-sm sm:text-base"
            >
              <Link to="/messages">Messages</Link>
            </InteractiveHoverButton>
            <InteractiveHoverButton
              asChild
              text="Contact"
              className="px-3 sm:px-6 md:px-8 py-2 sm:py-3 border-2 border-white/30 text-white bg-transparent hover:bg-white/10 text-sm sm:text-base"
            >
              <Link to="/contact">Contact</Link>
            </InteractiveHoverButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
