<template>
  <div class="container">
    <h1 v-html="title" />
    <div v-html="content" />
  </div>
</template>

<script>
export default {
  data: () => ({
    title: 'Hello! <span class="emoji emoji--wave"></span>',
    content: `
      <p>I'm <strong>Jamie Weavis</strong>, a full stack JavaScript developer from the United Kingdom <span class="emoji emoji--uk"></span></p>
      <p>Currently employed as a <strong>Lead Developer</strong> for <a class="underline" href="https://smartrecruitonline.com/" target="_blank">Smart Recruit</a>.</p>
      <p>Lorem ipsum dolor <a class="underline" href="#">consectetur</a> adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud <a class="underline" href="#">exercitation</a> ullamco laboris nisi ut aliquip ex ea commodo consequat.  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    `
  })
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables.scss';
</style>
