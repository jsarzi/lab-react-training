import "./Greetings.css"
function Greetings (props){
    console.log(props)
  if(props.lang === 'fr'){
      return(
          <div className="bonjour">
          <h1>Bonjour {props.children}</h1>
          </div>
      )
  }if(props.lang === 'de'){
   
     return( <div className="bonjour">
      <h1>Hallo {props.children}</h1>
        </div>
     )
  
  }
}

export default Greetings;