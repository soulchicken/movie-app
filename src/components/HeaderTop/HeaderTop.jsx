import React from 'react'
import Logo from './Logo'
import MemberInfo from './MemberInfo'
import classes from './HeaderTop.module.css'

const HeaderTop = () => {
  return (
    <div className={classes['header-top']}>
      <Logo />
      <MemberInfo />
    </div>
  )
}

export default HeaderTop