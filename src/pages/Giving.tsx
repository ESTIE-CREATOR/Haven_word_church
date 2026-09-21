import { TubelightHeader } from "@/components/TubelightHeader";
import Footer from "@/components/Footer";
import { useState } from "react";
import { Heart, Copy, Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";

const ACCOUNTS = [
  { bank: "First Bank", name: "Haven Word Church", number: "2048801494" },
  { bank: "Wema Bank Plc", name: "Haven Word Church", number: "0275817169" },
];

const Giving = () => {
  const [copied, setCopied] = useState<string | null>(null);

  const copyNumber = async (number: string) => {
    try {
      await navigator.clipboard.writeText(number);
      setCopied(number);
      window.setTimeout(() => setCopied(null), 2000);
    } catch {
      // Clipboard not available - the number is still there to read
    }
  };

  return (
    <div className="min-h-screen flex flex-col overflow-x-clip max-w-full">
      <TubelightHeader />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-primary text-primary-foreground py-20">
          <div className="absolute inset-0 bg-[url('/pictures/head/_TAP0002.JPG')] bg-cover bg-center opacity-20"></div>
          <div className="container-custom relative z-10">
            <div className="max-w-2xl mx-auto text-center">
              <Heart className="h-16 w-16 mx-auto mb-6 text-accent" />
              <h1 className="text-2xl md:text-3xl font-serif font-bold mb-6">Give Generously</h1>
              <p className="text-base md:text-lg text-primary-foreground/90">
                "Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver." - 2 Corinthians 9:7
              </p>
            </div>
          </div>
        </section>


        {/* Bank Details Section */}
        <section className="section-padding band-orange">
          <div className="container-custom">
            <h2 className="heading-lg text-center mb-8 text-foreground">Bank Account Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {ACCOUNTS.map((account) => (
                <Card key={account.number} className="bg-card border-border">
                  <CardContent className="p-6 sm:p-8">
                    <h3 className="heading-sm mb-4 text-foreground">{account.bank}</h3>
                    <div className="space-y-1">
                      <div className="flex justify-between items-center gap-4 py-3 border-b border-border">
                        <span className="font-medium text-muted-foreground">Account Name:</span>
                        <span className="text-foreground font-semibold text-right">{account.name}</span>
                      </div>
                      <div className="flex justify-between items-center gap-4 py-3 border-b border-border">
                        <span className="font-medium text-muted-foreground">Account Number:</span>
                        <span className="flex items-center gap-2">
                          <span className="text-foreground font-semibold tracking-wider">{account.number}</span>
                          <button
                            type="button"
                            onClick={() => copyNumber(account.number)}
                            aria-label={`Copy ${account.bank} account number`}
                            className="rounded-md p-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                          >
                            {copied === account.number ? <Check className="h-4 w-4 text-green-600" /> : <Copy className="h-4 w-4" />}
                          </button>
                        </span>
                      </div>
                      <div className="flex justify-between items-center gap-4 py-3 border-b border-border">
                        <span className="font-medium text-muted-foreground">Bank Name:</span>
                        <span className="text-foreground font-semibold text-right">{account.bank}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <p className="text-sm text-muted-foreground mt-6 text-center">
              Please include your name and "Offering" in the transfer reference
            </p>
          </div>
        </section>

        {/* Why Give Section */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="heading-md mb-6 text-foreground">Why We Give</h2>
              <p className="text-muted-foreground mb-4">
                Giving is an act of worship and faith. Your generous contributions help us:
              </p>
              <ul className="text-left space-y-3 text-muted-foreground max-w-xl mx-auto">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Support our ministry and outreach programs</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Maintain our facilities and create welcoming spaces</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Support missions and community service initiatives</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Provide resources for spiritual growth and development</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Giving;
