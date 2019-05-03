import React from "react"
import { Markup } from 'interweave';

import style from './PostCard.less'

export default function PostCard({post}) {
  return(
    <div className={style.main}>
      <div className={style.tags}> Tags. Work in progress... </div>
      <div className={style.header}>
        {post.header}
      </div>
      <Markup className={style.preview} content={post.mainPart} />
      <div className = {style.show_more_button}>
        Show more...
      </div>
    </div>
  );
}
