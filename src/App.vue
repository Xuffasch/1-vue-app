<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld :input="message" />
  <HelloList :hellos="hellos" />
  <HelloForm @hello-sent="receivedHello"></HelloForm>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "./components/HelloWorld.vue";
import HelloForm from "./components/HelloForm.vue";
import HelloList from "./components/HelloList.vue";
import { HelloComment, Hello } from "./types";
export default defineComponent({
  name: "1-vue-app",
  components: {
    HelloWorld,
    HelloForm,
    HelloList,
  },
  data() {
    return {
      message: {
        msg: "Live from Vite/Typescript/Vue - VTV !",
        version: 2,
      } as Hello,
      hellos: [] as HelloComment[],
    };
  },
  methods: {
    receivedHello(hello: HelloComment) {
      console.log("Received Hello Content : ", hello);
      this.hellos.push(hello);
    },
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

img {
  @apply mx-auto;
}

body {
  @apply grid grid-cols-2 gap-x-4 bg-yellow-400;
}

@screen xs {
  body {
    @apply flex flex-col bg-yellow-400;
  }
}
</style>
