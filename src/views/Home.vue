<template>
  <HelloWorld :input="message" />
  <HelloList :hellos="hellos" />
  <HelloForm @hello-sent="receivedHello" />
</template>

<script lang="ts">
  import { defineComponent } from 'vue'

  import HelloWorld from '../components/HelloWorld.vue'
  import HelloForm from '../components/HelloForm.vue'
  import HelloList from '../components/HelloList.vue'
  import { HelloComment, Hello } from '../types'
  export default defineComponent({
    name: 'Home',
    components: {
      HelloWorld,
      HelloForm,
      HelloList,
    },
    data() {
      return {
        message: {
          msg: 'Envoyer vos suggestions à Album',
        } as Hello,
        hellos: [] as HelloComment[],
      }
    },
    methods: {
      receivedHello(hello: HelloComment) {
        console.log('Received Hello Content : ', hello)
        this.hellos.push(hello)
      },
    },
  })
</script>
