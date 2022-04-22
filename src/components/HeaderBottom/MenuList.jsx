import React from 'react'
import Menu from './Menu'
import classes from './MenuList.module.css'

const MenuList = () => {
    const menuArray = ['영화','극장','예매','스토어','이벤트','혜택'];
    const Menus = menuArray.map(menuName => (<Menu key={menuName} name={menuName} />));
    return (
        <ul className={classes['menu-ul']}>
            {Menus}
        </ul>
    )
}

export default MenuList