<script>
import Logo from "./Logo.vue";
export default {
  name: "Home",
  components: {
    Logo,
  },
  data() {
    return {
      widthArray: [100, 60, 40, 20],
    };
  },
};
</script>

<template>
  <h2>Home</h2>
  <div class="logoContainer">
    <Logo v-for="width in widthArray" :key="width" :width="width" />
  </div>
</template>

<style scoped>
.logoContainer {
  display: flex;
  align-items: flex-end;
}
</style>
