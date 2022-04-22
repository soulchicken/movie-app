import React from 'react'
import ReactDOM from 'react-dom';

// Modal의 배경 부분
const Background = props => {
    return <div onClick={props.onClose}/>
}

// Modal Window(모달창) 부분
const ModalWindow = props => {
    return (
        <div>
            <div>{props.children}</div>
        </div>
    )
}

const portalElement = document.getElementById('modal-window');

const Modal = (props) => {
  return (
    <>
        {ReactDOM.createPortal(<Background onClose={props.onClose}/>, portalElement)}
        {ReactDOM.createPortal(<ModalWindow>{props.children}</ModalWindow>, portalElement)}
    </>
  )
}

export default Modal