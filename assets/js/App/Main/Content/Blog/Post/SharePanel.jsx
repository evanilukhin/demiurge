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
  const postLink = window.location.origin + "/posts/" + post.id;
  return(
    <div className={style.main}>
      <FacebookShareButton
        url={postLink}
        className="Demo__some-network__share-button">
        <FacebookIcon size={32} round />
      </FacebookShareButton>

      <LinkedinShareButton
        url={postLink}
        className="Demo__some-network__share-button">
        <LinkedinIcon size={32} round />
      </LinkedinShareButton>

      <TwitterShareButton
        url={postLink}
        className="Demo__some-network__share-button">
        <TwitterIcon size={32} round />
      </TwitterShareButton>

      <TelegramShareButton
        url={postLink}
        className="Demo__some-network__share-button">
        <TelegramIcon size={32} round />
      </TelegramShareButton>

      <VKShareButton
        url={postLink}
        className="Demo__some-network__share-button">
        <VKIcon size={32} round />
      </VKShareButton>

      <RedditShareButton
        url={postLink}
        className="Demo__some-network__share-button">
        <RedditIcon size={32} round />
      </RedditShareButton>
    </div>
  );
}
