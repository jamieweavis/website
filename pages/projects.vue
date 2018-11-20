<template>
  <div class="container">
    <ul>
      <li v-for="project in projects" :key="project.index">
        <h2>{{ project.name }}</h2>
        <p>
          <span class="emoji" :class="project.emojiClass"></span>
          {{ project.description }}
        </p>
        <p>
          <span class="emoji" :class="project.statEmojiClass"></span>
          {{ project.statText }}
        </p>
        <p>
          <span class="emoji emoji--settings"></span>
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
        emojiClass: 'emoji--octopus',
        description: 'GitHub contribution streak tracking menubar app',
        statEmojiClass: 'emoji--star',
        statText: '44 stars',
        technologies: ['JavaScript', 'Electron']
      },
      {
        name: 'Dodgem',
        emojiClass: 'emoji--circus',
        description: 'Rocket League Garage trade bumping automation CLI bot',
        statEmojiClass: 'emoji--box',
        statText: '3k downloads',
        technologies: ['JavaScript', 'Node', 'Puppeteer']
      },
      {
        name: 'Contribution',
        emojiClass: 'emoji--calendar',
        description:
          'GitHub contribution count & streak fetcher with zero dependencies',
        statEmojiClass: 'emoji--box',
        statText: '1k downloads',
        technologies: ['JavaScript', 'Node', 'Jest']
      },
      {
        name: 'Prosper',
        emojiClass: 'emoji--gem',
        description:
          'Rocket League Garage trade aggregation & reporting CLI tool',
        statEmojiClass: 'emoji--box',
        statText: '1k downloads',
        technologies: ['JavaScript', 'Node', 'Puppeteer']
      },
      {
        name: 'Dotman',
        emojiClass: 'emoji--orb',
        description: 'Simplistic dotfile manager',
        statEmojiClass: 'emoji--box',
        statText: '60 downloads',
        technologies: ['TypeScript', 'Node', 'oclif']
      },
      {
        name: 'AFK',
        emojiClass: 'emoji--sleep',
        description: 'The missing screensaver shortcut for macOS',
        statEmojiClass: 'emoji--star',
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
