
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import LatestMessagesSection from "@/components/LatestMessagesSection";
import LocationCTASection from "@/components/LocationCTASection";
import LeadershipSection from "@/components/LeadershipSection";
import TelegramPrayerSection from "@/components/TelegramPrayerSection";
import TestimoniesPreviewSection from "@/components/TestimoniesPreviewSection";
import IntroAnimation from "@/components/IntroAnimation";

const Index = () => {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <>
      {showIntro && <IntroAnimation onComplete={() => setShowIntro(false)} />}
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Hero />
          <ServicesSection />
          <LatestMessagesSection />
          <LocationCTASection />
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
