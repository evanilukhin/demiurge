import React from "react"
import { Markup } from 'interweave';

import style from './Post.less'

export default function Post({post}) {
  return(
    <div className={style.main}>
      <div className={style.date}>
        <span>
          05-05-2019
        </span>
      </div>
      <div className={style.header}>
        {post.header}
      </div>
      <div className={style.line}/>
      <Markup className={style.preview} content={post.mainPart} />
    </div>
  );
}
