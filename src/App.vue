<script>
import { RouterView } from "vue-router";
import Header from "./layout/Header.vue";

export default {
  name: "APP",
  components: {
    Header,
  },
};
</script>

<template>
  <div id="app">
    <Header />
    <RouterView />
  </div>
</template>

<style scoped></style>
