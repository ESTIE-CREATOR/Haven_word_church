import { CalendarIcon } from "lucide-react";
import { useState } from "react";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface EventCardProps {
  title: string;
  date: string;
  time: string;
  description: string;
  image?: string;
}

const EventCard = ({ title, date, time, description, image }: EventCardProps) => {
  const [showImage, setShowImage] = useState(false);

  return (
    <>
      <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 bg-card border-border flex flex-col h-full">
        {image && (
          <div
            className="h-48 overflow-hidden cursor-pointer"
            onClick={() => setShowImage(true)}
          >
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
          <h3 className="text-2xl text-primary font-serif font-bold mb-2">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </CardContent>
        <CardFooter className="mt-auto">
          <InteractiveHoverButton text="Learn More" className="w-full" />
        </CardFooter>
      </Card>

      {image && (
        <Dialog open={showImage} onOpenChange={setShowImage}>
          <DialogContent className="max-w-3xl p-2 bg-background">
            <img
              src={image}
              alt={title}
              className="w-full h-auto object-contain rounded-lg"
            />
            <p className="text-center text-foreground font-semibold mt-2">{title}</p>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
};

export default EventCard;
