<script>
export default {
  name: "CounterButton",
  emits: ["btnClick"],
  methods: {
    handleClick() {
      this.$emit("btnClick");
    },
  },
};
</script>

<template>
  <button @click="handleClick">UP 🚀</button>
</template>

<style scoped></style>
