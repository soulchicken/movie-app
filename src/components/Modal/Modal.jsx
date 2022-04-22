import React from 'react'
import ReactDOM from 'react-dom';
import classes from './Modal.module.css'


// Modal의 배경 부분
const Background = props => {
    return <div className={classes.background} onClick={props.onClose}/>
}

// Modal Window(모달창) 부분
const ModalWindow = props => {
        return (
            <div className={classes.modal}>
                <div>{props.children}</div>
            </div>
        )
    }

const portalElement = document.getElementById("modal-window");

const Modal = (props) => {
    return (
        <>
            {ReactDOM.createPortal(<Background onClose={props.onClose}/>, portalElement)}
            {ReactDOM.createPortal(<ModalWindow key={props.id} >{props.children}</ModalWindow>, portalElement)}
        </>
    )
}

export default Modal