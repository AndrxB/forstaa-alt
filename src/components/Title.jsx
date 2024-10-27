import React, {Comment, Component} from "react";
import RedirectButton from "../hooks/RedirectButton"



class Title extends Component {
    constructor(){
        super()
    }

    render() {
        return(
            <section>
                <h1>Forstå Alt</h1>
                <nav>
                    <RedirectButton targetPage="/" text="Hjem"/>
                    <RedirectButton targetPage="/AboutPage" text="Om mig"/>
                </nav>
            </section>
            
        )
    }
} 

export default Title