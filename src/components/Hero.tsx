import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";

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
    <div className="relative h-screen overflow-hidden">
      {/* Background Image with Sky and Landscape */}
      <div className="absolute inset-0">
        {/* Sky Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-800 via-slate-700 to-slate-600"></div>
        
        {/* Cloudy Sky Effect */}
        <div className="absolute inset-0 opacity-60">
          <div className="absolute top-0 left-0 w-full h-2/3 bg-gradient-to-b from-slate-900/80 via-slate-800/60 to-transparent"></div>
          <div className="absolute top-20 left-10 w-96 h-32 bg-slate-700/40 rounded-full blur-3xl"></div>
          <div className="absolute top-40 right-20 w-80 h-40 bg-slate-600/30 rounded-full blur-3xl"></div>
          <div className="absolute top-10 left-1/2 w-72 h-36 bg-slate-800/50 rounded-full blur-3xl"></div>
        </div>

        {/* Landscape - Grass/Hills */}
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-amber-900/40 via-amber-800/30 to-transparent">
          {/* Grass texture */}
          <div className="absolute inset-0 opacity-30" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='20' viewBox='0 0 100 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 20 Q 10 15, 20 20 T 40 20 T 60 20 T 80 20 T 100 20 L 100 20 L 0 20 Z' fill='%23a78b5b'/%3E%3C/svg%3E")`,
            backgroundSize: '200px 40px',
          }}></div>
        </div>

        {/* Cross Silhouette */}
        <div className="absolute bottom-1/4 left-1/4 w-2 h-64 bg-slate-900/80 shadow-2xl"></div>
        <div className="absolute bottom-1/4 left-1/4 -translate-x-1/2 w-32 h-2 bg-slate-900/80 shadow-2xl" style={{ top: 'calc(25% - 64px)' }}></div>

        {/* Town/City Silhouette in Background */}
        <div className="absolute bottom-1/3 left-0 right-0 h-32 opacity-40">
          {/* Building shapes */}
          <div className="absolute bottom-0 left-1/4 w-16 h-24 bg-slate-900/60"></div>
          <div className="absolute bottom-0 left-1/3 w-12 h-32 bg-slate-900/60"></div>
          <div className="absolute bottom-0 left-1/2 w-20 h-20 bg-slate-900/60"></div>
          <div className="absolute bottom-0 right-1/4 w-14 h-28 bg-slate-900/60"></div>
          {/* Church spire */}
          <div className="absolute bottom-0 right-1/3 w-4 h-40 bg-slate-900/60"></div>
          <div className="absolute bottom-36 right-1/3 -translate-x-1/2 w-8 h-8 bg-slate-900/60 rotate-45"></div>
        </div>

        {/* Water/Harbor Effect */}
        <div className="absolute bottom-1/3 right-0 w-1/4 h-8 bg-slate-900/50"></div>
      </div>

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30"></div>

      {/* Hero Content - Moved down to avoid header */}
      <div className="relative z-20 h-full flex items-center justify-center px-4 md:px-8 lg:px-12 pt-24">
        <div
          ref={textRef}
          className="opacity-0 text-center max-w-4xl"
        >
          {/* Main Message in Script Font */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-script text-white mb-4 md:mb-6 leading-tight" style={{ fontFamily: "'Dancing Script', cursive" }}>
            Haven Word Church
          </h1>
          {/* Underline brushstroke */}
          <div className="w-64 h-1 bg-white/80 mx-auto mb-6 rounded-full"></div>
          
          {/* Sub Message */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 font-sans">
            ...the spread city...
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <InteractiveHoverButton asChild text="Messages" className="px-8 py-3 border-2 border-white/30 text-white bg-transparent hover:bg-white/10">
              <Link to="/messages">Messages</Link>
            </InteractiveHoverButton>
            <InteractiveHoverButton asChild text="Contact" className="px-8 py-3 border-2 border-white/30 text-white bg-transparent hover:bg-white/10">
              <Link to="/contact">Contact</Link>
            </InteractiveHoverButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
