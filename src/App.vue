<template>
  <div id="app">
      <BlackCat imagen="cat1.jpg"/> 
      <BlackCat imagen="cat2.jpg"/> 
      <BlackCat imagen="cat3.jpg"/> 
  </div>
</template>

<script>

import BlackCat from './components/BlackCat.vue';
export default {
  name: 'app',
  components: {
    BlackCat
  }
}
</script>

<style>
  html, body {
    height: 100%;
    margin: 0;
    padding: 0;
  }
</style>
