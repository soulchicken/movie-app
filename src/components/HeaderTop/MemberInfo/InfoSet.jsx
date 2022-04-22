import React from 'react'
import Icon from './Icon'
import InfoName from './InfoName'
import classes from './InfoSet.module.css'

const InfoSet = (props) => {
  return (
    <span className={classes['info-set']}>
        <a href="">
          <Icon image={props.icon}/>
          <InfoName name={props.name}/>
        </a>
    </span>
  )
}

export default InfoSet