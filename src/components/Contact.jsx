import { Globe, Linkedin, Github} from "lucide-react";
import Section from "./Section";
import SocialMedia from "./SocialMedia";

function Contact() {
  const socialLinks = [
    {
      icon: <Linkedin />,
      title: "Linkedin",
      url: "https://www.linkedin.com/in/sunil-chauhan-264a11190?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      icon: <Github />,
      title: "GitHub",
      url: "https://github.com/Neel-Prabha29",
    },
  ];
  return (
    <div>
      <Section icon={<Globe />} sectionTitle={" Contact & Social Media"}>
        <p className="text-sm text-slate-700">
          Email: kumar.sun866175@gmail.com <br />
          Phone: +91 9839585400
        </p>
      </Section>
      {socialLinks.map((social) => (
        <SocialMedia icon={social.icon} title={social.title} url={social.url} />
      ))}
      {/* <SocialMedia icon={<Linkedin/>} title={"Linkedin"} url={'https://google.com/'}/> */}
    </div>
  );
}

export default Contact;
