<template>
  <nav>
    <router-link
      :key="links[0].name"
      :to="{ name: links[0].name }"
      class="page"
    >
      {{ links[0].title }}
    </router-link>
    <ul>
      <li v-for="(link, index) in links" :key="link.name" class="page">
        <router-link v-if="index > 0" :to="{ name: link.name }">
          {{ link.title }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
  import { defineComponent } from 'vue'
  import { allPages } from '../router/index.ts'

  export default defineComponent({
    name: 'MainNavigation',
    data() {
      return {
        links: allPages,
      }
    },
  })
</script>

<style>
  nav {
    @apply sticky top-0 flex justify-between mx-auto bg-yellow-400;
  }
  nav ul {
    @apply flex justify-center;
  }
  .page {
    @apply p-2 m-2 text-2xl;
  }
</style>
