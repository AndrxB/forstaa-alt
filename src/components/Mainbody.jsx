import React, { Component } from "react";
import ExtraInfoButton from '../hooks/ExtraInfoButton'

class Mainbody extends Component {
    constructor() {
        super();
    }

    render() {
        return(
            <>
                50% af danskerne har problemer med at forstå hvad de læser, og hvorfor nu det?
                <p>
                Jo, den metode som alt for mange lærere benytter sig af, har jeg døbt ”Det-Kommer-Vi-Til-Senere- Metoden”. 
                Og hvorfor nu det? Jo, når lille Åge siger at han ikke forstår et eller andet i det han er ved at læse højt 
                i klassen, siger læreren: Det skal du ikke tænke over, det kommer vi til senere – Du læser bare så godt du nu kan. 
                Når man har fået dette at vide tilpas mange gange offentligt i klassen, så lærer man at ord og grammatik man ikke 
                forstår, gør man ikke noget ved. Det er denne måde 50% af danskerne er blevet funktionelle analfabeter, desværre.
                </p>

                <section><ExtraInfoButton /></section>
            </>
            
        )
    }

}

export default Mainbody