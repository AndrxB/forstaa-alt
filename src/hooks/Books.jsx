import React from "react";
import nudanskOrdbog from "../assets/nudansk_ordbog.png";
import dinDanskeOrdbog from "../assets/din_danske_ordbog.png";

function Books() {
    const books = [nudanskOrdbog, dinDanskeOrdbog];

    return (
        <>
            {books.map((src, index) => (
                
                <img 
                    src={src} 
                    alt={`Book ${index + 1}`} 
                    width="100" 
                    height="150"
                />
                
            ))}
        </>
    );
}

export default Books;
