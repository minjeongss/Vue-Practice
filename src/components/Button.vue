<script>
export default {
  name: "Button",
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
