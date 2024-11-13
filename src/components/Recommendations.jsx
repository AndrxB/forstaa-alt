import React, {Component} from "react";
import Books from "../hooks/Books";

export default class Recommendations extends Component {
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