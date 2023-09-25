<template>
    <div class="comic-tab">
      <router-link :to="{ name:'detail', query: { comicname: comicsName, comicDef: comicDef, comicChap: comicChap, info: info, rightList:rightList, comicID: comicID } }">
        <img :src="URL" :alt="comicsName" class="coverimg">
      </router-link>
    </div>
  
</template>

<script>
import axios from 'axios';
export default {
  props: {
    coverImg: String,
    comicsName: String,
    comicDef: String,
    comicChap: Array,
    comicAuth: Array,
    info: Object,
    rightList: Array,
    comicID: Number
  },
  data() {
    return {
        baseURL: "http://10.1.1.55:8080",
    }
  },
  computed:{
    URL(){
        let URL = "http://10.1.1.55:8080" + this.coverImg;
        return URL;
    }
  }
};
</script>

<style scoped>
.comic-tab .coverimg{
  height: 200px;
  width: 250px;
  border-radius: 20px;
  display: inline-block;
}

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