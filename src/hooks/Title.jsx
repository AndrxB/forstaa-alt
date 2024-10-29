import React, {Comment, Component} from "react";
import RedirectButton from "./RedirectButton"



function Title() {
    return(
            <div className="title">
                <div className="title-container">
                    <h1>Forstå Alt</h1  >
                    <nav>
                        <RedirectButton targetPage="/" text="Hjem"/>
                        <RedirectButton targetPage="/AboutPage" text="Om mig"/>
                    </nav>
                </div>
            </div>
            
        )
} 

export default Title