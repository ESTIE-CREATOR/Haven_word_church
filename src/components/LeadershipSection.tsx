import MotionInView from "@/components/MotionInView";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

const LeadershipSection = () => {
  const leadership = [
    {
      quote:
        "Pastor Anthonia Ikiseh Amadi (PAA) is a preacher of the gospel of Jesus, who is committed to raising, training and equipping men, women, boys and girls for the high calling of the work of ministry.",
      name: "Pastor Anthonia Amadi",
      designation: "Founder & Lead Pastor",
      src: "/pictures/leadership/pastor's_picture.jpg",
    },
    {
      quote:
        "Pastor Chibuotu Amadi is an ordained pastor at Haven Word Church. With dedication and commitment to ministry, he serves alongside Pastor Anthonia in spreading the Word of God and building a strong foundation of faith within the congregation.",
      name: "Pastor Chibuotu Amadi",
      designation: "Ordained Pastor",
      src: "/pictures/leadership/5897950319411400254_121.jpg",
    },
  ];

  return (
    <section className="bg-muted section-padding">
      <div className="container-custom">
        <MotionInView>
          <div className="text-center mb-12">
            <h2 className="heading-lg text-foreground mb-4">Our Leadership</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Meet the dedicated leaders who guide our church family with wisdom, passion, and love.
            </p>
          </div>
          <AnimatedTestimonials testimonials={leadership} />
        </MotionInView>
      </div>
    </section>
  );
};

export default LeadershipSection;
