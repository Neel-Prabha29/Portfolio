import {BookOpen  } from "lucide-react";
import Section from "./Section";
import Graduation from "./Graduation";

function Education() {
  return (
    <Section icon={<BookOpen />} sectionTitle={" Education"}>
        <Graduation title={"Post Graduation Diploma in Computer Application"} school={"Asian International University"} year={2024}/>
        <Graduation title={"Bachlor of Arts"} school={"Veer Bahadur Singh Purvanchal Unitversity"} year={"2018-2021"}/>
        <Graduation title={"Diploma in Mechanical Engineering"} school={"Maharana Pratap Polytechnic"} year={"2012-2015"}/>
    </Section>
  );
}

export default Education;