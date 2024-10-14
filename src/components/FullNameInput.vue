<script>
export default {
  name: "FullNameInput",
  data() {
    return {
      firstName: "",
      lastName: "",
    };
  },
  computed: {
    fullName() {
      return `${this.firstName} ${this.lastName}`;
    },
  },
};
</script>

<template>
  <input type="text" v-model="firstName" placeholder="firstName" />
  <input type="text" v-model="lastName" placeholder="lastName" />
  <p>이름: {{ fullName }}</p>
</template>

<style scoped></style>
