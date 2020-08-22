<template>
  <q-page class="row items-center justify-evenly">
    <HomeTitle />
    <FreelancerAnimationImage />
  </q-page>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import FreelancerAnimationImage from 'components/home/FreelancerAnimationImage.vue';
import HomeTitle from 'components/home/Title.vue';

@Component({
  components: {
    FreelancerAnimationImage,
    HomeTitle,
  },
})
export default class HomePage extends Vue {}
</script>
