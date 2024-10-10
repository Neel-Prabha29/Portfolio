import {Code } from "lucide-react";
import Section from "./Section";
import Pills from "./Pill";

function Skills() {

  const skillTitles =['HTML & CSS', 'JavaScript', 'Bootstrap', 'TailWind CSS', 'React.js', 'Node.js', 'Git & GitHub']
  return (
    <Section icon={<Code/>} sectionTitle={" Skills"}>
      {skillTitles.map(item => <Pills title={item}/>)}
        
    </Section>
  );
}

export default Skills;