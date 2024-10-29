import React from "react";
import nudanskOrdbog from "../assets/nudansk_ordbog.png";
import dinDanskeOrdbog from "../assets/din_danske_ordbog.png";

function Books() {
    // Each book object has an image source and a link URL
    const books = [
        { 
            src: nudanskOrdbog, 
            url: "https://www.saxo.com/dk/politikens-nudansk-ordbog-med-etymologi_christian-becker-christensen_indbundet_9788756779906?srsltid=AfmBOorGG3fAjW3F7Mk3y4d575vMV-llVijwJNgr-NaTUQUGtboNTIZM", 
            name: "Nudansk Ordbog m/etymologi",
            author: "Jørn Jensen"
        },
        { 
            src: dinDanskeOrdbog, 
            url: "https://example.com/dinDanskeOrdbog",
            name: "Din Danske Ordbog",
            author: "Christian Aagaard"
        }
    ];

    return (
        <>
            {books.map((book, index) => ( 
                <div className="book">
                    <a 
                    key={index} 
                    href={book.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    <img 
                        className="book-image"
                        src={book.src} 
                        alt={`Book ${index + 1}`} 
                        width="100" 
                        height="150" 
                    />
                    <div className="book-name">{book.name}</div>
                    <div className="book-author"> af {book.author}</div>
                </a>
                </div>
            ))}
        </>
    );
}

export default Books;
