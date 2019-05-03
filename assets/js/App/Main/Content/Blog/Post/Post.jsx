import React from "react"
import { Markup } from 'interweave';

import style from './Post.less'

export default function Post({post}) {
  return(
    <div className={style.main}>
      <div className={style.header}>
        {post.header}
      </div>
      <Markup className={style.preview} content={post.mainPart} />
    </div>
  );
}
