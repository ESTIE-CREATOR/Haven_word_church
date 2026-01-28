
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
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 bg-gray-900 border-gray-800">
      {image && (
        <div className="h-48 overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
          />
        </div>
      )}
      <CardContent className="pt-6 bg-gray-900">
        <div className="flex items-center text-primary mb-2">
          <CalendarIcon className="h-4 w-4 mr-2" />
          <span className="text-sm text-gray-300">{date} • {time}</span>
        </div>
        <h3 className="text-lg font-serif font-medium mb-2 text-white">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </CardContent>
      <CardFooter className="bg-gray-900">
        <InteractiveHoverButton text="Learn More" className="w-full" />
      </CardFooter>
    </Card>
  );
};

export default EventCard;
