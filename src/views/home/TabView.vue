<template>
  <div class="comic-tab">
    <router-link
      :to="{
        name: 'detail',
        query: {
          comicname: comicsName,
          comicDef: comicDef,
          comicChap: comicChap,
          info: info,
          rightList: rightList,
          comicID: comicID,
        },
      }"
    >
      <img :src="URL" :alt="comicsName" class="coverimg" />
    </router-link>
  </div>
</template>

<script>
import axios from "axios";
export default {
  props: {
    coverImg: String,
    comicsName: String,
    comicDef: String,
    comicChap: Array,
    comicAuth: Array,
    info: Object,
    rightList: Array,
    comicID: Number,
  },
  data() {
    return {};
  },
  computed: {
    URL() {
      let URL = axios.defaults.baseURL + "/" + this.coverImg;
      return URL;
    },
  },
};
</script>

<style scoped>
.comic-tab .coverimg {
  height: 200px;
  width: 250px;
  border-radius: 20px;
  display: inline-block;
}
</style>