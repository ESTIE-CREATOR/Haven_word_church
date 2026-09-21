import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import SectionHeading from "@/components/SectionHeading";

const TelegramPrayerSection = () => {
  return (
    <section className="band-orange section-padding">
      <div className="container-custom">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading eyebrow="Join Our Telegram Channel" title="Daily" outlined="Prayers" />
            <p className="mt-5 max-w-md text-muted-foreground text-base sm:text-lg">
              Connect with us daily for prayer, devotionals, and spiritual growth.
            </p>
            <div className="mt-8">
              <InteractiveHoverButton asChild text="Join Telegram Channel" className="w-fit px-12 hover:bg-primary">
                <a href="https://t.me/havenwordchurch" target="_blank" rel="noopener noreferrer">
                  Join Telegram Channel
                </a>
              </InteractiveHoverButton>
            </div>
          </div>

          {/* The time, set big */}
          <div className="lg:text-right">
            <p className="font-display text-foreground text-[clamp(2.75rem,10vw,7.5rem)]">
              <span className="block">6:00</span>
              <span className="block text-outline">6:30 AM</span>
            </p>
            <p className="mt-4 text-sm font-bold uppercase tracking-[0.3em] text-foreground">Everyday</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TelegramPrayerSection;
