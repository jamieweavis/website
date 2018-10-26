<template>
  <section class="container">
    <h1>{{ error.statusCode }}</h1>
    <p>{{ error.message }}, <nuxt-link
      class="underline"
      to="/">return to home</nuxt-link>.</p>
  </section>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: () => ({})
    }
  }
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables.scss';

h1 {
  font-size: 6rem;
}
</style>
