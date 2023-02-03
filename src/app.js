import  Component  from "react"
import{Hello} from "./hello"
import {Message} from "./Message"

export class App extends Component{
    render(){
        return (
        <div>
            <h1><Hello/></h1>
           <Message/>
        </div>
        )
    }
}


