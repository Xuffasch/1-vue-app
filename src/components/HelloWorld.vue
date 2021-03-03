<template>
  <h1 class="title">{{ input?.msg ?? 'Welcome' }}</h1>
  <p>Version : {{ input?.version ?? '0' }}</p>
</template>

<script lang="ts">
  import { defineComponent, PropType } from 'vue'
  import { Hello } from '../types'

  export default defineComponent({
    name: 'HelloWorld',
    props: {
      input: Object as PropType<Hello>,
    },
  })
</script>

<style>
  .title {
    @apply p-2 m-2 font-bold text-gray-700;
  }
</style>
