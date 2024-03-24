import React from "react";
import './styles.css';

function ItemError(){
    return (
        <span>
            <img src='error.png' alt='loading' id='error'/>
            <p id='errormessage'>Lo sentimos, ocurrió un error inesperado...</p>
        </span>
    )
}

export {ItemError};
