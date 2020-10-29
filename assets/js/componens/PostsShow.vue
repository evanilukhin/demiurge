<template>
<div>
  <h1 class="text-2xl">{{result.post.header}}</h1>
  <vue3-markdown-it :source='result.post.mainPart' />
</div>
</template>

<script lang="ts">
import { useQuery } from '@vue/apollo-composable'
import { ref } from 'vue'
import getPost from '@/js/graphql/getPost.query.graphql'
import VueMarkdownIt from 'vue3-markdown-it';

export default {
  setup(props) {
    const { result } = useQuery(getPost, {id: props["post_id"]})
    console.log(result)
    return {  result }
  },
  components: {
    VueMarkdownIt
  },
  props: {
    post_id: Number,
    main_part: String
  },
  name: "PostsShow"
}
</script>
