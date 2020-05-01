import React from "react"


function TodoItem(props){

  const s={fontStyle:"italic",textDecoration:"line-through",color:"red"}
    return(
      <div className="todo-item" >
        <input type="checkbox" checked={props.item.completed} onChange={()=>props.handleChange(props.item.id)}/>
        
        <p style={props.item.completed ? s:null}>{props.item.name}</p>
        </div>
       
      
    )
    }
    
    

    export default TodoItem