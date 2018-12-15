import React from "react"

import PostCard from './PostCard/PostCard'

export default function Index({posts}) {
  return(
    <div>
      <AddPost></AddPost>
      { posts.map( post => <PostCard key ={post.id} post={post}/> ) }

    </div>
  );
}
