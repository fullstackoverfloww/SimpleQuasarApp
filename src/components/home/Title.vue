<template>
  <div class="home-title--container">
    <h1>relax and enjoy</h1>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class HomeTitle extends Vue {}
</script>

<style lang="scss">
.home-title--container {
  color: $dark-gray;
  position: absolute;
  text-align: center;
  top: 0;
  animation: top-to-zero 3s ease;
  h1 {
    font-size: 5rem;
    font-weight: 400;
    font-style: italic;

    &::selection {
      background-color: $primary;
      color: $white;
    }
  }
}
</style>
