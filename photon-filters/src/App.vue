<template>
  <div class="plugin-config" v-if="config">
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
        { text: "Dramatic", value: "dramatic" },
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
