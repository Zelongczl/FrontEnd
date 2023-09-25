<template>
    <div class="pop-box">
        <div class="title-item">
            <h1>{{title}}</h1>
        </div>
        <div class="list-item" v-for="i in list" :key="i">
            <img style="" class="icon" :src="i.coverImg" alt="">
            <div class="list-box">
                <div class="pop-title"> 
                    <h4>{{ i.Name }}</h4>
                    <span class="item-title">{{ i.definition}}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default{
    props:{
        title:{
            type:String,
            default:"Popular"
        },
        list:{
            type:Object,
            default:()=>[
                {
                    coverImg:"https://th.bing.com/th/id/R.9d5f05c189a7d2def59283a84a022e95?rik=1M%2fgvE9HjIuE1A&riu=http%3a%2f%2fdl.yzz.cn%2fpublic%2fimages%2f100714%2f29_111215_6.jpg&ehk=vkPGcHcX7AaQNKzDTyrQzuFv0hejaNgo6yToxjvOXhE%3d&risl=&pid=ImgRaw&r=0",
                    Name:"test",
                    definition:"asffsafdadw"
                }
            ]
        }
    }
}
</script>
<style scoped>
.item-title{
    color: rgba(249, 167, 32, 1);
    position: relative;
    top: 20px;
    font-size: 12px;
}
.list-box{
    /* padding: 15px; */
    margin-left: 15px;
}
.pop-box{
    width: 300px;
    /* height: 100%; */
    /* overflow-y: scroll; */
}

.pop-title h4{
    font-size: 15px;
}

.title-item{
    height: 30px;
    color: rgb(255, 255, 255);
    padding: 10%;
}
.title-item h1 {
    color: rgb(255, 255, 255);
    font-size: 20px;
    font-weight: bold;
    margin-left: 60px;
    /* margin-right:auto; */
}
.list-item{
    margin-top: 15px;
    color: #fff;
    text-align: left;
    display: flex;
    width: 270px;
    flex-direction: row;
}
.icon{
    width: 116px;
    height: 93px;
}
</style>