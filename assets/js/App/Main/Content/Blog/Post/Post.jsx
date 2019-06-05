import React from "react"
import ReactMarkdown from 'react-markdown';
import SharePanel from './SharePanel'

import style from './Post.less'
import Code from "./Code";

export default function Post({post}) {
  return(
    <div className={style.main}>
      <div className={style.date}>
        <span>
          {post.insertedAt}
        </span>
      </div>
      <div className={style.header}>
        {post.header}
      </div>
      <div className={style.line}/>
      <ReactMarkdown source={post.mainPart} escapeHtml={false} renderers={{ code: Code }}/>
      <SharePanel post={post}/>
    </div>
  );
}
