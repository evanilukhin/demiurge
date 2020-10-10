<template>
<div>
  Header
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
</div>
</template>

<script lang="ts">
  export default {
    name: "AppHeader"
  }
</script>
