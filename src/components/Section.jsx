

function Section({icon, children, sectionTitle}) {
  return (
    <div className="mt-8 px-6">
      <div className="flex items-center mb-3">
        {icon}
        <h2 className="font-bold text-2xl mx-2">{sectionTitle}</h2>
      </div>
      {children}
    </div>
  );
}

export default Section;
