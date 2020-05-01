import React from "react"

function Date1(props){
    return(
      <div className="todo-item">
        Name: {props.contact.name}<br/>
        Id: {props.contact.id}
        </div>
       
      
    )
    }
    


function Date2(){
    const date=new Date()
    const h=date.getHours()
    let d
    if (h<12){
        d="morning"
    
    }
    else if (h>=12 && h<17){
        d="afternoon"
    
    }
    else{
        d="night"
    
    }
    const styles={
        backgroundColor:"red",
        fontSize:"30px"
    }
    return(
        <h1 style={styles}>Good {d}</h1>
    )

 
}


    export default Date1