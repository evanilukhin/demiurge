<template>
<div class="flex flex-col bg-gray-200">
  <app-header />
  <router-view />
  <app-footer />
</div>
</template>

<script lang="ts">
import '../css/tailwind.css'

import { defineComponent } from 'vue'

import TheHeader from "./componens/TheHeader.vue"
import Page from  "./componens/Page.vue"
import TheFooter from "./componens/TheFooter.vue"

export default defineComponent({
    name: "App",
    components: {
      'app-header': TheHeader,
      'page': Page,
      'app-footer': TheFooter
    }
});
</script>
