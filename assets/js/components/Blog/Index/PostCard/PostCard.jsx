import React from "react"
import EditMutation from 'Components/Blog/Post/EditMutation/EditMutation'
export default function PostCard({post}) {
  return(
    <div>
      <p>{post.id}</p>
      <p>{post.mainPart}</p>
      <p>{post.state}</p>
      <p>{post.tags}</p>
      <EditMutation post={post}/>
      <hr/>
    </div>
  );
}
