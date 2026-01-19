
import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import MotionInView from "@/components/MotionInView";

const TestimoniesPreviewSection = () => {
  return (
    <section className="bg-white section-padding">
      <div className="container-custom text-center">
        <MotionInView>
          <div className="mx-auto mb-4 p-4 rounded-full bg-secondary/10 w-fit">
            <Heart className="h-8 w-8 text-secondary" />
          </div>
          <h3 className="heading-md mb-4">Testimonies</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto text-sm sm:text-base">
            Read inspiring testimonies from our church family and share your own story 
            of God's faithfulness in your life.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild>
              <Link to="/testimonies">Read Testimonies</Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/testimonies/share">Share Your Story</Link>
            </Button>
          </div>
        </MotionInView>
      </div>
    </section>
  );
};

export default TestimoniesPreviewSection;
