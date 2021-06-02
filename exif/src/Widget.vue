<template>
  <div class="plugin-config">
    <input
      type="checkbox"
      id="clear"
      v-model="clear"
      v-on:change="updateConfig()"
    />
    <label for="clear">clear exif data</label><br />
    <input v-model="author" placeholder="author" /><br />
    <input v-model="description" placeholder="description" />
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "ExifWidget",
  props: {
    defaultConfig: Object,
  },
  data() {
    return {
      clear: false,
      author: null,
      description: null,
    };
  },
  methods: {
    async updateConfig() {
      let config = {
        clear: this.clear,
        author: this.author,
        description: this.description,
      };
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
