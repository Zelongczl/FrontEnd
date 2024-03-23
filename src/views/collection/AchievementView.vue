<template>
  <div class="achi-img">
    <img :src="Achimg" alt="AchImg" class="achimg" />
  </div>
</template>

<script>
export default {
  props: {
    achi: Object,
  },
  data() {
    return {
      Achimg: this.achi.activated
        ? this.achi.AchImg
        : require("../../assets/achievements/achievement_01.png"),
    };
  },
};
</script>

<style scoped>
.achimg {
  display: inline-block;
  width: 195px;
}

.achimg:hover {
  transform: translate(0, -5px);
  transition: all 0.15s;
}
</style>