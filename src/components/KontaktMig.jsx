import React, { Component } from "react";

class KontaktMig extends Component {
    constructor(){
        super();
    }

    render() {
        return(
            <div className="KontaktMig-container">

                <div className="KontaktMig-aboutme">
                    <h2>Kontakt Mig</h2>
                    <div className="KontaktMig-mail">allanbirkhavebeenhacked@mail.com</div>
                </div>
                
                <div className="KontaktMig-info">
                    Det tager normalt omkring 10 timer med 2 timers undervisning om ugen, 
                    og så bliver du bedre til at læse og forstå end selv de bedste lærere du nogensinde har haft.
                </div>
                
                
            </div>

        )
    }

}

export default KontaktMig