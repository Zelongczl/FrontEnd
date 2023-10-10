<template>
    <div class="hand-main">
        <div class="box-left">
            <img style="width: 350px;margin-top: 28px;margin-left:30px" :src="'http://10.1.1.55:8080' + info.portraitImagePath" alt="">
        </div>
        <div class="right-box">
            <div class="item">
                <!-- <img :src="img" alt=""> -->
                <h1>{{info.title }}</h1>
                <span style="margin-top: 10px;" v-for="author in info.authors" :key="author.id">{{author.name + "&nbsp;&nbsp;&nbsp;"}}</span>
            </div>
            <div class="cir-info">
                {{ info.des }}
            </div>
            <div class="footer"> 
                <button class="bt">BEGIN TO READ</button>
                <button class="bt">SUBSCRIBE</button>
                <button class="bt">TIP CREATOR</button>
                
            </div>
        </div>
    </div>
</template>
<script>
export default{
    props:{
        info:{
            type:Object,
            default:()=>{
                return{
                    img:"https://th.bing.com/th/id/OIP.i8KczwUEv1MMC-hWUteWxwHaFj?pid=ImgDet&rs=1",
                    Name:"title",
                    author:"xxxxasdasd",
                    description:'asdijasdjkaskldjkaskdjlasdjl;lllsdlalkdslkasdkkladsklaldwklwkllkdwkl;alkwdmlmasdasdjadjhkwhjkd,am,w'
                }
            }
        }
    },
    computed:{

        authors(){
            let res = "";
            for (let author of this.info.authors) {
                res += author.name + "; ";
            }

            return res;
        }
    }
}
</script>
<style scoped>
.bt{
    width: 150px;
    height: 38px;
    background-color: rgba(249, 167, 32, 1);
    border-radius: 10px;
    border: none;
}
.bt:hover{
    opacity: 0.8;
}
.bt:nth-child(1){
    width: 180px;
    background-color: rgba(32, 235, 250, 1);
}
.footer{
    margin-top: 10px;
    display: flex;
    position: relative;
    right: 3%; 
    top: 4px;
    flex-direction: row;
    justify-content: space-around;
}
.cir-info{
    margin-top: 20px;
    width: 90%;
    height: 50%;
    border-radius: 10px;
    background-color: rgba(0, 0, 0, 1);
    color: rgba(249, 167, 32, 1);
    padding: 1em;
    white-space: pre-wrap;
    text-overflow: ellipsis;
    word-wrap: break-word;
    text-align: left;
    text-indent: 2em;
    font-size: 12px;
}
.item{
/* margin-top: 10px; */
text-align: left;
/* margin: 2px; */
/* line-height: 20px; */
color: #fff;
position: relative;
top: 12px;
}
.item>h1{
    /* margin-top: 10px; */
    color: #fff;
    font-size: 30px;
    font-weight: bold;
}
.box-left{
    width: 500px;
    /* padding: 2%; */
    margin-left: 20px;
}
.box-left>img{
    border-radius: 18px;
}
.right-box{
    /* position: relative; */
    /* left: 42%; */
    /* top: 0%; */
    position: absolute;
    top:0;
    left:450px;
    width: 550px;
    height: 100%;
}
.hand-main{
    display: flex;
    flex-direction: row;
    position: relative;
    width: 1024px;
    height: 350px;
    background-color: rgba(59, 59, 59, 1);
}
</style>