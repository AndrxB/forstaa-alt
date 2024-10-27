import React, { Component } from "react";

class AboutMe extends Component {
    constructor(){
        super();
    }

    render() {
        return(
            <>
                <section>Hvem er jeg?</section>
                <p>Indsæt tekst stykke her</p>

                <section>
                    <section>
                       <p>Mail</p>
                        <a href="mailto: forstaa.alt@mail.com">forstaa.alt@mail.com</a>
                    </section>
                        <p>Telefonnummer:</p>
                        "Indsæt Telefonnummer"
                    <section>

                    </section>
                </section>

                Det tager normalt omkring 10 timer med 2 timers undervisning om ugen, 
                og så bliver du bedre til at læse og forstå end selv de bedste lærere du nogensinde har haft.
            </>
        )
    }

}

export default AboutMe