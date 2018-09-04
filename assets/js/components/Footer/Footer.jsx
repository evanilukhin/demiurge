import React from "react"

import Contacts from './Contacts/Contacts'

import style from './Footer.less'

export default function Footer({contacts}) {
  return(
    <footer className={style.footer}>
      <Contacts contacts={contacts}/>
      <div className={style.copyright_box}>
        <a href="https://github.com/evanilukhin/demiurge">Source code</a>
        <p>&copy; {(new Date().getFullYear())} Evan Ilukhin</p>
        <a href=''>
          <img className={style.ananas} border="0" src="images/ananas-256.png"/>
        </a>
      </div>      
    </footer>
  );
}
