import { TubelightHeader } from "@/components/TubelightHeader";
import Footer from "@/components/Footer";
import { MapPin, Clock, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import SectionHeading from "@/components/SectionHeading";

const MAP_QUERY = "9VXM+797+Haven+Word+Church+107D+Akintola+Rd+Ibadan+200284+Oyo";

// The main branch
const MAIN_BRANCH = {
  city: "Ibadan",
  church: "Haven Word Church",
  address: "Opposite Gate 5, Adamasingba Stadium, 107D Akintola Rd, Ibadan 200284, Oyo",
  phones: [
    { label: "+234 816 993 4313", href: "tel:+2348169934313" },
    { label: "+234 907 746 9204", href: "tel:+2349077469204" },
  ],
  email: "havenwordchurch@gmail.com",
  services: [
    { day: "Sunday Service", time: "7:30 AM & 10:00 AM" },
    { day: "Midweek Service (Wednesday)", time: "5:30 PM" },
  ],
};

// Other branches. Add `address` to a branch once its venue is confirmed and it will show on the card.
const BRANCHES: { city: string; day: string; time: string; address?: string }[] = [
  { city: "Owerri", day: "Sunday Service", time: "9:00 AM" },
  { city: "Abuja", day: "Sunday Service", time: "8:00 AM" },
  { city: "Lagos", day: "Sunday Service", time: "9:00 AM" },
];

const Locations = () => {
  return (
    <div className="min-h-screen flex flex-col overflow-x-clip max-w-full">
      <TubelightHeader />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-primary text-primary-foreground py-20">
          <div className="absolute inset-0 bg-[url('/pictures/head/5895757081476795656_120.jpg')] bg-cover bg-center opacity-20"></div>
          <div className="container-custom relative z-10">
            <div className="max-w-2xl mx-auto text-center">
              <h1 className="text-2xl md:text-3xl font-serif font-bold mb-6">Our Locations</h1>
              <p className="text-base md:text-lg text-primary-foreground/90">
                Find us and join us for worship and fellowship
              </p>
            </div>
          </div>
        </section>

        {/* Branches */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <SectionHeading align="center" eyebrow="One City at a Time" title="The Spread City" outlined="Branches" className="mb-8 md:mb-12" />

            {/* Main branch - the same family as the others, but given the big panel and the map */}
            <div className="band-blue mx-auto grid max-w-6xl overflow-hidden rounded-3xl shadow-2xl lg:grid-cols-2">
              <div className="p-6 sm:p-10">
                <span className="inline-flex items-center rounded-full bg-secondary px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-[#0c1140]">
                  Main Branch
                </span>
                <p className="mt-5 text-xs font-bold uppercase tracking-[0.3em] text-secondary">The Spread City</p>
                <h2 className="font-display mt-2 text-4xl sm:text-5xl text-foreground">
                  <span>{MAIN_BRANCH.city}</span>
                </h2>
                <p className="mt-2 text-muted-foreground">{MAIN_BRANCH.church}</p>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {MAIN_BRANCH.services.map((service) => (
                    <div key={service.day} className="rounded-2xl bg-white/10 p-4 ring-1 ring-white/15">
                      <p className="flex items-center gap-2 font-semibold text-foreground">
                        <Clock className="h-4 w-4 flex-shrink-0 text-secondary" />
                        {service.time}
                      </p>
                      <p className="mt-1 text-sm text-muted-foreground">{service.day}</p>
                    </div>
                  ))}
                </div>

                <ul className="mt-6 space-y-3 text-sm sm:text-base text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-secondary" />
                    {MAIN_BRANCH.address}
                  </li>
                  <li className="flex items-start gap-3">
                    <Phone className="mt-0.5 h-5 w-5 flex-shrink-0 text-secondary" />
                    <span className="flex flex-wrap gap-x-4 gap-y-1">
                      {MAIN_BRANCH.phones.map((phone) => (
                        <a key={phone.href} href={phone.href} className="hover:text-foreground hover:underline">
                          {phone.label}
                        </a>
                      ))}
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Mail className="mt-0.5 h-5 w-5 flex-shrink-0 text-secondary" />
                    <a href={`mailto:${MAIN_BRANCH.email}`} className="break-all hover:text-foreground hover:underline">
                      {MAIN_BRANCH.email}
                    </a>
                  </li>
                </ul>

                <div className="mt-8">
                  <InteractiveHoverButton asChild text="Get Directions" className="w-fit border-white bg-white text-[#0c1140] hover:bg-white/90">
                    <a href={`https://www.google.com/maps/search/?api=1&query=${MAP_QUERY.replace("+797", "%2B797")}`} target="_blank" rel="noopener noreferrer">
                      Get Directions
                    </a>
                  </InteractiveHoverButton>
                </div>
              </div>

              <div className="min-h-[320px] lg:min-h-full">
                <iframe
                  src={`https://www.google.com/maps?q=${MAP_QUERY}&output=embed`}
                  width="100%" height="100%" style={{ border: 0, minHeight: 320 }}
                  allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                  title="The Spread City Ibadan - Haven Word Church location"
                  className="block h-full w-full"
                ></iframe>
              </div>
            </div>

            {/* Other branches */}
            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3 max-w-6xl mx-auto">
              {BRANCHES.map((branch) => (
                <div key={branch.city} className="rounded-3xl border border-border border-l-4 border-l-secondary bg-muted p-6 sm:p-8 transition-transform duration-300 hover:-translate-y-1">
                  <p className="text-xs font-bold uppercase tracking-[0.3em] text-secondary">The Spread City</p>
                  <h3 className="font-display mt-2 text-2xl sm:text-3xl text-foreground">
                    <span>{branch.city}</span>
                  </h3>
                  <div className="mt-5 flex items-center gap-3">
                    <Clock className="h-5 w-5 text-primary flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground">{branch.time}</p>
                      <p className="text-sm text-muted-foreground">{branch.day}</p>
                    </div>
                  </div>
                  <div className="mt-5 pt-5 border-t border-border">
                    {branch.address ? (
                      <p className="flex items-start gap-2 text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0 text-primary" />
                        {branch.address}
                      </p>
                    ) : (
                      <Link to="/contact" className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline">
                        <MapPin className="h-4 w-4" />
                        Contact us for the venue
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Locations;
