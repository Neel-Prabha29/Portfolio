import TechPill from "./TechPill";

const Project = ({ title, desc, techUsed }) => {
  return (
    <>
    <div className="bg-slate-100 max-w-4xl mx-auto rounded-md shadow-lg p-4 mb-4">
    <h1 className="font-bold text-lg">{title}</h1>
    <p className="text-sm text-slate-700 mb-4">{desc}</p>
      {techUsed.map(tech => <TechPill title={tech}/>)}
    </div>
      
    </>
  );
};

export default Project;
