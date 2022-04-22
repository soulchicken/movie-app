import React from 'react'
import FooterCenter from '../Footer/FooterCenter'
import FooterLeft from '../Footer/FooterLeft'
import FooterRight from '../Footer/FooterRight'
import classes from './Footer.module.css'

const Footer = () => {
  return (
    <div className={classes.footer}>
        <FooterLeft/>
        <FooterCenter/>
      <FooterRight/>
    </div>
  )
}

export default Footer