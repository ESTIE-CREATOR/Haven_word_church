
import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import MotionInView from "@/components/MotionInView";

const TestimoniesPreviewSection = () => {
  return (
    <section className="bg-muted section-padding">
      <div className="container-custom text-center">
        <MotionInView>
          <div className="mx-auto mb-4 p-4 rounded-full bg-secondary/10 w-fit">
            <Heart className="h-8 w-8 text-secondary" />
          </div>
          <h3 className="heading-md mb-4 text-foreground">Testimonies</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto text-sm sm:text-base">
            Read inspiring testimonies from our church family and share your own story 
            of God's faithfulness in your life.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <InteractiveHoverButton asChild text="Read Testimonies">
              <Link to="/testimonies">Read Testimonies</Link>
            </InteractiveHoverButton>
            <InteractiveHoverButton asChild text="Share Your Story">
              <a
  href="https://docs.google.com/forms/d/e/1FAIpQLSfg8h91rGWGJwjCglNvV_3LT-U3znbQAyeKuy2-TzzeHJYwjA/viewform?usp=publish-editor"
  target="_blank"
  rel="noopener noreferrer"
>
Share Your Story
</a>
            </InteractiveHoverButton>
          </div>
        </MotionInView>
      </div>
    </section>
  );
};

export default TestimoniesPreviewSection;
