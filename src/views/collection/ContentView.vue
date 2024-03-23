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
        <!-- avatar interface -->
        <div class="avatar-page">
          <div v-if="!Token" class="msg">
            <span>Login First to see your avatar !</span>
          </div>
          <div v-else class="else">
            <div class="dropdown-area">
              <el-dropdown class="dropdown-el">
                <el-button type="warning" class="set" style="color: #000">
                  Set
                </el-button>
                <el-dropdown-menu slot="dropdown" class="dropdown-menu">
                  <el-dropdown-item class="rarity">Rarity</el-dropdown-item>
                  <el-dropdown-item class="series">Series</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </div>
            <div v-for="avatar in Avatars" :key="avatar.id" class="avatars">
              <avatar-view
                :avatar="avatar"
                @changeAvatar="confirmChange"
              ></avatar-view>
            </div>
          </div>
        </div>

        <!-- sticker interface -->
        <div class="sticker-page">
          <div v-if="!Token" class="msg">
            <span>Login First to see your avatar !</span>
          </div>
          <div v-else class="else">
            <div class="dropdown-area">
              <el-dropdown class="dropdown-el">
                <el-button type="warning" class="set" style="color: #000">
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
            <div v-else class="sticker-content">
              <div
                v-for="stic in Stickers"
                :key="stic.id"
                class="stckers"
                @click="showStickerInfo(stic)"
              >
                <sticker-view :stic="stic"></sticker-view>
              </div>
            </div>
          </div>
        </div>

        <!-- achievement interface -->
        <div class="achievement-page">
          <div v-if="!Token" class="msg">
            <span>Login First to see your achievement !</span>
          </div>
          <div v-else class="achievement-content">
            <div
              v-for="achi in Achievements"
              :key="achi.id"
              class="achievements"
              @click="achi.activated && showInfo(achi)"
              :class="{ clickable: achi.activated }"
            >
              <achievement-view :achi="achi"></achievement-view>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="avamodal" v-show="showAvaModal" @click="hideAvaModal">
      <div class="inner">
        <p>Change Your Avatar ?</p>
        <button class="con" @click="changeAvatar">Confirm</button>
        <button class="can" @click="showAvaModal = false">Cancle</button>
      </div>
    </div>
    <div class="achmodal" v-show="showAchModal" @click="hideAchModal">
      <div class="inner">
        <img :src="achImg" alt="achImg" />
        <div class="info">
          <div>
            <p>Description : {{ info.des }}</p>
          </div>
          <div>
            <p>Reward Coin : {{ info.coin }}</p>
          </div>
          <div>
            <p>Reward XP : {{ info.xp }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="stimodal" v-show="showStiModal" @click="hideStiModal">
      <div class="inner">
        <img :src="stiImg" alt="stiImg" />
        <div class="info">
          <div>
            <p>Series : {{ info.series }}</p>
          </div>
          <div>
            <p>Artist : {{ info.artist }}</p>
          </div>
          <div>
            <p>Set : {{ info.set }}</p>
          </div>
          <div>
            <p>Rarity : {{ info.rarity }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Bus from "../../utils/EventBus.js";
import AvatarView from "./AvatarView.vue";
import StickerView from "./StickerView.vue";
import AchievementView from "./AchievementView.vue";
export default {
  components: { AvatarView, StickerView, AchievementView },
  data() {
    return {
      curPage: "AVATARS",
      comicID: 3,
      Avatars: [
        {
          id: 1,
          avaImg: require("../../assets/avatars/avatar_1.png"),
        },
        {
          id: 2,
          avaImg: require("../../assets/avatars/avatar_2.png"),
        },
        {
          id: 3,
          avaImg: require("../../assets/avatars/avatar_3.png"),
        },
        {
          id: 4,
          avaImg: require("../../assets/avatars/avatar_4.png"),
        },
        {
          id: 5,
          avaImg: require("../../assets/avatars/avatar_5.png"),
        },
      ],
      Stickers: [
        {
          id: 1,
          StiImg: require("../../assets/stickers/sticker_03.png"),
          info: {
            series: "The Fey Cafe",
            artist: "Christian Sandino",
            set: "Launch 001",
            rarity: "Common",
          },
        },
        {
          id: 2,
          StiImg: require("../../assets/stickers/sticker_01.png"),
          info: {
            series: "The Fey Cafe",
            artist: "Christian Sandino",
            set: "Launch 001",
            rarity: "Common",
          },
        },
        {
          id: 3,
          StiImg: require("../../assets/stickers/sticker_02.png"),
          info: {
            series: "From the Forgotten",
            artist: "Struggling4rtist",
            set: "Launch 001",
            rarity: "Common",
          },
        },
      ],
      Achievements: [
        {
          id: 1,
          activated: 0,
          AchImg: require("../../assets/achievements/achievement_01.png"),
          info: {
            coin: 50,
            xp: 200,
            des: "Read 50 pages of manga!",
          },
        },
        {
          id: 2,
          activated: 1,
          AchImg: require("../../assets/achievements/achievement_05.png"),
          info: {
            coin: 50,
            xp: 200,
            des: "Read 50 pages of manga!",
          },
        },
        {
          id: 3,
          activated: 0,
          AchImg: require("../../assets/achievements/achievement_01.png"),
          info: {
            coin: 50,
            xp: 200,
            des: "Read 50 pages of manga!",
          },
        },
        {
          id: 4,
          activated: 1,
          AchImg: require("../../assets/achievements/achievement_05.png"),
          info: {
            coin: 50,
            xp: 200,
            des: "Read 50 pages of manga!",
          },
        },
        {
          id: 5,
          activated: 0,
          AchImg: require("../../assets/achievements/achievement_01.png"),
          info: {
            coin: 50,
            xp: 200,
            des: "Read 50 pages of manga!",
          },
        },
        {
          id: 6,
          activated: 0,
          AchImg: require("../../assets/achievements/achievement_01.png"),
          info: {
            coin: 50,
            xp: 200,
            des: "Read 50 pages of manga!",
          },
        },
        {
          id: 7,
          activated: 0,
          AchImg: require("../../assets/achievements/achievement_01.png"),
          info: {
            coin: 50,
            xp: 200,
            des: "Read 50 pages of manga!",
          },
        },
        {
          id: 8,
          activated: 0,
          AchImg: require("../../assets/achievements/achievement_01.png"),
          info: {
            coin: 50,
            xp: 200,
            des: "Read 50 pages of manga!",
          },
        },
        {
          id: 9,
          activated: 1,
          AchImg: require("../../assets/achievements/achievement_03.png"),
          info: {
            coin: 50,
            xp: 200,
            des: "Read 50 pages of manga!",
          },
        },
        {
          id: 10,
          activated: 1,
          AchImg: require("../../assets/achievements/achievement_03.png"),
          info: {
            coin: 50,
            xp: 200,
            des: "Read 50 pages of manga!",
          },
        },
        {
          id: 11,
          activated: 0,
          AchImg: require("../../assets/achievements/achievement_01.png"),
          info: {
            coin: 50,
            xp: 200,
            des: "Read 50 pages of manga!",
          },
        },
        {
          id: 12,
          activated: 0,
          AchImg: require("../../assets/achievements/achievement_01.png"),
          info: {
            coin: 50,
            xp: 200,
            des: "Read 50 pages of manga!",
          },
        },
        {
          id: 13,
          activated: 0,
          AchImg: require("../../assets/achievements/achievement_01.png"),
          info: {
            coin: 50,
            xp: 200,
            des: "Read 50 pages of manga!",
          },
        },
        {
          id: 14,
          activated: 1,
          AchImg: require("../../assets/achievements/achievement_02.png"),
          info: {
            coin: 50,
            xp: 200,
            des: "Read 50 pages of manga!",
          },
        },
        {
          id: 15,
          activated: 0,
          AchImg: require("../../assets/achievements/achievement_01.png"),
          info: {
            coin: 50,
            xp: 200,
            des: "Read 50 pages of manga!",
          },
        },
        {
          id: 16,
          activated: 0,
          AchImg: require("../../assets/achievements/achievement_01.png"),
          info: {
            coin: 50,
            xp: 200,
            des: "Read 50 pages of manga!",
          },
        },
        {
          id: 17,
          activated: 1,
          AchImg: require("../../assets/achievements/achievement_04.png"),
          info: {
            coin: 50,
            xp: 200,
            des: "Read 50 pages of manga!",
          },
        },
        {
          id: 18,
          activated: 0,
          AchImg: require("../../assets/achievements/achievement_02.png"),
          info: {
            coin: 50,
            xp: 200,
            des: "Read 50 pages of manga!",
          },
        },
        {
          id: 19,
          activated: 1,
          AchImg: require("../../assets/achievements/achievement_05.png"),
          info: {
            coin: 50,
            xp: 200,
            des: "Read 50 pages of manga!",
          },
        },
        {
          id: 20,
          activated: 1,
          AchImg: require("../../assets/achievements/achievement_05.png"),
          info: {
            coin: 50,
            xp: 200,
            des: "Read 50 pages of manga!",
          },
        },
      ],
      selected: "",
      showAvaModal: false,
      showAchModal: false,
      showStiModal: false,
      achImg: "",
      stiImg: "",
      info: {
        des: "",
        coin: 0,
        xp: 50,
        series: "",
        set: "",
        rarity: "",
        artist: "",
      },
    };
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
    confirmChange(src) {
      this.showAvaModal = true;
      this.selected = src;
      console.log("222");
      console.log(this.selected);
    },
    changeAvatar() {
      this.showAvaModal = false;
      Bus.$emit("changeAvatar", this.selected);
      localStorage.setItem("avatar", JSON.stringify(this.selected));
    },
    showInfo(achi) {
      this.achImg = achi.AchImg;
      this.info = achi.info;
      this.showAchModal = true;
    },
    showStickerInfo(stic) {
      this.stiImg = axios.defaults.baseURL + stic.StiImg;
      this.info = stic.info;
      this.showStiModal = true;
    },
    hideAvaModal(e) {
      if (Array.from(e.target.classList).includes("avamodal")) {
        this.showAvaModal = false;
      }
    },
    hideAchModal(e) {
      if (Array.from(e.target.classList).includes("achmodal")) {
        this.showAchModal = false;
      }
    },
    hideStiModal(e) {
      if (Array.from(e.target.classList).includes("stimodal")) {
        this.showStiModal = false;
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
    Token: {
      get() {
        return JSON.parse(localStorage.getItem("Token"));
      },
    },
  },
  created() {
    if (this.Token) {
      var that = this;
      axios({
        url: "/avatars",
        method: "get",
        headers: {
          userId: JSON.parse(localStorage.getItem("userId")),
        },
      }).then(
        function (res) {
          console.log(res.data);
          that.Avatars = res.data.map((a) => {
            return {
              id: a.id,
              avaImg: a.collectablePath,
            };
          });
          console.log(that.Avatars);
        },
        function (err) {
          console.log(err);
        }
      );

      axios({
        url: "/stickers",
        method: "get",
        headers: {
          userId: JSON.parse(localStorage.getItem("userId")),
        },
      }).then(
        function (res) {
          console.log(res);
          that.Stickers = res.data.map((s) => {
            return {
              id: s.id,
              StiImg: s.collectablePath,
              info: {
                series: "The Fey Cafe",
                artist: "Christian Sandino",
                set: "Launch 001",
                rarity: "Common",
              },
            };
          });
        },
        function (err) {
          console.log(err);
        }
      );
      // axios
      //   .get("/stickers", { token: JSON.parse(localStorage.getItem("Token")) })
      // .then(
      //   function (res) {
      //     console.log(res);
      //     this.Stickers = res.data.data.map((v) => {
      //       return {
      //         id: v.id,
      //         avaImg: v.img,
      //       };
      //     });
      //   },
      //   function (err) {
      //     console.log(err);
      //   }
      // );
    }
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
.achievement-content {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.achievements {
  display: inline-flex;
  margin-top: 10px;
  margin-bottom: -4px;
}
.sticker-content {
  display: grid;
  grid-template-columns: repeat(5, 200px);
}
.stckers {
  cursor: pointer;
}
.msg {
  color: #f9a51c;
  font-size: 16px;
  font-weight: bold;
  position: relative;
  left: 390px;
  top: 200px;
}
.avamodal,
.achmodal,
.stimodal {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: #26262649;
  backdrop-filter: blur(2px);
}
.avamodal .inner {
  font-size: 20px;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 350px;
  height: 250px;
  background: #000;
  border-radius: 20px;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  color: #f9a51c;
  box-shadow: 0px 0px 12px #f9a41cbd;
}
.avamodal p {
  margin-top: 30px;
}
.avamodal .con,
.avamodal .can {
  width: 180px;
  height: 50px;
  font-size: 14px;
  font-weight: bold;
  border-radius: 30px;
  background: #f9a51c;
  margin-top: 20px;
  cursor: pointer;
}

.achmodal .inner,
.stimodal .inner {
  display: flex;
  border: 5px solid #ffb728;
  width: 400px;
  height: 600px;
  border-radius: 20px;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  flex-direction: column;
  align-items: center;
  text-align: center;
  background: #bb702e;
  color: #ffb728;
  font-size: 20px;
}
.achmodal .inner img {
  margin-top: 40px;
  width: 200px;
}
.stimodal .inner img {
  margin-top: 40px;
  width: 250px;
}
.achmodal .inner .info,
.stimodal .inner .info {
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: left;
  text-align: left;
  margin-top: 40px;
}

.achmodal .inner .info p,
.stimodal .inner .info p {
  margin-top: 5px;
}
.clickable {
  cursor: pointer;
}
</style>
