import React, {Component} from "react";
import Books from "../hooks/Books";

class Recommendations extends Component {
    constructor(){
        super()
    }
    
    render(){
        return(<>
            <h2>Anbefalede bøger</h2>
            <div>(Links til bøger, og billeder under)</div>
            <Books/>
            
        </>)
        
    }
}

export default Recommendations