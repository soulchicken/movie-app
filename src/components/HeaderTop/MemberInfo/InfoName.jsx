import React from 'react'
import classes from './InfoName.module.css'

const InfoName = (props) => {
  return (
    <div className={classes['info-name']}>{props.name}</div>
  )
}

export default InfoName