import React from "react"

import PostCard from './PostCard/PostCard'

import style from './Index.less'

export default function Index({posts}) {
  return(
    <div className={style.content} >
      { posts.map( post => <PostCard key ={post.id} post={post}/> ) }
    </div>
  );
}
