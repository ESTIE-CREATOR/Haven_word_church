
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
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {image && (
        <div className="h-48 overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
          />
        </div>
      )}
      <CardContent className="pt-6">
        <div className="flex items-center text-church-500 mb-2">
          <CalendarIcon className="h-4 w-4 mr-2" />
          <span className="text-sm">{date} • {time}</span>
        </div>
        <h3 className="text-lg font-serif font-medium mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </CardContent>
      <CardFooter>
        <InteractiveHoverButton text="Learn More" className="w-full border-church-200 text-church-700 hover:bg-church-50" />
      </CardFooter>
    </Card>
  );
};

export default EventCard;
