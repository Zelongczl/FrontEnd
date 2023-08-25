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

</style>
