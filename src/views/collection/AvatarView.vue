<template>
  <div class="avatar-img">
    <img
      :src="URL"
      alt="avaImg"
      class="avaimg"
      @click="changeAvatar(avatar.avaImg)"
    />
  </div>
</template>

<script>
import axios from "axios";
export default {
  props: {
    avatar: Object,
  },
  data() {
    return {};
  },
  computed: {
    URL() {
      let URL = axios.defaults.baseURL + this.avatar.avaImg;
      console.log(URL);

      return URL;
    },
  },
  methods: {
    changeAvatar(src) {
      this.$emit("changeAvatar", src);
      console.log("111");
    },
  },
};

// function getImageUrl(url) {
//       return new URL(url,import.meta.url).href;
//     }
// let source = require(this.avaImg);
</script>

<style scoped>
.avaimg {
  display: inline-block;
  height: 132px;
  width: 132px;
}
</style>