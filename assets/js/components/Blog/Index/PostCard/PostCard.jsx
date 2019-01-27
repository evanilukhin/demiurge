import React from "react"
import EditForm from 'Components/Blog/Post/EditForm/EditForm'
export default function PostCard({post}) {
  return(
    <div>
      <p>{post.id}</p>
      <p>{post.mainPart}</p>
      <p>{post.state}</p>
      <p>{post.tags}</p>
      <EditForm post={post}/>
      <hr/>
    </div>
  );
}
