<template>
  <div>
    <main-view></main-view>

    <div class="container">
      <div class="main-img">
        <img :src="mainImg" alt="main-img" />
      </div>

      <div class="lottie">
        <div class="lottie-structure" @click="getSubWindow">
          <lottie
          :options="defaultOptions"
          :height="50"
          :width="50"
          v-on:animCreated="handleAnimation"
        ></lottie>
        </div>
        <div v-if="showPanel" class="panel">
          <div class="panel-content">
            <button class="close-button" @click="closePanelAndReset">
            <div class="button-container">
             <img src="../../assets/cross.png" alt="Your Image" />
            </div>
          </button>
            <button class="logout" @click="Logout">LOGOUT</button>
          </div>
        </div>
        <div v-if="showModal" class="modal" @click="closeModalOutside">
        <!-- Modal content -->
        <div class="modal-content" @click.stop>
          <div v-if="activeTab === 'register' || activeTab === 'passwordReset'">
            <button class="back-button" @click="switchTab('login')">
            <div class="back-button-container">
             <img src="../../assets/back.png" alt="Your Image" />
          </div>
          </button>
          </div>
          <div class="image-container">
             <img src="../../assets/shrine_logo.png" alt="Your Image"/>
          </div>
          <button class="close-button" @click="closeModalAndReset">
            <div class="button-container">
             <img src="../../assets/cross.png" alt="Your Image" />
          </div>
          </button>

        <!-- Login and Registration Components -->
        <div v-if="activeTab === 'login'">
          <LoginForm @update-parent-data="updateToken" @loginSuccess="closeModal" />
        </div>
        <div v-else-if="activeTab === 'passwordReset'">
          <FormData @resetSuccess="switchTab('login')" />
        </div>
        <div v-else>
          <RegisterForm @registerSuccess="closeModal" />
        </div>
        <div v-if="activeTab === 'login'">
          <div class="centered-text" @click="switchTab('passwordReset')">
              <h2>Forgot Password</h2>
            </div>
            <div class="register-text">
              <h2>I don't have account? </h2>
              <div class="register-centered-text" @click="switchTab('register')">
              <h2>Create Account</h2>
            </div>
            </div>
          </div>
      </div>
    </div>
      </div>

      <div class="circle"></div>

      <div class="carousel clearfix">
        <div class="left">
          <el-carousel
            :interval="5000"
            arrow="never"
            indicator-position="none"
            height="118px"
          >
            <el-carousel-item
              v-for="(item, index) in carouselLeft"
              :key="index"
            >
              <img :src="item" :alt="index" />
            </el-carousel-item>
          </el-carousel>
        </div>
        <div class="right">
          <el-carousel
            :interval="5000"
            arrow="never"
            indicator-position="none"
            height="118px"
          >
            <el-carousel-item
              v-for="(item, index) in carouselRight"
              :key="index"
            >
              <img :src="item" :alt="index" />
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>

      <div class="filter-pop-new">
        <span class="series">Series</span>
        <span
          class="pop"
          @click="sortBy('ALL')"
          :class="{ active: sortOrder === 'ALL' }"
          >ALL</span
        >
        <span
          class="new"
          @click="sortBy('Newest')"
          :class="{ active: sortOrder === 'Newest' }"
          >Newest</span
        >
        <span
          class="ongoing"
          @click="sortBy('OnGoing')"
          :class="{ active: sortOrder === 'OnGoing' }"
          >OnGoing</span
        >
        <span
          class="complete"
          @click="sortBy('Complete')"
          :class="{ active: sortOrder === 'Complete' }"
          >Complete</span
        >
      </div>

      <div class="comic-tabs" v-for="tab in Covers" :key="tab.id">
        <tab-view
          :comicsName="tab.title"
          :coverImg="tab.portraitImagePath"
          :comicDef="tab.des"
          :comicChap="tab.chapters"
          :comicAuth="tab.authors"
          :comicID="tab.id"
          :info="tab"
        ></tab-view>
      </div>

    </div>

    <div class="floating">
      <div class="social-media">
        <img src="../../assets/floating/chaxun.svg" alt="twitter" />
        <img src="../../assets/floating/Youtube-fill.svg" alt="twitter" />
        <img src="../../assets/floating/icon_twitter.svg" alt="twitter" />
        <img src="../../assets/floating/ins.svg" alt="twitter" />
        <img src="../../assets/floating/facebook.svg" alt="twitter" />
      </div>

      <div class="google-play">
        <img src="../../assets/floating/playstore1.png" alt="google-play" />
      </div>

      <div class="apple-store">
        <img src="../../assets/floating/appstore1.png" alt="apple-store" />
      </div>
    </div>


  </div>
