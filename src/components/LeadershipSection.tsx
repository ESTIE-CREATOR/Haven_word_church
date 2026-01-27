import MotionInView from "@/components/MotionInView";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

const LeadershipSection = () => {
  const leadership = [
    {
      quote:
        "Pastor Anthonia Amadi is the founder and lead pastor of Haven Word Church. With a heart for spreading the gospel and building a community of faith, she leads the church with passion, wisdom, and love. Under her leadership, Haven Word Church has grown into a vibrant community known as \"The Spread City.\"",
      name: "Pastor Anthonia Amadi",
      designation: "Founder & Lead Pastor",
      src: "/pictures/leadership/photo_2026-01-07_15-42-31.jpg",
    },
    {
      quote:
        "Pastor Chibuotu Amadi is an ordained pastor at Haven Word Church. With dedication and commitment to ministry, he serves alongside Pastor Anthonia in spreading the Word of God and building a strong foundation of faith within the congregation.",
      name: "Pastor Chibuotu Amadi",
      designation: "Ordained Pastor",
      src: "/pictures/leadership/photo_2026-01-27_16-34-40.jpg",
    },
  ];

  return (
    <section className="bg-black section-padding">
      <div className="container-custom">
        <MotionInView>
          <div className="text-center mb-12">
            <h2 className="heading-lg text-white mb-4">Our Leadership</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Meet the dedicated leaders who guide our church family with wisdom, passion, and love.
            </p>
          </div>
          <AnimatedTestimonials testimonials={leadership} autoplay={true} />
        </MotionInView>
      </div>
    </section>
  );
};

export default LeadershipSection;
