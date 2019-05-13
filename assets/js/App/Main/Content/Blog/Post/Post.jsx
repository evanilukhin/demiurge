import React from "react"
import ReactMarkdown from 'react-markdown';
import {Helmet} from "react-helmet";

import style from './Post.less'
import Code from "./Code";

export default function Post({post}) {
  return(
    <div className={style.main}>
      <Helmet>
        <title>{post.header +  " | Evan Ilukhin"}</title>
        <meta property="og:site_name"   content="Evan Ilukhin - Site" />
        <meta property="og:title"       content={post.header}/>
        <meta property="og:description" content={post.summary}/>
        <meta property="og:url"         content={window.location.href}/>
      </Helmet>
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
