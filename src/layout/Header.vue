<script>
import { RouterLink } from "vue-router";

export default {
  name: "Header",
};
</script>

<template>
  <nav>
    <RouterLink to="/"><button>#Home</button></RouterLink>
    <RouterLink to="/detail"><button>#Detail</button></RouterLink>
  </nav>
</template>

<style scoped>
nav {
  max-width: 1280px;
}
</style>
