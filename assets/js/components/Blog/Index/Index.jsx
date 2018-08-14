import React from "react"

import Item from './Item/Item'

export default function Index({posts}) {
  return(
    <div>
      { posts.map( post => <Item key ={post.id} post={post}/> ) }
    </div>
  );
}
