<template>
<div>
    <div id="nav" class="flex items-start justify-between flex-wrap p-3">
      <div class="flex">
        <router-link class="flex items-center px-3 py-2 border rounded text-teal-800 border-teal-800 hover:text-green hover:border-green mx-2" to="/posts">Posts</router-link>
        <router-link class="flex items-center px-3 py-2 border rounded text-teal-800 border-teal-800 hover:text-green hover:border-green mx-2" to="/about">About</router-link>
      </div>

      <SocialNetworkButtons />
    </div>
</div>
</template>

<script lang="ts">
import SocialNetworkButtons from "@/js/componens/SocialNetworkButtons.vue";

export default {
  name: "AppHeader",
  components: {
    'SocialNetworkButtons': SocialNetworkButtons
  }
}
</script>
