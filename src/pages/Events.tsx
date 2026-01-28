import { TubelightHeader } from "@/components/TubelightHeader";
import Footer from "@/components/Footer";
import EventCard from "@/components/EventCard";
import { Calendar, MapPin } from "lucide-react";

const Events = () => {
  const upcomingEvents = [
    {
      title: "Daily with Jesus",
      date: "Daily",
      time: "Various Times",
      description: "Join us daily for prayer, worship, and fellowship with Jesus.",
      image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600",
    },
    {
      title: "Burning Hearts Submit",
      date: "Annual Retreat",
      time: "Once a Year",
      description: "A powerful retreat that holds once a year for spiritual renewal and transformation.",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600",
    },
    {
      title: "Soul Winners Conference",
      date: "Annual Camp",
      time: "Once a Year",
      description: "A transformative camp that holds once a year, equipping believers to win souls for Christ.",
      image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600",
    },
    {
      title: "Church Anniversary",
      date: "March 21st",
      time: "Annually",
      description: "Join us every year on March 21st as we celebrate God's faithfulness and the growth of our church family.",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600",
    },
    {
      title: "Monthly 6 Hours with Jesus (Teenagers)",
      date: "Monthly",
      time: "6 Hours",
      description: "A special monthly event for teenagers - 6 hours dedicated to worship, teaching, and fellowship with Jesus.",
      image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600",
    },
    {
      title: "Church Prays",
      date: "Month End",
      time: "Monthly",
      description: "Join us every month end for corporate prayer and intercession for our church and community.",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600",
    },
  ];

  const regularEvents = [
    {
      title: "Sunday Worship Service",
      date: "Every Sunday",
      time: "7:30 AM & 10:00 AM",
      description: "Join us for inspiring worship and biblical teaching.",
    },
    {
      title: "Wednesday Bible Study",
      date: "Every Wednesday",
      time: "5:30 PM",
      description: "Deep dive into God's Word with interactive study and discussion.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <TubelightHeader />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-gray-900 text-white py-20">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=1200')] bg-cover bg-center opacity-30"></div>
          <div className="container-custom relative z-10">
            <div className="max-w-2xl mx-auto text-center">
              <Calendar className="h-16 w-16 mx-auto mb-6" />
              <h1 className="text-2xl md:text-3xl font-serif font-bold mb-6">Events & Programs</h1>
              <p className="text-base md:text-lg text-gray-100">
                Join us for worship, fellowship, and community events
              </p>
            </div>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="section-padding bg-black">
          <div className="container-custom">
            <h2 className="heading-lg text-center mb-12 text-white">Upcoming Events</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {upcomingEvents.map((event, index) => (
                <EventCard
                  key={index}
                  title={event.title}
                  date={event.date}
                  time={event.time}
                  description={event.description}
                  image={event.image}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Regular Events */}
        <section className="section-padding bg-gray-900">
          <div className="container-custom">
            <h2 className="heading-lg text-center mb-12 text-white">Regular Weekly Events</h2>
            <div className="max-w-4xl mx-auto space-y-8">
              {regularEvents.map((event, index) => (
                <div
                  key={index}
                  className="bg-black p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center"
                >
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Calendar className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">{event.title}</h3>
                      <p className="text-sm text-gray-300">{event.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-sm text-gray-300 mb-3">
                    <MapPin className="h-4 w-4" />
                    <span>9VXM+797 Haven Word Church, 107D Akintola Rd, Ibadan 200284, Oyo</span>
                  </div>
                  <p className="text-sm text-gray-300 mb-4">{event.description}</p>
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
