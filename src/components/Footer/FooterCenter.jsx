import React from 'react'
import classes from './FooterCenter.module.css'
import LogoImg from '../HeaderTop/logo.png'
const FooterCenter = () => {
  return (
    <a href="">
    <img className={classes.logo} src={LogoImg} alt="로고" />
    </a>
  )
}

export default FooterCenter