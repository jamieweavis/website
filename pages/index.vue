<template>
  <section class="container">

    <canvas-animation></canvas-animation>

    <div class="content">

      <span class="i-am">I am</span>
      <h1 class="name">Jamie Weavis</h1>
      <h2 class="title">Software Developer</h2>

      <nav class="navigation">
        <nuxt-link class="navigation__item" to="/about">About Me</nuxt-link>
        <nuxt-link class="navigation__item" to="/experience">Experience</nuxt-link>
        <nuxt-link class="navigation__item" to="/projects">Projects</nuxt-link>
        <nuxt-link class="navigation__item" to="/contact">Contact Me</nuxt-link>
      </nav>

      <nav class="social-navigation">
        <a class="social-navigation__item" target="_blank" href="https://github.com/jamieweavis">
          <fa-icon :icon="['fab', 'github']" />
        </a>
        <a class="social-navigation__item" target="_blank" href="https://twitter.com/jamieweavis">
          <fa-icon :icon="['fab', 'twitter']" />
        </a>
        <a class="social-navigation__item" target="_blank" href="https://www.linkedin.com/in/jamieweavis/">
          <fa-icon :icon="['fab', 'linkedin-in']" />
        </a>
      </nav>

    </div>
  </section>
</template>

<script>
import CanvasAnimation from '@/components/CanvasAnimation.vue';

export default {
  layout: 'index',
  components: { CanvasAnimation }
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables.scss';

.container {
  font-family: $font-primary;
  text-transform: uppercase;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
}
.content {
  text-align: center;
  z-index: 1;
}
canvas {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 0;
}

span.i-am {
  font-size: 50px;
  color: $color-white;
  letter-spacing: 14px;
}
h1.name {
  font-size: 80px;
  letter-spacing: 12px;
  color: $color-yellow;
  line-height: 110px;
}
h2.title {
  font-size: 50px;
  color: $color-white;
  letter-spacing: 8px;
}

.navigation {
  padding-top: 40px;

  &__item {
    font-size: 18px;
    margin-right: 50px;
    color: $color-grey;
    text-decoration: none;
    transition: color 0.3s ease;
    font-weight: normal;

    &:last-child {
      margin: 0;
    }
    &:hover {
      color: $color-yellow;
    }
  }
}

.social-navigation {
  padding-top: 40px;

  &__item {
    width: 30px;
    height: 30px;
    display: inline-block;
    margin-right: 20px;
    transition: transform 0.2s ease;
    color: $color-yellow;

    &:hover {
      transform: scale(1.2);
      color: lighten($color-yellow, 10%);
    }
    &:last-child {
      margin: 0;
    }
    svg {
      fill: currentColor;
      width: 100%;
      height: 100%;
    }
  }
}
</style>

