<template>
  <h1 class="title">{{ input.msg }}</h1>
  <p>Version : {{ input.version }}</p>
</template>

<script lang="ts">
  import { defineComponent, PropType } from 'vue'
  import { Hello } from '../types'
  export default defineComponent ({
    props: {
      input: {
        type: Object as PropType<Hello>,
        required: true,
      }
    }
  })
</script>

<style>
  .title {
    @apply p-2 m-2 font-bold text-gray-700;
  }
</style>
