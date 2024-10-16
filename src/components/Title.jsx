import React, {Comment, Component} from "react";
import Recommendations from "./Recommendations";

class Title extends Component {
    constructor(){
        super()
    }

    render() {
        return(
            <p className="Title">
                <h1>[insert name here]</h1>
                <nav className="Navbar">
                    <Recommendations />
                </nav>
            </p>
        )
    }
} 

export default Title