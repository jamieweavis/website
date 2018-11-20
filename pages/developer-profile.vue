<template>
  <div class="container">
    <ul>
      <li v-for="category in categories" :key="category.index">
        <h2>{{ category.title }}</h2>
        <p v-html="category.text" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data: () => ({
    categories: [
      {
        title: 'Favourite Technologies',
        text: 'Node, JavaScript, Webpack, Electron, MySQL, Vue, Nuxt'
      },
      {
        title: 'Editor',
        text:
          'I use <a class="underline" href="https://code.visualstudio.com/" target="_blank">Visual Studio Code</a> with the <a class="underline" href="https://binaryify.github.io/OneDark-Pro/#/?id=install" target="_blank">One Dark Pro</a> theme &amp; <a class="underline" href="https://www.typography.com/fonts/operator/styles/" target="_blank">Operator Mono</a> font with <a class="underline" href="https://github.com/kiliman/operator-mono-lig" target="_blank">ligatures</a>.'
      },
      {
        title: 'Operating System',
        text:
          'I prefer macOS or Linux for development &amp; Windows for gaming.'
      },
      {
        title: 'Terminal',
        text:
          'I use the <a class="underline" href="https://www.iterm2.com/" target="_blank">iTerm2</a> terminal emulator with bash and a <a class="underline" href="https://github.com/jamieweavis/dotfiles/blob/master/.bash_prompt" target="_blank">custom prompt</a> with the <a class="underline" href="https://github.com/sindresorhus/iterm2-snazzy" target="_blank">Snazzy</a> theme.'
      },
      {
        title: 'Code Style',
        text:
          '2 spaces with <a class="underline" href="https://prettier.io/" target="_blank">Prettier</a>.'
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
