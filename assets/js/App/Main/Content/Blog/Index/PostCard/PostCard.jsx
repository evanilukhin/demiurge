import React from "react"
import { Link } from 'react-router-dom'
import ReactMarkdown from 'react-markdown';
import SharePanel from '../../Post/SharePanel'
import style from './PostCard.less'

import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  TelegramShareButton,
  PinterestShareButton,
  VKShareButton,
  RedditShareButton,

  FacebookIcon
} from 'react-share';

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
    </div>
  );
}