</template>

<script>
import axios from "axios";
import MainView from "./MainView.vue";
import TabView from "./TabView.vue";
import Lottie from "./lottie.vue";
import * as animationData from "../../assets/lottie/login.json";
import LoginForm from '../../components/LoginForm.vue';
import RegisterForm from "../../components/RegisterForm.vue";
import FormData from "../../components/PasswordReset.vue";
export default {
  components: { MainView, TabView, lottie: Lottie, LoginForm, RegisterForm,FormData},
  data() {
    return {
      Token: null,
      showModal:false,
      showPanel:false,
      activeTab:"login",
      mainImg: require("../../assets/main_exh/169081158264c7bcbe3cf55408.jpg"),
      carouselLeft: [
        require("../../assets/main_exh/168887812964aa3c3138945507.jpg"),
        require("../../assets/main_exh/16821771096443fc5566492280.jpg"),
        require("../../assets/main_exh/167482782963d3d835915d113.jpg"),
        require("../../assets/main_exh/165263156962812811a140f862.jpg"),
      ],
      carouselRight: [
        require("../../assets/main_exh/16832899966454f78c62365801.jpg"),
        require("../../assets/main_exh/167577070063e23b4c20373684.jpg"),
        require("../../assets/main_exh/1669501075638290937edaf391.jpg"),
        require("../../assets/main_exh/164260070761e819039934536.jpg"),
      ],
      sortOrder: "ALL",
      Covers: [
        // first row
        {
          id: "0001",
          Name: "Fallen Angel",
          coverImg: require("../../assets/covers/167577146663e23e4a5f022316.jpg"),
          definition:
            "UPDATES MONDAYS - Masato a young angel accidentally travels too close to the edge of the forbidden lands and loses his wings, falling to Earth. Stranded on a new planet and without his wings, Masato must navigate the mortal world with the help of new friends he meets along the way. However, returning home to the heavens is not going to be easy, as an ancient war between the divine and the corrupted has resulted in the gates between the heavens and the mortal world being closed. Masato must now find a way to overcome the obstacles and return home, all while uncovering the truth about the ongoing war and his role in it.",
          chapters: [
            "Angel Down",
            "Pignose VS The old man!",
            "What's this powers?",
            "Clean up in Shoyo!",
            "A stroll through the forest",
            "Hear my roar!",
            "Hard decison",
          ],
          author: ["DE'ANDRE MOFFETT", "KAPUMAX OMEGA"],
          popular: [
            {
              Name: "Devil's Contract",
              coverImg: require("../../assets/covers/167577167063e23f161d271437.png"),
              definition: "Shay Jones",
            },
            {
              Name: "SHINTO",
              coverImg: require("../../assets/covers/167577163163e23eef1a6c2533.jpg"),
              definition: "Walalawa",
            },
            {
              Name: "Element",
              coverImg: require("../../assets/covers/167577155463e23ea273d6f446.jpg"),
              definition: "element|trey",
            },
            {
              Name: "Hammer Head",
              coverImg: require("../../assets/covers/1635580939617cfc0b5b4b0332.png"),
              definition: "Mike Banting & Sam Gungon",
            },
          ],
          Status: "complete",
        },
        {
          id: "0002",
          Name: "The Orphy Chord",
          coverImg: require("../../assets/covers/1682719992644c44f88122e599.jpg"),
          definition:
            "UPDATES FRIDAYS - In a world of Gods and humans some come blessed with families who inherit the ability of said God they are aligned to. Although nothing is set in stone as the Gods tend to get angry and jealous, one wrong move you could lose your abilities. Among those who are blessed with such powers have the chance to attend Olympus Champions Academy. It's the easiest way to show off your power and impress the Gods above! But some like Seph and Orphy have other plans to carve their own way that doesn't involve God's will. Is that string of fate set in stone or can they really change it?",
          chapters: ["Escape", "The Fall"],
          author: ["Schizomi"],
          popular: [
            {
              Name: "Devil's Contract",
              coverImg: require("../../assets/covers/167577167063e23f161d271437.png"),
              definition: "Shay Jones",
            },
            {
              Name: "SHINTO",
              coverImg: require("../../assets/covers/167577163163e23eef1a6c2533.jpg"),
              definition: "Walalawa",
            },
            {
              Name: "Element",
              coverImg: require("../../assets/covers/167577155463e23ea273d6f446.jpg"),
              definition: "element|trey",
            },
            {
              Name: "Hammer Head",
              coverImg: require("../../assets/covers/1635580939617cfc0b5b4b0332.png"),
              definition: "Mike Banting & Sam Gungon",
            },
          ],
          Status: "ongoing",
        },
        {
          id: "0003",
          Name: "1BLV",
          coverImg: require("../../assets/covers/169108213464cbdd96dd0fe433.jpg"),
          definition:
            "UPDATES THURSDAYS - Underground racer Jann sets his sights on winning a deadly racing tournament that takes place across the solar system. Will he and his squad be able to make it to the grand prize alive, or will they be destroyed by those who stand in their way?",
          chapters: ["INTO THE UNDERGROUND"],
          author: ["Walalawa"],
          popular: [
            {
              Name: "Devil's Contract",
              coverImg: require("../../assets/covers/167577167063e23f161d271437.png"),
              definition: "Shay Jones",
            },
            {
              Name: "SHINTO",
              coverImg: require("../../assets/covers/167577163163e23eef1a6c2533.jpg"),
              definition: "Walalawa",
            },
            {
              Name: "Element",
              coverImg: require("../../assets/covers/167577155463e23ea273d6f446.jpg"),
              definition: "element|trey",
            },
            {
              Name: "Hammer Head",
              coverImg: require("../../assets/covers/1635580939617cfc0b5b4b0332.png"),
              definition: "Mike Banting & Sam Gungon",
            },
          ],
          Status: "complete",
        },
        {
          id: "0004",
          Name: "Cave King",
          coverImg: require("../../assets/covers/163940269561b74cc70c0a1719.jpg"),
          definition:
            'UPDATES SUNDAYS Mysterious caves known as "Dungeons" arise Randomly all over this world! Professional and amateur spelunkers alike take on these dungeons in search of fame, glory, and power! The one who finds the legendary artifact, the "Philosophers Stone" will become "Cave King" and have will have the opportunity to have any of thier wishes granted!',
          chapters: ["CHAPTER 0", "CHAPTER 1"],
          author: ["Walalawa", "Anthony and Berat"],
          popular: [
            {
              Name: "Devil's Contract",
              coverImg: require("../../assets/covers/167577167063e23f161d271437.png"),
              definition: "Shay Jones",
            },
            {
              Name: "SHINTO",
              coverImg: require("../../assets/covers/167577163163e23eef1a6c2533.jpg"),
              definition: "Walalawa",
            },
            {
              Name: "Element",
              coverImg: require("../../assets/covers/167577155463e23ea273d6f446.jpg"),
              definition: "element|trey",
            },
            {
              Name: "Hammer Head",
              coverImg: require("../../assets/covers/1635580939617cfc0b5b4b0332.png"),
              definition: "Mike Banting & Sam Gungon",
            },
          ],
          Status: "ongoing",
        },

        // second row
        {
          id: "0005",
          Name: "Mutton Chop!",
          coverImg: require("../../assets/covers/164259470361e8018f4a782328.jpg"),
          definition:
            'UPDATES TUESDAYS & SUNDAYS - In the magical kingdom of Bagelvet... in the small town of Veggieville lives THE WORLDS STRONGEST SHEEP, MUTTON CHOP!! Come along and watch this humble farmer with a penchant for collateral damage, make friends and "SAVE" the world from evil Pork Grind Army and other mighty foes they face in this action packed gag series!!',
          chapters: [
            "It's the prologue",
            "Birdie In the Water",
            "Stop Fighting'...Pretty Please?",
            "Short 1 - Mutton Moves In!!",
            "Short 2 - Mutt'N' Mummy!!",
            "We Need A Hero",
            "A Fool's Fool fools a Fool",
            "Short 3 - Rival is Quite Breakable",
            "P.O.M.F, The Mighty Lord Boris!",
            "Mutton's Biggest Failure",
            "Love Doom!",
            "One True Nemesis",
            "Scattered",
            "Breaking News",
            "Welcome To Cape Cob",
            "Hunt The Runt",
            "Frobbit's Here To Serve",
          ],
          author: ["Anthony and Berat"],
          popular: [
            {
              Name: "Devil's Contract",
              coverImg: require("../../assets/covers/167577167063e23f161d271437.png"),
              definition: "Shay Jones",
            },
            {
              Name: "SHINTO",
              coverImg: require("../../assets/covers/167577163163e23eef1a6c2533.jpg"),
              definition: "Walalawa",
            },
            {
              Name: "Element",
              coverImg: require("../../assets/covers/167577155463e23ea273d6f446.jpg"),
              definition: "element|trey",
            },
            {
              Name: "Hammer Head",
              coverImg: require("../../assets/covers/1635580939617cfc0b5b4b0332.png"),
              definition: "Mike Banting & Sam Gungon",
            },
          ],
          Status: "complete",
        },
        {
          id: "0006",
          Name: "Dimensional Resources",
          coverImg: require("../../assets/covers/163911698061b2f0b41bb48561.jpg"),
          definition:
            "UPDATES SATURDAYS - A prodigy and adopted younger brother look for their elder sibling who has disappeared into the multiverse, but they may end up finding more than they bargained for. There's more at play then the young Michael Grey realizes, and the mistakes of the past always haunt the actions of the future.",
          chapters: [
            "Prologue",
            "Chapter1",
            "Chapter2",
            "Chapter3",
            "Chapter4",
            "Chapter5",
            "Chapter6",
          ],
          author: ["Kaylie"],
          popular: [
            {
              Name: "Devil's Contract",
              coverImg: require("../../assets/covers/167577167063e23f161d271437.png"),
              definition: "Shay Jones",
            },
            {
              Name: "SHINTO",
              coverImg: require("../../assets/covers/167577163163e23eef1a6c2533.jpg"),
              definition: "Walalawa",
            },
            {
              Name: "Element",
              coverImg: require("../../assets/covers/167577155463e23ea273d6f446.jpg"),
              definition: "element|trey",
            },
            {
              Name: "Hammer Head",
              coverImg: require("../../assets/covers/1635580939617cfc0b5b4b0332.png"),
              definition: "Mike Banting & Sam Gungon",
            },
          ],
          Status: "ongoing",
        },
        {
          id: "0007",
          Name: "Golden Mist",
          coverImg: require("../../assets/covers/16507848716264fa67dce79814.png"),
          definition:
            "UPDATES TUESDAYS - After the death of Kai's grandfather, Kai vowed to see his grandfather's dream through to make everyone remember his great ancestors legacy. However..that dream is short lived after Kai is transported back in time! Now he must cope with being in 16th century Noshiba. How will Kai make it back to the 20th century?!",
          chapters: [
            "Kaizen Day",
            "Kaizen's Dream Part 1",
            "Kaizen's Dream Part 2",
            "Kaizen's Dream Part 3",
            "Unforeseen Future",
            "Two Paths, Noshiba's Future",
          ],
          author: ["RedFManga"],
          popular: [
            {
              Name: "Devil's Contract",
              coverImg: require("../../assets/covers/167577167063e23f161d271437.png"),
              definition: "Shay Jones",
            },
            {
              Name: "SHINTO",
              coverImg: require("../../assets/covers/167577163163e23eef1a6c2533.jpg"),
              definition: "Walalawa",
            },
            {
              Name: "Element",
              coverImg: require("../../assets/covers/167577155463e23ea273d6f446.jpg"),
              definition: "element|trey",
            },
            {
              Name: "Hammer Head",
              coverImg: require("../../assets/covers/1635580939617cfc0b5b4b0332.png"),
              definition: "Mike Banting & Sam Gungon",
            },
          ],
          Status: "complete",
        },
        {
          id: "0008",
          Name: "Yo-Yokai",
          coverImg: require("../../assets/covers/1650881197626672ad785bc192.jpg"),
          definition:
            "UPDATES MONDAYS - Yobi Lee is a young boy who wants to be the the world's greatest Yo-Battle Champion, but even with all the confidence in the world, his hand- me-down old wooden yo-yo just doesn't have the chops to compete! But one day, a yokai named Seiryu the Azure Dragon fuses with Yobi's yo-yo, and his world was never the same again.",
          chapters: ["Seiryu The Azure Dragon"],
          author: ["Inuupen", "Alitzia(Ali)"],
          popular: [
            {
              Name: "Devil's Contract",
              coverImg: require("../../assets/covers/167577167063e23f161d271437.png"),
              definition: "Shay Jones",
            },
            {
              Name: "SHINTO",
              coverImg: require("../../assets/covers/167577163163e23eef1a6c2533.jpg"),
              definition: "Walalawa",
            },
            {
              Name: "Element",
              coverImg: require("../../assets/covers/167577155463e23ea273d6f446.jpg"),
              definition: "element|trey",
            },
            {
              Name: "Hammer Head",
              coverImg: require("../../assets/covers/1635580939617cfc0b5b4b0332.png"),
              definition: "Mike Banting & Sam Gungon",
            },
          ],
          Status: "complete",
        },

        // third row
        {
          id: "0009",
          Name: "Devil's Contract",
          coverImg: require("../../assets/covers/167577167063e23f161d271437.png"),
          definition:
            "UPDATES WEDNESDAYS - \"You can't control where you're born. You can only accept it.\" This rings true for Koi Orgakon, a young demon who dreams of seeing the world above the flames. Being born among the fiery pits of hell, she's trained for centuries at the Demi Corp academy to receive a contract to leave. But when graduating last in her class proves to have its setbacks her dream seems unlikely to be accomplished; until a stroke of good luck sends her on her way to her heaven.or another living hell. Join Koi during her battles to free herself from not only her past, but the world around her.",
          chapters: ["uh what?!?", "Crying Demon", "Start Talking!"],
          author: ["Shay Jones"],
          Status: "complete",
        },
        {
          id: "0010",
          Name: "Shinto",
          coverImg: require("../../assets/covers/167577163163e23eef1a6c2533.jpg"),
          definition: "",
          chapters: ["", "", ""],
          author: ["", ""],
          Status: "ongoing",
        },
        {
          id: "0011",
          Name: "From the Forgotten",
          coverImg: require("../../assets/covers/164259666861e8093cd3e6d527.jpg"),
          definition: "",
          chapters: ["", "", ""],
          author: ["", ""],
          Status: "complete",
        },
        {
          id: "0012",
          Name: "The 7 Northern Warlords",
          coverImg: require("../../assets/covers/167577174063e23f5c88612431.jpg"),
          definition: "",
          chapters: ["", "", ""],
          author: ["", ""],
          Status: "ongoing",
          Status: "complete",
        },

        // fourth row
        {
          id: "0013",
          Name: "Element",
          coverImg: require("../../assets/covers/167577155463e23ea273d6f446.jpg"),
          definition: "",
          chapters: ["", "", ""],
          author: ["", ""],
          Status: "complete",
        },
        {
          id: "0014",
          Name: "Apophenia",
          coverImg: require("../../assets/covers/164259080161e7f2512f37e927.jpg"),
          definition: "",
          chapters: ["", "", ""],
          author: ["", ""],
        },
        {
          id: "0015",
          Name: "The Fey Café",
          coverImg: require("../../assets/covers/1670120085638c02955c491903.jpg"),
          definition: "",
          chapters: ["", "", ""],
          author: ["", ""],
          Status: "complete",
        },
        {
          id: "0016",
          Name: "Junkie",
          coverImg: require("../../assets/covers/165927335562e6808b245cd793.jpg"),
          definition: "",
          chapters: ["", "", ""],
          author: ["", ""],
          Status: "ongoing",
        },

        // fifth row
        {
          id: "0017",
          Name: "Hammer Head",
          coverImg: require("../../assets/covers/1635580939617cfc0b5b4b0332.png"),
          definition: "",
          chapters: ["", "", ""],
          author: ["", ""],
          Status: "ongoing",
        },
        {
          id: "0018",
          Name: "High School Elite",
          coverImg: require("../../assets/covers/164259847261e81048d822934.jpg"),
          definition: "",
          chapters: ["", "", ""],
          author: ["", ""],
          Status: "complete",
        },
        {
          id: "0019",
          Name: "Elbow Room",
          coverImg: require("../../assets/covers/164345067661f511345cb54877.jpg"),
          definition: "",
          chapters: ["", "", ""],
          author: ["", ""],
          Status: "ongoing",
        },
        {
          id: "0020",
          Name: "Xero: The King of Theives",
          coverImg: require("../../assets/covers/164325110861f205a4cf53b184.jpg"),
          definition: "",
          chapters: ["", "", ""],
          author: ["", ""],
          Status: "ongoing",
        },

        // sixth row
        {
          id: "0021",
          Name: "High School Romance",
          coverImg: require("../../assets/covers/164345066261f511268658e646.jpg"),
          definition: "",
          chapters: ["", "", ""],
          author: ["", ""],
          Status: "ongoing",
        },
      ],
      ResponseData: [],
      defaultOptions: {
        animationData: animationData,
      },
      animationSpeed: 1,
    };
  },
  created() {
    this.getAll();
  },
  methods: {
    closeModal(){
      this.showModal = false;
      this.activeTab = 'login';
    },
    switchTab(tab) {
      this.activeTab = tab;
    },
    closeModalOutside(event) {
      // Check if the target of the click is within the content area of the pop-up window
      const modalContent = document.querySelector(".modal-content");
      if (!modalContent.contains(event.target)) {
        this.showModal = false;
        this.activeTab = 'login';
      }
    },
    closeModalAndReset() {
      // Close the pop-up and reset the data
      this.showModal = false;
      this.activeTab = 'login';
    },
    closePanelAndReset() {
      // Close the pop-up and reset the data
      this.showPanel = false;
    },
    sortBy(order) {
      if (this.sortOrder !== order) {
        this.sortOrder = order;
      }
    },
    handleAnimation: function (anim) {
      this.anim = anim;
    },
    getAll: function () {
      var that = this;
      // 10.1.1.55:8080
      axios.get("http://10.1.1.55:8080/home").then(
        function (response) {
          console.log(response);
          that.ResponseData = response.data;
          console.log("success");
        },
        function (err) {
          console.log(err);
        }
      );
    },
    getSubWindow() {
      if(this.Token === null) {
        this.showModal = true;
      }else {
        this.showPanel = true;
      }
    },
    Logout() {
      this.Token = null;
      axios.get("http://10.1.1.55:8080/logout").then(
        function (response) {
          console.log(response);
          console.log("successfully logout");
        },
        function (err) {
          console.log(err);
        }
      );
      this.showPanel = false;
    },
    updateToken(newData) {
      this.Token = newData;
    }
  },
  computed: {
    sortedCovers() {
      if (this.sortOrder === "ALL") {
        return this.ResponseData.slice();
      } else if (this.sortOrder === "Newest") {
        return this.ResponseData.slice().reverse();
      } else if (this.sortOrder === "OnGoing") {
        let res = [];
        let cur = this.ResponseData;
        cur.forEach((element) => {
          if (element.status == 0) {
            res.push(element);
          }
        });

        return res;
      } else if (this.sortOrder === "Complete") {
        let res = [];
        let cur = this.ResponseData;
        cur.forEach((element) => {
          if (element.status === 1) {
            res.push(element);
          }
        });

        return res;
      }
    },
  },
};
</script>

