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
    display: flex; /* Use flexbox layout */
    align-items: center; /* vertical center alignment */
    margin: 10px; /* Top and bottom margins, adjust overall layout position */
}

.image-wrapper {
    margin-left: -80px;
    text-align: left; /* Picture left aligned */
    
}
.text-wrapper {
    flex: 1; /* The text area takes up the remaining space */
    text-align: center; /* Text left aligned */
    margin-left: 10px; /* spacing between image and text */
}

.preview-image {
    max-width: 70px; /* The image width is at most the container width */
    height: 35px; 
    border-radius: 5px;
}

.chapter-name {
    margin-top: 0px;
    font-size: 18px;
}
</style>
