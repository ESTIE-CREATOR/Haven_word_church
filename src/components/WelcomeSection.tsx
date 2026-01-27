
import MotionInView from "@/components/MotionInView";

const WelcomeSection = () => {
  return (
    <section className="bg-gradient-to-b from-black to-gray-900 section-padding pt-16 sm:pt-20 md:pt-24">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <MotionInView duration={0.8} className="text-center mb-8 sm:mb-12">
            <h2 className="heading-lg mb-4 text-white">Welcome to Haven Word Church</h2>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              A place where faith meets community, and hearts are transformed by the power of God's Word.
              We are "The Spread City" - a vibrant family dedicated to spreading the gospel and building
              lasting relationships in Christ.
            </p>
          </MotionInView>

        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
