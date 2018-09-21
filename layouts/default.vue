<template>
  <main>
    <aside class="sidebar">

      <img class="avatar" :src="avatar" alt="Avatar">

      <nav class="main-navigation">
        <nuxt-link class="main-navigation__item" to="/">
          <fa-icon :icon="['fas', 'home']" /> Home
        </nuxt-link>
        <nuxt-link class="main-navigation__item" to="/about">
          <fa-icon :icon="['fas', 'address-card']" /> About Me
        </nuxt-link>
        <nuxt-link class="main-navigation__item" to="/experience">
          <fa-icon :icon="['fas', 'briefcase']" />Experience
        </nuxt-link>
        <nuxt-link class="main-navigation__item" to="/projects">
          <fa-icon :icon="['fas', 'folder-open']" />Projects
        </nuxt-link>
        <nuxt-link class="main-navigation__item" to="/contact">
          <fa-icon :icon="['fas', 'envelope']" />Contact Me
        </nuxt-link>
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

    </aside>
    <section class="main">
      <CanvasAnimation/>
      <nuxt/>
    </section>
  </main>
</template>

<script>
import Avatar from '@/assets/img/avatar@2x.jpg';
import CanvasAnimation from '@/components/CanvasAnimation.vue';

export default {
  components: { Avatar, CanvasAnimation },
  data() {
    return {
      avatar: Avatar
    };
  }
};
</script>


<style lang="scss">
@import '@/assets/scss/variables.scss';

body {
  background-color: $color-black;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

html,
body,
#__nuxt,
#__layout,
main {
  height: 100%;
}

main {
  display: flex;
}

.sidebar {
  background-color: $color-yellow;
  width: 300px;
  display: flex;
  flex-direction: column;
  color: $color-black;
  position: relative;
  transition: 0.3s ease-in-out;
  left: 0;
  overflow: hidden;
  white-space: nowrap;

  @media screen and (max-width: 860px) {
    width: 0px;
  }

  .avatar {
    width: 200px;
    height: 200px;
    border-radius: 5px;
    margin: 50px;
    filter: grayscale(100%) contrast(110%);
  }

  .main-navigation {
    display: flex;
    flex-direction: column;
    margin: 0 50px;
    width: 200px;

    &__item {
      font-size: 22px;
      color: $color-black;
      text-decoration: none;
      font-family: $font-primary;
      text-transform: uppercase;
      font-weight: bold;
      margin-bottom: 10px;
      padding: 0 8px;
      box-shadow: inset 0 0 0 0 $color-black;
      position: relative;
      transition: color 0.3s ease;
      z-index: 0;

      svg {
        margin-right: 10px;
        width: 20px;
        height: 25px;
      }
      &.nuxt-link-exact-active {
        color: $color-white;
        &:before {
          right: 0;
        }
      }
      &:before {
        z-index: -1;
        position: absolute;
        content: '';
        top: 0;
        right: 100%;
        bottom: 0;
        left: 0;
        background: $color-black;
        border-radius: 5px;
        transition: right 0.2s ease;
      }
      &:hover {
        color: $color-white;
        &:before {
          right: 0;
        }
      }
    }
  }

  .social-navigation {
    display: flex;
    margin-top: auto;
    justify-content: center;
    margin-bottom: 20px;
    width: 300px;

    &__item {
      width: 30px;
      height: 30px;
      display: inline-block;
      margin-right: 20px;
      transition: transform 0.2s ease;
      color: $color-black;

      &:hover {
        transform: scale(1.2);
        color: $color-white;
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
}

.main {
  position: relative;
  width: calc(100% - 300px);
  transition: 0.3s ease-in-out;

  @media screen and (max-width: 860px) {
    width: 100%;
  }

  canvas {
    position: absolute;
    width: calc(100% - 300px);
    height: 100%;
    z-index: 0;
  }
}
</style>