<style scoped>
body {
  background-color: black;
}
/* #region main exhibition area */
.main-img {
  margin-top: 4px;
  margin-bottom: 4px;
}
.main-img img {
  width: 1024px;
}
.main-img img:hover {
  cursor: pointer;
}
.lottie {
  position: relative;
  left: 473px;
  top:-357px;
  z-index: 5;
  margin-top: -50px;
}
.circle {
  width: 52px;
  height: 52px;
  position: relative;
  left: 960px;
  top: -357px;
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 100%;
  margin-top: -52px;
}
.lottie:hover {
  cursor: pointer;
}
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;
  cursor: default;
  backdrop-filter: blur(2px);
}
.panel {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;
  cursor: default;
  backdrop-filter: blur(2px);
}
.centered-text {
  display: flex;
  justify-content: center; 
  align-items: center; 
  color: #F9A51C;
  cursor: pointer;
  position: relative;
  padding-bottom: 10px;
  font-size: 14px;
}
.register-centered-text {
  display: flex;
  justify-content: center; 
  color: #F9A51C;
  cursor: pointer;
  position: relative;
  font-size: 14px;
  padding-left: 7px;
}
.register-text {
  display: flex;
  justify-content: center; 
  color: grey;
  cursor: pointer;
  position: relative;
  font-size: 16px;
}
.close-button{
  position: absolute;
  size: 10px;
  top:10px;
  right: 10px;
  background-color: transparent;
  cursor: pointer;
}
.image-container {
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  height: 100px; 
}

