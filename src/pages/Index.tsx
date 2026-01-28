
import { TubelightHeader } from "@/components/TubelightHeader";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import LatestMessagesSection from "@/components/LatestMessagesSection";
import LeadershipSection from "@/components/LeadershipSection";
import TelegramPrayerSection from "@/components/TelegramPrayerSection";
import TestimoniesPreviewSection from "@/components/TestimoniesPreviewSection";
import PhotoGallerySection from "@/components/PhotoGallerySection";
import WelcomeSection from "@/components/WelcomeSection";
import IntroAnimation from "@/components/IntroAnimation";

const Index = () => {
  return (
    <>
      <IntroAnimation />
      <div className="min-h-screen flex flex-col overflow-x-hidden max-w-full">
        <TubelightHeader />
        <main className="flex-grow">
          <Hero />
          <WelcomeSection />
          <ServicesSection />
          <LatestMessagesSection />
          <PhotoGallerySection />
          <LeadershipSection />
          <TelegramPrayerSection />
          <TestimoniesPreviewSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
