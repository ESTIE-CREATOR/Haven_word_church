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
  const getButtonText = () => {
    if (text) return text;
    if (typeof children === 'string') return children;
    if (React.isValidElement(children)) {
      const childChildren = children.props?.children;
      if (typeof childChildren === 'string') return childChildren;
    }
    return 'Button';
  };

  const buttonText = getButtonText();
  
  const baseClasses = "group relative w-auto min-w-[140px] cursor-pointer overflow-hidden rounded-full border border-primary bg-primary px-8 py-2 text-center font-semibold transition-all duration-300 flex items-center justify-center text-primary-foreground hover:bg-primary/90";

  if (asChild && React.isValidElement(children)) {
    const childElement = children as React.ReactElement;
    return React.cloneElement(childElement, {
      ...childElement.props,
      ...props,
      ref,
      className: cn(baseClasses, className, childElement.props.className),
      children: (
        <>
          <span className="relative z-20 inline-block transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
            {buttonText}
          </span>
          <div className="absolute top-0 z-20 flex h-full w-full translate-x-12 items-center justify-center gap-2 text-primary-foreground opacity-0 transition-all duration-300 group-hover:-translate-x-1 group-hover:opacity-100">
            <span>{buttonText}</span>
            <ArrowRight className="h-4 w-4" />
          </div>
          <div className="absolute left-1 top-[35%] h-2.5 w-2.5 scale-[1] rounded-full bg-secondary transition-all duration-300 group-hover:left-[0%] group-hover:top-[0%] group-hover:h-full group-hover:w-full group-hover:scale-[1.8] group-hover:bg-secondary z-10"></div>
        </>
      ),
    });
  }
  
  return (
    <button
      ref={ref}
      className={cn(baseClasses, className)}
      {...props}
    >
      <span className="relative z-20 inline-block transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
        {buttonText}
      </span>
      <div className="absolute top-0 z-20 flex h-full w-full translate-x-12 items-center justify-center gap-2 text-primary-foreground opacity-0 transition-all duration-300 group-hover:-translate-x-1 group-hover:opacity-100">
        <span>{buttonText}</span>
        <ArrowRight className="h-4 w-4" />
      </div>
      <div className="absolute -left-3 top-[35%] h-2.5 w-2.5 scale-[1] rounded-full bg-secondary transition-all duration-300 group-hover:left-[0%] group-hover:top-[0%] group-hover:h-full group-hover:w-full group-hover:scale-[1.8] group-hover:bg-secondary z-10"></div>
    </button>
  );
});

InteractiveHoverButton.displayName = "InteractiveHoverButton";

export { InteractiveHoverButton };
