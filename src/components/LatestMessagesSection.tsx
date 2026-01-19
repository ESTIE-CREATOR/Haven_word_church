
import { Link } from "react-router-dom";
import { Video, Headphones } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import MotionInView from "@/components/MotionInView";

const LatestMessagesSection = () => {
  return (
    <section className="bg-white section-padding">
      <div className="container-custom">
        <MotionInView duration={0.8} className="text-center mb-6 sm:mb-8 md:mb-12">
          <h2 className="heading-lg">Latest Messages</h2>
        </MotionInView>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto">
          {/* Latest Video Card */}
          <MotionInView direction="left">
            <Card className="hover:shadow-lg transition-shadow h-full">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-4 rounded-full bg-primary/10">
                  <Video className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-serif">Latest Video</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-4 text-sm sm:text-base">
                  Watch our most recent video message and be inspired by the Word.
                </p>
                <Button asChild>
                  <Link to="/messages/video">Watch Now</Link>
                </Button>
              </CardContent>
            </Card>
          </MotionInView>

          {/* Latest Audio Card */}
          <MotionInView direction="right">
            <Card className="hover:shadow-lg transition-shadow h-full">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-4 rounded-full bg-secondary/10">
                  <Headphones className="h-8 w-8 text-secondary" />
                </div>
                <CardTitle className="font-serif">Latest Audio</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-4 text-sm sm:text-base">
                  Listen to our audio messages on the go via Telegram.
                </p>
                <Button asChild variant="secondary">
                  <a
                    href="https://t.me/havenwordchurch"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Listen Now
                  </a>
                </Button>
              </CardContent>
            </Card>
          </MotionInView>
        </div>
      </div>
    </section>
  );
};

export default LatestMessagesSection;
