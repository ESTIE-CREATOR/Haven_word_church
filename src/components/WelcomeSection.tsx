import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const WelcomeSection = () => {
  return (
    <section className="bg-background section-padding">
      <div className="container-custom">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <SectionHeading eyebrow="Welcome" title="Welcome to Haven Word Church" outlined="The Spread City" stack />
            <p className="mt-6 text-muted-foreground text-base sm:text-lg leading-relaxed">
              In this generation, God is raising ministers, not spectators. This calling is not limited to the pulpit. It extends to the streets, classrooms, marketplaces, and nations of the world. We believe that every believer is called not only to believe, but also to build. We are called to preach the Word, heal the sick, cast out demons, raise the dead, and disciple nations, one person at a time and one city at a time.
            </p>
            <Link
              to="/about"
              className="group mt-8 inline-flex items-center gap-2 border-b-2 border-secondary pb-1 text-sm font-bold uppercase tracking-widest text-foreground transition-colors hover:text-secondary"
            >
              Our story
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>

          <div className="lg:col-span-6">
            <div className="relative mx-auto max-w-xl lg:max-w-none pr-4 pb-4">
              {/* Offset colour block behind the photo */}
              <div className="absolute bottom-0 right-0 h-[calc(100%-1rem)] w-[calc(100%-1rem)] rounded-2xl bg-secondary" />
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <img
                  src="/pictures/head/5893411406562921573_121.jpg"
                  alt="Members of Haven Word Church outside the church auditorium"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
