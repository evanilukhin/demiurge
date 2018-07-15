import React from "react"
import {Link} from 'react-router-dom'

import style from './Navbar.less'

export default function Navbar() {
  return(
    <div className={style.nav}>
      <Link className={style.link} to="/">About</Link>
      <Link className={style.link} to="/blog">Blog</Link>
    </div>
  );
}
