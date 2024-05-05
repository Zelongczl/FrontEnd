<template>
  <div class="sti-img">
    <img :src="URL" alt="StiImg" class="stiimg" />
  </div>
</template>

<script>
import axios from "axios";
export default {
  props: {
    stic: Object,
  },
  data() {
    return {
      Stiimg: this.stic.StiImg,
      info: this.stic.info,
    };
  },
  computed: {
    URL() {
      let URL = axios.defaults.baseURL + this.stic.StiImg;
      console.log(URL);

      return URL;
    },
  },
};
</script>

<style scoped>
.stiimg {
  display: inline-block;
  width: 200px;
}
</style>