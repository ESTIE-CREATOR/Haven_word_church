
import { Card, CardContent } from "@/components/ui/card";

interface TestimonialProps {
  quote: string;
  name: string;
  role?: string;
  imageUrl?: string;
}

const Testimonial = ({ quote, name, role, imageUrl }: TestimonialProps) => {
  return (
    <Card className="bg-white h-full">
      <CardContent className="p-6 flex flex-col h-full">
        <div className="mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-church-300"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
        </div>
        <p className="text-gray-600 mb-6 flex-grow">{quote}</p>
        <div className="flex items-center">
          {imageUrl && (
            <div className="mr-3">
              <img
                src={imageUrl}
                alt={name}
                className="h-10 w-10 rounded-full object-cover"
              />
            </div>
          )}
          <div>
            <div className="font-medium text-church-800">{name}</div>
            {role && <div className="text-sm text-gray-500">{role}</div>}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Testimonial;
