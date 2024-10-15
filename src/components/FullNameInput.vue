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
  <label for="firstName">성: </label>
  <input
    type="text"
    id="firstName"
    v-model="firstName"
    placeholder="firstName"
  />
  <label for="lastName"> 이름: </label>
  <input type="text" id="lastName" v-model="lastName" placeholder="lastName" />
  <p>전체 이름: {{ fullName }}</p>
</template>

<style scoped></style>
