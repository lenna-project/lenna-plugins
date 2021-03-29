<template>
  <div v-if="low && high">
    <input v-model="low" type="number" />
    <label>Low</label>
    <input v-model="high" type="number" />
    <label>High</label>
  </div>
</template>

<script>
export default {
  name: "Canny",
  props: {
    defaultConfig: Object,
  },
  data() {
    return {
      config: {
        low: 50,
        high: 100,
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
    this.low = Number(this.config["low"] || 50);
    this.high = Number(this.config["high"] || 100);
  },
};
</script>

<style scoped>
</style>
