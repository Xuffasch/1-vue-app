<template>
  <div class="imageTextFrame" role="image" aria-labelledby="image-description">
    <img :class="[float, circular]" :src="imageUrl" :alt="input.alt" />
    <p id="image-description">{{ input.description }}</p>
  </div>
</template>

<script lang="ts">
  import { defineComponent, PropType, ref } from 'vue'
  import { VersusElement } from '../../types'
  export default defineComponent({
    name: 'ImageText',
    props: {
      input: {
        type: Object as PropType<VersusElement>,
        default: {
          src: '',
          alt: '',
          versus: 0,
          description: '',
        },
      },
    },
    setup(props) {
      const imageUrl = ref(props.input.src)
      const float =
        props.input.versus == 0 ? 'float-left left' : 'float-right right'
      const circular = 'circular'

      return {
        imageUrl,
        float,
        circular,
      }
    },
  })
</script>

<style scoped>
  .imageTextFrame {
    @apply my-4 px-4;
  }
  .left {
    @apply ml-4;
  }
  .right {
    @apply mr-4;
  }
  img {
    @apply w-26 h-auto mx-6;
  }
  p {
    text-align: justify;
  }

  .circular {
    -webkit-shape-outside: ellipse(80% 50% at 50% 50%);
    shape-outside: ellipse(54% 50% at 42% 50%);
  }
</style>
