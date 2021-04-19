<template>
  <div class="plugin-config">
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

<script>
import { defineComponent } from 'vue';
export default defineComponent({
  name: "PhotonFiltersWidget",
  props: {
    defaultConfig: Object,
  },
  data() {
    return {
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
        { text: "lofi", value: "lofi" }
      ],
    };
  },
  methods: {
    async updateConfig() {
      const config = {
        filter: this.selected,
      };
      this.$emit("changeConfig", config);
    },
  },
  created() {
    this.selected = this.defaultConfig.filter;
    this.updateConfig();
  }
});
</script>

<style scoped lang="css">
.plugin-config {
  margin: 5px;
}
</style>
