<template>
    <div class="image-container clearfix">
        <div class="image-wrapper">
            <img 
              :src="imageSource"
              alt="preview"
              class="preview-image"
            />
        </div>
        <div class="text-wrapper">
            <img :src="image" alt="">
            <p class="chapter-name">{{ index+1}}. {{ chapterName }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ImagePreview',
    props: {
      index: Number,
      image:require("../../assets/avatars/avatar_1.png"),
      chapterName: String,
    },

    data(){
        return {
            imageSource: require("../../assets/chapter-cover/Devil-Contract/1.jpg"),
        }
    }
};
</script>

<style scoped>

.image-container {
    display: flex; /* 使用flexbox布局 */
    align-items: center; /* 垂直居中对齐 */
    margin: 10px; /* 顶部和底部外边距，调整整体布局位置 */
}

.image-wrapper {
    margin-left: -80px;
    text-align: left; /* 图片左对齐 */
    
}
.text-wrapper {
    flex: 1; /* 文本区域占据剩余空间 */
    text-align: center; /*文本左对齐 */
    margin-left: 10px; /* 图片和文本之间的间距 */
}

.preview-image {
    max-width: 70px; /* 图像宽度最大为容器宽度 */
    height: 35px; 
    border-radius: 5px;
}

.chapter-name {
    margin-top: 0px;
    font-size: 18px;
}
</style>
