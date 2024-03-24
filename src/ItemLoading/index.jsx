import React from 'react';
import './styles.css';

function ItemLoading(){
    return(
        <span>
            <img src='loading.png' alt='loading' id='loading'/>
            <p id='loadingmessage'>Cargando . . .</p>
        </span>
    )
}

export {ItemLoading};