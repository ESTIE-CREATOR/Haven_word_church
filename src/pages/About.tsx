
import { TubelightHeader } from "@/components/TubelightHeader";
import Footer from "@/components/Footer";
import LeadershipSection from "@/components/LeadershipSection";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden max-w-full">
      <TubelightHeader />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-primary text-primary-foreground py-20">
          <div className="absolute inset-0 bg-[url('/pictures/head/5893411406562921573_121.jpg')] bg-cover bg-center opacity-20"></div>
          <div className="container-custom relative z-10">
            <div className="max-w-2xl mx-auto text-center">
              <h1 className="text-2xl md:text-3xl font-serif font-bold mb-6">About Our Church</h1>
              <p className="text-base md:text-lg text-primary-foreground/90">
                Haven Word Church is a place where everyone is welcome to discover and deepen their faith.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="heading-lg text-center mb-8 text-foreground">Our Story</h2>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p>
                Haven Word Church (The Spread City) was birthed from a deep conviction to see believers raised, equipped, and empowered to fulfill God’s purpose for their lives. At the heart of this vision is Pastor Anthonia Ikiseh Amadi (PAA), a passionate preacher of the gospel of Jesus Christ who is committed to raising, training, and equipping men, women, boys, and girls for the high calling of the work of ministry.
                </p>
                <p className="mt-4">
                Pastor Anthonia firmly believes that every believer has been called by God and that every believer has a ministry to fulfill. With this conviction, her life and ministry are dedicated to serving as a catalyst that helps believers discover, embrace, and fulfill God's purpose for their lives.

Through a wide catalogue of teachings and sermons, Pastor Anthonia focuses on equipping ordinary people and transforming them into refined vessels ready for extraordinary exploits in the hands of the Lord. Her teachings are deliberately centered on drawing people closer to God so they can be moulded, polished, and prepared by the Master for the expansion of His kingdom.
                </p>
                <p className="mt-4">Driven by this divine mandate, Pastor Anthonia founded Haven Word Church (The Spread City), a ministry headquartered in Ibadan, Nigeria. From its beginnings, the ministry has grown into a vibrant community of believers committed to spiritual growth, discipleship, and spreading the message of Jesus Christ.

The ministry hosts impactful gatherings and conferences such as the Burning Hearts Summit, Daily With Jesus, and the Soul Winners Conference — powerful seasons of retreat, teaching, and spiritual renewal designed to ignite hearts and strengthen believers in their walk with God.

A significant milestone in the ministry was the Ibadan Miracle Crusade, held on October 31st, 2025, at Adamasingba Stadium. During this citywide healing meeting, Pastor Anthonia ministered and the power of God moved mightily, with many signs and wonders witnessed among the attendees.

At the center of this growing ministry is one clear mandate:

“Raising a multitude of preachers in countless cities.”

This vision continues to drive Haven Word Church as it seeks to ignite hearts, raise leaders, and spread the message of Jesus Christ across cities, nations, and generations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Mission & Values Section */}
        <section className="section-padding bg-muted">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="heading-lg text-center mb-12 text-foreground">Our Mission & Vision</h2>
              
              <div className="mb-16">
                <h3 className="heading-md text-center mb-6 text-foreground">Our Mission</h3>
                <div className="text-center text-base md:text-lg font-serif text-muted-foreground max-w-2xl mx-auto">
                  "We are called of God to preach Christ’s Gospel to 
every man.

Hence, we give ourselves to the training of the 
Holy Spirit and are perfected for the work of 
ministry. 

Till every man is made God’s man. Full of FAITH 
and the Holy Ghost"
                </div>
              </div>

              <div className="mb-16">
                <h3 className="heading-md text-center mb-6 text-foreground">Our Vision</h3>
                <div className="text-center text-base md:text-lg font-serif text-muted-foreground max-w-2xl mx-auto">
                  "Raising a multitude of preachers in countless 
                  cities"
                </div>
              </div>
              
              <div>
                <h3 className="heading-md text-center mb-8 text-foreground">Core Values</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    { title: "Faith", description: "We believe every believer is called by God and empowered by the Holy Spirit to live a life of faith, intimacy with God, and obedience to His Word.", icon: "✝️" },
                    { title: "Community", description: "We are committed to building a Christ-centered family where people are raised, equipped, supported, and strengthened together for the work of ministry.", icon: "👥" },
                    { title: "Compassion", description: "We reflect the love of Jesus by caring for people deeply, serving selflessly, and reaching lives with the hope, healing, and power of God.", icon: "❤️" },
                    { title: "Integrity", description: "We choose to live as true representatives of Christ, with honesty, purity, sincerity, and consistency in both character and conduct.", icon: "⭐" },
                    { title: "Growth", description: "We are devoted to spiritual transformation, discipleship, and the continual refining of believers into mature vessels fit for the Master’s use.", icon: "🌱" },
                    { title: "Stewardship", description: "We faithfully manage the grace, gifts, calling, and resources God has entrusted to us for the expansion of His kingdom and the raising of more preachers in countless cities.", icon: "🤲" },
                  ].map((value, index) => (
                    <div key={index} className="bg-card p-6 rounded-lg shadow-sm border border-border">
                      <div className="text-3xl mb-3 text-center">{value.icon}</div>
                      <h4 className="text-lg font-semibold font-serif text-foreground mb-2 text-center">{value.title}</h4>
                      <p className="text-muted-foreground text-center">{value.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Section */}
        <LeadershipSection />
      </main>
      <Footer />
    </div>
  );
};

export default About;
