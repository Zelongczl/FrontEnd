<template>
  <div class="for-sticky-only">
    <div class="topbar">
      <!-- container -->
      <div class="container clearfix">
        <!-- LHS LOGO -->
        <div class="logo leftfix">
          <img src="../../assets/shrine_logo.png" alt="ShrineLogo" />
        </div>

        <!-- LHS Navigation Area -->
        <div class="nav-bar">
          <ul class="clearfix">
            <li>
              <router-link to="/">
                <span>Home</span>
              </router-link>
            </li>
            <li>
              <router-link to="/collection">
                <span>Collection</span>
              </router-link>
            </li>
            <li>
              <router-link to="/shop">
                <span>Shop</span>
              </router-link>
            </li>
            <li>
              <router-link to="/about">
                <span>About</span>
              </router-link>
            </li>
          </ul>
        </div>

        <!-- RHS User Infomation -->
        <div class="user-info clearfix">
          <!-- User Avatar -->
          <div class="cur-avatar">
            <img ref="ava" :src="avatar" alt="cur_avatar" />
          </div>

          <!-- User info -->
          <div class="info">
            <!-- Username -->
            <div class="username">
              <div class="name">
                <span>{{ username }}</span>
              </div>
              <!-- <div class="tri">
                <img src="../../assets/icons/triangle_icon.png" alt="unknown" />
              </div> -->
            </div>

            <!-- Exp Bar -->
            <div class="exp-bar">
              <el-progress
                :show-text="false"
                :stroke-width="15"
                :percentage="50"
                color="#F9A51C"
                define-back-color="#EEEEEE"
                type="line"
              ></el-progress>
              <div class="lv-coin">
                <span
                  >LV.{{ level }} &nbsp;&nbsp;&nbsp;&nbsp;
                  <i class="el-icon-orange"></i>&nbsp;&nbsp; {{ coins }}</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Bus from "../../utils/EventBus.js";
export default {
  data() {
    return {
      username: "Tester",
      progressPercentage: 0,
      level: 2,
      coins: 0,
      // avatar: "",
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        const response = await axios.get("/backend-API-endpoint"); //Replace '/backend-API-endpoint' with the backend API endpoint
        const data = response.data;
        this.progressPercentage = data.progressPercentage; //Assume that the backend returns data 'progressPercentage'
        this.level = data.level; //Assume the backend returns 'level'
        this.coins = data.coins; //Assume the backend returns 'coins'
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    },
  },
  computed: {
    avatar: {
      get() {
        return (
          axios.defaults.baseURL + JSON.parse(localStorage.getItem("avatar")) ||
          require("../../assets/avatars/avatar_1.png")
        );
      },
      set(newValue) {
        console.log(newValue);
        this.$refs.ava.src = axios.defaults.baseURL + newValue;
      },
    },
  },
  created() {
    Bus.$on("changeAvatar", (avatar) => (this.avatar = avatar));
  },
};
</script>

<style scoped>
.for-sticky-only {
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
}

.topbar {
  height: 80px;
  background-color: #262626;
  position: relative;
  /* box-shadow: 0px 5px 10px rgba(255, 255, 255, 0.3); */
  /* #262626 */
}

/* #region LHS logo */
.topbar .logo {
  margin-top: 10px;
}

.topbar .logo img {
  height: 60px;
}

/* #endregion LHS logo end */

/* #region LHS Navigation Area */
.topbar .nav-bar {
  height: 80px;
  float: left;
  overflow: hidden;
  color: #eee;
}

.topbar .nav-bar ul li {
  height: 20px;
  line-height: 20px;
  float: left;
  text-align: center;
  font-weight: light;
  cursor: pointer;
}

.topbar .nav-bar ul li {
  margin: 30px 10px;
}

.topbar .nav-bar ul li:first-child {
  margin-left: 30px;
}

.topbar .nav-bar ul li span {
  font-size: 16px;
}

/* #endregion LHS Navigation Area end */

/* #region RHS User Info */

/* #region Username */
.topbar .user-info {
  display: flex;
  width: 170px;
  height: 80px;
  float: right;
  align-items: center;
}
.topbar .cur-avatar {
  float: left;
}
.topbar .cur-avatar img {
  width: 54px;
}
.topbar .info {
  width: 106px;
  height: 40px;
  margin-left: 10px;
}
.topbar .info .username {
  margin-left: 0px;
  font-size: 16px;
  height: 16px;
}

.topbar .info .username .name {
  display: flex;
  width: 106px;
  height: 16px;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  color: #eee;

  /* vertical-align: text-bottom; */
}

.topbar .info .username .name span {
  flex: 1;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 16px;
  transition: font-size 0.5s;
}
/* .topbar .info .username .tri {
  display: inline-block;
  vertical-align: text-bottom;
  margin-left: 2px;
}
.topbar .info .username .tri img {
  height: 16px;
  width: 16px;
  filter: brightness(1.8);
} */
/* #endregion Username end */

/* #region Exp Bar */
.topbar .exp-bar {
  margin-top: 8px;
  margin-right: 2px;
  position: relative;
}
.topbar .lv-coin {
  text-align: center;
  position: absolute;
  top: -1.5px;
  left: 20%;
  font-weight: bold;
}
/* #endregion Exp Bar end */

/* #endregion RHS User Info end */

/* #region Clear Default Style */
.container {
  width: 1024px;
  margin: 0 auto;
}
body,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
p,
blockquote,
dl,
dt,
dd,
ul,
ol,
li,
pre,
form,
fieldset,
legend,
button,
input,
textarea,
th,
td {
  margin: 0;
  padding: 0;
}

ul,
ol {
  list-style: none;
}

img {
  display: block;
  border: 0;
}

b,
strong {
  font-weight: 400;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: 100%;
  font-weight: normal;
}

i,
em {
  font-style: normal;
}

u,
ins,
s,
del {
  text-decoration: none;
}

table {
  border: 1px solid #999;
  border-spacing: 0;
  border-collapse: collapse;
}

td,
th {
  border: 1px solid #999;
}

input,
button {
  outline: none;
  border: none;
}

body {
  font: 12px/1.5 "Microsoft YaHei", Tahoma, Helvetica, Arial, "\5b8b\4f53",
    sans-serif;
  color: #333;
}

a {
  text-decoration: none;
  color: #eee;
}

a:hover {
  color: #f9a51c;
  text-decoration: none;
}

.leftfix {
  float: left;
}

.rightfix {
  float: right;
}

.clearfix::after {
  content: "";
  display: block;
  clear: both;
}
/* #endregion Clear Default Style */
</style>
