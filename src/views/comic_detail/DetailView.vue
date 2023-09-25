<template>
  <div>
    <main-view></main-view>
    <!-- <p style="font-weight: bold; font-size: 50px; color: #eeeeee">
      这是 {{ $route.query.comicname }} 的Detail
    </p>
    <p style="font-weight: bold; font-size: 20px; color: #eeeeee">
      介绍 {{ $route.query.comicDef }} 的Detail
    </p>
    <div v-for="(chapter, index) in chapters" :key="index">
      <p style="font-weight: bold; font-size: 20px; color: #eeeeee">
        {{ chapter }}
      </p>
    </div> -->

    <div class="app-main">
      <div class="app-box">
        
        <hand-view :info="info"></hand-view>
        
      </div>
      <section class="section-box app-box-bt">
        <chapter-view :list="chapters"></chapter-view>
        <popular-view class="pop-right" style="width: 450px" :list="rightList"></popular-view>
      </section>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import MainView from "../home/MainView.vue";
import HandView from "./HandView.vue";
import ChapterView from "./ChapterView.vue";
import PopularView from "./PopularView.vue";
export default {
  components: { MainView, HandView, ChapterView, PopularView },
  data() {
    return {
      chapters: [],
      info: {},
      rightList: {},
      comicID:0,
    };
  },
  created() {
    this.chapters = this.$route.query.comicChap;
    // this.info = this.$route.query.info;
    // this.rightList = this.$route.query.info.popular;
    this.comicID = this.$route.query.comicID;
    this.getDetail(this.comicID);
  },
  methods:{
    getDetail(ID){
      var that = this;
      var URL = "http://10.1.1.55:8080/home/" + this.comicID;
      axios.get(URL).then(
        function (response) {
          console.log(response);
          that.info = response.data;
          that.chapters = response.data.chapters;
          console.log("success");
        },
        function (err) {
          console.log(err);
        }
      );
    }
  }
};
</script>

<style scoped>
.pop-right{
  position: relative;
  border-left: solid 3px #000;
  margin-left: 2rem;
  padding-left: 40px;
  /* background-color: #fff; */
}
.section-box{
    
  background-color: rgba(59, 59, 59, 1);

}
.app-box{
  margin: 20px auto;
  display: flex;
  flex-direction: row;
  height: 45vh;
  width: 1024px;
  /* 居中 */
  background-color: rgba(59, 59, 59, 1);
}

.app-box-bt {
  margin: 30px auto;
  margin-bottom: 15px;
  display: flex;
  flex-direction: row;
  height: 70vh;
  width: 1024px;
  /* 居中 */
  background-color: rgba(59, 59, 59, 1);
}

</style>