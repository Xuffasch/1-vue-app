<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello from my first Vite/Vue app" />
</template>

<script>
  import HelloWorld from './components/HelloWorld.vue'
  export default {
    name: "1-vue-app",
    components: {
      HelloWorld
    }
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

img {
  @apply mx-auto;
}

body {
  @apply flex flex-col ;
}

@screen xs {
  body {
    @apply grid grid-cols-2 gap-x-4 bg-yellow-400
  }
}
</style>