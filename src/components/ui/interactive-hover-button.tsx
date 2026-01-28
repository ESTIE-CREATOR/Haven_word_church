import React from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface InteractiveHoverButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  asChild?: boolean;
}

const InteractiveHoverButton = React.forwardRef<
  HTMLButtonElement,
  InteractiveHoverButtonProps
>(({ text, className, asChild, children, ...props }, ref) => {
  // Get button text from text prop, children, or default
  const getButtonText = () => {
    if (text) return text;
    if (typeof children === 'string') return children;
    if (React.isValidElement(children)) {
      // Try to extract text from Link/anchor children
      const childChildren = children.props?.children;
      if (typeof childChildren === 'string') return childChildren;
    }
    return 'Button';
  };

  const buttonText = getButtonText();
  
  // When asChild is true, wrap the child element in our button structure
  if (asChild && React.isValidElement(children)) {
    const childElement = children as React.ReactElement;
    return React.cloneElement(childElement, {
      ...childElement.props,
      ...props,
      ref,
      className: cn(
        "group relative w-auto min-w-[120px] cursor-pointer overflow-hidden rounded-full border border-primary/30 bg-transparent px-6 py-2 text-center font-semibold transition-all duration-300 flex items-center justify-center text-white",
        "hover:border-primary hover:bg-primary/10",
        className,
        childElement.props.className,
      ),
      children: (
        <>
          <span className="inline-block translate-x-1 transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
            {buttonText}
          </span>
          <div className="absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 text-white opacity-0 transition-all duration-300 group-hover:-translate-x-1 group-hover:opacity-100">
            <span>{buttonText}</span>
            <ArrowRight className="h-4 w-4" />
          </div>
          <div className="absolute left-[20%] top-[40%] h-2 w-2 scale-[1] rounded-lg bg-primary transition-all duration-300 group-hover:left-[0%] group-hover:top-[0%] group-hover:h-full group-hover:w-full group-hover:scale-[1.8] group-hover:bg-primary"></div>
        </>
      ),
    });
  }
  
  return (
    <button
      ref={ref}
      className={cn(
        "group relative w-auto min-w-[120px] cursor-pointer overflow-hidden rounded-full border border-primary/30 bg-transparent px-6 py-2 text-center font-semibold transition-all duration-300 flex items-center justify-center text-white",
        "hover:border-primary hover:bg-primary/10",
        className,
      )}
      {...props}
    >
      <span className="inline-block translate-x-1 transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
        {buttonText}
      </span>
      <div className="absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 text-white opacity-0 transition-all duration-300 group-hover:-translate-x-1 group-hover:opacity-100">
        <span>{buttonText}</span>
        <ArrowRight className="h-4 w-4" />
      </div>
      <div className="absolute left-[20%] top-[40%] h-2 w-2 scale-[1] rounded-lg bg-primary transition-all duration-300 group-hover:left-[0%] group-hover:top-[0%] group-hover:h-full group-hover:w-full group-hover:scale-[1.8] group-hover:bg-primary"></div>
    </button>
  );
});

InteractiveHoverButton.displayName = "InteractiveHoverButton";

export { InteractiveHoverButton };
