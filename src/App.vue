<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import HomeView from './views/home/HomeView.vue'

export default (await import('vue')).defineComponent({
  components: { HomeView },
  data(){
    return {
      
    }
  }
})
</script>

<style>
body {
  background-color: black;
  margin: 0;
  padding: 0;
  font: 12px/1.5 "Microsoft YaHei", Tahoma, Helvetica, Arial, "\5b8b\4f53", sans-serif;
  color: #333;
}
</style>
