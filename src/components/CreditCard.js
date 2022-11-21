import './CreditCard.css'
// import {ReactComponent as master} from '../assets/images/master-card.svg'
import visa from '../assets/images/visa.png'


function CreditCard(props){
    const divStyle = {
        backgroundColor:`${props.bgColor}`,
        color:`${props.color}`
    }
    if(props.type ==='Visa'){
        
        return(
            <div className='creditCard' style={divStyle}>
                <img src={visa}/>
                <p>{props.number}</p>
                <div> 
                <p> Expires {props.expirationMonth}/{props.experationYear}</p>
                <p>{props.bank}</p>
                </div>
                <p>{props.owner}</p>
            </div>
        )
    } else{
       return ( 
       <div className='creditCard' style={divStyle}>
            <img src='master-card.svg'/>
            <p>{props.number}</p>
            <div>
            <p> Expires {props.expirationMonth}/{props.expirationYear}</p>
                <p>{props.bank}</p>
                </div>
                <p>{props.owner}</p>
        </div>
       )
    }
    
        
        
            
           
    
}

export default CreditCard;