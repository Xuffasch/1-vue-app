<template>
  <h1 class="title">{{ msg }}</h1>
</template>

<script>
  export default {
    props: {
      msg: {
        type: String,
        required: true,
      }
    }
  }
</script>

<style>
  .title {
    @apply p-2 m-2 font-bold text-gray-700;
  }
</style>
