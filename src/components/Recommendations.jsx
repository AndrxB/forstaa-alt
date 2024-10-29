import React, {Component} from "react";
import Books from "../hooks/Books";

class Recommendations extends Component {
    constructor(){
        super()
    }
    
    render(){
        return(
            <>
                <div className="books">
                    <Books />
                </div>
            </>
        )
    }
}

export default Recommendations