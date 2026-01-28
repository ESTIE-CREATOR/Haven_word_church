
import { TubelightHeader } from "@/components/TubelightHeader";
import Footer from "@/components/Footer";
import LeadershipSection from "@/components/LeadershipSection";

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
        <LeadershipSection />
      </main>
      <Footer />
    </div>
  );
};

export default About;
