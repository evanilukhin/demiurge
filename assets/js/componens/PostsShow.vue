<template>
<div class="prose prose-lg max-w-3/4 self-center">
  <h1 class="text-2xl">{{result?.post?.header}}</h1>
  <markdown-renderer :source='result?.post?.mainPart' />
</div>
</template>

<script lang="ts">
import { useQuery } from '@vue/apollo-composable'
import getPost from "@/js/graphql/getPost"
import MarkdownRenderer from "@/js/componens/MarkdownRenderer.vue";


export default {
  setup(props) {
    const { result } = useQuery(getPost, {id: props["post_id"]})
    return {  result }
  },
  components: {
    'markdown-renderer': MarkdownRenderer
  },
  props: {
    post_id: Number,
    main_part: String
  },
  name: "PostsShow"
}
</script>
