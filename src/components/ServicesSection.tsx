import { Calendar, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import MotionInView from "@/components/MotionInView";
import { Card, CardContent } from "@/components/ui/card";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const ServicesSection = () => {
  const [selectedImage, setSelectedImage] = useState<{ src: string; title: string } | null>(null);

  return (
    <>
      <section className="bg-muted section-padding">
        <div className="container-custom">
          <MotionInView duration={0.8} className="text-center mb-6 sm:mb-8 md:mb-12">
            <h2 className="heading-lg text-foreground">Weekly Services</h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-sm sm:text-base">
              Join us for worship, teaching, and fellowship
            </p>
          </MotionInView>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
            {/* Sunday Service */}
            <MotionInView direction="left" duration={0.8}>
              <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-300 border border-border hover:border-primary/30 bg-card">
                <div
                  className="relative h-64 md:h-80 overflow-hidden cursor-pointer"
                  onClick={() => setSelectedImage({ src: "/pictures/services_fliers/sunday_service_flier .jpg", title: "Sunday Service" })}
                >
                  <img
                    src="/pictures/services_fliers/sunday_service_flier .jpg"
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
                <CardContent className="p-6">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm font-medium">Every Sunday</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <span className="text-sm">7:30 AM & 10:00 AM</span>
                    </div>
                    <div className="pt-2 border-t border-border">
                      <p className="text-sm text-muted-foreground mb-4">Opposite Gate 5, Adamasingba, Ibadan, Oyo State</p>
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
              <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-300 border border-border hover:border-primary/30 bg-card">
                <div
                  className="relative h-64 md:h-80 overflow-hidden cursor-pointer"
                  onClick={() => setSelectedImage({ src: "/pictures/services_fliers/wednessday.jpg", title: "Bible Study" })}
                >
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
                <CardContent className="p-6">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm font-medium">Every Wednesday</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <span className="text-sm">5:30 PM</span>
                    </div>
                    <div className="pt-2 border-t border-border">
                      <p className="text-sm text-muted-foreground mb-4">Opposite Gate 5, Adamasingba, Ibadan, Oyo State</p>
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

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-3xl p-2 bg-background">
          {selectedImage && (
            <>
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full h-auto object-contain rounded-lg"
              />
              <p className="text-center text-foreground font-semibold mt-2">{selectedImage.title}</p>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ServicesSection;
