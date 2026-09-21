import SectionHeading from "@/components/SectionHeading";

const LeadershipSection = () => {
  const leadership = [
    {
      quote:
        "Pastor Anthonia Ikiseh Amadi (PAA) is a preacher of the gospel of Jesus, who is committed to raising, training and equipping men, women, boys and girls for the high calling of the work of ministry.",
      name: "Pastor Anthonia Amadi",
      designation: "Founder & Lead Pastor",
      src: "/pictures/leadership/pastor's_picture.jpg",
    },
    {
      quote:
        "Pastor Chibuotu Amadi is an ordained pastor at Haven Word Church. With dedication and commitment to ministry, he serves alongside Pastor Anthonia in spreading the Word of God and building a strong foundation of faith within the congregation.",
      name: "Pastor Chibuotu Amadi",
      designation: "Ordained Pastor",
      src: "/pictures/leadership/5897950319411400254_121.jpg",
    },
  ];

  return (
    <section className="bg-muted section-padding">
      <div className="container-custom">
        <div className="mb-10 md:mb-14 max-w-3xl">
          <SectionHeading eyebrow="Meet the Pastors" title="Our" outlined="Leadership" />
          <p className="mt-5 text-muted-foreground text-base sm:text-lg">
            Meet the dedicated leaders who guide our church family with wisdom, passion, and love.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {leadership.map((leader) => (
            <article
              key={leader.name}
              className="group flex flex-col sm:flex-row gap-5 sm:gap-6 rounded-3xl border border-border border-l-4 border-l-secondary bg-card p-5 sm:p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Portrait kept small, to the side of the details */}
              <div className="aspect-[4/5] w-32 sm:w-40 flex-shrink-0 self-start overflow-hidden rounded-2xl">
                <img
                  src={leader.src}
                  alt={leader.name}
                  loading="lazy"
                  className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-secondary">{leader.designation}</p>
                <h3 className="font-display mt-2 text-lg sm:text-xl text-foreground">
                  <span>{leader.name}</span>
                </h3>
                <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed">{leader.quote}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;
