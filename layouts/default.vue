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
    <nuxt/>
  </main>
</template>

<script>
import Avatar from "@/assets/img/avatar@2x.jpg";

export default {
  components: { Avatar },
  data() {
    return {
      avatar: Avatar
    };
  }
};
</script>


<style lang="scss">
@import "@/assets/scss/variables.scss";

body {
  background-color: $black;
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
  background-color: $brandPrimaryColor;
  width: 300px;
  display: flex;
  flex-direction: column;
  color: $black;
  position: relative;
  transition: 0.2s ease;
  left: 0;

  @media screen and (max-width: 600px) {
    left: -300px;

    .social-navigation {
      flex-direction: column;
      align-items: flex-end;

      &__item {
        margin-right: 11px !important;
        margin-top: 5px !important;
      }
    }
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

    &__item {
      font-size: 22px;
      color: $black;
      text-decoration: none;
      font-family: $font-stack-primary;
      text-transform: uppercase;
      font-weight: bold;
      margin-bottom: 10px;
      padding: 0 8px;
      box-shadow: inset 0 0 0 0 $black;
      position: relative;
      transition: color 0.3s ease;
      z-index: 0;

      svg {
        margin-right: 10px;
        width: 20px;
        height: 25px;
      }
      &.nuxt-link-exact-active {
        color: $white;
        &:before {
          right: 0;
        }
      }
      &:before {
        z-index: -1;
        position: absolute;
        content: "";
        top: 0;
        right: 100%;
        bottom: 0;
        left: 0;
        background: $black;
        border-radius: 5px;
        transition: right 0.2s ease;
      }
      &:hover {
        color: $white;
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

    &__item {
      width: 30px;
      height: 30px;
      display: inline-block;
      margin-right: 20px;
      transition: transform 0.2s ease;
      color: $black;

      &:hover {
        transform: scale(1.2);
        color: $white;
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
</style>

