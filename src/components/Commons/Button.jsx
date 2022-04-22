import React from 'react'
import classes from './Button.module.css'

const Button = (props) => {
//   const inputKeyHandler = event => {
//     const inputKey = event.target.key;
//     props.onOpen(inputKey);
// };
  return (
    <button 
        key={props.id}
        className={classes.button}
        type={props.type || "button"}
        onClick={props.onClick}
    >
        {props.children}
    </button>
  )
}

export default Button