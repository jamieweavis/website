<template>
  <div class="container">
    <ul>
      <li v-for="project in projects" :key="project.index">
        <h2>{{ project.name }}</h2>
        <p>
          <span class="emoji">{{ project.emoji }}</span>
          {{ project.description }}
        </p>
        <p>
          <span class="emoji">{{ project.statEmoji }}</span>
          {{ project.statText }}
        </p>
        <p>
          <span class="emoji">🛠</span>
          <span v-text="project.technologies.join(', ')" />
        </p>
        <a class="underline" href="#">View Project</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data: () => ({
    projects: [
      {
        name: 'Streaker',
        emoji: '🐙',
        description: 'GitHub contribution streak tracking menubar app',
        statEmoji: '⭐️',
        statText: '44 stars',
        technologies: ['JavaScript', 'Electron']
      },
      {
        name: 'Dodgem',
        emoji: '🎪',
        description: 'Rocket League Garage trade bumping automation CLI bot',
        statEmoji: '📦',
        statText: '3k downloads',
        technologies: ['JavaScript', 'Node', 'Puppeteer']
      },
      {
        name: 'Contribution',
        emoji: '🗓',
        description:
          'GitHub contribution count & streak fetcher with zero dependencies',
        statEmoji: '📦',
        statText: '1k downloads',
        technologies: ['JavaScript', 'Node', 'Jest']
      },
      {
        name: 'Prosper',
        emoji: '💎',
        description:
          'Rocket League Garage trade aggregation & reporting CLI tool',
        statEmoji: '📦',
        statText: '1k downloads',
        technologies: ['JavaScript', 'Node', 'Puppeteer']
      },
      {
        name: 'Dotman',
        emoji: '🔮',
        description: 'Simplistic dotfile manager',
        statEmoji: '📦',
        statText: '60 downloads',
        technologies: ['TypeScript', 'Node', 'oclif']
      },
      {
        name: 'AFK',
        emoji: '💤',
        description: 'The missing screensaver shortcut for macOS',
        statEmoji: '⭐️',
        statText: '5 stars',
        technologies: ['JavaScript', 'Electron']
      }
    ]
  })
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables.scss';

ul {
  list-style: none;
  padding: 0;

  li {
    margin-bottom: 100px;
  }
}
</style>
