<template>
  <div id="app">
      <!-- <BlackCat imagen="cat1.jpg"/> 
      <BlackCat imagen="cat2.jpg"/> 
      <BlackCat imagen="cat3.jpg"/>  -->
      <ul>
        <RouterLink destino="black-cat-1" />
        <RouterLink destino="black-cat-2" />
        <RouterLink destino="black-cat-3" />
      </ul>
      <RouterView/>
  </div>
</template>

<script>
import RouterView from './components/RouterView.vue';
import RouterLink from './components/RouterLink.vue';
export default {
  name: 'app',
  components: {
    RouterView,
    RouterLink,
  }
}
</script>

<style>
  html, body {
    height: 100%;
    margin: 0;
    padding: 0;
  }

  ul {
    padding: 0;
    position: absolute;
    width: 100%;
    display: flex;
    justify-content: space-around;
  }
</style>
