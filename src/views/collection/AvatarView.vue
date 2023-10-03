<template>
    <div class="avatar-img">
      
        <img :src="avatar.avaImg" alt="avaImg" class="avaimg" style="source=">
      
    </div>
  
</template>

<script>
export default {
  props: {
    avatar: Object,
  },
  data() {
    return {
    }
  },
  computed:{
    URL(){
        let URL = this.avaImg;
        return URL;
    }
  },
};

// function getImageUrl(url) {
//       return new URL(url,import.meta.url).href;
//     }
// let source = require(this.avaImg);
</script>

<style scoped>
.avaimg {
  display: inline-block;
  height: 132px;
  width: 132px;
}
</style>