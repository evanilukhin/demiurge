<template>
<div>
    <div>
        <ul>
            <li v-for="post of result.posts" :key="post.id">
                {{ post.id }} {{ post.summary }}
            </li>
        </ul>
    </div>
    <button v-on:click="loadMore">Load more</button>
</div>
</template>

<script lang="ts">
import { useQuery } from '@vue/apollo-composable'
import { watch } from 'vue'
import getPosts from '../graphql/getPosts.query.graphql'

export default {
    setup() {
      const { result, fetchMore } = useQuery(getPosts, {limit: 5, offset: 0})
      console.log(result)
      function loadMore () {
        fetchMore({
          variables: {
            offset: result.value.posts.length,
          }
        })
      }
      return { result, loadMore }
    },
    name: "PostsIndex"
}
</script>
