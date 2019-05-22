import React from "react"
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  TelegramShareButton,
  VKShareButton,
  RedditShareButton,

  FacebookIcon
} from 'react-share';

import style from './SharePanel.less'


export default function SharePanel({post}) {
  return(
    <div className={style.main}>
      <FacebookShareButton
        url={window.location.origin + "/posts/" + post.id}
        quote={post.summary}
        className="Demo__some-network__share-button">
        <FacebookIcon size={32} round />
      </FacebookShareButton>

      <LinkedinShareButton
        url={window.location.origin + "/posts/" + post.id}
        quote={post.summary}
        className="Demo__some-network__share-button">
        <FacebookIcon size={32} round />
      </LinkedinShareButton>

      <TwitterShareButton
        url={window.location.origin + "/posts/" + post.id}
        quote={post.summary}
        className="Demo__some-network__share-button">
        <FacebookIcon size={32} round />
      </TwitterShareButton>

      <TelegramShareButton
        url={window.location.origin + "/posts/" + post.id}
        quote={post.summary}
        className="Demo__some-network__share-button">
        <FacebookIcon size={32} round />
      </TelegramShareButton>

      <VKShareButton
        url={window.location.origin + "/posts/" + post.id}
        quote={post.summary}
        className="Demo__some-network__share-button">
        <FacebookIcon size={32} round />
      </VKShareButton>

      <RedditShareButton
        url={window.location.origin + "/posts/" + post.id}
        quote={post.summary}
        className="Demo__some-network__share-button">
        <FacebookIcon size={32} round />
      </RedditShareButton>
    </div>
  );
}
