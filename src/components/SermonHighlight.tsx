
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface SermonHighlightProps {
  title: string;
  pastor: string;
  date: string;
  scripture: string;
  description: string;
  imageUrl?: string;
}

const SermonHighlight = ({
  title,
  pastor,
  date,
  scripture,
  description,
  imageUrl,
}: SermonHighlightProps) => {
  return (
    <Card className="overflow-hidden">
      <div className="md:flex">
        {imageUrl && (
          <div className="md:w-1/3 h-48 md:h-auto overflow-hidden">
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
        )}
        <div className={`flex-1 p-6 ${!imageUrl ? 'md:w-full' : ''}`}>
          <div className="flex flex-col h-full">
            <div>
              <div className="text-sm text-church-500 mb-1">
                {date} • {pastor}
              </div>
              <h3 className="text-xl font-serif font-semibold mb-2">{title}</h3>
              <p className="italic text-sm text-gray-500 mb-3">{scripture}</p>
              <p className="text-gray-600 mb-4 line-clamp-3">{description}</p>
            </div>
            <div className="mt-auto">
              <Button asChild variant="outline" size="sm">
                <Link to="/sermons">Listen to Sermon</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default SermonHighlight;
