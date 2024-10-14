<script>
import CounterButton from "./CounterButton.vue";
import CounterContainer from "./CounterContainer.vue";
import FullNameInput from "./FullNameInput.vue";
export default {
  name: "Detail",
  components: {
    CounterContainer,
    CounterButton,
    FullNameInput,
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
  <CounterButton @btnClick="counter" />
  <CounterContainer :count="count" />
  <FullNameInput />
</template>

<style scoped></style>
