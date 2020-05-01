import React from "react"

class State extends React.Component{
        constructor(){
            super()
            this.state={isLoggedIn:false}
           this.handleClick= this.handleClick.bind(this)
        }
        handleClick(){
            this.setState(prevState =>{
                return{
                    isLoggedIn: !prevState.isLoggedIn
                }
                })
        }
        
        render(){
            let buttonText=this.state.isLoggedIn ? "LOG OUT":"LOG IN"
            let displayText=this.state.isLoggedIn ? "LOG IN":"LOG OUT"
            return(
                <div>
                    <h1>{displayText}</h1>
                    <button onClick={this.handleClick}>{buttonText}</button>
                </div>
            )
            }
    
        }

// class State extends React.Component{
//     constructor(){
//         super()
//         this.state={Count:0}
//        this.handleClick= this.handleClick.bind(this)
//     }
//     handleClick(){
//         this.setState(prevState =>{
//             return{
//                 Count: prevState.Count + 1
//             }
//             })
//     }
    
//     render(){
//         return(
//             <div>
//                 <h1>{this.state.Count}</h1>
//                 <button onClick={this.handleClick}>Change</button>
//             </div>
//         )
//         }

//     }
// class State extends React.Component{
//     constructor(){
//         super()
//         this.state={name:"Sally",age:15}
//     }
//     render(){
//         return(
//             <div>
//                 <h1>{this.state.name}</h1>
//                 <h3>{this.state.age}</h3>
//             </div>
//         )
//         }

//     }

export default State