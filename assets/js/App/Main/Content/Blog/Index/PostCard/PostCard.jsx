import React from "react"
import { Link } from 'react-router-dom'
import ReactMarkdown from 'react-markdown';
import SharePanel from '../../Post/SharePanel'
import TagsPanel from  '../../Post/TagsPanel'
import style from './PostCard.less'

export default function PostCard({post}) {
  let showMoreLink;
  if (!post.short){
    showMoreLink = <Link to={`/posts/${post.id}`} className = {style.show_more_button}>Show more...</Link>
  }
  return(
    <div className={style.main}>
      <div className={style.header}>
        {post.header}
      </div>
      <ReactMarkdown className={style.preview} source={post.summary} />
      {showMoreLink}
      <SharePanel post={post}/>
      <TagsPanel tags = {post.tags}/>
    </div>
  );
}
