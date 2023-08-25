<template>
    <div>
        <main-view></main-view>
        <p style="font-weight:bold; font-size:100px; color:#EEEEEE">这是Home</p>
        <div class="container">
          <div class="comic-tabs" v-for="(tab, index) in Covers" :key="index">
            <tab-view :comicsName="tab.Name" :coverImg="tab.coverImg" :comicDef="tab.definition"
            :comicChap="tab.chapters" :comicAuth="tab.author"></tab-view>
        </div>
        </div>

    </div>
</template>

<script>
import MainView from './MainView.vue'
import TabView from './TabView.vue'
export default {
  components: { MainView, TabView },
  data() {
    return {
      Covers: [
        // 第一行
        {
          Name: 'Fallen Angel',
          coverImg: require('../../assets/covers/167577146663e23e4a5f022316.jpg'),
          definition: 'aaaaaaaaaaaaaaaaa',
          chapters:['Angel Down','Pignose VS The old man!',"What's this powers?"],
          author:['','']
        },
        {
          Name: 'The Orphy Chord',
          coverImg: require('../../assets/covers/1682719992644c44f88122e599.jpg'),
          definition: '',
          chapters:['','',''],
          author:['','']
        },
        {
          Name: '1BLV',
          coverImg: require('../../assets/covers/169108213464cbdd96dd0fe433.jpg'),
          definition: '',
          chapters:['','',''],
          author:['','']
        },
        {
          Name: 'Cave King',
          coverImg: require('../../assets/covers/163940269561b74cc70c0a1719.jpg'),
          definition: '',
          chapters:['','',''],
          author:['','']
        },
        
        // 第二行
        {
          Name: 'Mutton Chop!',
          coverImg: require('../../assets/covers/164259470361e8018f4a782328.jpg'),
          definition: '',
          chapters:['','',''],
          author:['','']
        },
        {
          Name: 'Dimensional Resources',
          coverImg: require('../../assets/covers/163911698061b2f0b41bb48561.jpg'),
          definition: '',
          chapters:['','',''],
          author:['','']
        },
        {
          Name: 'Golden Mist',
          coverImg: require('../../assets/covers/16507848716264fa67dce79814.png'),
          definition: '',
          chapters:['','',''],
          author:['','']
        },
        {
          Name: 'Yo-Yokai',
          coverImg: require('../../assets/covers/1650881197626672ad785bc192.jpg'),
          definition: '',
          chapters:['','',''],
          author:['','']
        },

        // 第三行
        {
          Name: "Devil's Contract",
          coverImg: require('../../assets/covers/167577167063e23f161d271437.png'),
          definition: '',
          chapters:['','',''],
          author:['','']
        },
        {
          Name: 'Shinto',
          coverImg: require('../../assets/covers/167577163163e23eef1a6c2533.jpg'),
          definition: '',
          chapters:['','',''],
          author:['','']
        },
        {
          Name: 'From the Forgotten',
          coverImg: require('../../assets/covers/164259666861e8093cd3e6d527.jpg'),
          definition: '',
          chapters:['','',''],
          author:['','']
        },
        {
          Name: 'The 7 Northern Warlords',
          coverImg: require('../../assets/covers/167577174063e23f5c88612431.jpg'),
          definition: '',
          chapters:['','',''],
          author:['','']
        },

        // 第四行
        {
          Name: 'Element',
          coverImg: require('../../assets/covers/167577155463e23ea273d6f446.jpg'),
          definition: '',
          chapters:['','',''],
          author:['','']
        },
        {
          Name: 'Apophenia',
          coverImg: require('../../assets/covers/164259080161e7f2512f37e927.jpg'),
          definition: '',
          chapters:['','',''],
          author:['','']
        },
        {
          Name: 'The Fey Café',
          coverImg: require('../../assets/covers/1670120085638c02955c491903.jpg'),
          definition: '',
          chapters:['','',''],
          author:['','']
        },
        {
          Name: 'Junkie',
          coverImg: require('../../assets/covers/165927335562e6808b245cd793.jpg'),
          definition: '',
          chapters:['','',''],
          author:['','']
        },

        // 第五行
        {
          Name: 'Hammer Head',
          coverImg: require('../../assets/covers/1635580939617cfc0b5b4b0332.png'),
          definition: '',
          chapters:['','',''],
          author:['','']
        },
        {
          Name: 'High School Elite',
          coverImg: require('../../assets/covers/164259847261e81048d822934.jpg'),
          definition: '',
          chapters:['','',''],
          author:['','']
        },
        {
          Name: 'Elbow Room',
          coverImg: require('../../assets/covers/164345067661f511345cb54877.jpg'),
          definition: '',
          chapters:['','',''],
          author:['','']
        },
        {
          Name: 'Xero: The King of Theives',
          coverImg: require('../../assets/covers/164325110861f205a4cf53b184.jpg'),
          definition: '',
          chapters:['','',''],
          author:['','']
        },

        // 第六行
        {
          Name: 'High School Romance',
          coverImg: require('../../assets/covers/164345066261f511268658e646.jpg'),
          definition: '',
          chapters:['','',''],
          author:['','']
        },
      ]
    }
  },
}
</script>

<style>
body{
  background-color: black;
}
.comic-tabs {
  white-space: nowrap; 
  display: inline-block;
  margin: 1px 3px;
}

</style>