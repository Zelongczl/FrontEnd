<template>
    <div class="comic-tab">
      <router-link :to="{ name:'detail', query: { comicname: comicsName, comicDef: comicDef, comicChap: comicChap } }">
        <img :src="coverImg" :alt="comicsName" class="coverimg">
      </router-link>
    </div>
  
</template>

<script>
export default {
  props: {
    coverImg: String,
    comicsName: String,
    comicDef: String,
    comicChap: Array,
    comicAuth: Array
  }
};
</script>

<style scoped>
.comic-tab .coverimg{
  height: 250px;
  width: 250px;
  border-radius: 20px;
  display: inline-block;
}

</style>