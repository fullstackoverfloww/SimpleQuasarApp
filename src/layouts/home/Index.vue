<template>
  <q-layout view="hHh lpR fFf">
    <Header></Header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Header from 'components/home/Header.vue';

@Component({
  components: {
    Header,
  },
})
export default class HomeLayout extends Vue {}
</script>
