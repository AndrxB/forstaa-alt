import React from "react";

function Books() {
    const books = [
        "Din danske ordbog",
        "Politikkens Nudansk Ordbog med Etymologi"
    ]

    return (
    <ul>
        {books.map((element) => {return <button>{element}</button>})}
    </ul>
    )


}

export default Books