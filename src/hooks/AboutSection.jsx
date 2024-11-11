import React, {useState} from "react";

function AboutSection( { caption1, text } ){
    const [visibility, setVisibility] = useState(false)
    const [t, getText] = useState({text})

    const handleClick = () => {
        setVisibility(!visibility)
        onChildStateChange(!visibility)
    }

    return(
        <>
            <button onClick={handleClick}>{caption1}</button>
            {visibility &&
                <div className="">
                    {text}
                </div>
            }
        </>
    )
}

export default AboutSection