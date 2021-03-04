<template>
  <form @submit.prevent="onSubmit">
    <label for="comment">Comment:</label>
    <textarea id="comment" v-model="comment" />

    <label for="feeling">Feeling ?</label>
    <select id="feeling" v-model="feeling">
      <option>Great !</option>
      <option>So far, so good</option>
      <option>Bored !</option>
    </select>

    <input type="submit" value="Submit" />
  </form>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import { HelloComment } from '../types'
  export default defineComponent({
    emits: ['hello-sent'],
    data() {
      return {
        comment: '' as string,
        feeling: '' as string,
      }
    },
    methods: {
      onSubmit() {
        let hello = {
          comment: this.comment,
          feeling: this.feeling,
        } as HelloComment
        this.$emit('hello-sent', hello)

        this.comment = ''
        this.feeling = ''
      },
    },
  })
</script>

<style scoped>
  form {
    @apply w-2/3 mx-auto flex flex-col;
  }
  form > * {
    @apply focus:outline-none;
  }
  textarea {
    @apply p-2 h-20;
  }
  label {
    @apply my-4;
  }
  input:last-child {
    @apply my-8 h-16 bg-green-500 text-white font-black text-2xl;
  }
</style>
