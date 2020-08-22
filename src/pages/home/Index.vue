<template>
  <q-page class="row items-center justify-evenly">
    <FreelancerAnimationImage />
  </q-page>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import FreelancerAnimationImage from 'components/home/FreelancerAnimationImage.vue';

@Component({
  components: {
    FreelancerAnimationImage,
  },
})
export default class HomePage extends Vue {}
</script>
