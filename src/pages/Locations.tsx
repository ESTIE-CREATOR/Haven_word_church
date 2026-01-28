import { TubelightHeader } from "@/components/TubelightHeader";
import Footer from "@/components/Footer";
import { MapPin, Clock, Phone, Mail } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Locations = () => {
  const locations = [
    {
      name: "Main Campus - The Spread City",
      address: "9VXM+797 Haven Word Church, 107D Akintola Rd, Ibadan 200284, Oyo",
      phone: "+234 815 888 4938 / +234 907 746 9204",
      email: "havenwordchurch@gmail.com",
      services: [
        { day: "Sunday", time: "7:30 AM & 10:00 AM", type: "Worship Service" },
        { day: "Wednesday", time: "5:30 PM", type: "Bible Study" },
      ],
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800",
      coordinates: { lat: 7.3775, lng: 3.9470 }, // Coordinates for Akintola Rd, Ibadan
    },
  ];

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden max-w-full">
      <TubelightHeader />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-gray-900 text-white py-20">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200')] bg-cover bg-center opacity-30"></div>
          <div className="container-custom relative z-10">
            <div className="max-w-2xl mx-auto text-center">
              <h1 className="text-2xl md:text-3xl font-serif font-bold mb-6">Our Locations</h1>
              <p className="text-base md:text-lg text-gray-100">
                Find us and join us for worship and fellowship
              </p>
            </div>
          </div>
        </section>

        {/* Map Section - Moved Above Location Info */}
        <section className="bg-gray-900 section-padding">
          <div className="container-custom mb-8">
            <div className="h-96 w-full rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps?q=9VXM+797+Haven+Word+Church+107D+Akintola+Rd+Ibadan+200284+Oyo&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Haven Word Church Location"
              ></iframe>
            </div>
            <div className="text-center mt-4">
              <a
                href="https://www.google.com/maps/search/?api=1&query=9VXM%2B797+Haven+Word+Church+107D+Akintola+Rd+Ibadan+200284+Oyo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline text-sm"
              >
                View on Google Maps
              </a>
            </div>
          </div>
        </section>

        {/* Locations List */}
        <section className="section-padding bg-black">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              {locations.map((location, index) => (
                <Card key={index} className="overflow-hidden bg-gray-900 border-gray-800">
                  <CardContent className="p-6 md:p-8 bg-gray-900">
                    <h2 className="heading-md mb-6 text-white">{location.name}</h2>
                    
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-white mb-1">Address</p>
                          <p className="text-gray-300">{location.address}</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <Phone className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-white mb-1">Phone</p>
                          <p className="text-gray-300">{location.phone}</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <Mail className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-white mb-1">Email</p>
                          <p className="text-gray-300">{location.email}</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <Clock className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                        <div className="flex-1">
                          <p className="font-medium text-white mb-2">Service Times</p>
                          {location.services.map((service, idx) => (
                            <div key={idx} className="mb-2">
                              <p className="text-gray-300">
                                <span className="font-semibold">{service.day}:</span> {service.time}
                              </p>
                              <p className="text-sm text-gray-400">{service.type}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 pt-6 border-t border-gray-700">
                      <a
                        href={`https://maps.google.com/?q=${encodeURIComponent(location.address)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
                      >
                        <MapPin className="h-4 w-4" />
                        Get Directions
                      </a>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Locations;
