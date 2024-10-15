<script>
import { useCloudStore } from "../stores/cloudStore";
import Logo from "./Logo.vue";

export default {
  name: "CloudInfo",
  setup() {
    const cloudStore = useCloudStore();
    return {
      cloudStore,
    };
  },
  components: {
    Logo,
  },
};
</script>

<template>
  <h3>{{ cloudStore.cloudName }}</h3>
  <div class="logoContainer">
    <Logo
      v-for="index in cloudStore.cloudCount"
      :key="index"
      :width="100 - (index - 1) * 20"
    />
  </div>
</template>

<style scoped></style>
