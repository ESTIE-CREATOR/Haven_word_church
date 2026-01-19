
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

// Church images for scrolling background
const CHURCH_IMAGES = [
  "/pictures/church_pictures/photo_2026-01-03_01-50-05.jpg",
  "/pictures/church_pictures/photo_2026-01-03_01-50-13.jpg",
  "/pictures/church_pictures/photo_2026-01-03_01-50-20.jpg",
  "/pictures/church_pictures/photo_2026-01-03_01-50-25.jpg",
  "/pictures/church_pictures/photo_2026-01-03_01-50-35.jpg",
  "/pictures/church_pictures/photo_2026-01-03_01-50-40.jpg",
  "/pictures/church_pictures/photo_2026-01-03_01-50-47.jpg",
  "/pictures/church_pictures/photo_2026-01-03_01-50-52.jpg",
  "/pictures/church_pictures/photo_2026-01-03_01-50-57.jpg",
  "/pictures/church_pictures/photo_2026-01-03_01-51-03.jpg",
  "/pictures/church_pictures/photo_2026-01-03_01-51-07.jpg",
  "/pictures/church_pictures/photo_2026-01-03_01-51-11.jpg",
];

const Hero = () => {
  const logoRef = useRef<HTMLDivElement>(null);
  const stack1Ref = useRef<HTMLDivElement>(null);
  const stack2Ref = useRef<HTMLDivElement>(null);
  const stack3Ref = useRef<HTMLDivElement>(null);

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

      // Scrolling image stacks
      const animateStack = (
        ref: HTMLDivElement | null,
        duration: number,
        direction: "left" | "right"
      ) => {
        if (!ref) return;
        const totalWidth = ref.scrollWidth / 2;
        
        gsap.fromTo(
          ref,
          { x: direction === "left" ? 0 : -totalWidth },
          {
            x: direction === "left" ? -totalWidth : 0,
            duration,
            ease: "none",
            repeat: -1,
          }
        );
      };

      animateStack(stack1Ref.current, 50, "left");
      animateStack(stack2Ref.current, 57.5, "right");
      animateStack(stack3Ref.current, 65, "left");
    });

    return () => ctx.revert();
  }, []);

  // Create 4 copies of images for seamless scrolling
  const imageArray = [...CHURCH_IMAGES, ...CHURCH_IMAGES, ...CHURCH_IMAGES, ...CHURCH_IMAGES];

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Scrolling Image Stacks Background */}
      <div className="absolute inset-0 -top-20 -z-10">
        {/* Stack 1 - Top third */}
        <div className="absolute top-0 left-0 right-0 h-[33.333vh] overflow-hidden">
          <div ref={stack1Ref} className="flex h-full">
            {imageArray.map((src, index) => (
              <img
                key={`stack1-${index}`}
                src={src}
                alt=""
                className="h-full w-[300px] object-cover flex-shrink-0"
              />
            ))}
          </div>
        </div>

        {/* Stack 2 - Middle third */}
        <div className="absolute top-[33.333vh] left-0 right-0 h-[33.333vh] overflow-hidden">
          <div ref={stack2Ref} className="flex h-full">
            {imageArray.map((src, index) => (
              <img
                key={`stack2-${index}`}
                src={src}
                alt=""
                className="h-full w-[300px] object-cover flex-shrink-0"
              />
            ))}
          </div>
        </div>

        {/* Stack 3 - Bottom third */}
        <div className="absolute top-[66.666vh] left-0 right-0 h-[33.333vh] overflow-hidden">
          <div ref={stack3Ref} className="flex h-full">
            {imageArray.map((src, index) => (
              <img
                key={`stack3-${index}`}
                src={src}
                alt=""
                className="h-full w-[300px] object-cover flex-shrink-0"
              />
            ))}
          </div>
        </div>

        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/30" />
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
            className="w-full sm:w-auto min-w-[140px] sm:min-w-[160px] text-xs sm:text-sm md:text-base bg-white/90 hover:bg-white"
          >
            <Link to="/messages/video">Watch Messages</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="w-full sm:w-auto min-w-[140px] sm:min-w-[160px] text-xs sm:text-sm md:text-base bg-white/90 hover:bg-white"
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
