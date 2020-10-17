<template>
<div class="flex justify-center h-screen">
  <div class="flex flex-col w-full xl:w-3/5">
    <TheHeader />
    <router-view />
    <TheFooter />
  </div>
</div>
</template>

<script lang="ts">
import '../css/tailwind.css'

import { defineComponent } from 'vue'

import TheHeader from "./componens/TheHeader.vue"
import TheFooter from "./componens/TheFooter.vue"

export default defineComponent({
    name: "App",
    components: {
      'TheHeader': TheHeader,
      'TheFooter': TheFooter
    }
});
</script>
