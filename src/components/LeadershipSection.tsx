
import { Card, CardContent } from "@/components/ui/card";
import MotionInView from "@/components/MotionInView";

const LeadershipSection = () => {
  return (
    <section className="bg-white section-padding">
      <div className="container-custom">
        <MotionInView>
          <Card className="max-w-4xl mx-auto overflow-hidden">
            <CardContent className="p-0">
              <div className="flex flex-col md:flex-row items-center">
                {/* Pastor Image */}
                <div className="p-6 sm:p-8 flex justify-center md:justify-start">
                  <div className="w-40 h-40 xs:w-48 xs:h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full overflow-hidden flex-shrink-0">
                    <img
                      src="/pictures/pastor/photo_2026-01-07_15-42-34.jpg"
                      alt="Pastor Anthonia Amadi"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Pastor Info */}
                <div className="p-6 sm:p-8 text-center md:text-left flex-1">
                  <h3 className="heading-md mb-2">Pastor Anthonia Amadi</h3>
                  <p className="text-primary font-medium mb-4">Lead Pastor</p>
                  <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                    Pastor Anthonia Amadi is the founder and lead pastor of Haven Word Church. 
                    With a heart for spreading the gospel and building a community of faith, 
                    she leads the church with passion, wisdom, and love. Under her leadership, 
                    Haven Word Church has grown into a vibrant community known as "The Spread City."
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </MotionInView>
      </div>
    </section>
  );
};

export default LeadershipSection;
