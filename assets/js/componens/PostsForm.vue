<template>
  <input  v-model="post.header"  class= "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Header" />
  <textarea  v-model="post.summary"  class= "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-full" placeholder="Summary" />
  <input  v-model="post.tags"  class= "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Tags" />
  <input  v-model="post.short"  class= "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Short?" />
  <label for="post_short">Short?</label>
  <input id="post_short" type="checkbox" v-model="post.short" />
  <input  v-model="post.state"  class= "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="State" />
  <div>
    <button>Hide ▼</button>
    <textarea v-model="post.mainPart"  class= "shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-none w-full h-full" placeholder="edit me" />
  </div>
  <p> {{post.value}}</p>
  <markdown-renderer :source='post.mainPart' />
</template>

<script lang="ts">
import { useQuery, useMutation, useResult } from '@vue/apollo-composable'
import MarkdownRenderer from "@/js/componens/MarkdownRenderer.vue";
import { reactive, defineComponent } from 'vue'
import Post from "@/js/models/PostModel"

export default defineComponent({
  setup(props) {
    let post = reactive(JSON.parse(JSON.stringify(props.post)))
    console.log(post)
    return { post }
  },
  components: {
    'markdown-renderer': MarkdownRenderer
  },
  props: {
    post: Object
  },
  name: "PostsForm"
})
</script>
