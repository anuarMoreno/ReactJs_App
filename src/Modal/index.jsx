import React from "react";
import ReactDom from "react-dom";
import './styles.css';

function Modal({children}){
    return (ReactDom.createPortal(
        <div className="ModalBackground">
            {children}
        </div>,
        document.getElementById('modal')
    ))
}

export {Modal};