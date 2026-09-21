const PHRASES = [
  "The Spread City",
  "One person at a time",
  "One city at a time",
  "Raising a multitude of preachers in countless cities",
  "Ibadan • Owerri • Abuja • Lagos",
];

// A slow ticker of the church's mottos. The list is rendered twice so the loop has no seam.
const MarqueeStrip = () => {
  return (
    <div className="band-orange py-4 sm:py-5" aria-label={PHRASES.join(". ")}>
      <div className="flex" aria-hidden="true">
        {[0, 1].map((copy) => (
          <div key={copy} className="animate-marquee flex flex-shrink-0 items-center" style={{ "--duration": "32s" } as React.CSSProperties}>
            {PHRASES.map((phrase) => (
              <span key={phrase} className="font-display flex items-center whitespace-nowrap text-sm text-foreground sm:text-lg">
                <span className="px-5 sm:px-8">{phrase}</span>
                <span className="text-base sm:text-xl">✦</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarqueeStrip;
