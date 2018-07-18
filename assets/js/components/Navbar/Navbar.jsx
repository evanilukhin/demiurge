import React from "react"
import {NavLink} from 'react-router-dom'

import style from './Navbar.less'

export default function Navbar() {
  return(
    <div className={style.nav}>
      <div className={style.nav_content}>
        <NavLink className={style.link} activeClassName={style.active_link} exact to="/">
          About me
        </NavLink>
        <NavLink className={style.link} activeClassName={style.active_link} to="/blog">
          Blog
        </NavLink>
      </div>
    </div>
  );
}
