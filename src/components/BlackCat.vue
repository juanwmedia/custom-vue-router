<template>
  <div :style="{backgroundImage: `url(${require(`@/assets/${imagen}`)})`}">
  </div>
</template>

<script>
export default {
  name: "BlackCat",
  props: {
    imagen: {
      type: String,
      required: true
    }
  },
};
</script>

<style scoped>
    div {
        height: 100vh;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
    }
</style>