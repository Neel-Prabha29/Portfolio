import {Heart } from "lucide-react";
import Section from "./Section";
import List from "./List";

function Hobbies() {

  const hobbies = ['Learning new things', 'Cooking', 'Singing', 'Playing outdoor game']
  return (
    <Section icon={<Heart/>} sectionTitle={" Hobbies & Interests"}>
      <List passion={hobbies}/> 
    </Section>
  );
}

export default Hobbies;
