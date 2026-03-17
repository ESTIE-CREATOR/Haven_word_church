
import { CalendarIcon } from "lucide-react";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

interface EventCardProps {
  title: string;
  date: string;
  time: string;
  description: string;
  image?: string;
}

const EventCard = ({ title, date, time, description, image }: EventCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 bg-card border-border flex flex-col h-full">
      {image && (
        <div className="h-48 overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
          />
        </div>
      )}
      <CardContent className="pt-6 flex-grow">
        <div className="flex items-center text-primary mb-2">
          <CalendarIcon className="h-4 w-4 mr-2" />
          <span className="text-sm text-muted-foreground">{date} • {time}</span>
        </div>
        <h3 className="text-2xl text-[#2e3889] font-serif font-bold mb-2 text-foreground">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
      <CardFooter className="mt-auto">
        <InteractiveHoverButton text="Learn More" className="w-full" />
      </CardFooter>
    </Card>
  );
};

export default EventCard;