.image-container img {
  padding-right: 80px;
  padding-left: 80px;
  padding-top: 20px;
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
}
.button-container {
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  height: 20px; 
}

.button-container img {
  max-width: 20px;
  max-height: 20px;
  width: auto;
  height: auto;
  padding-right: 15px;
  padding-top: 20px;
}
.back-button-container {
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  height: 20px; 
}

.back-button-container img {
  max-width: 20px;
  max-height: 20px;
  width: auto;
  height: auto;
  padding-right: 15px;
}
.modal-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: black;
  padding: 20px;
  padding-bottom: 70px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  z-index: 9999;
  border-radius: 10px;
  backdrop-filter: none;
}
.panel-content {
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: black;
  padding: 30px;
  padding-bottom: 40px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  z-index: 9999;
  border-radius: 10px;
  backdrop-filter: none;
}
.back-button {
  position: relative;
  size: 10px;
  background-color: transparent;
  cursor: pointer;
}
.logout {
  margin-top: 45px;
  height: 40px;
  width: 150px;
  border-radius: 10px;
  background-color: #F9A51C;
  font-weight: bold;
  cursor: pointer;
}

/* #endregion main exhibition area */

/* #region carousel area */
.carousel {
  width: 1030px;
  height: 118px;
}

.carousel .left {
  width: 510px;
  display: inline-block;
  margin-left: 0px;
  margin-right: 4px;
}
.carousel .right {
  width: 510px;
  display: inline-block;
}
.el-carousel__item img {
  width: 510px;
  height: 118px;
  z-index: 1;
}
.el-carousel__item img:hover {
  cursor: pointer;
}
.el-carousel__item:nth-child(n) {
  background-color: black;
}
/* #endregion carousel area */

