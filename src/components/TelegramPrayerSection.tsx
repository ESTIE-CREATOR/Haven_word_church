
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { Card, CardContent } from "@/components/ui/card";
import MotionInView from "@/components/MotionInView";

const TelegramPrayerSection = () => {
  return (
    <section className="bg-gray-900 section-padding">
      <div className="container-custom">
        <MotionInView>
          <Card className="max-w-4xl mx-auto overflow-hidden bg-gradient-to-r from-gray-800 to-gray-900 border-gray-700">
            <CardContent className="p-6 sm:p-8">
              <div className="flex flex-col md:flex-row items-center gap-6">
                {/* Text Content */}
                <div className="flex-1 text-center md:text-left">
                  <h3 className="heading-md mb-2 text-white">Join Our Telegram Channel</h3>
                  <p className="text-gray-300 mb-4 text-sm sm:text-base">
                    Connect with us daily for prayer, devotionals, and spiritual growth.
                  </p>
                  <p className="text-primary font-semibold mb-6">
                    5:00 AM - 6:00 AM Everyday
                  </p>
                  <InteractiveHoverButton
                    asChild
                    text="Join Telegram Channel"
                    className="bg-primary hover:bg-primary/90 border-primary"
                  >
                    <a
                      href="https://t.me/havenwordchurch"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Join Telegram Channel
                    </a>
                  </InteractiveHoverButton>
                </div>

                {/* Animated Heart SVG */}
                <div className="flex-shrink-0 relative">
                  <div className="relative">
                    {/* Outer pulsing ring */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-[200px] h-[200px] rounded-full border-2 border-primary/30 animate-ping" style={{ animationDuration: '2.5s' }}></div>
                    </div>
                    
                    {/* Main heart container */}
                    <div className="relative animate-heart-pulse">
                      <svg
                        width="180"
                        height="180"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="text-primary relative z-10"
                      >
                        {/* Outer glow layer */}
                        <path
                          d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                          fill="currentColor"
                          fillOpacity="0.2"
                          className="animate-pulse"
                          style={{ animationDuration: '1.5s' }}
                        />
                        
                        {/* Main heart fill */}
                        <path
                          d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                          fill="currentColor"
                          fillOpacity="0.4"
                          className="animate-pulse"
                          style={{ animationDuration: '1.5s', animationDelay: '0.3s' }}
                        />
                        
                        {/* Animated glowing stroke */}
                        <path
                          d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeDasharray="120"
                          className="animate-heart-glow"
                          fill="none"
                        />
                      </svg>
                    </div>
                  </div>
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
