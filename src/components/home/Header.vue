<template>
  <q-header elevated class="home-header">
    <q-btn
      outline
      class="bg-white home-header--button"
      color="primary"
      icon-right="login"
      label="Entrar"
    />
  </q-header>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class HomeHeader extends Vue {}
</script>

<style lang="scss">
.home-header {
  background-color: $primary;
  height: 76px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 5px 80px;

  .home-header--button {
    border-radius: 8px;
    font-size: 17px;
  }
}
</style>
