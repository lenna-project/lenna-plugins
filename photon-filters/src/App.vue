<template>
  <div class="plugin-config" v-if="config">
    <div id="v-model-select-dynamic">
      <select v-model="selected" @change="updateConfig()">
        <option
          v-for="option in options"
          :value="option.value"
          :key="option.text"
        >
          {{ option.text }}
        </option>
      </select>
    </div>
  </div>
</template>

<script type='ts'>
import { defineComponent } from "vue";
export default defineComponent({
  name: "CannyConfig",
  props: {
    defaultConfig: Object,
  },
  data() {
    return {
      config: [],
      selected: "dramatic",
      options: [
        { text: "oceanic", value: "oceanic" },
        { text: "islands", value: "islands" },
        { text: "marine", value: "marine" },
        { text: "seagreen", value: "seagreen" },
        { text: "flagblue", value: "flagblue" },
        { text: "diamante", value: "diamante" },
        { text: "liquid", value: "liquid" },
        { text: "radio", value: "radio" },
        { text: "twenties", value: "twenties" },
        { text: "rosetint", value: "rosetint" },
        { text: "mauve", value: "mauve" },
        { text: "bluechrome", value: "bluechrome" },
        { text: "vintage", value: "vintage" },
        { text: "perfume", value: "perfume" },
        { text: "serenity", value: "serenity" },
        { text: "golden", value: "golden" },
        { text: "pastel_pink", value: "pastel_pink" },
        { text: "cali", value: "cali" },
        { text: "dramatic", value: "dramatic" },
        { text: "firenze", value: "firenze" },
        { text: "obsidian", value: "obsidian" },
        { text: "lofi", value: "lofi" },
      ],
    };
  },
  methods: {
    async updateConfig() {
      let config = {
        filter: this.selected,
      };
      console.log(config);
      this.$emit("changeConfig", config);
    },
  },
  created() {
    for (let key in this.defaultConfig) {
      let config = { key: key, value: this.defaultConfig[key] };
      this.config.push(config);
    }
    this.updateConfig();
  },
});
</script>

<style scoped>
</style>
