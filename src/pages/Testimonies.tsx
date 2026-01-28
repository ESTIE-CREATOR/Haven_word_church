import { TubelightHeader } from "@/components/TubelightHeader";
import Footer from "@/components/Footer";
import Testimonial from "@/components/Testimonial";
import { Heart, Plus } from "lucide-react";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { Card, CardContent } from "@/components/ui/card";

const Testimonies = () => {
  const testimonies = [
    {
      name: "Sarah Johnson",
      role: "Member since 2020",
      content: "Haven Word Church has been a blessing to my family. The teachings have transformed our lives and the community is so welcoming. God's presence is truly felt here.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200",
    },
    {
      name: "Michael Adebayo",
      role: "Member since 2019",
      content: "I've experienced tremendous growth in my faith since joining. The Bible study sessions are insightful and the worship is powerful. Thank you, Haven Word Church!",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200",
    },
    {
      name: "Grace Okafor",
      role: "Member since 2021",
      content: "The prayers answered here are amazing! God has done so much in my life through this church. The leadership is caring and the Word is preached with power.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200",
    },
    {
      name: "David Thompson",
      role: "Member since 2018",
      content: "This is more than a church, it's a family. The support during difficult times has been incredible. I'm grateful for Pastor Anthonia's leadership and vision.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200",
    },
    {
      name: "Blessing Okoro",
      role: "Member since 2022",
      content: "The Spread City vision is real! I've seen God move in miraculous ways. The community outreach programs have touched so many lives. Glory to God!",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200",
    },
    {
      name: "James Wilson",
      role: "Member since 2020",
      content: "The teachings are practical and life-changing. I've learned to apply God's Word in my daily life. The fellowship here is genuine and uplifting.",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200",
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
              <Heart className="h-16 w-16 mx-auto mb-6 text-secondary" />
              <h1 className="text-2xl md:text-3xl font-serif font-bold mb-6">Testimonies</h1>
              <p className="text-base md:text-lg text-gray-100">
                Stories of God's faithfulness and transformation in our church family
              </p>
            </div>
          </div>
        </section>

        {/* Testimonies Grid */}
        <section className="section-padding bg-black">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonies.map((testimony, index) => (
                <Testimonial
                  key={index}
                  name={testimony.name}
                  role={testimony.role}
                  content={testimony.content}
                  image={testimony.image}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Share Your Testimony Section */}
        <section className="section-padding bg-gray-900">
          <div className="container-custom">
            <Card className="max-w bg-gray-900 border-gray-800-2xl mx-auto">
              <CardContent className="p-8 text-center">
                <div className="mx-auto mb-4 p-4 rounded-full bg-secondary/10 w-fit">
                  <Plus className="h-8 w-8 text-secondary" />
                </div>
                <h2 className="heading-md mb-4 text-white">Share Your Story</h2>
                <p className="text-gray-300 mb-6">
                  Has God done something amazing in your life? We'd love to hear your testimony and share it with our church family. Your story can inspire and encourage others.
                </p>
                <InteractiveHoverButton text="Submit Your Testimony" className="bg-secondary hover:bg-secondary/90 border-secondary" />
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Testimonies;
