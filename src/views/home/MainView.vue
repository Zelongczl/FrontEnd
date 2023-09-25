<template>
  <div class="for-sticky-only">
    <div class="topbar">
      <!-- 版心 -->
      <div class="container clearfix">
        <!-- 左侧LOGO -->
        <div class="logo leftfix">
          <img src="../../assets/shrine_logo.png" alt="ShrineLogo" />
        </div>

        <!-- 左侧导航区 -->
        <div class="nav-bar">
          <ul class="clearfix">
            <li>
              <router-link to="/home">
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

        <!-- 右侧用户信息 -->
        <div class="user-info clearfix">
          <!-- 用户头像 -->
          <div class="cur-avatar">
            <img src="../../assets/avatars/avatar_1.png" alt="cur_avatar" />
          </div>

          <!-- 用户信息 -->
          <div class="info">
            <!-- 用户名&绿三角 -->
            <div class="username">
              <div class="name">
                <span>nouser</span>
              </div>
              <div class="tri">
                <img src="../../assets/icons/triangle_icon.png" alt="unknown" />
              </div>
            </div>

            <!-- 经验条和里面的字儿 -->
            <div class="exp-bar">
              <el-progress
                :show-text="false"
                :stroke-width="15"
                :percentage="30"
                color="#F9A51C"
                define-back-color="#EEEEEE"
                type="line"
              ></el-progress>
              <div class="lv-coin">
                <span
                  >LV.0 &nbsp;&nbsp;&nbsp;&nbsp;
                  <i class="el-icon-orange"></i>&nbsp;&nbsp; 0</span
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
export default {
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

/* #region 左侧logo */
.topbar .logo {
  margin-top: 10px;
}

.topbar .logo img {
  height: 60px;
}

/* #endregion 左侧logo end */

/* #region 左侧导航区 */
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

/* #endregion 左侧导航区 end */

/* #region 右侧用户信息 */

/* #region 用户名和绿三角 */
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
  margin-left: 20px;
  font-size: 16px;
  height: 16px;
}

.topbar .info .username .name {
  display: inline-block;
  height: 16px;
  line-height: 16px;
  color: #eee;
  /* vertical-align: text-bottom; */
}
.topbar .info .username .tri {
  display: inline-block;
  vertical-align: text-bottom;
  margin-left: 2px;
}
.topbar .info .username .tri img {
  height: 16px;
  width: 16px;
  filter: brightness(1.8);
}
/* #endregion 用户名和绿三角end */

/* #region 经验条 */
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
/* #endregion 经验条 */

/* #endregion 右侧用户信息 end */

/* #region 清楚样式 */
/* 基础设置 */
.container {
    width: 1024px;
    margin: 0 auto;
}
body,h1,h2,h3,h4,h5,h6,hr,p,blockquote,dl,dt,dd,ul,ol,li,pre,form,fieldset,legend,button,input,textarea,th,td{
    margin: 0;
    padding: 0;
}

ul,ol {
    list-style: none;
}

img {
    /* 底部留白 */
    display: block;
	border:0;
}

b,strong {
    font-weight: 400;
}

h1,h2,h3,h4,h5,h6 {
    /* 父元素字号的百分比 */
    font-size: 100%;
    font-weight: normal;
}

i,em {
    /* 不倾斜 */
    font-style: normal;
}

u,ins,s,del {
    /* 去掉中划线和下划线 */
    text-decoration: none;
}

table {
    border: 1px solid #999;
    /* 相当于是cellspacing */
    border-spacing: 0;
    /* 1px边框 */
    border-collapse: collapse;
}

td,th {
    border: 1px solid #999;
}

input,button {
    /* 去掉轮廓线 */
    outline: none;
    border:none;
}

/* 风格设置 */
body {
    font: 12px/1.5 "Microsoft YaHei", Tahoma, Helvetica, Arial, "\5b8b\4f53", sans-serif;
    color: #333;
}

a {
    text-decoration: none;
    color: #eee;
}

a:hover {
    color:#F9A51C;
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
/* #endregion 清楚样式 */
</style>