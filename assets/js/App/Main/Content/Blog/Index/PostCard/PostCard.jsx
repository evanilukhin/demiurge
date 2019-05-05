import React from "react"
import { Markup } from 'interweave';
import { Link } from 'react-router-dom'

import style from './PostCard.less'

export default function PostCard({post}) {
  return(
    <div className={style.main}>
      <div className={style.header}>
        {post.header}
      </div>
      <Markup className={style.preview} content={post.mainPart} />
      <Link to={`/posts/${post.id}`} className = {style.show_more_button}>Show more...</Link>
    </div>
  );
}
