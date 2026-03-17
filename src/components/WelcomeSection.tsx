
import MotionInView from "@/components/MotionInView";

const WelcomeSection = () => {
  return (
    <section className="bg-background section-padding pt-16 sm:pt-20 md:pt-24">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <MotionInView duration={0.8} className="text-center mb-8 sm:mb-12">
            <h2 className="heading-lg mb-4 text-foreground">WELCOME TO HAVEN WORD CHURCH — THE SPREAD CITY</h2>
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            In this generation, God is not raising spectators — He’s raising ministers.
Not just for the pulpit, but for the streets, classrooms, marketplaces, and
nations.
We believe every believer is called — not just to believe, but to build.
To preach the Word, heal the sick, cast out devils, raise the dead, and
disciple nations — one person at a time, one city at a time.
At Haven Word Church, we don’t gather to be entertained.
We gather to be equipped.
We gather around the Word, the Spirit, and the supernatural mandate to go
into all the world and make disciples.
Here, we are being trained to carry God’s fire to the ends of the earth —
to saturate hearts, homes, and territories with the knowledge of Christ, until
the earth is filled with the knowledge of the glory of the Lord,
as the waters cover the sea (Habakkuk 2:14).
From one person to another, from one city to the next — the fire spreads.
Welcome to Haven Word Church — The SpreadCity.
There is a place for you in this divine move.
            </p>
          </MotionInView>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
