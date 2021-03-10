<template>
  <MainNavigation />
  <FadeBanner />
  <router-view :key="$route.path" />
</template>

<script lang="ts">
  import MainNavigation from './components/MainNavigation.vue'
  import FadeBanner from './components/FadeBanner.vue'
  import { defineComponent } from 'vue'
  export default defineComponent({
    name: 'AlbumComics',
    components: {
      MainNavigation,
      FadeBanner,
    },
  })
</script>

<style>
  #app {
    @apply grid grid-cols-2 gap-x-4;
  }

  @screen xs {
    #app {
      @apply flex flex-col;
    }
  }
  @screen lg {
    #app {
      @apply mx-auto w-4/5;
    }
  }
</style>
