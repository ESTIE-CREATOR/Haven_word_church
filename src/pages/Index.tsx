
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import EventCard from "@/components/EventCard";
import SermonHighlight from "@/components/SermonHighlight";
import Testimonial from "@/components/Testimonial";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  // Sample data for events
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
  ];

  // Sample testimonials
  const testimonials = [
    {
      quote: "Finding this church community has transformed my spiritual journey. The sermons are inspiring and the people are genuinely welcoming.",
      name: "Sarah Johnson",
      role: "Member since 2020",
    },
    {
      quote: "The youth program has been amazing for my teenagers. They've found mentors and friends who help them grow in their faith.",
      name: "Michael Thompson",
      role: "Parent",
    },
    {
      quote: "I came here looking for answers and found not only spiritual guidance but a supportive community that feels like family.",
      name: "Rebecca Martinez",
      role: "New Member",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        
        {/* Welcome Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="heading-lg mb-6">A Place of Faith, Community & Hope</h2>
              <p className="text-lg text-gray-600 mb-8">
                Faith In Focus is a welcoming community where people from all walks of life come together to worship, 
                learn, and grow spiritually. We believe in creating a supportive environment where everyone can 
                experience God's love and develop a deeper faith.
              </p>
              <Button asChild className="bg-church-600 hover:bg-church-700">
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Upcoming Events Section */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="heading-lg mb-4">Upcoming Events</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Join us for these special occasions and become part of our vibrant community.
              </p>
            </div>
            
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
            
            <div className="text-center mt-10">
              <Button asChild variant="outline" className="border-church-200">
                <Link to="/services">View All Events</Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Latest Sermon Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="heading-lg mb-4">Latest Sermon</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Listen to our most recent message and get inspired.
              </p>
            </div>
            
            <SermonHighlight
              title="Finding Peace in Uncertain Times"
              pastor="Pastor David Wilson"
              date="May 5, 2025"
              scripture="Philippians 4:6-7"
              description="In a world full of uncertainties and challenges, how can we find true peace? This sermon explores the biblical foundations of peace and practical steps to maintain inner calm amidst life's storms."
              imageUrl="https://images.unsplash.com/photo-1473177104440-ffee2f376098?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            />
            
            <div className="text-center mt-10">
              <Button asChild className="bg-church-600 hover:bg-church-700">
                <Link to="/sermons">Browse All Sermons</Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Testimonials Section */}
        <section className="section-padding bg-church-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="heading-lg mb-4">Community Testimonials</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Hear from members of our congregation about their experiences.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <Testimonial
                  key={index}
                  quote={testimonial.quote}
                  name={testimonial.name}
                  role={testimonial.role}
                />
              ))}
            </div>
          </div>
        </section>
        
        {/* Call to Action Section */}
        <section className="py-16 bg-church-700 text-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Join Us This Sunday</h2>
            <p className="text-xl mb-8 max-w-xl mx-auto">
              Experience worship, community, and spiritual growth at Faith In Focus Church. Everyone is welcome!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild className="bg-white text-church-800 hover:bg-gray-100">
                <Link to="/contact">Plan Your Visit</Link>
              </Button>
              <Button asChild variant="outline" className="border-white text-white hover:bg-white/10">
                <Link to="/services">Service Times</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
