import React, { useState } from "react";

export default function AboutSections() {
    const [content, setContent] = useState("Klik på en af knapperne oven mig, for at lære mig at kende!")
    const sections = [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "dengang",
        "underviser",
        "Tidligere oversætter",
        "Godt arbejde"
    ]

    const handleClick = (id) => {
        setContent(sections[id])    
    }

    return(
        <div className="about-section-container">
            <div className="about-button-container">
                <button className="about-button" onClick={() => handleClick(0)}>Hvorfor tilbyder jeg denne service?</button>
                <button className="about-button" onClick={() => handleClick(1)}>Hvornår fik jeg denne ide?</button>
                <button className="about-button" onClick={() => handleClick(2)}>Hvad laver jeg?</button>
                <button className="about-button" onClick={() => handleClick(3)}>Hvad er min baggrund?</button>
                <button className="about-button" onClick={() => handleClick(4)}>Hvilke forventninger har jeg af min studerende?</button>
            </div>
            
            {content && 
            <div className="about-section">{content}</div>
            }
            
        </div>
    )

}