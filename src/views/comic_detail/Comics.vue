<template>
  <div class="home">
    <div class="nav"> 
      <img @click="goBack" src="../../assets/back.png"  style="background-color: #ffe100; width: 50px; float: left;border-radius: 50%;" alt="">
    </div>
   <div class="image-box">
    <img class="image" v-for="i,index in pages" :key="index" :src="'http://10.1.1.55:8080/static/comics/Xero:TheKingofTheives/Episode2/'+ i.imgPath" alt="">
    <button class="reward">TIP CREATOR</button>
   </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import axios from 'axios';

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  },
  data() {
    return {
      list:[{
        image:require("../../assets/7191c5f60e834caab080dc4925dc3a5.jpg"),
        pageNum:1
      },
      {
        image:require("../../assets/7191c5f60e834caab080dc4925dc3a5.jpg"),
        pageNum:1
      }],
      pages:[],
    }
  },
  created() {
    this.getPages();
  },
  methods:{
    goBack() {
      this.$router.go(-1); // go back to prev page
    },
    getPages: function () {
      var that = this;
      // 10.1.1.55:8080
      axios.get("http://10.1.1.55:8080/chapter/34").then(
        function (response) {
          console.log(response);
          that.pages = response.data.pages;
          console.log("success");
        },
        function (err) {
          console.log(err);
        }
      );
    }
  }
}
</script>
<style>
.reward{
  margin: 2% auto;
  width: 140px;
  height: 50px;
  border-radius: 10px;
  background-color: rgba(249, 167, 32, 1);
}
.reward:hover{
  opacity: 0.5;
}
.image-box{
  overflow-y: scroll;
}
body{
  background-color: #000;
}

@media screen and (max-width: 1100) {
  .image-box{
  padding: 0 30%;

}

}
.image-box{
  position: relative;
  padding: 0 20%;
  display: flex;
  flex-direction: column;
  position: relative;
  top: 10vh;
}
.nav{
  position: fixed;
  height: 50px;
  z-index: 99;
  width: 100%;
  /* background-color: #fac106; */
}
</style>