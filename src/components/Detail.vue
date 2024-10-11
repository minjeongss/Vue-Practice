<script>
import Button from "./Button.vue";
import Container from "./Container.vue";
export default {
  name: "Detail",
  components: {
    Container,
    Button,
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
  <Button @btnClick="counter" />
  <Container :count="count" />
</template>

<style scoped></style>
