import React from "react"
import { Markup } from 'interweave';

export default function PostCard({post}) {
  return(
    <div>
      <p>{post.id}</p>
      <Markup content={post.mainPart} />
      <p>{post.state}</p>
      <p>{post.tags}</p>
      <hr/>
    </div>
  );
}
