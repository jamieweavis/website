<template>
<div id="timeline">
  <article class="position" v-for="(position, index) in positions" :key="index">
    <img class="position__icon" :src="position.icon" :alt="position.companyName">
    <div class="position__information">
      <h3 class="position__title">{{ position.title }}</h3>
      <h4 class="position__company">{{ position.companyName }}</h4>
      <span class="position__period">{{ position.period.start }} - {{ position.period.end }}</span>
    </div>
    <fa-icon class="position__type" v-if="position.educational === true" :icon="['fas', 'graduation-cap']" />
    <fa-icon class="position__type" v-else :icon="['fas', 'briefcase']" />
  </article>
</div>
</template>

<script>
import Tresham from '@/assets/img/tresham.svg';
import Uon from '@/assets/img/uon.svg';
import Emc from '@/assets/img/emc.svg';
import Propeller from '@/assets/img/propeller.svg';
import Sro from '@/assets/img/sro.svg';

export default {
  name: 'WorkTimeline',
  data: function() {
    return {
      positions: [
        {
          icon: Sro,
          companyName: 'Smart Recruit',
          title: 'Lead Developer',
          period: {
            start: '2018',
            end: 'Present'
          }
        },
        {
          icon: Propeller,
          companyName: 'Propeller',
          title: 'Front End Developer',
          period: {
            start: '2018',
            end: '2018'
          }
        },
        {
          icon: Emc,
          companyName: 'Emailcenter',
          title: 'Software Developer',
          period: {
            start: '2016',
            end: '2018'
          }
        },
        {
          icon: Emc,
          companyName: 'Emailcenter',
          title: 'Junior Software Developer',
          period: {
            start: '2014',
            end: '2016'
          }
        },
        {
          icon: Uon,
          companyName: 'University of Northampton',
          title: 'Computer Science',
          educational: true,
          period: {
            start: '2010',
            end: '2014'
          }
        },
        {
          icon: Tresham,
          companyName: 'Tresham College',
          title: 'General Computing',
          educational: true,
          period: {
            start: '2009',
            end: '2011'
          }
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables.scss';

#timeline {
  position: relative;
}
.position {
  box-shadow: inset 0 0 0 3px rgb(163, 165, 171);
  position: relative;
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background: $white;
  width: 100%;
  border-radius: 10px;
  text-align: left;
  display: flex;
  align-items: center;
  &:first-child {
    margin-top: 0;
  }
  &:last-child {
    margin-bottom: 0;
  }
  &__icon {
    margin-right: 20px;
    height: 65px;
  }
  &__title {
    color: $black;
    font-family: $font-stack-secondary;
    text-transform: uppercase;
  }
  &__company {
    color: $dark-grey;
    font-family: $font-stack-secondary;
  }
  &__period {
    color: rgb(163, 165, 171);
    font-family: $font-stack-secondary;
  }
  &__type {
    margin-left: auto;
    color: rgb(163, 165, 171);
  }
}

@media (min-width: 1100px) {
  #timeline {
    &::before {
      content: '';
      position: absolute;
      top: 0;
      width: 4px;
      height: calc(100% - 100px);
      background-color: $grey;
      border-radius: 2px;
      left: 50%;
      margin: 50px 0 50px -2px;

      &:nth-child(1) {
        margin-top: 50px;
      }
    }
  }
  .position {
    width: calc(50% - 20px);
    &::before {
      content: '';
      position: absolute;
      right: -25px;
      top: 50%;
      margin-top: -5px;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: $black;
      box-shadow: 0 0 0 3px $grey;
    }
    &:nth-child(2n) {
      margin-left: auto;
      &::before {
        left: -25px;
      }
    }
  }
}
</style>
