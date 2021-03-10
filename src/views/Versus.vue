<template>
  <h1>Versus Page</h1>
  <div class="versus">
    <img
      src="../../versus/star-wars-kylo-ren-lightsaber-figurine.jpg"
      alt="kylo ren figurine with a lightsaber"
    />
    <div class="text-2xl text-albumBlue">Versus</div>
    <img
      src="../../versus/star-wars-anakin-skywalker-lightsaber-figurine.jpg"
      alt="anakin skywalker figurine with a lightsaber"
    />
  </div>
</template>

<script>
  import { defineComponent } from 'vue'
  export default defineComponent({
    name: 'Versus',
    beforeCreate: function () {
      document.body.className = 'versus'
      let nav = document.getElementsByTagName('NAV')[0]
      nav.className = 'versus'
    },
  })
</script>

<style scoped>
  h1 {
    @apply mx-auto p-2 text-2xl text-center;
  }
  .versus {
    @apply mx-auto h-40 w-full flex justify-center items-center;
  }
  img {
    @apply max-h-full mx-2;
  }
</style>