/* #region filter bar */
.filter-pop-new {
  height: 70px;
  position: relative;
  align-items: center;
}

.filter-pop-new .series,
.filter-pop-new .pop,
.filter-pop-new .new,
.filter-pop-new .ongoing,
.filter-pop-new .complete {
  position: absolute;
  color: #f9a51c;
  display: inline-block;
}
.filter-pop-new .series {
  font-size: 36px;
  font-weight: 500;
  top: 6px;
}
.active {
  padding-bottom: 3px;
  border-bottom: 2px #f9a51c solid !important;
}
.filter-pop-new .pop {
  font-size: 15px;
  top: 23px;
  left: 160px;
}
.filter-pop-new .new {
  font-size: 15px;
  top: 23px;
  left: 220px;
}
.filter-pop-new .ongoing {
  font-size: 15px;
  top: 23px;
  left: 305px;
}
.filter-pop-new .complete {
  font-size: 15px;
  top: 23px;
  left: 395px;
}
.filter-pop-new .pop:hover,
.filter-pop-new .new:hover,
.filter-pop-new .ongoing:hover,
.filter-pop-new .complete:hover {
  cursor: pointer;
}
/* #endregion filter bar */

/* #region comic tab */
.comic-tabs {
  white-space: nowrap;
  display: inline-block;
  margin: 1px 3px;
}
/* #endregion comic tab */

.floating {
  position: fixed;
  bottom: 30px;
  left: 20px;
  width: 170px;
  text-align: center;
}

.floating .social-media,
.floating .google-play,
.floating .apple-store {
  display: inline-block;
}
.floating .social-media img {
  height: 24px;
  display: inline-block;
  margin-bottom: 15px;
}
.floating .social-media img:nth-child(2n) {
  margin-left: 10px;
  margin-right: 10px;
}
.floating .google-play img {
  height: 40px;
  width: 120px;
  margin-bottom: 10px;
}

.floating .apple-store img {
  height: 40px;
  width: 120px;
}

.floating .social-media img:hover,
.floating .google-play img:hover,
.floating .apple-store img:hover {
  cursor: pointer;
  fill: #f9a51c;
}
</style>