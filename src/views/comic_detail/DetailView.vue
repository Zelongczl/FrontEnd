<template>
  <div>
    <main-view></main-view>
    <p style="font-weight:bold; font-size:50px; color:#EEEEEE">这是 {{ $route.query.comicname }} 的Detail</p>
    <p style="font-weight:bold; font-size:20px; color:#EEEEEE">介绍 {{ $route.query.comicDef }} 的Detail</p>
    <div v-for="(chapter, index) in chapters" :key="index">
      <p style="font-weight:bold; font-size:20px; color:#EEEEEE">{{chapter}}</p>
    </div>
  </div>
</template>

<script>
import MainView from '../home/MainView.vue'
export default {
  components: { MainView },
  data() {
    return {
      chapters: [],
    };
  },
  created() {
    this.chapters = this.$route.query.comicChap; 
  }
}
</script>

<style>
</style>