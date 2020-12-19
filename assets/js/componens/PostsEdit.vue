<template>
  <div v-if="loading">Loading...</div>
  <div v-else-if="error">Error: {{ error.message }}</div>
  <div v-else-if="post" class="prose prose-lg max-w-3/4 self-center">
    <posts-form v-bind:post='post' ></posts-form>
  </div>
</template>

<script lang="ts">
import { useQuery, useMutation, useResult } from '@vue/apollo-composable'
import getPost from "@/js/graphql/getPost"
import MarkdownRenderer from "@/js/componens/MarkdownRenderer.vue";
import { logErrorMessages } from '@vue/apollo-util'
import { defineComponent } from 'vue'
import PostsForm from "@/js/componens/PostsForm.vue";


export default defineComponent({
  setup(props) {
    const { result, loading, error, onError } = useQuery(getPost, { id: props["post_id"] })

    onError(error => {
      if (process.env.NODE_ENV !== 'production') {
        logErrorMessages(error)
      }
    })

    const post = useResult(result)
    return { post, loading, error }
  },
  components: {
    'markdown-renderer': MarkdownRenderer,
    'posts-form': PostsForm
  },
  props: {
    post_id: Number
  },
  name: "PostsEdit"
})
</script>
