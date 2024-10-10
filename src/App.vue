<script>
import { RouterLink, RouterView } from "vue-router";
import Container from "./components/Container.vue";
import Header from "./components/Header.vue";

export default {
  name: "APP",
  components: {
    Header,
    Container,
  },
};
</script>

<template>
  <div id="app">
    <nav>
      <RouterLink to="/">home</RouterLink>
      <RouterLink to="/detail">detail</RouterLink>
    </nav>
    <RouterView />
  </div>
</template>

<style scoped></style>
