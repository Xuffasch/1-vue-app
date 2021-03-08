<template>
  <h2>Vos suggestions</h2>
  <ul>
    <li v-for="(hello, index) in hellos" :key="index">
      {{ hello.comment }} - {{ hello.feeling }}
    </li>
  </ul>
</template>

<script lang="ts">
  import { defineComponent, PropType } from 'vue'
  import { HelloComment } from '../types'

  export default defineComponent({
    props: {
      hellos: {
        type: Array as PropType<HelloComment[]>,
        required: true,
      },
    },
  })
</script>

<style scoped>
  * {
    @apply text-center;
  }
</style>
