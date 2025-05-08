
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import EventCard from "@/components/EventCard";

const Services = () => {
  // Upcoming events data
  const upcomingEvents = [
    {
      title: "Community Prayer Breakfast",
      date: "May 15, 2025",
      time: "8:00 AM",
      description: "Join us for a morning of fellowship, inspiration, and prayer as we gather together as a community.",
      image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      title: "Youth Summer Camp",
      date: "June 12-18, 2025",
      time: "All Day",
      description: "A week-long adventure for youth to grow in faith, build lasting friendships, and have fun outdoor activities.",
      image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f8e7f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      title: "Worship Night",
      date: "May 22, 2025",
      time: "7:00 PM",
      description: "Experience an evening of praise and worship with our worship team and special guest musicians.",
      image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      title: "Family Fun Day",
      date: "June 5, 2025",
      time: "10:00 AM - 3:00 PM",
      description: "A day of activities, games, food, and fellowship for the entire family to enjoy together.",
      image: "https://images.unsplash.com/photo-1536337005238-94b997371b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      title: "Senior Adults Luncheon",
      date: "May 25, 2025",
      time: "12:00 PM",
      description: "A special gathering for our senior adult members featuring a delicious meal and engaging program.",
      image: "https://images.unsplash.com/photo-1601579112934-17ac2aa86292?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      title: "Bible Study Conference",
      date: "July 8-10, 2025",
      time: "9:00 AM - 4:00 PM",
      description: "An in-depth exploration of scripture with guest speakers, workshops, and discussion groups.",
      image: "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-church-800 text-white py-20">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551038247-3d9af20df552')] bg-cover bg-center opacity-30"></div>
          <div className="container-custom relative z-10">
            <div className="max-w-2xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Services & Events</h1>
              <p className="text-xl text-gray-100">
                Join us for worship services, community events, and ministry opportunities.
              </p>
            </div>
          </div>
        </section>

        {/* Worship Services Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <h2 className="heading-lg text-center mb-12">Weekly Worship Services</h2>
            
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-church-50 p-6 rounded-lg">
                  <h3 className="text-xl font-serif font-semibold text-church-800 mb-3">Sunday Morning Worship</h3>
                  <div className="space-y-3 text-gray-700">
                    <p><strong>Times:</strong> 8:00 AM & 10:30 AM</p>
                    <p><strong>Location:</strong> Main Sanctuary</p>
                    <p>Our Sunday services feature inspiring messages, uplifting worship music, and a welcoming community atmosphere.</p>
                  </div>
                </div>
                
                <div className="bg-church-50 p-6 rounded-lg">
                  <h3 className="text-xl font-serif font-semibold text-church-800 mb-3">Wednesday Bible Study</h3>
                  <div className="space-y-3 text-gray-700">
                    <p><strong>Time:</strong> 7:00 PM</p>
                    <p><strong>Location:</strong> Fellowship Hall</p>
                    <p>Mid-week study focusing on deeper exploration of scripture, discussion, and prayer.</p>
                  </div>
                </div>
                
                <div className="bg-church-50 p-6 rounded-lg">
                  <h3 className="text-xl font-serif font-semibold text-church-800 mb-3">Youth Fellowship</h3>
                  <div className="space-y-3 text-gray-700">
                    <p><strong>Time:</strong> Fridays at 6:00 PM</p>
                    <p><strong>Location:</strong> Youth Center</p>
                    <p>Engaging program for teens featuring activities, worship, and relevant teachings.</p>
                  </div>
                </div>
                
                <div className="bg-church-50 p-6 rounded-lg">
                  <h3 className="text-xl font-serif font-semibold text-church-800 mb-3">Children's Church</h3>
                  <div className="space-y-3 text-gray-700">
                    <p><strong>Time:</strong> During 10:30 AM Service</p>
                    <p><strong>Location:</strong> Children's Wing</p>
                    <p>Fun, age-appropriate spiritual learning for children ages 4-12.</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10 text-center">
                <Button asChild className="bg-church-600 hover:bg-church-700">
                  <Link to="/contact">Plan Your Visit</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Ministries Section */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <h2 className="heading-lg text-center mb-12">Our Ministries</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Children's Ministry",
                  description: "Nurturing the spiritual development of our youngest members through age-appropriate teaching and activities.",
                  icon: "👪"
                },
                {
                  title: "Youth Ministry",
                  description: "Supporting teens on their faith journey with relevant teachings, fellowship, and mentorship.",
                  icon: "👫"
                },
                {
                  title: "Music & Worship",
                  description: "Enhancing our worship experience through music, choir, and technical production.",
                  icon: "🎵"
                },
                {
                  title: "Adult Education",
                  description: "Offering various Bible study groups and classes for continuous spiritual growth.",
                  icon: "📚"
                },
                {
                  title: "Community Outreach",
                  description: "Serving our neighbors through food drives, volunteer work, and support programs.",
                  icon: "🤝"
                },
                {
                  title: "Prayer Team",
                  description: "Dedicated to praying for the needs of our church members and community.",
                  icon: "🙏"
                },
              ].map((ministry, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="text-3xl mb-3 text-center">{ministry.icon}</div>
                  <h3 className="text-xl font-serif font-semibold text-church-700 mb-3 text-center">{ministry.title}</h3>
                  <p className="text-gray-600 text-center">{ministry.description}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-gray-600 mb-4">Interested in joining or learning more about our ministries?</p>
              <Button asChild variant="outline" className="border-church-200 text-church-700">
                <Link to="/contact">Get Involved</Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Upcoming Events Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <h2 className="heading-lg text-center mb-12">Upcoming Events</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
            
            <div className="mt-12 text-center">
              <p className="text-gray-600 mb-4">Have questions about our events?</p>
              <Button asChild className="bg-church-600 hover:bg-church-700">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
