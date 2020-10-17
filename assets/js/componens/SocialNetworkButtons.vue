<template>
  <div class="flex">
    <a href="https://steamcommunity.com/id/a01011001">
      <img class="icon" src="/images/steam.png"/>
    </a>
    <a href="https://t.me/evanilukhin">
      <img class="icon" src="/images/telegram.png"/>
    </a>
    <a href="mailto:evanilukhin@gmail.com">
      <img class="icon" src="/images/mail.png"/>
    </a>
    <a href="https://github.com/evanilukhin">
      <img class="icon" src="/images/github.png"/>
    </a>
    <a href="https://www.linkedin.com/in/ivan-ilyukhin-41329a13b/">
      <img class="icon" src="/images/linkedin.png"/>
    </a>
  </div>
</template>

<script lang="ts">
export default {
  name: "SocialNetworkButtons"
}
</script>

<style scoped>
.icon {
  height: 32px;
  width: 32px;
  margin: 3px;
}
</style>
