<script>
import Logo from "./Logo.vue";
export default {
  name: "Header",
  components: {
    Logo,
  },
};
</script>

<template>
  <div>
    <h1>
      <Logo />
      <p>Header</p>
    </h1>
  </div>
</template>

<style scoped></style>
