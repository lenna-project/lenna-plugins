<template>
  <div v-if="low">
    <input v-model="low" type="number" />
    <label>Low</label>
    <input v-model="high" type="number" />
    <label>High</label>
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "Canny",
  props: {
    defaultConfig: Object,
  },
  data() {
    return {
      config: {
        low: 50,
        high: 100
      },
      low: 50,
      high: 100,
    };
  },
  methods: {
    async updateConfig(config) {
      this.$emit("changeConfig", config);
    },
  },
  created() {
    this.config = this.defaultConfig;
    this.low = Number(this.config["low"]);
    this.high = Number(this.config["high"]);
    this.updateConfig(this.config);
  },
});
</script>

<style scoped>
</style>
