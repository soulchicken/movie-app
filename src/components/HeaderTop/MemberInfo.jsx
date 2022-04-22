import React from 'react'
import StarIcon from './MemberInfo/Icon/star.png'
import HumanIcon from './MemberInfo/Icon/human.png'
import InfoSet from './MemberInfo/InfoSet'
import classes from './MemberInfo.module.css'

const MemberInfo = () => {
  const like = {  icon : StarIcon,
                  name :'Like'
              }
  const myPage = {
                  icon : HumanIcon,
                  name : 'MyPage'
  }

  return (
    <div className={classes['member-info']}>
      <InfoSet icon ={like.icon} name={like.name}/>
      <InfoSet icon ={myPage.icon} name={myPage.name}/>
    </div>
  )
}

export default MemberInfo