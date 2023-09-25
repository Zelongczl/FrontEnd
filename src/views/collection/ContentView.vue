<template>
    <div class="container">
        <div class="sub-nav">
            <ul class="clearfix">
                <li @click="jumpTo('AVATARS')" :class="{ active: curPage==='AVATARS'}">AVATARS</li>
                <li @click="jumpTo('STICKERS')" :class="{ active: curPage==='STICKERS'}">STICKERS</li>
                <li @click="jumpTo('ACHIEVEMENT')" :class="{ active: curPage==='ACHIEVEMENT'}">ACHIEVEMENT</li>
            </ul>

            <!-- <img src="http://10.1.1.55:8080/static/mainview/srolling1/ad1.jpg" alt=""/> -->
        </div>
        <div class="content">
            <!-- 头像界面 -->
            <div class="avatar-page">
                <div v-if="Token === null">
                    <span>Login First to see your avatar !</span>
                </div>
                <div v-else>

                    <div v-for="avatar in Avatars" :key="avatar.id">
                        <avatar-view
                        :info="avatar"
                        ></avatar-view>
                    </div>
                </div>
            </div>

            <!-- 贴纸界面 -->
            <div class="sticker-page">
                <div v-if="Token === null">
                    <span>Login First to see your stiker !</span>
                </div>
                <div v-else>
                    <div v-for="sticker in Stickers" :key="sticker.id">
                        <sticker-view
                        :info="sticker"
                        ></sticker-view>
                    </div>
                </div>
            </div>

            <!-- 成就界面 -->
            <div class="achievement-page">
                <div v-if="Token === null">
                    <span>Login First to see your achievement !</span>
                </div>
                <div v-else>
                    <div v-for="achi in Achievements" :key="achi.id">
                        <achievement-view
                        :info="achi"
                        ></achievement-view>
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
            curPage: 'AVATARS',
            comicID:3,
            Token: null,
            Avatars: [],
            Stickers: [],
            Achievements: [],

        }
    },
    created() {
        this.getDetail(this.comicID);
    },
    methods: {
        getDetail(ID){
      var that = this;
      var URL = "http://10.1.1.55:8080/home/" + this.comicID;
      axios.get(URL).then(
        function (response) {
          console.log(response);
          console.log("success");
        },
        function (err) {
          console.log(err);
        }
      );
    },
    
        jumpTo(page) {
            if(this.curPage !== page) {
                this.curPage = page;
            }
        }
    }
}
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
  border-bottom: 2px #F9A51C solid !important;
  color: #F9A51C !important;
  transition: transform 2s ease, opacity 2s ease;
}

.container {
    height: 3000px;
    overflow-x: hidden;
    position: relative;
}
.content {
    width:3072px;
    position: absolute;
    top:30px;
    left: 0px;
    overflow: hidden;
}
.avatar-page, .sticker-page, .achievement-page {
    display: inline-block;
    width: 1024px;
    height: 2000px;
    background-color: aliceblue;
}
</style>
