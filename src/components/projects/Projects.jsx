import {Briefcase} from "lucide-react";
import Section from "../Section";
import Project from "./Project";

function Projects() {

  const projectList = [
    {
      title: "Portfolio",
      desc: "Developed", 
      techUsed:['React.js', 'Tailwind CSS'],
    },
    {
      title: "ToDo App",
      desc: "Created a responsive dashboard for social media analytics",
      techUsed:['React.js', 'Bootstrap'],
    }
  ]
  return (
    <Section icon={<Briefcase/>} sectionTitle={" Projects"}>
        {projectList.map(project => <Project title={project.title} desc={project.desc} techUsed={project.techUsed}/>)}
    </Section>
  );
}

export default Projects;