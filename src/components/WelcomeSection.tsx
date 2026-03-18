
import MotionInView from "@/components/MotionInView";

const WelcomeSection = () => {
  return (
    <section className="bg-background section-padding pt-16 sm:pt-20 md:pt-24">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <MotionInView duration={0.8} className="text-center mb-8 sm:mb-12">
            <h2 className="heading-lg mb-4 text-foreground">WELCOME TO HAVEN WORD CHURCH — THE SPREAD CITY</h2>
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            In this generation, God is raising ministers, not spectators. This calling is not limited to the pulpit. It extends to the streets, classrooms, marketplaces, and nations of the world. We believe that every believer is called not only to believe, but also to build. We are called to preach the Word, heal the sick, cast out demons, raise the dead, and disciple nations, one person at a time and one city at a time.

At Haven Word Church, we do not gather for entertainment. We gather to be equipped. We come together around the Word of God, the Spirit of God, and the supernatural mandate to go into all the world and make disciples. Here, we are being trained to carry the fire of God to the ends of the earth, filling hearts, homes, and territories with the knowledge of Christ until the earth is filled with the knowledge of the glory of the Lord, just as the waters cover the sea.

From one life to another and from one city to the next, the fire continues to spread. Welcome to Haven Word Church, The SpreadCity. There is a place for you in this divine movement.
            </p>
          </MotionInView>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
