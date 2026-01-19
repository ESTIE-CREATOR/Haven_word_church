
import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import MotionInView from "@/components/MotionInView";

const LocationCTASection = () => {
  return (
    <section className="bg-white section-padding">
      <div className="container-custom">
        <MotionInView>
          <Card className="max-w-2xl mx-auto text-center">
            <CardContent className="pt-6 sm:pt-8">
              <div className="mx-auto mb-4 p-4 rounded-full bg-primary/10 w-fit">
                <MapPin className="h-8 w-8 text-primary" />
              </div>
              <h3 className="heading-md mb-4">Visit Us</h3>
              <div className="text-muted-foreground mb-6 space-y-2">
                <p className="text-sm sm:text-base">Haven Word Church</p>
                <p className="text-sm sm:text-base">The Spread City</p>
                <div className="mt-4 pt-4 border-t">
                  <p className="font-semibold text-foreground">Service Times</p>
                  <p className="text-sm sm:text-base">Sunday Services</p>
                  <p className="text-sm sm:text-base">Wednesday Bible Study</p>
                </div>
              </div>
              <Button asChild>
                <Link to="/locations">Get Directions</Link>
              </Button>
            </CardContent>
          </Card>
        </MotionInView>
      </div>
    </section>
  );
};

export default LocationCTASection;
