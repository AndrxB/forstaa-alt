import React, {Comment, Component} from "react";
import Recommendations from "./Recommendations";

class Title extends Component {
    constructor(){
        super()
    }

    render() {
        return(
            <>
            
                <h1>[insert name here]</h1>


                <nav>
                    læs mere
                    <Recommendations />
                </nav>
            </>
        )
    }
} 

export default Title