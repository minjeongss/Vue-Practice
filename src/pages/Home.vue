<script>
import CloudInfo from "../components/CloudInfo.vue";
import Logo from "../components/Logo.vue";
export default {
  name: "Home",
  components: {
    Logo,
    CloudInfo,
  },
  data() {
    return {
      widthArray: [100, 60, 40, 20],
    };
  },
};
</script>

<template>
  <h2 hidden>Home</h2>
  <div class="logoContainer">
    <Logo v-for="width in widthArray" :key="width" :width="width" />
  </div>
  <CloudInfo />
</template>

<style scoped></style>
