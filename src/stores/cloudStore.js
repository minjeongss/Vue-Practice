import { defineStore } from "pinia";

// state:data, getters:computed, actions:method와 동일
export const useCloudStore = defineStore("cloud", {
  state: () => ({ cloudName: "뭉게구름", cloudCount: 5 }),
  getters: {
    doubleCloudCount: (state) => state.cloudCount * 2,
  },
  actions: {
    increment() {
      this.cloudCount++;
    },
  },
});
