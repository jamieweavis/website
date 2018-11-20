<template>
  <div class="app">
    <nav class="navigation">
      <div class="container  container--flex">
        <nuxt-link class="navigation__item" to="/"> Home </nuxt-link>
        <nuxt-link class="navigation__item" to="/experience">
          Experience
        </nuxt-link>
        <nuxt-link class="navigation__item" to="/projects">
          Projects
        </nuxt-link>
        <nuxt-link class="navigation__item" to="/developer-profile">
          Developer Profile
        </nuxt-link>

        <nav class="social-navigation">
          <a
            class="social-navigation__item"
            href="https://github.com/jamieweavis/"
            target="_blank"
          >
            <fa-icon :icon="['fab', 'github']" />
          </a>
          <a
            class="social-navigation__item"
            href="https://twitter.com/jamieweavis/"
            target="_blank"
          >
            <fa-icon :icon="['fab', 'twitter']" />
          </a>
          <a
            class="social-navigation__item"
            href="https://www.linkedin.com/in/jamieweavis/"
            target="_blank"
          >
            <fa-icon :icon="['fab', 'linkedin-in']" />
          </a>
        </nav>
      </div>
    </nav>

    <main><nuxt /></main>

    <footer class="footer">
      <div class="container">
        <span class="footer__text">
          Designed &amp; developed by <strong>Jamie Weavis</strong> with
          <a class="underline" href="https://nuxtjs.org/" target="_blank"
            >Nuxt</a
          >
          &amp;
          <a class="underline" href="https://zeit.co/now" target="_blank"
            >Now</a
          >
          <span class="emoji">❤️</span>
        </span>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data: () => ({
    navigation: null,
    showingNavigationShadow: false,
    navigationShadowThreshold: 80
  }),
  mounted() {
    this.navigation = document.querySelector('nav.navigation');
    window.addEventListener('scroll', this.onScroll);
  },
  methods: {
    onScroll() {
      if (this.checkShowNavigationShadow() && !this.showingNavigationShadow) {
        this.navigation.classList.add('navigation--shadow');
        this.showingNavigationShadow = true;
      }
      if (!this.checkShowNavigationShadow() && this.showingNavigationShadow) {
        this.navigation.classList.remove('navigation--shadow');
        this.showingNavigationShadow = false;
      }
    },
    checkShowNavigationShadow() {
      return window.scrollY > this.navigationShadowThreshold;
    }
  }
};
</script>

<style lang="scss">
@import '@/assets/scss/variables.scss';

.navigation {
  position: sticky;
  top: 0;
  padding: 20px 0;
  transition: 0.2s ease-in-out;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0);
  background-color: #fff;
  z-index: 1;
  margin-bottom: 80px;

  &--shadow {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }

  &__item {
    transition: 0.2s ease-in-out;
    margin-right: 50px;

    &:hover {
      color: $color-yellow;
    }

    &::before {
      content: ' ';
      background-color: $color-yellow;
      position: absolute;
      left: -4px;
      right: -4px;
      bottom: -1px;
      height: 4px;
      transition: 0.2s ease-in-out;
      border-radius: 2px;
      z-index: -1;
      opacity: 0;
    }

    &.nuxt-link-exact-active {
      &::before {
        opacity: 1;
      }
    }
  }
}

.social-navigation {
  margin-left: auto;

  &__item {
    margin-left: 20px;
    font-size: 2rem;
    transition: 0.2s ease-in-out;

    &:hover {
      color: $color-yellow;
    }
  }
}

.footer {
  padding: 100px 0;
  text-align: center;

  &__text {
    opacity: 0.4;
    transition: 0.2s ease-in-out;
    font-size: 1.4rem;
    &:hover {
      opacity: 1;
    }
  }
}
</style>
