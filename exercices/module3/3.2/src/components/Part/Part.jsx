const Part = (props) => {
  const {parts}= props 
    return(
      <div>
        <ul>
          {parts.map(part => <li key={part.id}>{part.name} {part.exercises}</li>)}
        </ul>
       
      </div>
    )
  }

  export default Part;