
import MotionInView from "@/components/MotionInView";

const ServicesSection = () => {
  return (
    <section className="bg-white section-padding">
      <div className="container-custom">
        <MotionInView duration={0.8} className="text-center mb-6 sm:mb-8 md:mb-12">
          <h2 className="heading-lg">Our Services</h2>
        </MotionInView>

        <div className="flex flex-col md:flex-row gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto">
          {/* Wednesday Bible Study Flier */}
          <MotionInView
            direction="left"
            duration={0.8}
            className="flex-1"
          >
            <div className="aspect-[3/4] max-h-[400px] sm:max-h-[500px] md:max-h-[600px] w-full hover:shadow-xl transition-shadow rounded-lg overflow-hidden">
              <img
                src="/pictures/services_fliers/wednessday.jpg"
                alt="Wednesday Bible Study Service"
                className="w-full h-full object-cover"
              />
            </div>
          </MotionInView>

          {/* Sunday Service Flier */}
          <MotionInView
            direction="right"
            duration={0.8}
            className="flex-1"
          >
            <div className="aspect-[3/4] max-h-[400px] sm:max-h-[500px] md:max-h-[600px] w-full hover:shadow-xl transition-shadow rounded-lg overflow-hidden">
              <img
                src="/pictures/services_fliers/sunday.jpg"
                alt="Sunday Service"
                className="w-full h-full object-cover"
              />
            </div>
          </MotionInView>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
