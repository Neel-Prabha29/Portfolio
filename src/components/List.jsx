function List({passion}){
    return(
        <ul className="list-disc list-inside ml-5">
          {passion.map(item => <li>{item}</li>)}
        </ul>
    )
}

export default List