<template>
  <section class="projects">
      <article class="project" v-for="(project, index) in projects" :key="index">
        <header class="project__header">
          <span class="project__emoji" v-html="parseEmoji(project.emoji)"></span>
          <a class="project__name" :href="project.url" target="_blank">
            <h2>{{ project.name }}</h2>
          </a>
          <span class="project__version">{{ project.version }}</span>
        </header>
        <div class="project__description">
          {{ project.description }}
        </div>
      </article>
  </section>
</template>

<script>
import twemoji from 'twemoji';

export default {
  name: 'ProjectsGrid',
  methods: {
    parseEmoji(emoji) {
      return twemoji.parse(emoji, {
        folder: 'svg',
        ext: '.svg'
      });
    }
  },
  data: () => {
    return {
      projects: [
        {
          name: 'Streaker',
          description: 'GitHub contribution streak tracking menubar app',
          version: 'v1.0.0',
          emoji: '🐙',
          url: 'https://github.com/jamieweavis/streaker',
          icon: '',
          language: 'JavaScript',
          stars: 30
        },
        {
          name: 'Streaker',
          description: 'GitHub contribution streak tracking menubar app',
          version: 'v1.0.0',
          emoji: '🐙',
          url: 'https://github.com/jamieweavis/streaker',
          icon: '',
          language: 'JavaScript',
          stars: 30
        },
        {
          name: 'Streaker',
          description: 'GitHub contribution streak tracking menubar app',
          version: 'v1.0.0',
          emoji: '🐙',
          url: 'https://github.com/jamieweavis/streaker',
          icon: '',
          language: 'JavaScript',
          stars: 30
        },
        {
          name: 'Streaker',
          description: 'GitHub contribution streak tracking menubar app',
          version: 'v1.0.0',
          emoji: '🐙',
          url: 'https://github.com/jamieweavis/streaker',
          icon: '',
          language: 'JavaScript',
          stars: 30
        },
        {
          name: 'Streaker',
          description: 'GitHub contribution streak tracking menubar app',
          version: 'v1.0.0',
          emoji: '🐙',
          url: 'https://github.com/jamieweavis/streaker',
          icon: '',
          language: 'JavaScript',
          stars: 30
        },
        {
          name: 'Streaker',
          description: 'GitHub contribution streak tracking menubar app',
          version: 'v1.0.0',
          emoji: '🐙',
          url: 'https://github.com/jamieweavis/streaker',
          icon: '',
          language: 'JavaScript',
          stars: 30
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables.scss';

.projects {
  display: grid;
  grid-template-columns: 30% 30% 30%;
  grid-gap: 5%;
  height: 100%;
}

.project {
  background: $white;
  box-shadow: inset 0 0 0 3px rgb(163, 165, 171);
  padding: 20px;
  border-radius: 10px;
  font-family: $font-stack-secondary;

  &__header {
    display: flex;
    margin-bottom: 10px;
  }
  &__emoji {
    width: 26px;
    margin-right: 20px;
  }
  &__name {
    text-decoration: none;
    color: $black;
  }
  &__version {
    margin-left: auto;
    color: rgb(163, 165, 171);
  }
  &__description {
    color: $black;
  }
}
</style>

