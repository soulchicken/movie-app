import React from 'react'
import classes from './HeaderPreview.module.css'

const HeaderPreview = () => {
    const urls = ['https://www.youtube.com/embed/Lu8P-4fEvC8', 'https://www.youtube.com/embed/N4Ds-d2PQ-I', 'https://www.youtube.com/embed/NTLzUd7BICI'];
    const randomNumber = Math.floor(Math.random()*(urls.length))
  return (
    <>
        <div className={classes['header-container']}>
            <div className={classes['video-box']}>
                <iframe className={classes['preview-video']} width="560" height="315"
                src=  {urls[randomNumber] + "?controls=0&autoplay=1&mute=1&modestbranding=1"}
                title="YouTube video player"
                frameBorder='0' framespacing='0' marginHeight='0' marginWidth='0'
                allowFullScreen>
                </iframe> 
            </div>
        </div>
        <div className={classes['gradient-box']}></div>
    </>
 )
}
// https://www.youtube.com/embed/Lu8P-4fEvC8
export default HeaderPreview