<script>
export default {
  name: "Container",
  props: {
    count: Number,
  },
};
</script>

<template>
  <p>현재 카운터 수: {{ count }}</p>
</template>

<style scoped></style>
