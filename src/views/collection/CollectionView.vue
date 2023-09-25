<template>
  <div>
      <main-view></main-view>
      <div class="container">
        <content-view></content-view>
        
      </div>  
  </div>
</template>

<script>
import MainView from '../home/MainView.vue'
import ContentView from './ContentView.vue'
export default {
  components: { MainView, ContentView },

}
</script>

<style>

</style>