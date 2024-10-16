import React, { useState } from "react";
import ExtraInfo from "../components/ExtraInfo";

function ExtraInfoButton() {
    const [visibility, setVisibility] = useState(false);

    const toggleVisibility = () => {
        setVisibility(!visibility);
    }

    return (
        <div>
            <button onClick={toggleVisibility}>Læs mere her</button>
            {visibility && <p><ExtraInfo/></p>}
        </div>
    );
}

export default ExtraInfoButton;
