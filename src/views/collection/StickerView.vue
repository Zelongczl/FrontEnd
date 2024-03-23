<template>
  <div class="sti-img">
    <img :src="URL" alt="StiImg" class="stiimg" />
  </div>
</template>

<script>
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
      let URL = "http://10.1.1.55:8081" + this.stic.StiImg;
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