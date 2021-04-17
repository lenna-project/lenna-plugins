<template>
  <div class="plugin-config" v-if="config">
    <h1>Canny Config</h1>
    <div v-for="c in config" :key="c.key">
      <div>
        <label>{{ c.key }}: </label>
        <input
          type="number"
          :placeholder="c.key"
          v-model.number="c.value"
          @change="updateConfig()"
        />
      </div>
    </div>
  </div>
</template>

<script lang="js">
import { defineComponent } from "vue";
export default defineComponent({
  name: "CannyConfig",
  props: {
    defaultConfig: Object,
  },
  data() {
    return {
      config: [],
    };
  },
  methods: {
    async updateConfig() {
      let config = {};
      for (let c of this.config) {
        config[c.key] = c.value;
      }
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
.plugin-config {
  margin: 5px;
}
</style>
