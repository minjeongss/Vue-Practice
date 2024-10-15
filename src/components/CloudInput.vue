<script>
import { useCloudStore } from "../stores/cloudStore";

export default {
  name: "CloudInput",
  setup() {
    const cloudStore = useCloudStore();
    const updateCloudName = (event) => {
      cloudStore.cloudName = event.target.value;
    };
    const updateCloudCount = (event) => {
      cloudStore.cloudCount = Number(event.target.value);
    };
    return {
      cloudStore,
      updateCloudName,
      updateCloudCount,
    };
  },
};
</script>

<template>
  <section>
    <label for="cloudName">구름 이름: </label>
    <input
      type="text"
      id="cloudName"
      :value="cloudStore.cloudName"
      @input="updateCloudName"
    />
  </section>
  <section>
    <label for="cloudCount">구름 수: </label>
    <input
      type="text"
      id="cloudCount"
      :value="cloudStore.cloudCount"
      @input="updateCloudCount"
    />
  </section>
</template>

<style scoped></style>
