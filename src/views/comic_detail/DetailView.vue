<template>
  <div>
    <main-view></main-view>
    <!-- <p style="font-weight: bold; font-size: 50px; color: #eeeeee">
      {{ $route.query.comicname }}
    </p>
    <p style="font-weight: bold; font-size: 20px; color: #eeeeee">
      {{ $route.query.comicDef }} 
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

        <div class="back">
          <div class="list-box">
            <div style="width: 0px;" class="box">
              <h1 class="title">Chapters</h1>
            </div>
            <div class="list-item" v-for="(chapter, index) in chapters" :key="index">
              <router-link :to="'reader'"> 
              <chapter-view :chapterName="chapter.name" :index="index"
                  :src="chapter.src"></chapter-view>
              </router-link>
            </div>
          </div>
        </div>
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
      chapters: [
        {
          src: require("../../assets/chapter-cover/Devil-Contract/1.jpg"),
          name: "test",
        },
        {
          src: require("../../assets/chapter-cover/Devil-Contract/1.jpg"),
          name: "tesr1"
        }
      ],
      info: {},
      rightList: {},
      comicID: 0,
    };
  },
  created() {
    this.chapters = this.$route.query.comicChap;
    this.info = this.$route.query.info;
    this.rightList = this.$route.query.info.popular;
    this.comicID = this.$route.query.comicID;
    this.getDetail(this.comicID);
  },
  methods: {
    getDetail(ID) {
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
.pop-right {
  position: relative;
  border-left: solid 3px #000;
  margin-left: 2rem;
  padding-left: 40px;
  /* background-color: #fff; */
}

.section-box {

  background-color: rgba(59, 59, 59, 1);

}

.app-box {
  margin: 20px auto;
  display: flex;
  flex-direction: row;
  height: 45vh;
  width: 1024px;
  background-color: rgba(59, 59, 59, 1);
}

.app-box-bt {
  margin: 30px auto;
  margin-bottom: 15px;
  display: flex;
  flex-direction: row;
  height: 70vh;
  width: 1024px;
  background-color: rgba(59, 59, 59, 1);
}

.back {
  width: 1000px;
  height: 40vh;
  background-color: rgba(59, 59, 59, 1);
  position: relative;
  top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.list-box {
  width: 100%;
  height: 10vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
  margin-top: 20px;
  margin-left: 10px;
}

.list-item {
  width: 30%;
  /* show 3 items in a line */
  margin-bottom: 20px;
  /* creat interval */
  margin-left: 20px;
  border-radius: 10px;
  height: 42px;
  text-align: center;
  background-color: rgba(0, 0, 0, 1);
  color: rgba(249, 167, 32, 1);
  display: flex;
  justify-content: center;
  align-items: center;
  /* Vertical Centring */
}

.list-item:hover {
  opacity: 0.6;
}
</style>