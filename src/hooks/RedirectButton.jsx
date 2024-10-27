import React from "react";
import { useNavigate } from 'react-router-dom'

function RedirectButton({ targetPage, text }) {
    const navigate = useNavigate()

    const handleRedirect = () => {
        navigate(targetPage, { replace: true });
    }

    return (
        <button onClick={handleRedirect}>
            {text}
        </button>
    )

}

export default RedirectButton