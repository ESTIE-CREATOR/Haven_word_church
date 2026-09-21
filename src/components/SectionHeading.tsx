import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  // Extra words drawn as hollow outlined lettering after the title
  outlined?: string;
  // Put the outlined words on a line of their own
  stack?: boolean;
  align?: "left" | "center";
  className?: string;
}

// The big display heading used by the home page sections. Its colours follow the band it sits on.
const SectionHeading = ({ eyebrow, title, outlined, stack, align = "left", className }: SectionHeadingProps) => {
  return (
    <div className={cn(align === "center" && "text-center", className)}>
      {eyebrow && (
        <p className="mb-4 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.3em] text-secondary">
          <span className="h-px w-8 bg-current" />
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-foreground text-[clamp(1.5rem,4.2vw,3.25rem)]">
        <span>{title}</span>
        {outlined && (
          <>
            {" "}
            <span className={cn("text-outline", stack && "block")}>{outlined}</span>
          </>
        )}
      </h2>
    </div>
  );
};

export default SectionHeading;
