import { Link } from "react-router-dom";
import LegalPage from "@/components/LegalPage";

const Disclaimer = () => {
  return (
    <LegalPage
      title="Disclaimer"
      intro="Please read this alongside our privacy policy."
      lastUpdated="September 2026"
      sections={[
        {
          heading: "General information",
          body: (
            <p>
              The content on this website is provided by Haven Word Church for spiritual encouragement
              and general information about our church, services and events. It is not professional
              medical, legal, financial or counselling advice.
            </p>
          ),
        },
        {
          heading: "Events and service times",
          body: (
            <p>
              We work to keep service times, event dates and locations up to date, but they can change.
              Please confirm details through our{" "}
              <Link to="/contact" className="text-primary hover:underline">
                contact page
              </Link>{" "}
              before travelling.
            </p>
          ),
        },
        {
          heading: "Testimonies",
          body: (
            <p>
              Testimonies shared on this site are personal accounts from members of our community. They
              are shared to encourage faith and are not a guarantee of any particular outcome.
            </p>
          ),
        },
        {
          heading: "External links",
          body: (
            <p>
              This site links to services such as YouTube, Telegram and Google Maps. We are not
              responsible for the content or practices of those websites.
            </p>
          ),
        },
        {
          heading: "Giving",
          body: (
            <p>
              Only give using the bank details shown on our official{" "}
              <Link to="/giving" className="text-primary hover:underline">
                giving page
              </Link>
              . If you receive a request for money that claims to be from the church and you are
              unsure, please contact us first.
            </p>
          ),
        },
      ]}
    />
  );
};

export default Disclaimer;
