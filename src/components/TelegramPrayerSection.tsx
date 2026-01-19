
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import MotionInView from "@/components/MotionInView";

const TelegramPrayerSection = () => {
  return (
    <section className="bg-white section-padding">
      <div className="container-custom">
        <MotionInView>
          <Card className="max-w-4xl mx-auto overflow-hidden bg-gradient-to-r from-blue-50 to-purple-50">
            <CardContent className="p-6 sm:p-8">
              <div className="flex flex-col md:flex-row items-center gap-6">
                {/* Text Content */}
                <div className="flex-1 text-center md:text-left">
                  <h3 className="heading-md mb-2">Join Our Telegram Channel</h3>
                  <p className="text-muted-foreground mb-4 text-sm sm:text-base">
                    Connect with us daily for prayer, devotionals, and spiritual growth.
                  </p>
                  <p className="text-primary font-semibold mb-6">
                    5:00 AM - 6:00 AM Everyday
                  </p>
                  <Button
                    asChild
                    className="bg-blue-600 hover:bg-blue-700"
                  >
                    <a
                      href="https://t.me/havenwordchurch"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Join Telegram Channel
                    </a>
                  </Button>
                </div>

                {/* Animated Heart SVG */}
                <div className="flex-shrink-0">
                  <svg
                    width="120"
                    height="120"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="text-blue-500"
                  >
                    <path
                      d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                      fill="currentColor"
                      fillOpacity="0.2"
                    />
                    <path
                      d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                      stroke="#3B82F6"
                      strokeWidth="1.5"
                      strokeDasharray="100"
                      className="animate-heart-glow"
                      fill="none"
                    />
                  </svg>
                </div>
              </div>
            </CardContent>
          </Card>
        </MotionInView>
      </div>
    </section>
  );
};

export default TelegramPrayerSection;
