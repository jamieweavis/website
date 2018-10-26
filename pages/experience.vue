<template>
  <div class="container">
    <ul class="experience-timeline">
      <li 
        v-for="position in positions" 
        :key="position.index" 
        class="experience-timeline__item">
        <div>
          <strong>{{ position.title }}</strong>
          @ <a 
            :href="position.website" 
            class="underline" 
            target="_blank">{{ position.company }}</a>
          <span class="emoji">{{ position.emoji }}</span>
        </div>
        <div class="date">{{ position.date }}</div>
        <div v-text="position.skills.join(', ')"/>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data: () => ({
    positions: [
      {
        title: 'Lead Developer',
        company: 'Smart Recruit',
        website: 'https://smartrecruitonline.com',
        emoji: '🤝',
        date: 'October 2018 - Present',
        skills: ['Angular', 'Node', 'Sails', 'MySQL']
      },
      {
        title: 'Frontend Developer',
        company: 'Propeller',
        website: 'https://www.propeller.co.uk/',
        emoji: '🤖',
        date: 'June 2018 - September 2018 (4 months)',
        skills: ['JavaScript', 'PHP', 'WordPress']
      },
      {
        title: 'Software Developer',
        company: 'Emailcenter',
        website: 'https://maxemail.xtremepush.com/',
        emoji: '📬',
        date: 'June 2016 - June 2018 (2 years)',
        skills: ['JavaScript', 'ExtJS', 'PHP', 'MySQL']
      },
      {
        title: 'Junior Software Developer',
        company: 'Emailcenter',
        website: 'https://maxemail.xtremepush.com/',
        emoji: '📭',
        date: 'July 2014 - June 2016 (2 years)',
        skills: ['JavaScript', 'ExtJS', 'PHP', 'MySQL']
      },
      {
        title: 'BSc Computer Science',
        company: 'University of Northampton',
        website: 'https://www.northampton.ac.uk/',
        emoji: '🎓',
        date: '2010 - 2014 (4 years)',
        skills: ['Internet Technology & Security Specialisation']
      },
      {
        title: 'BTEC General Computing',
        company: 'Tresham College',
        website: 'https://www.tresham.ac.uk/',
        emoji: '📚',
        date: '2007 - 2010 (3 years)',
        skills: []
      }
    ]
  })
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables.scss';

.experience-timeline {
  padding: 0;
  list-style: none;

  &__item {
    margin-bottom: 100px;
  }
}

.date {
  opacity: 0.33;
  font-weight: bold;
  margin: 10px 0;
}
</style>
