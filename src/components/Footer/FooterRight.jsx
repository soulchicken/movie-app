import React from 'react'

import classes from './FooterRight.module.css'
import FooterRightItem from './FooterRightItem'

const FooterRight = () => {
    const teamMembers = [
        {
          name : '송  준',
          url : 'https://github.com/songjun94'
        },
        {
          name : '황지원',
          url : 'https://github.com/hwangjiwon98'
        },
        {
          name : '백체은',
          url : 'https://github.com/sairo415'
        },
        {
          name : '김동현',
          url : 'https://github.com/soulchicken'
        }
      ];
    const Team = teamMembers.map(people => (<FooterRightItem name={people.name} key={people.name} url={people.url}/>));
  return (
      <ul className={classes['team-ul']}>
        {Team}
      </ul>
  )
}

export default FooterRight