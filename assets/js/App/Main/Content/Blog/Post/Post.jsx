import React from "react"
import ReactMarkdown from 'react-markdown';

import style from './Post.less'
import Code from "./Code";

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
      <ReactMarkdown source={post.mainPart} escapeHtml={false} renderers={{ code: Code }}/>
    </div>
  );
}
