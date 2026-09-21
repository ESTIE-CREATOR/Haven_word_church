import { Link } from "react-router-dom";
import LegalPage from "@/components/LegalPage";

const Privacy = () => {
  return (
    <LegalPage
      title="Privacy Policy"
      intro="How Haven Word Church handles information when you use this website."
      lastUpdated="September 2026"
      sections={[
        {
          heading: "Information we collect",
          body: (
            <>
              <p>
                You can browse this website without creating an account or giving us any personal
                information. We do not run advertising or sell visitor data.
              </p>
              <p>
                If you choose to contact us, our contact page opens a Google Form where you may share
                your name, email address, phone number and message. That information is sent to us
                through Google Forms and is used only to respond to you.
              </p>
            </>
          ),
        },
        {
          heading: "Third-party services",
          body: (
            <>
              <p>
                Some parts of this site are provided by other services, which have their own privacy
                policies: YouTube (video messages), Google Forms and Google Maps (contact and
                directions), and Telegram (audio messages and prayer community). When you use those
                features, those services may collect information such as your IP address or cookies.
              </p>
            </>
          ),
        },
        {
          heading: "Giving",
          body: (
            <p>
              Gifts are made by direct bank transfer using the details on our giving page. This website
              does not process payments and never sees or stores your bank or card details.
            </p>
          ),
        },
        {
          heading: "Preferences stored on your device",
          body: (
            <p>
              The site may store small settings in your browser, such as your light or dark theme
              choice, so it remembers them on your next visit. These stay on your device and are not
              sent to us.
            </p>
          ),
        },
        {
          heading: "Contact",
          body: (
            <p>
              If you have a question about this policy, or would like us to delete a message you sent
              us, email{" "}
              <a href="mailto:havenwordchurch@gmail.com" className="text-primary hover:underline">
                havenwordchurch@gmail.com
              </a>{" "}
              or use our{" "}
              <Link to="/contact" className="text-primary hover:underline">
                contact page
              </Link>
              .
            </p>
          ),
        },
      ]}
    />
  );
};

export default Privacy;
