import React from 'react'
import classes from './Menu.module.css'

const Menu = (props) => {
  return (
    <li className={classes.menuItem}>
        <a href="">
          {props.name}
        </a>
      </li>
  )
}

export default Menu