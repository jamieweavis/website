<template>
  <section>
    <h1>My Experience</h1>
    <p>
      Below is a timeline of my career &amp; experience.
    </p>
    <Timeline></Timeline>
  </section>
</template>

<script>
import Timeline from '@/components/ExperienceTimeline.vue';

export default {
  components: { Timeline }
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables.scss';

section {
  padding: 30px 50px;
}

h1 {
  font-family: $font-stack-secondary;
  font-size: 40px;
  color: $white;
  margin-bottom: 30px;
  text-align: center;
}
p {
  font-family: $font-stack-secondary;
  font-size: 18px;
  color: $white;
  margin-bottom: 50px;
  text-align: center;
}
</style>

