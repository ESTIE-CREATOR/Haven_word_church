
import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import MotionInView from "@/components/MotionInView";

const TestimoniesPreviewSection = () => {
  return (
    <section className="bg-gray-900 section-padding">
      <div className="container-custom text-center">
        <MotionInView>
          <div className="mx-auto mb-4 p-4 rounded-full bg-secondary/10 w-fit">
            <Heart className="h-8 w-8 text-secondary" />
          </div>
          <h3 className="heading-md mb-4 text-white">Testimonies</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto text-sm sm:text-base">
            Read inspiring testimonies from our church family and share your own story 
            of God's faithfulness in your life.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <InteractiveHoverButton asChild text="Read Testimonies">
              <Link to="/testimonies">Read Testimonies</Link>
            </InteractiveHoverButton>
            <InteractiveHoverButton asChild text="Share Your Story">
              <Link to="/testimonies/share">Share Your Story</Link>
            </InteractiveHoverButton>
          </div>
        </MotionInView>
      </div>
    </section>
  );
};

export default TestimoniesPreviewSection;
