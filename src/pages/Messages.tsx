import { TubelightHeader } from "@/components/TubelightHeader";
import Footer from "@/components/Footer";
import { Video, Headphones, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";

const Messages = () => {
  const videoMessages = [
    {
      title: "The Power of Faith",
      pastor: "Pastor Anthonia Amadi",
      date: "January 7, 2024",
      thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
      duration: "45:30",
    },
    {
      title: "Walking in Purpose",
      pastor: "Pastor Anthonia Amadi",
      date: "December 31, 2023",
      thumbnail: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400",
      duration: "52:15",
    },
    {
      title: "The Gift of Grace",
      pastor: "Pastor Anthonia Amadi",
      date: "December 24, 2023",
      thumbnail: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=400",
      duration: "38:45",
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
              <h1 className="text-2xl md:text-3xl font-serif font-bold mb-6">Messages & Teachings</h1>
              <p className="text-base md:text-lg text-gray-100">
                Watch and listen to inspiring messages from our services
              </p>
            </div>
          </div>
        </section>

        {/* Video Messages Section */}
        <section className="section-padding bg-black">
          <div className="container-custom">
            <div className="flex items-center gap-2 mb-8">
              <Video className="h-6 w-6 text-primary" />
              <h2 className="heading-md text-white">Video Messages</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {videoMessages.map((message, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow bg-gray-900 border-gray-800">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={message.thumbnail}
                      alt={message.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <Video className="h-12 w-12 text-white" />
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                      {message.duration}
                    </div>
                  </div>
                  <CardContent className="p-4 bg-gray-900">
                    <h3 className="text-lg font-semibold mb-2 line-clamp-2 text-white">{message.title}</h3>
                    <div className="flex items-center gap-2 text-sm text-gray-300 mb-3">
                      <Calendar className="h-4 w-4" />
                      <span>{message.date}</span>
                    </div>
                    <p className="text-sm text-gray-300 mb-4">{message.pastor}</p>
                    <InteractiveHoverButton text="Watch Now" className="w-full" />
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Audio Messages Section */}
        <section className="section-padding bg-gray-900">
          <div className="container-custom">
            <div className="flex items-center gap-2 mb-8">
              <Headphones className="h-6 w-6 text-secondary" />
              <h2 className="heading-md text-white">Audio Messages</h2>
            </div>

            <Card className="max-w-2xl mx-auto bg-gray-800 border-gray-700">
              <CardContent className="p-8 text-center">
                <Headphones className="h-16 w-16 text-secondary mx-auto mb-4" />
                <h3 className="heading-md mb-4 text-white">Listen on Telegram</h3>
                <p className="text-gray-300 mb-6">
                  All our audio messages are available on our Telegram channel. Join us for daily devotionals and weekly sermon recordings.
                </p>
                <InteractiveHoverButton
                  asChild
                  text="Join Telegram Channel"
                  className="bg-primary hover:bg-primary/90 border-primary"
                >
                  <a
                    href="https://t.me/havenwordchurch"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Join Telegram Channel
                  </a>
                </InteractiveHoverButton>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Messages;
