import React, {Suspense} from "react"
import ReactMarkdown from 'react-markdown';
import SharePanel from './SharePanel'
import style from './Post.less'
const Code = React.lazy(() => import(/* webpackChunkName: "Code" */ './Code'));

export default function Post({post}) {
    return (
        <div className={style.main}>
            <div className={style.date}>
            <span> {post.insertedAt}</span>
            </div>
            <div className={style.header}>
                {post.header}
            </div>
            <div className={style.line}/>
            <Suspense fallback={ <div>Loading...</div> }>
              <ReactMarkdown source={post.mainPart} escapeHtml={false} renderers={{code: Code}}/>
            </Suspense>
            <SharePanel post={post}/>
        </div>
    );
}
