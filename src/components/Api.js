import React from "react"

class Api extends React.Component{
        constructor(){
            super()
            this.state={s:{},loading:false}
           
        }
        componentDidMount(){
            this.setState({loading:true})
            fetch("https://jsonplaceholder.typicode.com/todos/1")
            .then( response=> response.json())
            .then(data=> 
                this.setState({
                    s:data, loading:false
                }))

        }
        
        render(){
            const text=this.state.loading ? "Loading...": this.state.s.title
           
            return(
                <div>
                    <h1>{text}</h1>
                    
                </div>
            )
            }
    
        }

        export default Api