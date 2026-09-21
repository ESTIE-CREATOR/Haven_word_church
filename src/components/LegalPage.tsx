import { ReactNode } from "react";
import { TubelightHeader } from "@/components/TubelightHeader";
import Footer from "@/components/Footer";

interface LegalSection {
  heading: string;
  body: ReactNode;
}

interface LegalPageProps {
  title: string;
  intro: string;
  lastUpdated: string;
  sections: LegalSection[];
}

const LegalPage = ({ title, intro, lastUpdated, sections }: LegalPageProps) => {
  return (
    <div className="min-h-screen flex flex-col overflow-x-clip max-w-full">
      <TubelightHeader />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-primary text-primary-foreground py-20">
          <div className="absolute inset-0 bg-[url('/pictures/head/hero.jpg')] bg-cover bg-center opacity-20"></div>
          <div className="container-custom relative z-10">
            <div className="max-w-2xl mx-auto text-center">
              <h1 className="text-2xl md:text-3xl font-serif font-bold mb-6">{title}</h1>
              <p className="text-base md:text-lg text-primary-foreground/90">{intro}</p>
            </div>
          </div>
        </section>

        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <p className="text-sm text-muted-foreground mb-8">Last updated: {lastUpdated}</p>
              <div className="space-y-8">
                {sections.map((section) => (
                  <div key={section.heading}>
                    <h2 className="heading-sm text-foreground mb-3">{section.heading}</h2>
                    <div className="text-muted-foreground text-sm sm:text-base leading-relaxed space-y-3">
                      {section.body}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default LegalPage;
