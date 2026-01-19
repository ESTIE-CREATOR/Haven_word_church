
import { Link } from "react-router-dom";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  showText?: boolean;
  className?: string;
}

const Logo = ({ size = "md", showText = true, className = "" }: LogoProps) => {
  const sizeClasses = {
    sm: "h-8 w-8 sm:h-10 sm:w-10",
    md: "h-12 w-12 md:h-16 md:w-16",
    lg: "h-16 w-16 lg:h-20 lg:w-20",
  };

  const textSizeClasses = {
    sm: "text-base sm:text-lg",
    md: "text-lg md:text-xl",
    lg: "text-xl lg:text-2xl",
  };

  return (
    <Link to="/" className={`flex items-center gap-2 ${className}`}>
      <img
        src="/pictures/logo/20260103_114553_0000.png"
        alt="Haven Word Church Logo"
        className={`${sizeClasses[size]} object-contain`}
      />
      {showText && (
        <span className={`font-serif font-semibold text-gray-900 ${textSizeClasses[size]}`}>
          Haven Word Church
        </span>
      )}
    </Link>
  );
};

export default Logo;
