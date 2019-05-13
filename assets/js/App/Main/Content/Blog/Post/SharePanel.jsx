import React from "react"
import { Twitter } from 'react-social-sharing'

import style from './SharePanel.less'


export default function SharePanel({post}) {
  return(
    <div className={style.main}>
      <Twitter
        link={window.location.origin + '/posts/' + post.id}
        label={post.header}
      />
    </div>
  );
}
