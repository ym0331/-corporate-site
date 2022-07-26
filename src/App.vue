<template>
  <HedderMenu />
  <MainContents />
  <FotterMenu />
</template>

<script>
import 'modern-css-reset/src/reset.css'
import HedderMenu from './components/HedderMenu.vue'
import MainContents from './components/MainContents.vue'
import FotterMenu from './components/FotterMenu.vue'

export default {
  name: 'App',
  components: {
    MainContents,
    HedderMenu,
    FotterMenu,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
