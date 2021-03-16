<template>
  <h1>Versus Page</h1>
  <div class="versus">
    <img
      src="/versus/star-wars-kylo-ren-lightsaber-figurine.jpg"
      alt="kylo ren figurine with a lightsaber"
    />
    <div class="text-2xl text-albumBlue">Versus</div>
    <img
      src="/versus/star-wars-anakin-skywalker-lightsaber-figurine.jpg"
      alt="anakin skywalker figurine with a lightsaber"
    />
  </div>
  <section>
    <ImageText
      :input="{
        src: '/versus/star-wars-kylo-ren-lightsaber-figurine.jpg',
        alt: 'kylo ren with a lightsaber',
        versus: 0,
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      }"
    />
    <h1>1. Coolest lightsaber color</h1>
    <ImageText
      :input="{
        src: '/versus/star-wars-anakin-skywalker-lightsaber-figurine.jpg',
        alt: 'anakin skywalker with a lightsaber',
        versus: 1,
        description:
          'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
      }"
    />
  </section>
</template>

<script>
  import { defineComponent } from 'vue'
  import ImageText from '../components/versus/ImageText.vue'
  export default defineComponent({
    name: 'Versus',
    components: { ImageText },
    beforeCreate: function () {
      document.body.className = 'versus'
      let nav = document.getElementsByTagName('nav')[0]
      nav.className = 'versus'
    },
  })
</script>

<style scoped>
  h1 {
    @apply mx-auto p-2 text-2xl text-center;
  }
  .versus {
    @apply mx-auto h-50 w-full flex justify-center items-center;
  }
  img {
    @apply max-h-full mx-2;
  }
  .argument {
    @apply flex flex-col;
  }
</style>
