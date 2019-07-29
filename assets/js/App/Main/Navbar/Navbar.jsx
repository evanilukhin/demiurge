import React from "react"
import {NavLink} from 'react-router-dom'

import style from './Navbar.less'

export default function Navbar() {
  return(
    <div className={style.nav}>
      <div className={style.nav_content}>
        <NavLink className={style.link} activeClassName={style.active_link} to="/">
          Blog
        </NavLink>
        <NavLink className={style.link} activeClassName={style.active_link} exact to="/about">
          About me
        </NavLink>
      </div>
    </div>
  );
}
