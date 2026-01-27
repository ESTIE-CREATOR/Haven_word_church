
import { Link } from "react-router-dom";
import { Video, Headphones } from "lucide-react";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import MotionInView from "@/components/MotionInView";

const LatestMessagesSection = () => {
  return (
    <section className="bg-black section-padding">
      <div className="container-custom">
        <MotionInView duration={0.8} className="text-center mb-6 sm:mb-8 md:mb-12">
          <h2 className="heading-lg text-white">Latest Messages</h2>
        </MotionInView>

        <div className="grid grid-cols-2 md:grid-cols-2 gap-2 sm:gap-4 md:gap-6 max-w-4xl mx-auto">
          {/* Latest Video Card */}
          <MotionInView direction="left">
            <Card className="hover:shadow-lg transition-shadow h-full bg-gray-900 border-gray-800">
              <CardHeader className="text-center pb-2 sm:pb-4">
                <div className="mx-auto mb-2 sm:mb-4 p-2 sm:p-4 rounded-full bg-primary/10">
                  <Video className="h-4 w-4 sm:h-6 sm:w-6 md:h-8 md:w-8 text-primary" />
                </div>
                <CardTitle className="font-serif text-white text-xs sm:text-sm md:text-base">Latest Video</CardTitle>
              </CardHeader>
              <CardContent className="text-center px-2 sm:px-6 pb-3 sm:pb-6">
                <p className="text-gray-300 mb-2 sm:mb-4 text-xs sm:text-sm md:text-base">
                  Watch our most recent video message and be inspired by the Word.
                </p>
                <InteractiveHoverButton asChild text="Watch Now">
                  <Link to="/messages" className="text-xs sm:text-sm">Watch Now</Link>
                </InteractiveHoverButton>
              </CardContent>
            </Card>
          </MotionInView>

          {/* Latest Audio Card */}
          <MotionInView direction="right">
            <Card className="hover:shadow-lg transition-shadow h-full bg-gray-900 border-gray-800">
              <CardHeader className="text-center pb-2 sm:pb-4">
                <div className="mx-auto mb-2 sm:mb-4 p-2 sm:p-4 rounded-full bg-secondary/10">
                  <Headphones className="h-4 w-4 sm:h-6 sm:w-6 md:h-8 md:w-8 text-secondary" />
                </div>
                <CardTitle className="font-serif text-white text-xs sm:text-sm md:text-base">Latest Audio</CardTitle>
              </CardHeader>
              <CardContent className="text-center px-2 sm:px-6 pb-3 sm:pb-6">
                <p className="text-gray-300 mb-2 sm:mb-4 text-xs sm:text-sm md:text-base">
                  Listen to our audio messages on the go via Telegram.
                </p>
                <InteractiveHoverButton asChild text="Listen Now">
                  <a
                    href="https://t.me/havenwordchurch"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs sm:text-sm"
                  >
                    Listen Now
                  </a>
                </InteractiveHoverButton>
              </CardContent>
            </Card>
          </MotionInView>
        </div>
      </div>
    </section>
  );
};

export default LatestMessagesSection;
