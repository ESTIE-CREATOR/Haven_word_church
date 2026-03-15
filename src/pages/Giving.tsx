import { TubelightHeader } from "@/components/TubelightHeader";
import Footer from "@/components/Footer";
import { Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";

const Giving = () => {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden max-w-full">
      <TubelightHeader />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-primary text-primary-foreground py-20">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=1200')] bg-cover bg-center opacity-20"></div>
          <div className="container-custom relative z-10">
            <div className="max-w-2xl mx-auto text-center">
              <Heart className="h-16 w-16 mx-auto mb-6 text-accent" />
              <h1 className="text-2xl md:text-3xl font-serif font-bold mb-6">Give Generously</h1>
              <p className="text-base md:text-lg text-primary-foreground/90">
                "Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver." - 2 Corinthians 9:7
              </p>
            </div>
          </div>
        </section>


        {/* Bank Details Section */}
        <section className="section-padding bg-gray-900">
          <div className="container-custom">
            <Card className="max-w-2xl mx-auto bg-gray-900 border-gray-800">
              <CardContent className="p-8">
                <h2 className="heading-md text-center mb-6 text-white">Bank Account Details</h2>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-gray-700">
                    <span className="font-medium text-gray-300">Account Name:</span>
                    <span className="text-white font-semibold">Haven Word Church</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-700">
                    <span className="font-medium text-gray-300">Account Number:</span>
                    <span className="text-white font-semibold">0275817169</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-700">
                    <span className="font-medium text-gray-300">Bank Name:</span>
                    <span className="text-white font-semibold">Wema Bank Plc</span>
                  </div>
                </div>
                <p className="text-sm text-gray-300 mt-6 text-center">
                  Please include your name and "Offering" in the transfer reference
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Why Give Section */}
        <section className="section-padding bg-black">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="heading-md mb-6 text-white">Why We Give</h2>
              <p className="text-gray-300 mb-4">
                Giving is an act of worship and faith. Your generous contributions help us:
              </p>
              <ul className="text-left space-y-3 text-gray-300 max-w-xl mx-auto">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Support our ministry and outreach programs</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Maintain our facilities and create welcoming spaces</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Support missions and community service initiatives</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Provide resources for spiritual growth and development</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Giving;
