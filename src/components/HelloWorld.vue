<template>
  <h1 class="title">
    {{ input.msg }}
  </h1>
</template>

<script lang="ts">
  import { defineComponent, PropType } from 'vue'
  import { Hello } from '../types'

  export default defineComponent({
    name: 'HelloWorld',
    props: {
      input: {
        type: Object as PropType<Hello>,
        default: { msg: '' },
      },
    },
  })
</script>

<style>
  .title {
    @apply p-2 mx-auto text-center font-bold text-gray-700;
  }
</style>
