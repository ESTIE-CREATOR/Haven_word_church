
import { Calendar, BookOpen, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import MotionInView from "@/components/MotionInView";
import { Card, CardContent } from "@/components/ui/card";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";

const ServicesSection = () => {
  return (
    <section className="bg-gradient-to-b from-gray-900 to-black section-padding">
      <div className="container-custom">
        <MotionInView duration={0.8} className="text-center mb-6 sm:mb-8 md:mb-12">
          <h2 className="heading-lg text-white">Weekly Services</h2>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto text-sm sm:text-base">
            Join us for worship, teaching, and fellowship
          </p>
        </MotionInView>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          {/* Sunday Service */}
          <MotionInView direction="left" duration={0.8}>
            <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 border-gray-800 hover:border-primary/20 bg-gray-900">
              <div className="relative h-64 md:h-80 overflow-hidden">
                <img
                  src="/pictures/services_fliers/sunday.jpg"
                  alt="Sunday Service"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-primary/20 rounded-lg">
                      <Calendar className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Sunday Service</h3>
                  </div>
                  <p className="text-white/90 text-sm">Join us for inspiring worship and biblical teaching</p>
                </div>
              </div>
              <CardContent className="p-6 bg-gray-900">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-gray-300">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm font-medium">Every Sunday</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <span className="text-sm">7:30 AM & 10:00 AM</span>
                  </div>
                  <div className="pt-2 border-t border-gray-700">
                    <p className="text-sm text-gray-300 mb-4">Opposite Gate 5, Adamasingba, Ibadan, Oyo State</p>
                    <InteractiveHoverButton asChild text="Get Directions" className="w-full">
                      <Link to="/locations">Get Directions</Link>
                    </InteractiveHoverButton>
                  </div>
                </div>
              </CardContent>
            </Card>
          </MotionInView>

          {/* Wednesday Bible Study */}
          <MotionInView direction="right" duration={0.8}>
            <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 border-gray-800 hover:border-primary/20 bg-gray-900">
              <div className="relative h-64 md:h-80 overflow-hidden">
                <img
                  src="/pictures/services_fliers/wednessday.jpg"
                  alt="Wednesday Bible Study"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-secondary/20 rounded-lg">
                      <BookOpen className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Bible Study</h3>
                  </div>
                  <p className="text-white/90 text-sm">Deep dive into God's Word with interactive study</p>
                </div>
              </div>
              <CardContent className="p-6 bg-gray-900">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-gray-300">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm font-medium">Every Wednesday</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <span className="text-sm">5:30 PM</span>
                  </div>
                  <div className="pt-2 border-t border-gray-700">
                    <p className="text-sm text-gray-300 mb-4">Opposite Gate 5, Adamasingba, Ibadan, Oyo State</p>
                    <InteractiveHoverButton asChild text="Get Directions" className="w-full">
                      <Link to="/locations">Get Directions</Link>
                    </InteractiveHoverButton>
                  </div>
                </div>
              </CardContent>
            </Card>
          </MotionInView>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
