import "./IdCard.css"

function IdCard(props){
    return(
        <div className="Card">
            <img src={props.picture} alt={props.picture}/>
            <div className="text"> 
                <p><span> Firs Name: </span>{props.firstName}</p>
                <p> <span>Last Name: </span>{props.lastName}</p>
                <p> <span>Gender:</span> {props.gender}</p>
                <p> <span>Height:</span> {props.height}m</p>
                <p> <span>Birth: </span>{new Intl.DateTimeFormat("en",{dateStyle:'full'}).format(props.birth)}</p>
            </div>
           
        </div>
    )
}

export default IdCard;