import React from "react"

export default function PostCard({post}) {
  return(
    <div>
      <p>{post.id}</p>
      <p>{post.mainPart}</p>
      <p>{post.state}</p>
      <p>{post.tags}</p>
      <hr/>
    </div>
  );
}
