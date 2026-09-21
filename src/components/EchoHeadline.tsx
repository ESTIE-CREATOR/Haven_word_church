import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface EchoHeadlineProps {
  lines: string[];
  as?: "h1" | "h2";
  layers?: number;
  className?: string;
}

// Big display headline with outlined copies of itself stacked underneath.
// The gap between the copies is the CSS variable --echo-spread, so it can be animated.
const EchoHeadline = forwardRef<HTMLHeadingElement, EchoHeadlineProps>(
  ({ lines, as: Tag = "h2", layers = 3, className }, ref) => {
    const renderLines = () =>
      lines.map((line) => (
        <span key={line} className="block whitespace-nowrap">
          {line}
        </span>
      ));

    return (
      <Tag ref={ref} aria-label={lines.join(" ")} className={cn("echo-headline font-display", className)}>
        {Array.from({ length: layers }, (_, i) => layers - i).map((layer) => (
          <span
            key={layer}
            aria-hidden="true"
            className="echo-headline-layer"
            style={{ "--echo-layer": layer, opacity: 1 - (layer - 1) * 0.28 } as React.CSSProperties}
          >
            {renderLines()}
          </span>
        ))}
        <span aria-hidden="true" className="relative block">
          {renderLines()}
        </span>
      </Tag>
    );
  }
);

EchoHeadline.displayName = "EchoHeadline";

export default EchoHeadline;
