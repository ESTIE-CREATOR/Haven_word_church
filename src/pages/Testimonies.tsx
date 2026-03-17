import { TubelightHeader } from "@/components/TubelightHeader";
import Footer from "@/components/Footer";
import Testimonial from "@/components/Testimonial";
import { Heart, Plus } from "lucide-react";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import {
  Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle,
} from "@/components/ui/dialog";

const Testimonies = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSfg8h91rGWGJwjCglNvV_3LT-U3znbQAyeKuy2-TzzeHJYwjA/viewform?usp=publish-editor";
  const GOOGLE_SHEET_URL = "https://docs.google.com/spreadsheets/d/1y3TfxUdVTUr29C3VqGeMn6Bt1mqLE2krjwErQtaKMeg/edit?resourcekey&usp=forms_web_b&urp=initialLink#gid=1555231836";
  
  const testimonies = [
    { name: "Alabi Esther", role: "Member since 2021", content: "Haven Word Church has been a blessing to me. The teachings have transformed my life. God's presence is truly here." },
    { name: "Progress Friday", role: "Member since 2021", content: "I've experienced tremendous growth in my faith since joining. The Bible study sessions are insightful and the worship is powerful. Thank you, Haven Word Church!"},
    { name: "Odukoya Oluwabukunmi", role: "Member since 2021", content: "I've experienced tremendous growth in my faith since joining. The Bible study sessions are insightful and the worship is powerful. Thank you, Haven Word Church!"},
  ];

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden max-w-full">
      <TubelightHeader />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-primary text-primary-foreground py-20">
          <div className="absolute inset-0 bg-[url('/pictures/head/605540013_855635000568275_1744267405865813200_n.jpg')]  bg-cover bg-center opacity-20"></div>
          <div className="container-custom relative z-10">
            <div className="max-w-2xl mx-auto text-center">
              <Heart className="h-16 w-16 mx-auto mb-6 text-accent" />
              <h1 className="text-2xl md:text-3xl font-serif font-bold mb-6">Testimonies</h1>
              <p className="text-base md:text-lg text-primary-foreground/90">
                Stories of God's faithfulness and transformation in our church family
              </p>
            </div>
          </div>
        </section>

        {/* Testimonies Grid */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonies.map((testimony, index) => (
                <Testimonial
                  key={index}
                  name={testimony.name}
                  role={testimony.role}
                  quote={testimony.content}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Share Your Testimony Section */}
        <section className="section-padding bg-muted">
          <div className="container-custom">
            <Card className="max-w-2xl mx-auto bg-card border-border">
              <CardContent className="p-8 text-center">
                <div className="mx-auto mb-4 p-4 rounded-full bg-secondary/10 w-fit">
                  <Plus className="h-8 w-8 text-secondary" />
                </div>
                <h2 className="heading-md mb-4 text-foreground">Share Your Story</h2>
                <p className="text-muted-foreground mb-6">
                  Has God done something amazing in your life? We'd love to hear your testimony and share it with our church family. Your story can inspire and encourage others.
                </p>
                <InteractiveHoverButton 
                  text="Submit Your Testimony" 
                  className="bg-[#2e3889] hover:bg-secondary/90 border-secondary mx-auto"
                  onClick={() => setIsDialogOpen(true)}
                />
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />

      {/* Testimony Submission Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="bg-card border-border text-foreground max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-foreground text-2xl">Share Your Testimony</DialogTitle>
            <DialogDescription className="text-muted-foreground">
              Click the button below to open the Google Form and submit your testimony.
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-6 py-4">
            <div className="bg-primary/5 border border-primary/10 rounded-lg p-4">
              <p className="text-sm text-muted-foreground mb-3">
                <strong className="text-foreground">How to Submit:</strong>
              </p>
              <p className="text-sm text-muted-foreground mb-3">
                Click "Submit Testimony" to open the Google Form. Fill out the form with your testimony details, and your submission will automatically be saved.
              </p>

            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer" className="flex-1">
                <InteractiveHoverButton text="Submit Testimony" className="w-full bg-primary hover:bg-primary/90 border-primary" />
              </a>
              <InteractiveHoverButton text="Close" className="flex-1 border-border" onClick={() => setIsDialogOpen(false)} />
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Testimonies;
