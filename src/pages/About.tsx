
import { TubelightHeader } from "@/components/TubelightHeader";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <TubelightHeader />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-gray-900 text-white py-20">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1466442929976-97f336a657be')] bg-cover bg-center opacity-30"></div>
          <div className="container-custom relative z-10">
            <div className="max-w-2xl mx-auto text-center">
              <h1 className="text-2xl md:text-3xl font-serif font-bold mb-6">About Our Church</h1>
              <p className="text-base md:text-lg text-gray-100">
                Haven Word Church is a place where everyone is welcome to discover and deepen their faith.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="section-padding bg-black">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="heading-lg text-center mb-8 text-white">Our Story</h2>
              <div className="prose prose-lg max-w-none text-gray-300">
                <p>
                  Haven Word Church was founded with a vision to create a welcoming spiritual home for all. What began as a humble gathering has grown into a thriving congregation known as "The Spread City" - raising thousands of preachers in countless cities.
                </p>
                <p className="mt-4">
                  Throughout our history, we've remained committed to our founding principles of inclusivity, spiritual growth, and community service. Our church has evolved over the years, adapting to the changing needs of our community while staying true to our core biblical teachings.
                </p>
                <p className="mt-4">
                  Today, Haven Word Church stands as a beacon of hope and fellowship in our community. We continue to expand our ministries and outreach programs, always seeking new ways to serve both our members and the broader community around us.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Mission & Values Section */}
        <section className="section-padding bg-gray-900">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="heading-lg text-center mb-12 text-white">Our Mission & Values</h2>
              
              <div className="mb-16">
                <h3 className="heading-md text-center mb-6 text-white">Our Mission</h3>
                <div className="text-center text-base md:text-lg font-serif text-gray-300 max-w-2xl mx-auto">
                  "To create a vibrant community of faith where people can experience God's love, 
                  grow spiritually, and serve others with compassion and grace."
                </div>
              </div>
              
              <div>
                <h3 className="heading-md text-center mb-8 text-white">Core Values</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    {
                      title: "Faith",
                      description: "Nurturing a deep and growing relationship with God through worship, prayer, and study.",
                      icon: "✝️",
                    },
                    {
                      title: "Community",
                      description: "Creating a welcoming environment where everyone feels valued, supported, and connected.",
                      icon: "👥",
                    },
                    {
                      title: "Compassion",
                      description: "Extending God's love through service and care for those in need.",
                      icon: "❤️",
                    },
                    {
                      title: "Integrity",
                      description: "Living with honesty, transparency, and authenticity in all we do.",
                      icon: "⭐",
                    },
                    {
                      title: "Growth",
                      description: "Encouraging continuous spiritual development and personal transformation.",
                      icon: "🌱",
                    },
                    {
                      title: "Stewardship",
                      description: "Responsibly managing the gifts, talents, and resources entrusted to us.",
                      icon: "🤲",
                    }
                  ].map((value, index) => (
                    <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-700">
                      <div className="text-3xl mb-3 text-center">{value.icon}</div>
                      <h4 className="text-lg font-semibold font-serif text-white mb-2 text-center">{value.title}</h4>
                      <p className="text-gray-300 text-center">{value.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Section */}
        <section className="section-padding bg-gray-900">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="heading-lg text-center mb-12 text-white">Our Leadership</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    name: "Pastor David Wilson",
                    role: "Senior Pastor",
                    bio: "Pastor David has been leading our congregation for over 15 years. With a background in theology and counseling, he brings depth, wisdom, and compassion to his ministry.",
                    image: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                  },
                  {
                    name: "Sarah Mitchell",
                    role: "Worship Director",
                    bio: "Sarah has been leading our worship ministry since 2018. Her passion for music and worship creates meaningful experiences that help our congregation connect with God.",
                    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                  },
                  {
                    name: "Michael Thompson",
                    role: "Youth Pastor",
                    bio: "Michael leads our vibrant youth ministry with energy and dedication. He focuses on helping young people build strong foundations of faith during their formative years.",
                    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                  },
                  {
                    name: "Rebecca Martinez",
                    role: "Community Outreach Coordinator",
                    bio: "Rebecca oversees our community service initiatives. Her organizational skills and compassionate heart help us make a meaningful difference in our local community.",
                    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                  }
                ].map((leader, index) => (
                  <div key={index} className="flex flex-col md:flex-row gap-4 items-start">
                    <img 
                      src={leader.image} 
                      alt={leader.name}
                      className="w-24 h-24 rounded-full object-cover mx-auto md:mx-0" 
                    />
                    <div>
                      <h3 className="text-lg font-serif font-semibold text-white">{leader.name}</h3>
                      <p className="text-primary mb-2">{leader.role}</p>
                      <p className="text-gray-300">{leader.bio}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
