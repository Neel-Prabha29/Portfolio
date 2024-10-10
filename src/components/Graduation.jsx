function Graduation({title, school, year}){
    return(
        <>
         <h1 className="font-bold">{title}</h1>
         <p className="text-sm text-slate-700 mb-4">{school}, {year}</p>
        </>
    )
}

export default Graduation