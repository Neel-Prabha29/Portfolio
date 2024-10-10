import {User } from "lucide-react";
import Section from "./Section";

function AboutMe() {
  return (
    <Section icon={<User/>} sectionTitle={" About Me"}>
        <p>A Technical Support Specialist with 2+ years of experience specializing in information technology, customer service, communication, ERP implementation and software configuration. A proven track record of interfacing with diverse clients to resolve complex software defects and technical issues.</p>
    </Section>
  );
}

export default AboutMe;
