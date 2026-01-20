import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import RotatingEarth from "@/components/ui/wireframe-dotted-globe";

const Hero = () => {
  const logoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Logo fade in animation
      if (logoRef.current) {
        gsap.fromTo(
          logoRef.current,
          { opacity: 0, scale: 0.8 },
          { opacity: 1, scale: 1, duration: 1, ease: "power2.out", delay: 0.5 }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative h-screen overflow-hidden bg-black">
      {/* Rotating Globe Background */}
      <div className="absolute inset-0 flex items-center justify-center opacity-60">
        <RotatingEarth 
          width={typeof window !== 'undefined' ? window.innerWidth : 1200} 
          height={typeof window !== 'undefined' ? window.innerHeight : 800} 
          className="w-full h-full"
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4">
        {/* Spread City Logo */}
        <div
          ref={logoRef}
          className="opacity-0"
          style={{
            filter:
              "drop-shadow(0 25px 25px rgb(0 0 0 / 0.15)) drop-shadow(0 0 20px rgba(255, 255, 255, 0.8)) drop-shadow(0 0 40px rgba(59, 130, 246, 0.6)) drop-shadow(0 0 60px rgba(147, 51, 234, 0.5)) drop-shadow(0 0 80px rgba(236, 72, 153, 0.4))",
          }}
        >
          <img
            src="/pictures/spread_city/20260103_114554_0001.png"
            alt="Spread City - Haven Word Church"
            className="max-w-[280px] sm:max-w-[350px] md:max-w-[450px] lg:max-w-[550px] w-full object-contain"
          />
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mt-8">
          <Button
            asChild
            className="w-full sm:w-auto min-w-[140px] sm:min-w-[160px] text-xs sm:text-sm md:text-base"
          >
            <Link to="/locations">Find Our Branch</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="w-full sm:w-auto min-w-[140px] sm:min-w-[160px] text-xs sm:text-sm md:text-base border-white/30 text-white hover:bg-white/10 hover:text-white"
          >
            <Link to="/messages/video">Watch Messages</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="w-full sm:w-auto min-w-[140px] sm:min-w-[160px] text-xs sm:text-sm md:text-base border-white/30 text-white hover:bg-white/10 hover:text-white"
          >
            <a
              href="https://t.me/havenwordchurch"
              target="_blank"
              rel="noopener noreferrer"
            >
              Listen to Audio
            </a>
          </Button>
          <Button
            asChild
            variant="secondary"
            className="w-full sm:w-auto min-w-[140px] sm:min-w-[160px] text-xs sm:text-sm md:text-base"
          >
            <Link to="/giving">Give</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
