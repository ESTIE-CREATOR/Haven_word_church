
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative bg-church-950 text-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1492321936769-b49830bc1d1e')] bg-cover bg-center opacity-30"></div>
      <div className="container-custom min-h-[80vh] flex items-center relative z-10">
        <div className="max-w-2xl py-12 md:py-24">
          <h1 className="text-4xl md:text-6xl font-bold font-serif leading-tight mb-6">
            Welcome to Faith In Focus
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 font-light">
            Join our community of faith as we grow together in spirit and truth.
            Experience worship, fellowship, and spiritual growth.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild className="bg-church-600 hover:bg-church-700 text-white font-medium px-6 py-3 rounded-md">
              <Link to="/services">Service Times</Link>
            </Button>
            <Button asChild variant="outline" className="border-white text-white hover:bg-white/10">
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-background to-transparent"></div>
    </div>
  );
};

export default Hero;
