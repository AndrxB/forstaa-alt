import React, {Comment, Component} from "react";
import Recommendations from "./Recommendations";
import AboutMe from "./AboutMe";

class Title extends Component {
    constructor(){
        super()
    }

    render() {
        return(
            <p className="Title">
                <h1>Forstå Alt</h1>
                <nav><AboutMe/></nav>
            </p>
        )
    }
} 

export default Title