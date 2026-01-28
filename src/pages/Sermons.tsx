
import { TubelightHeader } from "@/components/TubelightHeader";
import Footer from "@/components/Footer";
import SermonHighlight from "@/components/SermonHighlight";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";

const Sermons = () => {
  // Sample sermon data
  const sermons = [
    {
      title: "Finding Peace in Uncertain Times",
      pastor: "Pastor David Wilson",
      date: "May 5, 2025",
      scripture: "Philippians 4:6-7",
      description: "In a world full of uncertainties and challenges, how can we find true peace? This sermon explores the biblical foundations of peace and practical steps to maintain inner calm amidst life's storms.",
      imageUrl: "https://images.unsplash.com/photo-1473177104440-ffee2f376098?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      title: "The Power of Community",
      pastor: "Pastor David Wilson",
      date: "April 28, 2025",
      scripture: "Acts 2:42-47",
      description: "Exploring the importance of Christian community and how we can build stronger connections with fellow believers. This message highlights the early church's example and its relevance for today.",
      imageUrl: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      title: "Living With Purpose",
      pastor: "Pastor Michael Thompson",
      date: "April 21, 2025",
      scripture: "Ephesians 2:10",
      description: "Discover how to align your life with God's purpose and make the most of your unique gifts and talents. This message provides insights on finding fulfillment through purposeful living.",
      imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      title: "The Heart of Worship",
      pastor: "Sarah Mitchell",
      date: "April 14, 2025",
      scripture: "John 4:23-24",
      description: "What does it mean to worship in spirit and truth? This sermon explores the essence of authentic worship beyond rituals and traditions, focusing on heart connection with God.",
      imageUrl: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      title: "Faith That Overcomes",
      pastor: "Pastor David Wilson",
      date: "April 7, 2025",
      scripture: "Hebrews 11:1-6",
      description: "An inspiring message about developing a faith that can withstand life's challenges. Looking at biblical examples and practical applications for strengthening your faith journey.",
      imageUrl: "https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      title: "Building Strong Families",
      pastor: "Pastor Rebecca Martinez",
      date: "March 31, 2025",
      scripture: "Deuteronomy 6:4-9",
      description: "Practical wisdom for nurturing faith-centered families in today's challenging world. This message provides biblical principles and actionable advice for parents and family members.",
      imageUrl: "https://images.unsplash.com/photo-1536337005238-94b997371b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    }
  ];

  // Series categories
  const sermonSeries = [
    "Faith Foundations",
    "Life's Journey",
    "Spiritual Growth",
    "Community & Relationships",
    "Biblical Teachings"
  ];

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden max-w-full">
      <TubelightHeader />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-gray-900 text-white py-20">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1494891848038-7bd202a2afeb')] bg-cover bg-center opacity-30"></div>
          <div className="container-custom relative z-10">
            <div className="max-w-2xl mx-auto text-center">
              <h1 className="text-2xl md:text-3xl font-serif font-bold mb-6">Sermons & Teachings</h1>
              <p className="text-base md:text-lg text-gray-100">
                Explore our collection of inspiring messages to deepen your faith and spiritual understanding.
              </p>
            </div>
          </div>
        </section>

        {/* Sermon Archive */}
        <section className="section-padding bg-black">
          <div className="container-custom">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Sidebar */}
              <div className="lg:w-1/4">
                <div className="bg-gray-900 p-6 rounded-lg sticky top-20">
                  <h3 className="text-lg font-serif font-semibold text-white mb-4">Browse By Series</h3>
                  <ul className="space-y-2">
                    {sermonSeries.map((series, index) => (
                      <li key={index}>
                        <InteractiveHoverButton 
                          text={series}
                          className="w-full justify-start text-left hover:bg-gray-800 hover:text-white border-transparent text-gray-300"
                        />
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-8 border-t border-gray-700 pt-6">
                    <h3 className="text-lg font-serif font-semibold text-white mb-4">Looking For</h3>
                    <div className="space-y-2">
                      <InteractiveHoverButton text="Recent Sermons" className="w-full justify-start text-left border-gray-700 text-gray-300" />
                      <InteractiveHoverButton text="Most Popular" className="w-full justify-start text-left border-gray-700 text-gray-300" />
                      <InteractiveHoverButton text="Special Events" className="w-full justify-start text-left border-gray-700 text-gray-300" />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Main Content */}
              <div className="lg:w-3/4">
                <h2 className="heading-md mb-6 text-white">Recent Sermons</h2>
                
                <div className="space-y-6">
                  {sermons.map((sermon, index) => (
                    <SermonHighlight
                      key={index}
                      title={sermon.title}
                      pastor={sermon.pastor}
                      date={sermon.date}
                      scripture={sermon.scripture}
                      description={sermon.description}
                      imageUrl={sermon.imageUrl}
                    />
                  ))}
                </div>
                
                <div className="mt-10 flex justify-center">
                  <InteractiveHoverButton text="Load More Sermons" className="border-gray-700 text-gray-300" />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-16 bg-gray-900">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="heading-md mb-4 text-white">Join Us For Our Next Service</h2>
              <p className="text-lg text-gray-300 mb-6">
                Experience these messages in person. We'd love to welcome you to our church community!
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <InteractiveHoverButton text="Service Times" className="bg-primary hover:bg-primary/90 border-primary" />
                <InteractiveHoverButton text="Subscribe to Podcast" className="border-gray-700 text-white" />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Sermons;
