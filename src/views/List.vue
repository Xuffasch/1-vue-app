<template>
  <h1>List Page</h1>
  <ul class="List">
    <li :key="1">Element 1</li>
    <li :key="2">Element 2</li>
    <li :key="3">Element 3</li>
  </ul>
</template>

<script>
  import { defineComponent } from 'vue'
  export default defineComponent({
    name: 'List',
    beforeCreate: function () {
      document.body.className = 'list'
      let nav = document.getElementsByTagName('nav')[0]
      nav.className = 'list'
    },
  })
</script>

<style scoped>
  body {
    @apply bg-yellow-400;
  }

  h1 {
    @apply mx-auto p-2 text-center text-2xl;
  }
  ul {
    @apply grid grid-cols-2 gap-4;
  }
  li {
    @apply p-4 text-center;
  }
</style>
