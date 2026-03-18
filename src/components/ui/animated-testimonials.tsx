import { cn } from "@/lib/utils";

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
  if (!testimonials || testimonials.length === 0) {
    return null;
  }

  return (
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
              className="w-full max-w-md overflow-hidden rounded-3xl border border-border bg-background shadow-sm transition-shadow duration-300"
            >
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img
                  src={testimonial.src}
                  alt={testimonial.name}
                  draggable={false}
                  className="h-500 w-full object-cover object-center"
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
  );
};