
import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { Card, CardContent } from "@/components/ui/card";
import MotionInView from "@/components/MotionInView";

const LocationCTASection = () => {
  return (
    <section className="bg-black section-padding">
      <div className="container-custom">
        <MotionInView>
          <Card className="max-w-2xl mx-auto text-center bg-gray-900 border-gray-800">
            <CardContent className="pt-6 sm:pt-8">
              <div className="mx-auto mb-4 p-4 rounded-full bg-primary/10 w-fit">
                <MapPin className="h-8 w-8 text-primary" />
              </div>
              <h3 className="heading-md mb-4 text-white">Visit Us</h3>
              <div className="text-gray-300 mb-6 space-y-2">
                <p className="text-sm sm:text-base">Haven Word Church</p>
                <p className="text-sm sm:text-base">The Spread City</p>
                <div className="mt-4 pt-4 border-t border-gray-700">
                  <p className="font-semibold text-white">Service Times</p>
                  <p className="text-sm sm:text-base">Sunday Services</p>
                  <p className="text-sm sm:text-base">Wednesday Bible Study</p>
                </div>
              </div>
              <InteractiveHoverButton asChild text="Get Directions">
                <Link to="/locations">Get Directions</Link>
              </InteractiveHoverButton>
            </CardContent>
          </Card>
        </MotionInView>
      </div>
    </section>
  );
};

export default LocationCTASection;
