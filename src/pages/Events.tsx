import { TubelightHeader } from "@/components/TubelightHeader";
import Footer from "@/components/Footer";
import { Calendar, Clock, MapPin } from "lucide-react";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import SectionHeading from "@/components/SectionHeading";
import ServicesSection from "@/components/ServicesSection";
import FlierDialog from "@/components/FlierDialog";
import { getUpcomingEvents } from "@/data/events";
import { cn } from "@/lib/utils";

const Events = () => {
  // Events drop off this list by themselves once their date has passed
  const upcomingEvents = getUpcomingEvents();

  return (
    <div className="min-h-screen flex flex-col overflow-x-clip max-w-full">
      <TubelightHeader />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-primary text-primary-foreground py-20">
          <div className="absolute inset-0 bg-[url('/pictures/head/hero.jpg')] bg-cover bg-center opacity-20"></div>
          <div className="container-custom relative z-10">
            <div className="max-w-2xl mx-auto text-center">
              <Calendar className="h-16 w-16 mx-auto mb-6" />
              <h1 className="text-2xl md:text-3xl font-serif font-bold mb-6">Events & Programs</h1>
              <p className="text-base md:text-lg text-primary-foreground/90">
                Join us for worship, fellowship, and community events
              </p>
            </div>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <SectionHeading align="center" eyebrow="Mark Your Calendar" title="Upcoming" outlined="Events" className="mb-6 md:mb-10" />

            {upcomingEvents.length === 0 && (
              <p className="text-center text-muted-foreground">More events will be announced soon.</p>
            )}

            {/* One full-width row per event, with the flier switching sides each time */}
            <div className="grid max-w-5xl mx-auto">
              {upcomingEvents.map((event, index) => (
                <article
                  key={event.title}
                  className="grid items-center gap-8 border-b border-border py-10 last:border-b-0 md:grid-cols-12 md:gap-14 md:py-16"
                >
                  {event.image && (
                    <div className={cn("md:col-span-5", index % 2 === 1 && "md:order-2")}>
                      <FlierDialog title={event.title} image={event.image}>
                        <button
                          type="button"
                          aria-label={`View ${event.title} flier`}
                          className="group mx-auto block w-full max-w-sm overflow-hidden rounded-2xl shadow-xl ring-1 ring-border transition-transform duration-500 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring md:max-w-none"
                        >
                          {/* The flier keeps its own shape, so nothing is cropped, stretched or padded with bars */}
                          <img
                            src={event.image}
                            alt={`${event.title} flier`}
                            loading="lazy"
                            className="block h-auto w-full transition-transform duration-700 group-hover:scale-[1.03]"
                          />
                        </button>
                      </FlierDialog>
                    </div>
                  )}

                  <div className={cn(event.image ? "md:col-span-7" : "md:col-span-12")}>
                    <div className="flex items-center gap-4">
                      <span className="font-display text-outline text-4xl sm:text-5xl" aria-hidden="true">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      {index === 0 && (
                        <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-[#0c1140]">
                          <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#0c1140] opacity-60" />
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#0c1140]" />
                          </span>
                          Up Next
                        </span>
                      )}
                    </div>

                    <p className="mt-4 text-sm font-bold uppercase tracking-[0.25em] text-secondary">{event.date}</p>
                    <h3 className="font-display mt-2 text-2xl sm:text-3xl md:text-4xl text-foreground">
                      <span>{event.title}</span>
                    </h3>

                    <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm text-foreground">
                      {event.time && (
                        <span className="inline-flex items-center gap-2 font-semibold">
                          <Clock className="h-4 w-4 text-secondary" />
                          {event.time}
                        </span>
                      )}
                      {event.location && (
                        <span className="inline-flex items-start gap-2">
                          <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-secondary" />
                          {event.location}
                        </span>
                      )}
                    </div>

                    <p className="mt-5 max-w-xl text-base text-muted-foreground leading-relaxed">{event.description}</p>

                    {event.image && (
                      <div className="mt-7">
                        <FlierDialog title={event.title} image={event.image}>
                          <InteractiveHoverButton text="View Flier" className="w-fit" />
                        </FlierDialog>
                      </div>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Regular Weekly Services */}
        <ServicesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Events;
