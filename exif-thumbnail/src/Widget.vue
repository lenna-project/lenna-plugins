<template>
  <div class="plugin-config">
    <input type="checkbox" id="thumbnail" v-model="clear" v-on:change="updateConfig()"/>
    <label for="thumbnail">add thumbnail to exif data</label>
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
      thumbnail: false,
    };
  },
  methods: {
    async updateConfig() {
      let config = {
        thumbnail: this.thumbnail,
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
