import React from 'react'
import classes from './Logo.module.css'
import LogoImg from './logo.png'
const Logo = () => {
    return (
        <a href="">
        <img className={classes.logo} src={LogoImg} alt="로고" />
        </a>
    )
}

export default Logo