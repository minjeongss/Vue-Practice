<script>
import Container from "./Container.vue";
export default {
  name: "Detail",
  components: {
    Container,
  },
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    counter() {
      this.count++;
    },
  },
};
</script>

<template>
  <h2>Detail</h2>
  <button @click="counter">UP!</button>
  <Container :count="count" />
</template>

<style scoped></style>
