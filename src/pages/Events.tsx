import { TubelightHeader } from "@/components/TubelightHeader";
import Footer from "@/components/Footer";
import EventCard from "@/components/EventCard";
import { Calendar, MapPin } from "lucide-react";

const Events = () => {
  const upcomingEvents = [
    { title: "Church Anniversary", date: "March 20, 2026.", time: "Once a Year", description: "Join us as we celebrate another year of God’s grace, growth, and transformation.", image: "/pictures/events_page _fliers/anniversary_flier.jpg" },
    { title: "Daily with Jesus", date: "June, 2026.", time: "Once a Year", description: "Join us daily for prayer, worship, and fellowship with Jesus.", image: "/pictures/events_page _fliers/Daily With Jesus banner.png"},
    { title: "Burning Hearts Submit", date: "April, 2026.", time: "Once a Year", description: "A powerful retreat that holds once a year for spiritual renewal and transformation.", image: "/pictures/events_page _fliers/burning heart submit.jpg" },
    { title: "Soul Winners Conference", date: "December, 2026.", time: "Once a Year", description: "A transformative camp that holds once a year, equipping believers to win souls for Christ.", image: "/pictures/events_page _fliers/496947425_9802487696509088_2913698270647924602_n.jpg" },
    { title: "Monthly 6 Hours with Jesus (Teenagers)", date: "Monthly", time: "6 Hours", description: "A special monthly event for teenagers - 6 hours dedicated to worship, teaching, and fellowship with Jesus.", image: "/pictures/events_page _fliers/588501720_122144197112893788_8804863929633027602_n.jpg" },
    { title: "Church Prays", date: "Month End", time: "Monthly", description: "Join us every month end for corporate prayer and intercession for our church and community.", image: "/pictures/events_page _fliers/5892985612095130962_120.jpg" },
    { title: "Ibadan Miracle Crusade", date: "October, 2026", time: "Monthly", description: "Join us every month end for corporate prayer and intercession for our church and community.", image: "/pictures/events_page _fliers/IMC.jpg" },
  ];

  const regularEvents = [
    { title: "Sunday Worship Service", date: "Every Sunday", time: "7:30 AM & 10:00 AM", description: "Join us for inspiring worship and biblical teaching." },
    { title: "Wednesday Bible Study", date: "Every Wednesday", time: "5:30 PM", description: "Deep dive into God's Word with interactive study and discussion." },
  ];

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden max-w-full">
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
            <h2 className="heading-lg text-center mb-12 text-foreground">Upcoming Events</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {upcomingEvents.map((event, index) => (
                <EventCard key={index} title={event.title} date={event.date} time={event.time} description={event.description} image={event.image} />
              ))}
            </div>
          </div>
        </section>

        {/* Regular Events */}
        <section className="section-padding bg-muted">
          <div className="container-custom">
            <h2 className="heading-lg text-center mb-12 text-foreground">Regular Weekly Events</h2>
            <div className="max-w-4xl mx-auto space-y-8">
              {regularEvents.map((event, index) => (
                <div key={index} className="bg-card p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center border border-border">
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Calendar className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">{event.title}</h3>
                      <p className="text-sm text-muted-foreground">{event.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-3">
                    <MapPin className="h-4 w-4" />
                    <span>9VXM+797 Haven Word Church, 107D Akintola Rd, Ibadan 200284, Oyo</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">{event.description}</p>
                  <p className="text-sm font-medium text-primary">{event.time}</p>
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

export default Events;
