import React, { useState } from "react";
import Title from '../hooks/Title'
import StoryBoardText from '../hooks/StoryBoardText'
import Recommendations from "../components/Recommendations";

function HomePage() {
    const [visibility, setVisibility] = useState(false);

    const toggleVisibility = () => {
        setVisibility(!visibility);
    }
    
    return (
        <>
            <Title />
            
            
            
            <div className="storyboard-container">
                <StoryBoardText 
                    caption="Læseproblemer blandt Danskerne"
                    text1="50% af danskerne har problemer med at forstå hvad de læser, og hvorfor nu det? Jo, den metode 
                    som alt for mange lærere benytter sig af, har jeg døbt ”Det-Kommer-Vi-Til-Senere-Metoden”. 
                    Og hvorfor nu det? Jo, når lille Åge siger at han ikke forstår et eller andet i det han er ved at læse 
                    højt i klassen, siger læreren: Det skal du ikke tænke over, det kommer vi til senere – 
                    Du læser bare så godt du nu kan. Når man har fået dette at vide tilpas mange gange offentligt i klassen, 
                    så lærer man at ord og grammatik man ikke forstår, gør man ikke noget ved. Det er denne måde 50% af danskerne 
                    er blevet funktionelle analfabeter, desværre."
                />

                <button onClick={toggleVisibility} className="readmore-button">Læs mere om hvordan det foregår her</button>
                {visibility && <>
                    <StoryBoardText onClick={toggleVisibility}
                    text1="Jo, man finder en tekst der ikke er for svær og ikke for let, og ordbøger der passer til ens niveau, og så når
                    man kommer til ord eller grammatik man ikke forstår fuldt ud, så slår man det op.....og det stopper ikke
                    der, for så finder man den definition som passer til den tekst man læser, og så laver man sætninger med
                    dette ord i denne definition, indtil det er nemt at lave varierende sætninger.
                    Det kan være en hjælp at demonstrere det man sidder med, med et demokit, som er en lille bøtte småting
                    (f.eks. viskelæder, elastikker, træ, plastic og metalting der ikke er så store), og så kan man vise /
                    (demonstrere=demo) hvad det nu end er ordet betyder i den definition. Man kan også bruge modellervoks
                    til dette."
                    />
                    <StoryBoardText 
                    text1="Det kan være en hjælp at finde billeder af hvad det nu end er for et ord man er i gang med, 
                    f.eks en motor eller hvad som helst. Og så finder man også ud af hvor ordet stammer fra, 
                    hvilket står i nogle ordbøger og ikke så meget i andre."

                    text2="Og så finder man også ud af hvor ordet stammer fra, hvilket står i nogle ordbøger og ikke så meget andre."

                    text3="Når man så har et godt begreb om hvad ordet betyder, så læser man den sætning hvor det stod, og så
                    skulle det gerne være klart og tydeligt hvad sætningen betyder. Hvis det ikke er tydeligt, er der andre
                    misforståelser, som skal findes."             
                    />
                    
                </>}

                <StoryBoardText 
                    text1="- Og hvordan finder man så et misforstået ord/grammatik? Jo, det er enkelt nok: man går tilbage til der, 
                    hvor teksten var klar og tydelig at forstå, og finder det sted hvor den holdt op med det, og lige præcis 
                    der er der et misforstået ord."
                />        
            </div>


            <div className="books-container">
                <h2 className="books-title">Jeg hjælper med at finde gode ordbøger der passer til dig.</h2>
                <p>Disse bøger er topklasse (tekst burde nok ændres)</p>
            </div>

            <Recommendations />  
            
        </>
    )
}

export default HomePage