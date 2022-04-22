import React from 'react'
import MenuList from './MenuList'
import Search from './Search'
import classes from './HeaderBottom.module.css'

const HeaderBottom = () => {
  return (
    <div className={classes.list}>
      <MenuList className={classes.menuList}/>
      <Search />
    </div>
    )
}

export default HeaderBottom