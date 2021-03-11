<template>
  <HelloWorld :input="message" />
  <HelloList :hellos="comments" />
  <HelloForm @hello-sent="receivedHello" />
</template>

<script lang="ts">
  import { defineComponent } from 'vue'

  import useComment from '../sources/comments.ts'

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
    setup() {
      const message = {
        msg: 'Envoyer vos suggestions à Album',
      } as Hello
      const { comments, addComment } = useComment()
      const worker: Worker | null = window.Worker
        ? new Worker('/logging.js')
        : null

      return {
        message,
        comments,
        addComment,
        worker,
      }
    },
    beforeCreate: function () {
      document.body.className = 'home'
      let nav = document.getElementsByTagName('NAV')[0]
      nav.className = 'home'
    },
    mounted() {
      this.worker.onmessage = (event) => {
        console.log('received message from logging worker : ', event.data)
      }
    },
    methods: {
      receivedHello(hello: HelloComment) {
        console.log('Received Hello Content : ', hello)
        console.log('Worker instance', this.worker)
        this.worker?.postMessage({ action: 'hello' })
        this.addComment(hello)
      },
    },
  })
</script>
