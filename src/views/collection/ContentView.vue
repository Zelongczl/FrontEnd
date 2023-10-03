<template>
  <div class="container">
    <div class="sub-nav">
      <ul class="clearfix">
        <li
          @click="jumpTo('AVATARS')"
          :class="{ active: curPage === 'AVATARS' }"
        >
          AVATARS
        </li>
        <li
          @click="jumpTo('STICKERS')"
          :class="{ active: curPage === 'STICKERS' }"
        >
          STICKERS
        </li>
        <li
          @click="jumpTo('ACHIEVEMENT')"
          :class="{ active: curPage === 'ACHIEVEMENT' }"
        >
          ACHIEVEMENT
        </li>
      </ul>

      <!-- <img src="http://10.1.1.55:8080/static/mainview/srolling1/ad1.jpg" alt=""/> -->
    </div>
    <div class="content">
      <div class="moving" :style="position">
        <!-- 头像界面 -->
        <div class="avatar-page">
          <div v-if="Token === null" class="msg">
            <span>Login First to see your avatar !</span>
          </div>
          <div v-else class="else">
            <div class="dropdown-area">
                <el-dropdown class="dropdown-el">
              <el-button type="warning" class="set" style="color:#000;">
                Set
              </el-button>
              <el-dropdown-menu slot="dropdown" class="dropdown-menu">
                <el-dropdown-item class="rarity">Rarity</el-dropdown-item>
                <el-dropdown-item class="series">Series</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
            </div>
            <div v-for="avatar in Avatars" :key="avatar.id" class="avatars">
              <avatar-view :avatar="avatar"></avatar-view>
            </div>
          </div>
        </div>

        <!-- 贴纸界面 -->
        <div class="sticker-page">
          <div v-if="Token === null" class="msg">
            <span>Login First to see your avatar !</span>
          </div>
          <div v-else class="else">
            <div class="dropdown-area">
                <el-dropdown class="dropdown-el">
              <el-button type="warning" class="set" style="color:#000;">
                Set
              </el-button>
              <el-dropdown-menu slot="dropdown" class="dropdown-menu">
                <el-dropdown-item class="rarity">Rarity</el-dropdown-item>
                <el-dropdown-item class="series">Series</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
            </div>

            <div v-if="Stickers.length === 0">
                <span class="msg">Head to gacha to start your collection !</span>
            </div>
            <div v-else>

            </div>
          </div>
        </div>

        <!-- 成就界面 -->
        <div class="achievement-page">
          <div v-if="Token === null" class="msg">
            <span>Login First to see your achievement !</span>
          </div>
          <div v-else>
            <!-- <div v-for="achi in Achievements" :key="achi.id">
                        <achievement-view
                        :info="achi"
                        ></achievement-view>
                    </div> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import AvatarView from "./AvatarView.vue";
import StickerView from "./StickerView.vue";
import AchievementView from "./AchievementView.vue";
export default {
  components: { AvatarView, StickerView, AchievementView },
  data() {
    return {
      curPage: "AVATARS",
      comicID: 3,
      Token: "null",
      Avatars: [
        {
          id: 1,
          avaImg: require("../../assets/avatars/avatar_1.jpg"),
        },
        {
          id: 2,
          avaImg: require("../../assets/avatars/avatar_1.jpg"),
        },
        {
          id: 3,
          avaImg: require("../../assets/avatars/avatar_1.jpg"),
        },
        {
          id: 4,
          avaImg: require("../../assets/avatars/avatar_1.jpg"),
        },
      ],
      Stickers: [],
      Achievements: [],
    };
  },
  created() {
    // this.getDetail(this.comicID);
  },
  methods: {
    //     getDetail(ID){
    //   var that = this;
    //   var URL = "http://10.1.1.55:8080/home/" + this.comicID;
    //   axios.get(URL).then(
    //     function (response) {
    //       console.log(response);
    //       console.log("success");
    //     },
    //     function (err) {
    //       console.log(err);
    //     }
    //   );
    // },

    jumpTo(page) {
      if (this.curPage !== page) {
        this.curPage = page;
      }
    },
  },
  computed: {
    position() {
      if (this.curPage === "AVATARS") {
        return {
          position: "relative",
          left: "0px",
        };
      } else if (this.curPage === "STICKERS") {
        return {
          position: "relative",
          left: "-1024px",
        };
      } else {
        return {
          position: "relative",
          left: "-2048px",
        };
      }
    },
  },
};
</script>

<style scoped>
.sub-nav {
  margin-top: 1px;
}
.sub-nav ul li {
  width: 341px;
  height: 50px;
  font-size: 15px;
  float: left;
  color: white;
  text-align: center;
  line-height: 50px;
  background-color: #262626;
  transition-property: all;
}
.sub-nav ul li:nth-child(2) {
  width: 342px;
}
.active {
  border-bottom: 2px #f9a51c solid !important;
  color: #f9a51c !important;
  transition: transform 0.5s ease, opacity 0.5s ease;
}

.container {
  height: 3000px;
  overflow-x: hidden;
  position: relative;
  display: inline-block;
}
.content {
  width: 3072px;
  /* height: 3000px; */
  position: absolute;
  top: 53px;
  left: 0px;
  /* overflow: hidden; */
  display: inline-block;
}
.moving {
  width: 3072px;
  /* height: 1500px; */
  transition: 0.5s;
  display: inline-block;
  position: relative;
  /* overflow: hidden; */
}
.achievement-page {
  width: 1024px;
  /* height: 2000px; */
  position: absolute;
  left: 2048px;
  top: -14px;
}
.sticker-page {
  width: 1024px;
  /* height: 2000px; */
  /* background-color: rgb(95, 145, 190); */
  position: absolute;
  left: 1024px;
  top: -14px;
}
.avatar-page {
  width: 1024px;
  /* height: 2000px; */
  position: absolute;
  left: 0px;
  top: -14px;
  /* background-color: #fff; */
}
.dropdown-area {
    margin: 20px 0;
    margin-left: 940px;
}
/* .set,.rarity,.series {
    color: #000;
    background-color: #F9A51C;
    border-color: #F9A51C;
} */
.else {
  display: inline-block;
}
.avatars {
  display: inline-block;
  margin: 7px;
}
.msg {
  color: #f9a51c;
  font-size: 16px;
  font-weight: bold;
  position: relative;
  left: 390px;
  top: 200px;
}
</style>
