import React from 'react'
import classes from './FooterRightItem.module.css'

const FooterRightItem = (props) => {
  return (
    <li className={classes.memberItem}>
    <a href={props.url}>
      {props.name}
    </a>
  </li>
  )
}

export default FooterRightItem