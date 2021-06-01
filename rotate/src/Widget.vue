<template>
  <div class="plugin-config">
    <div id="v-model-select-dynamic">
      <select v-model="selected" @change="updateConfig()">
        <option
          v-for="option in options"
          :value="option.value"
          :key="option.text"
        >
          {{ option.text }} Clockwise
        </option>
      </select>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "RotateWidget",
  props: {
    defaultConfig: Object,
  },
  data() {
    return {
      selected: "90",
      options: [
        { text: "90°", value: "90" },
        { text: "180°", value: "180" },
        { text: "270°", value: "270" },
      ],
    };
  },
  methods: {
    async updateConfig() {
      let config = {
        theta: 0.0,
      };
      if (this.selected === "90") {
        config.theta = 90.0;
      } else if (this.selected === "180") {
        config.theta = 180.0;
      } else if (this.selected === "270") {
        config.theta = 270.0;
      }
      this.$emit("changeConfig", config);
    },
  },
  created() {
    this.updateConfig();
  },
});
</script>

<style scoped lang="css">
.plugin-config {
  margin: 5px;
}
</style>
