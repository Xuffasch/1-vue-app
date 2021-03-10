<template>
  <transition name="image-fade" mode="out-in">
    <div class="news">
      <component :is="view"></component>
    </div>
  </transition>
</template>

<script>
  import { defineComponent, ref } from 'vue'
  import banners from '../assets/banners.ts'

  export default defineComponent({
    name: 'FadeBanner',
    components: {
      banner1: {
        template:
          '<img src="../banner/BAN_Powerrangers_Prod_Web.jpg" alt="banner1" />',
      },
      banner2: {
        template: '<img src="../banner/BAN_SUPER7_SLIDE.jpg" alt="banner2" />',
      },
      banner3: {
        template:
          '<img src="../banner/BAN_TMNT_Neca_Prod_Precommande_Web.jpg" alt="banner2" />',
      },
      banner4: {
        template:
          '<img src="../banner/BAN_Transformers_Prod_Web.jpg" alt="banner4" />',
      },
    },
    setup() {
      const view = ref('banner1')
      const views = banners.map((b) => b.name)
      const currentImage = ref(0)
      const timer = null
      return {
        view,
        views,
        currentImage,
        timer,
      }
    },
    // mounted: function () {
    //   this.timer = setInterval(this.next, 3000)
    // },
    // unmount: function () {
    //   clearInterval(this.timer)
    // },
    methods: {
      next: function () {
        this.currentImage = (this.currentImage + 1) % this.views.length
        this.view = this.views[this.currentImage]
      },
    },
  })
</script>

<style>
  .image-fade-enter-active,
  .image-fade-leave-active {
    transition: opacity 0.3s ease;
  }

  .image-fade-enter-from,
  .image-fade-leave-to {
    opacity: 0;
  }
</style>
