function Card(props){
    return(
        <div>
          <h2>Name {props.studentName}</h2>
          <p>Place {props.place}</p>
          <p>Age {props.age}</p>


        </div>
    )
}

export default Card;