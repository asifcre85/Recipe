import React from "react"

class Form extends React.Component{
        constructor(){
            super()
            this.state={a:"",b:"",c:false,gender:"",d:"blue",e:false}
           this.handleChange= this.handleChange.bind(this)
        }
        handleChange(event){
            const {name,value,type,checked}=event.target
            type === "checkbox" ?
            this.setState({[name]:checked}) :
            this.setState({[name]:value})
}
        
        render(){
           
            return(
                <div>
                   <form >
                       <input type="text" value={this.state.a} name="a" placeholder="Type" onChange={this.handleChange}/><br/>
                       
                       <input type="text" value={this.state.b} name="b" placeholder="Type" onChange={this.handleChange}/><br/>
                       <input type="checkbox"   name="c" checked={this.state.c}  onChange={this.handleChange}/>ab
                       <input type="checkbox"  name="e" checked={this.state.e} onChange={this.handleChange}/>ba<br/>
                       <input type="radio" value="male" name="gender" checked={this.state.gender==="male"} onChange={this.handleChange}/>Male
                       <input type="radio" value="female" name="gender" checked={this.state.gender==="female"} onChange={this.handleChange}/>Female
                       <br/>
                       <select  value={this.state.d} name="d"  onChange={this.handleChange}>
                           <option value="blue">Blue</option>
                           <option value="red">Red</option>
                           </select><br/><br/>
                           <button>Submit</button>
                       <h1>Name: {this.state.a} {this.state.b}</h1>
                       <h1>AB:{this.state.c ? "Yes":"No"} BA:{this.state.e ? "Yes":"No"}</h1>
                       <h1>radio:{this.state.gender}</h1>
                       <h1>Select:{this.state.d}</h1>
                      
                   </form>
                </div>
            )
            }
    
        }
        export default Form