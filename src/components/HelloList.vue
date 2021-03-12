<template>
  <h2>Vos suggestions</h2>
  <ul>
    <li v-for="(hello, index) in hellos" :key="index">
      <span>
        <div @class="citation">
          <p>{{ hello.comment }} - {{ hello.feeling }}</p>
          <p>{{ hello.name }}</p>
        </div>
      </span>
      <button :id="hello.name" className="suppress" @click="suppress">
        effacer
      </button>
    </li>
  </ul>
</template>

<script lang="ts">
  import { defineComponent, computed } from 'vue'
  import { useStore } from 'vuex'
  import { key } from '../store/viteStore'

  export default defineComponent({
    setup() {
      const store = useStore(key)

      return {
        hellos: computed(() => store.getters.getAllComments),
        suppress: (event) => {
          console.log('received event : ', event)
          store.commit('suppress', event.target.id)
        },
      }
    },
  })
</script>

<style scoped>
  h2 {
    @apply mx-auto text-2xl;
  }
  ul {
    @apply mt-2 mx-auto w-2/3 flex flex-col;
  }
  li ~ li {
    @apply mt-4;
  }
  li {
    @apply flex justify-between bg-white rounded-lg overflow-hidden;
  }
  span {
    @apply ml-2 my-2;
  }
  .suppress {
    @apply p-2 bg-red-800 text-white text-lg;
  }
</style>
