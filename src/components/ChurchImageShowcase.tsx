import { MotionInView } from "./MotionInView";

const showcaseImages = [
  { src: "/pictures/church_pictures/photo_2026-01-03_01-50-05.jpg", alt: "Church worship service" },
  { src: "/pictures/church_pictures/photo_2026-01-03_01-50-13.jpg", alt: "Church fellowship" },
  { src: "/pictures/church_pictures/photo_2026-01-03_01-50-20.jpg", alt: "Church community" },
  { src: "/pictures/church_pictures/photo_2026-01-03_01-50-25.jpg", alt: "Church event" },
  { src: "/pictures/church_pictures/photo_2026-01-03_01-50-35.jpg", alt: "Church gathering" },
  { src: "/pictures/church_pictures/photo_2026-01-03_01-50-40.jpg", alt: "Church moment" },
];

const ChurchImageShowcase = () => {
  return (
    <section className="section-padding bg-muted">
      <div className="container-custom">
        <MotionInView>
          <div className="text-center mb-10">
            <h2 className="heading-lg text-foreground mb-3">Life at Haven Word Church</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Moments of worship, fellowship, and community from The Spread City
            </p>
          </div>
        </MotionInView>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {showcaseImages.map((img, index) => (
            <MotionInView key={index} delay={index * 0.1}>
              <div
                className={`relative overflow-hidden rounded-2xl shadow-md group ${
                  index === 0 ? "md:row-span-2 md:col-span-1" : ""
                } ${index === 3 ? "md:col-span-2" : ""}`}
              >
                <div className={`${index === 0 ? "aspect-[3/4] md:aspect-auto md:h-full" : index === 3 ? "aspect-[2/1]" : "aspect-square"}`}>
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            </MotionInView>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChurchImageShowcase;
