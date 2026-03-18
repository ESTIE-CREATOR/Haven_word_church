import { cn } from "@/lib/utils";
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  src: string;
};

export const AnimatedTestimonials = ({
  testimonials,
  className,
}: {
  testimonials: Testimonial[];
  className?: string;
}) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  if (!testimonials || testimonials.length === 0) {
    return null;
  }

  return (
    <>
      <section
        className={cn(
          "w-full flex justify-center px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20",
          className
        )}
      >
        <div className="w-full max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 place-items-center">
            {testimonials.slice(0, 2).map((testimonial, index) => (
              <div
                key={`${testimonial.name}-${index}`}
                className="w-full max-w-md overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-shadow duration-300"
              >
                <div
                  className="aspect-[3/4] w-full overflow-hidden cursor-pointer"
                  onClick={() => setSelectedImage(testimonial.src)}
                >
                  <img
                    src={testimonial.src}
                    alt={testimonial.name}
                    draggable={false}
                    className="h-full w-full object-contain bg-muted"
                  />
                </div>

                <div className="p-5 sm:p-6 text-center">
                  <h3 className="text-lg sm:text-xl font-bold text-foreground">
                    {testimonial.name}
                  </h3>

                  <p className="mt-1 text-sm text-muted-foreground">
                    {testimonial.designation}
                  </p>

                  <p className="mt-4 text-sm sm:text-base leading-7 text-muted-foreground">
                    {testimonial.quote}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-3xl p-2 bg-background">
          {selectedImage && (
            <img
              src={selectedImage}
              alt="Leadership"
              className="w-full h-auto object-contain rounded-lg"
            />
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};
