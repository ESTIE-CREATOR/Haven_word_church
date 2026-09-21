import { TubelightHeader } from "@/components/TubelightHeader";
import Footer from "@/components/Footer";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import ServicesSection from "@/components/ServicesSection";
import TelegramPrayerSection from "@/components/TelegramPrayerSection";
import SectionHeading from "@/components/SectionHeading";
import { getUpcomingEvents } from "@/data/events";

const Services = () => {
  const upcomingEvents = getUpcomingEvents().slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col overflow-x-clip max-w-full">
      <TubelightHeader />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-primary text-primary-foreground py-20">
          <div className="absolute inset-0 bg-[url('/pictures/head/605540013_855635000568275_1744267405865813200_n.jpg')] bg-cover bg-center opacity-20"></div>
          <div className="container-custom relative z-10">
            <div className="max-w-2xl mx-auto text-center">
              <h1 className="text-2xl md:text-3xl font-serif font-bold mb-6">Services & Events</h1>
              <p className="text-base md:text-lg text-primary-foreground/90">
                Join us for worship services, community events, and ministry opportunities.
              </p>
            </div>
          </div>
        </section>

        {/* Weekly Services */}
        <ServicesSection />

        {/* Upcoming Events */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="mb-8 md:mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <SectionHeading eyebrow="Mark Your Calendar" title="Upcoming" outlined="Events" />
              <Link
                to="/events"
                className="group inline-flex items-center gap-2 self-start border-b-2 border-secondary pb-1 text-sm font-bold uppercase tracking-widest text-foreground transition-colors hover:text-secondary sm:self-auto"
              >
                All events
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </div>

            {upcomingEvents.length === 0 ? (
              <p className="text-muted-foreground">More events will be announced soon.</p>
            ) : (
              <ul className="grid border-y border-border divide-y divide-border">
                {upcomingEvents.map((event, index) => (
                  <li key={event.title}>
                    <Link to="/events" className="group flex items-center gap-4 sm:gap-8 py-6 sm:py-8">
                      <span className="font-display text-outline text-3xl sm:text-5xl" aria-hidden="true">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-secondary">{event.date}</span>
                        <span className="font-display mt-1 block text-lg sm:text-2xl md:text-3xl text-foreground transition-colors group-hover:text-secondary">
                          <span>{event.title}</span>
                        </span>
                      </span>
                      <ArrowUpRight className="h-6 w-6 sm:h-8 sm:w-8 flex-shrink-0 text-muted-foreground transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-secondary" />
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>

        {/* Daily Prayers */}
        <TelegramPrayerSection />

        {/* Plan Your Visit */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="heading-lg mb-4 text-foreground">Planning your first visit?</h2>
              <p className="text-muted-foreground mb-6">Have questions about our services or events? We'd love to hear from you.</p>
              <div className="flex flex-wrap justify-center gap-4">
                <InteractiveHoverButton asChild text="Get Directions">
                  <Link to="/locations">Get Directions</Link>
                </InteractiveHoverButton>
                <InteractiveHoverButton asChild text="Contact Us">
                  <Link to="/contact">Contact Us</Link>
                </InteractiveHoverButton>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
