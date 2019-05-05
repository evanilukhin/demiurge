import React from "react"

import style from './Contacts.less'

export default function Contacts({contacts}) {
  const contactLinks = contacts.map((contact, index) =>
      <a href={contact.link} key={index}>
        <img className={style.icon} border="0" src={"/images/" + contact.type + ".png"}/>
      </a>
    );
  return(
    <div className={style.contacts}>
      <p>CONNECT WITH ME </p> {contactLinks}
    </div>
  );
}
