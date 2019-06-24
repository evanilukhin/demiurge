import React from "react"
import style from './TagsPanel.less'

export default function TagsPanel({tags}) {
  let tags_link;
  return(
    <div className={style.main}>
      { tags.map( tag => <PostCard key ={post.id} post={post}/> ) }
    </div>
  );
}
