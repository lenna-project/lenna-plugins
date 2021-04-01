<template>
  <div v-if="low && high">
    <input
      id="low-input"
      type="number"
      placeholder="Low"
      v-model.number="config.low"
      @change="updateConfig(config)"
    />
    <label for="low-input">Low</label>
    <br />
    <input v-model.number="config.high" type="number" />
    <label>High</label>
    <p>Message is: {{ config }}</p>
  </div>
</template>

<script type='ts'>
import { defineComponent } from "vue";
export default defineComponent({
  name: "Canny",
  components: {},
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
  created() {
    this.config = this.defaultConfig;
    this.low = this.config.low;
    this.high = this.config.high;
  },
  methods: {
    async updateConfig(config) {
      console.log(config);
      this.$emit("changeConfig", config);
    },
  },
});
</script>

<style scoped>
</style>
