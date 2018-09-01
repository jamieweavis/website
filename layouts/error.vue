<template>
  <section class="container">
    <h1>{{error.message}}</h1>
    <h2>{{error.statusCode}}</h2>
    <nuxt-link to="/">Return to Home</nuxt-link>
  </section>
</template>

<script>
export default {
  props: ['error'],
  layout: 'index'
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";

.container {
  font-family: $font-stack-primary;
  text-transform: uppercase;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
}

h1 {
  font-size: 40px;
  color: $white;
  letter-spacing: 14px;
}
h2 {
  font-size: 100px;
  letter-spacing: 22px;
  color: $brandPrimaryColor;
  line-height: 120px;
}
a {
  font-size: 40px;
  color: $white;
  letter-spacing: 8px;
  text-decoration: none;
  &:hover {
    color: $brandPrimaryColor;
  }
}
</style>
