import React from "react"
import { Markup } from 'interweave';

import style from './Post.less'

export default function Post({post}) {
  return(
    <div className={style.main}>
      <meta property="og:title"       content={post.header}/>
      <meta property="og:description" content={post.summary}/>
      <div className={style.date}>
        <span>
          {post.insertedAt}
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
