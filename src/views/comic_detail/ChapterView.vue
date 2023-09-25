<template>
    <div class="back">
        <div style="width: 0px;" class="box">
            <h1 class="title">{{ title }}</h1>
        </div>
        <div class="list-box">
            <div class="list-item" v-for="(chapter,index) in list" :key="chapter.id">
                {{ index+1 }}. {{ chapter.title }}
            </div>
         
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: "Chapters"
        },
        list: Array
        
    }
}
</script>

<style scoped>
.back {
    width: 1000px;
    height: 40vh;
    background-color: rgba(59, 59, 59, 1);
    position: relative;
    top: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.title {
    color: #fff;
    font-size: 20px;
    font-weight: bold;
}

.list-box {
    width: 100%;
    height: 10vh;
    display: flex;
    flex-wrap: wrap;
    justify-content:left;
    margin-top: 20px;
    margin-left: 10px;
}

.list-item {
    width: 30%; /* 每一行显示3个项目 */
    margin-bottom: 20px; /* 添加间隔 */
    margin-left:20px;
    border-radius: 10px;
    height: 42px;
    text-align: center;
    background-color: rgba(0, 0, 0, 1);
    color: rgba(249, 167, 32, 1);
    display: flex;
    justify-content: center;
    align-items: center; /* 实现竖向居中 */
}
.list-item:hover{
    opacity: 0.6;
}
</style>
