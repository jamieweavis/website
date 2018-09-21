<template>
  <section class="projects-section">
    <h1>My Projects</h1>
    <p>
      Below is a selection of open source projects of mine
    </p>
    <ProjectsGrid/>
  </section>
</template>

<script>
import ProjectsGrid from '@/components/ProjectsGrid.vue';

export default {
  components: { ProjectsGrid }
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables.scss';

.projects-section {
  padding: 30px;
}

h1 {
  font-family: $font-secondary;
  font-size: 40px;
  color: $color-white;
  margin-bottom: 30px;
  text-align: center;
}
p {
  font-family: $font-secondary;
  font-size: 18px;
  color: $color-white;
  margin-bottom: 50px;
  text-align: center;
}
</style>

