import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Clock, MapPin } from "lucide-react";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import SectionHeading from "@/components/SectionHeading";
import FlierDialog from "@/components/FlierDialog";

interface Flier {
  src: string;
  // How long this flier stays up before the next one fades in
  seconds: number;
}

interface WeeklyService {
  number: string;
  // Three-letter day shown big on the ticket stub
  short: string;
  name: string;
  day: string;
  time: string;
  blurb: string;
  fliers: Flier[];
}

const SERVICES: WeeklyService[] = [
  {
    number: "01",
    short: "Sun",
    name: "Sunday Service",
    day: "Every Sunday",
    time: "7:30 AM & 10:00 AM",
    blurb: "Join us for inspiring worship and biblical teaching",
    // The main flier is given most of the time; the second one appears briefly between showings
    fliers: [
      { src: "/pictures/services_fliers/sunday_service.jpg", seconds: 9 },
      { src: "/pictures/services_fliers/sunday_service_2.jpg", seconds: 4 },
    ],
  },
  {
    number: "02",
    short: "Wed",
    name: "Midweek Service",
    day: "Every Wednesday",
    time: "5:30 PM",
    blurb: "Deep dive into God's Word with interactive study",
    fliers: [{ src: "/pictures/services_fliers/midweek_service.jpg", seconds: 0 }],
  },
];

const ADDRESS = "Opposite Gate 5, Adamasingba Stadium, Ibadan, Oyo State";

const ServiceFlier = ({ service }: { service: WeeklyService }) => {
  const [active, setActive] = useState(0);
  const { fliers } = service;

  useEffect(() => {
    if (fliers.length < 2) return;
    const timer = window.setTimeout(() => setActive((i) => (i + 1) % fliers.length), fliers[active].seconds * 1000);
    return () => window.clearTimeout(timer);
  }, [active, fliers]);

  return (
    <FlierDialog title={service.name} image={fliers[active].src}>
      <button
        type="button"
        aria-label={`View ${service.name} flier`}
        className="group relative block aspect-[4/5] w-full overflow-hidden rounded-xl shadow-xl shadow-black/40 ring-1 ring-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
      >
        {fliers.map((flier, i) => (
          <span
            key={flier.src}
            className={`absolute inset-0 transition-opacity duration-1000 ${i === active ? "opacity-100" : "opacity-0"}`}
          >
            {/* A blurred copy fills the box, and the whole flier sits on top of it: never cropped, stretched or barred */}
            <img src={flier.src} alt="" aria-hidden="true" loading="lazy" className="absolute inset-0 h-full w-full scale-110 object-cover blur-xl" />
            <img
              src={flier.src}
              alt={i === active ? `${service.name} flier` : ""}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-contain transition-transform duration-700 group-hover:scale-[1.03]"
            />
          </span>
        ))}
      </button>
    </FlierDialog>
  );
};

const ServicesSection = () => {
  return (
    <section className="band-blue section-padding">
      <div className="container-custom">
        <SectionHeading align="center" eyebrow="Weekly Services" title="Join us" outlined="this week" className="mb-10 md:mb-16" />

        {/* Each service is a ticket: a day stub, a perforated seam, the details, and the flier tucked in the corner */}
        <div className="grid gap-6 max-w-4xl mx-auto">
          {SERVICES.map((service) => (
            <article
              key={service.name}
              className="group relative grid overflow-hidden rounded-3xl shadow-2xl shadow-black/30 transition-transform duration-300 hover:-translate-y-1 sm:grid-cols-[10rem_1fr] md:grid-cols-[12rem_1fr]"
            >
              {/* Stub */}
              <div className="flex items-center justify-between gap-3 bg-secondary px-6 py-4 text-[#0c1140] sm:flex-col sm:justify-center sm:py-8 sm:text-center">
                <span className="font-display text-4xl sm:text-5xl md:text-6xl">
                  <span>{service.short}</span>
                </span>
                <span className="text-[0.65rem] sm:text-xs font-bold uppercase tracking-[0.25em]">{service.day}</span>
              </div>

              {/* Body */}
              <div className="relative flex items-center gap-4 sm:gap-6 border-t-2 border-dashed border-white/30 bg-white/10 p-5 ring-1 ring-inset ring-white/15 backdrop-blur-md sm:border-l-2 sm:border-t-0 sm:p-7">
                {/* Punched notches on the seam */}
                <span className="absolute -top-3 -left-3 hidden h-6 w-6 rounded-full bg-[hsl(233_56%_29%)] sm:block" aria-hidden="true" />
                <span className="absolute -bottom-3 -left-3 hidden h-6 w-6 rounded-full bg-[hsl(233_56%_29%)] sm:block" aria-hidden="true" />

                <div className="min-w-0 flex-1">
                  <p className="text-[0.65rem] font-bold uppercase tracking-[0.3em] text-secondary">Service {service.number}</p>
                  <h3 className="font-display mt-1 text-lg sm:text-2xl text-foreground">
                    <span>{service.name}</span>
                  </h3>
                  <p className="font-display mt-3 flex items-center gap-2 text-base sm:text-xl text-secondary">
                    <Clock className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                    <span>{service.time}</span>
                  </p>
                  <p className="mt-3 text-sm sm:text-base text-muted-foreground">{service.blurb}</p>
                  <p className="mt-3 flex items-start gap-2 text-xs sm:text-sm text-muted-foreground">
                    <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-secondary" />
                    {ADDRESS}
                  </p>
                </div>

                {/* Flier, small and tilted; it straightens on hover and opens full size when clicked */}
                <div className="w-20 sm:w-32 flex-shrink-0 rotate-3 transition-transform duration-500 group-hover:rotate-0 group-hover:scale-105">
                  <ServiceFlier service={service} />
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 md:mt-12 flex justify-center">
          <InteractiveHoverButton asChild text="Get Directions" className="border-white bg-white text-[#0c1140] hover:bg-white/90">
            <Link to="/locations">Get Directions</Link>
          </InteractiveHoverButton>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
