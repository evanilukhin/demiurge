import React from "react"
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  TelegramShareButton,
  VKShareButton,
  RedditShareButton,

  FacebookIcon,
  LinkedinIcon,
  TwitterIcon,
  TelegramIcon,
  VKIcon,
  RedditIcon

} from 'react-share';

import style from './SharePanel.less'


export default function SharePanel({post}) {
  return(
    <div className={style.main}>
      <FacebookShareButton
        url={window.location.origin + "/posts/" + post.id}
        className="Demo__some-network__share-button">
        <FacebookIcon size={32} round />
      </FacebookShareButton>

      <LinkedinShareButton
        url={window.location.origin + "/posts/" + post.id}
        className="Demo__some-network__share-button">
        <LinkedinIcon size={32} round />
      </LinkedinShareButton>

      <TwitterShareButton
        url={window.location.origin + "/posts/" + post.id}
        className="Demo__some-network__share-button">
        <TwitterIcon size={32} round />
      </TwitterShareButton>

      <TelegramShareButton
        url={window.location.origin + "/posts/" + post.id}
        className="Demo__some-network__share-button">
        <TelegramIcon size={32} round />
      </TelegramShareButton>

      <VKShareButton
        url={window.location.origin + "/posts/" + post.id}
        className="Demo__some-network__share-button">
        <VKIcon size={32} round />
      </VKShareButton>

      <RedditShareButton
        url={window.location.origin + "/posts/" + post.id}
        className="Demo__some-network__share-button">
        <RedditIcon size={32} round />
      </RedditShareButton>
    </div>
  );
}
