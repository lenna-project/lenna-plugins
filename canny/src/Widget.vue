<template>
  <div class="plugin-config" v-if="config">
    <div v-for="c in config" :key="c.key">
      <div>
        <label>{{ c.key }}</label>
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

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "CannyWidget",
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
<style scoped lang="css">
.plugin-config {
  margin: 5px;
  background-color: blueviolet;
}
</style>
