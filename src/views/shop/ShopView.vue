<template>
  <div>
    <main-view></main-view>
    <div class="event">
      <carousel-3d
          :autoplay="true"
          :autoplayTimeout="3000"
          :perspective="35"
          :display="5"
          :animationSpeed="1000"
          :width="400"
          :height="170"
          :border="0"
          :controlsVisible="true"
          :controlsHeight="60"
          :controls-prev-html="'&#10092; '"
          :controls-next-html="'&#10093;'"
      >
        <slide v-for="(item, i) in slides" :index="i" :key="i">
          <template slot-scope="obj">
            <img :src="item.src" @click="handleEventClick(item,obj)"/>
          </template>
        </slide>
      </carousel-3d>
    </div>
    <div class="grey-area">
      <a href="#" @click="handleTicketTradeInClick">
        <img src="../../assets/shop/ticket_trade_in.png" class="ticket-trade-in-image"/>
      </a>
      <p class="subscription-text">SUBSCRIPTION</p>
      <div class="buttons">
        <button class="basic-button" @click="handleBasicClick">BASIC - $0.99/month</button>
        <button class="founders-button" @click="handleFoundersClick">Founders Pack - $99 lifetime</button>
      </div>
      <div class="vertical-line"></div>
      <!-- Coin Image -->
      <p class="coin-top-up-text">COIN TOP-UP</p>
      <a href="#" @click="handleCoins100Click">
        <img src="../../assets/shop/coins_100.png" class="coins-100-image"/>
      </a>
      <a href="#" @click="handleCoins210Click">
        <img src="../../assets/shop/coins_210.png" class="coins-210-image"/>
      </a>
      <a href="#" @click="handleCoins550Click">
        <img src="../../assets/shop/coins_550.png" class="coins-550-image"/>
      </a>
      <a href="#" @click="handleCoins1200Click">
        <img src="../../assets/shop/coins_1200.png" class="coins-1200-image"/>
      </a>
      <a href="#" @click="handleCoins1800Click">
        <img src="../../assets/shop/coins_1800.png" class="coins-1800-image"/>
      </a>
      <a href="#" @click="handleCoins2500Click">
        <img src="../../assets/shop/coins_2500.png" class="coins-2500-image"/>
      </a>
    </div>
    <!-- Basic Modal -->
    <div class="modal" v-show="showBasicModal">
      <div class="modal-content basic-modal">
        <span class="close" @click="closeModal">&times;</span>
        <div class="modal-header">
          <!-- Image -->
          <img src="../../assets/shop/basic_Sub.png" alt="Image" class="modal-image">
        </div>
        <div class="modal-body">
          <!-- Text content -->
          <p>
            - Removal of ads<br>
            - HD resolution comics<br>
            - 10% discount on gacha pull<br>
            - 1 ticket discount on trade in<br>
            - XP booster x1.1<br>
            - Charged monthly, you can cancel anytime<br>
            - If cancelled, all subscription benefits will remain for the remainder of the last payment period.<br>
          </p>
          <!-- Subscribe button -->
          <button class="subscribe-button">SUBSCRIBE $0.99/month</button>
        </div>
      </div>
    </div>
    <!-- Founders Pack Modal -->
    <div class="modal" v-show="showFoundersModal">
      <div class="modal-content founders-modal">
        <span class="close" @click="closeModal">&times;</span>
        <div class="modal-header">
          <!-- Image -->
          <img src="../../assets/shop/founders_pack_Sub.png" alt="Image" class="modal-image">
        </div>
        <div class="modal-body">
          <!-- Text content -->
          <p>
            - Lifetime Subscription<br>
            - Removal of ads<br>
            - HD resolution comics<br>
            - 20% Discount on gacha pull<br>
            - 2 ticket discount on trade-in<br>
            - XP Booster x1.2<br>
            - Future bonuses only available to Founders Pack members<br>
          </p>
          <!-- Subscribe button -->
          <button class="subscribe-button">SUBSCRIBE -$99.99 once</button>
        </div>
      </div>
    </div>
    <!-- Ticket Trade In Modal -->
    <!-- Ticket Trade In Modal -->
    <div class="modal ticket-trade-in-size ticket-trade-in-background" v-show="showTicketTradeInModal">
      <div class="modal-content ticket-trade-in-modal">
        <span class="close" @click="closeModal">&times;</span>
        <h2 class="subtitle">Common</h2>
        <div class="avatar-container">
          <div class="ticket-container">
            <div v-for="(avatar, index) in avatars" :key="index" class="avatar-item">
              <img :src="avatar.src" @click="handleCommonAvatarClick" class="avatar-image"/>
            </div>
          </div>
        </div>
        <h2 class="subtitle">Rare</h2>
        <div class="avatar-container">
          <p class="coming-soon">Coming Soon!</p>
        </div>
        <h2 class="subtitle">Super Rare</h2>
        <div class="avatar-container">
          <p class="coming-soon">Coming Soon!</p>
        </div>
      </div>
    </div>
    <!-- Basic Modal Overlay -->
    <div class="overlay" v-show="showBasicModal" @click="closeModal"></div>

    <!-- Founders Pack Modal Overlay -->
    <div class="overlay" v-show="showFoundersModal" @click="closeModal"></div>

    <!-- Ticket Trade In Modal Overlay -->
    <div class="overlay" v-show="showTicketTradeInModal" @click="closeModal"></div>
  </div>
</template>

<script>
import MainView from '../home/MainView.vue'
import {Carousel3d, Slide} from 'vue-carousel-3d'

export default {
  components: {
    MainView,
    Carousel3d,
    Slide
  },

  data() {
    return {
      showBasicModal: false,
      showFoundersModal: false,
      slides: [
        {
          title: 'parent',
          slide: 23424234234234,
          src: require('@/assets/shop/example.png')
        },
        {
          title: 'parent',
          slide: 23424234234234,
          src: require('@/assets/shop/example.png')
        },
        {
          title: 'parent',
          slide: 23424234234234,
          src: require('@/assets/shop/example.png')
        },
        {
          title: 'parent',
          slide: 23424234234234,
          src: require('@/assets/shop/example.png')
        },
        {
          title: 'parent',
          slide: 23424234234234,
          src: require('@/assets/shop/example.png')
        },
        {
          title: 'parent',
          slide: 23424234234234,
          src: require('@/assets/shop/example.png')
        },
        {
          title: 'parent',
          slide: 23424234234234,
          src: require('@/assets/shop/example.png')
        },
        {
          title: 'parent',
          slide: 23424234234234,
          src: require('@/assets/shop/example.png')
        },
      ],
      avatars: [
        {src: require('@/assets/shop/avatar1.png')},
        {src: require('@/assets/shop/avatar2.png')},
        {src: require('@/assets/shop/avatar3.png')},
        {src: require('@/assets/shop/avatar4.png')},
        {src: require('@/assets/shop/avatar5.png')},
        {src: require('@/assets/shop/avatar6.png')},
        {src: require('@/assets/shop/avatar7.png')},
        {src: require('@/assets/shop/avatar8.png')},
        {src: require('@/assets/shop/avatar9.png')},
        {src: require('@/assets/shop/avatar10.png')},
        {src: require('@/assets/shop/avatar11.png')},
        {src: require('@/assets/shop/avatar12.png')},
        {src: require('@/assets/shop/avatar13.png')},
        {src: require('@/assets/shop/avatar14.png')},
        {src: require('@/assets/shop/avatar15.png')},
        {src: require('@/assets/shop/avatar16.png')},
        {src: require('@/assets/shop/avatar17.png')},
        {src: require('@/assets/shop/avatar18.png')},
        {src: require('@/assets/shop/avatar19.png')},
        {src: require('@/assets/shop/avatar20.png')}
      ],
      showTicketTradeInModal: false
    }
  },
  methods: {
    handleEventClick(data, obj) {
      console.log(data, obj)
    },
    handleTicketTradeInClick() {
      this.showTicketTradeInModal = true;
    },
    handleCommonAvatarClick() {
      // TODO: handle Common Avatar Clic event

    },
    handleBasicClick() {
      // TODO: handle Basic click event
      this.showBasicModal = true;
    },
    handleFoundersClick() {
      // TODO: handle Founders click event
      this.showFoundersModal = true;
    },
    handleCoins100Click() {
      // TODO: handle 100 Coins click event
    },
    handleCoins210Click() {
      // TODO: handle 210 Coins click event
    },
    handleCoins550Click() {
      // TODO: handle 550 Coins click event
    },
    handleCoins1200Click() {
      // TODO: handle 1200 Coins click event
    },
    handleCoins1800Click() {
      // TODO: handle 1800 Coins click event
    },
    handleCoins2500Click() {
      // TODO: handle 2500 Coins click event
    },
    closeModal() {
      this.showBasicModal = false;
      this.showFoundersModal = false;
      this.showTicketTradeInModal = false;
    },
  }
}
</script>


<style>
.event {
  width: 1100px;
  margin: 1% auto;
}

.event img {
  cursor: pointer;
}

.grey-area {
  background-color: #3b3b3b; /* 灰色 */
  width: 1000px;
  margin: 0 auto;
  height: 400px;
  position: relative;
}

.ticket-trade-in-image {
  position: relative;
  top: 2%;
  left: 1%;
  width: 450px;
  cursor: pointer;
}

.subscription-text {
  position: relative;
  top: 10%;
  left: 1%;
  font-size: 300%;
  color: #e4b032;
  font-weight: bold;
}

.basic-button {
  position: absolute;
  left: 1%;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  width: 450px;
  height: 70px;
  font-size: 20px;
  font-weight: bold;
  top: 55%;
  background-color: yellow;
}

.founders-button {
  position: absolute;
  left: 1%;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  width: 450px;
  height: 70px;
  font-size: 20px;
  font-weight: bold;
  top: 80%;
  background-color: orange;
}

.vertical-line {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 50%;
  width: 1px;
  background-color: black;
  transform: translateX(-50%);
}

.coin-top-up-text {
  position: absolute;
  top: 0.2%;
  right: 24%;
  font-size: 300%;
  color: #e4b032;
  font-weight: bold;
}

.coins-100-image {
  position: absolute;
  top: 18%;
  right: 28%;
  width: 200px;
  cursor: pointer;
}

.coins-210-image {
  position: absolute;
  top: 18%;
  right: 2%;
  width: 200px;
  cursor: pointer;
}

.coins-550-image {
  position: absolute;
  top: 45.5%;
  right: 28%;
  width: 200px;
  cursor: pointer;
}

.coins-1200-image {
  position: absolute;
  top: 45.5%;
  right: 2%;
  width: 200px;
  cursor: pointer;
}

.coins-1800-image {
  position: absolute;
  top: 73%;
  right: 28%;
  width: 200px;
  cursor: pointer;
}

.coins-2500-image {
  position: absolute;
  top: 73%;
  right: 2%;
  width: 200px;
  cursor: pointer;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(2px);
  z-index: 1000;
}

.modal {
  position: absolute;
  top: 387px;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  background-color: #edb13a;
  padding: 0;
  border-radius: 25px;
  z-index: 1001;
}

.modal-image {
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: auto;
  border-radius: 25px 25px 0 0;
}

.modal-body {
  padding-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
}

.modal-body p {
  font-size: 1rem;
  font-weight: bold;
}

.subscribe-button {
  display: block;
  margin: 20px auto;
  padding: 10px 20px;
  background-color: transparent;
  font-size: 20px;
  font-weight: bold;
  color: black;
  border: 3px solid black;
  border-radius: 10px;
  cursor: pointer;
}

.subscribe-button:hover {
  background-color: rgba(237, 177, 58, 0.88);
  color: whitesmoke;
  border: 3px solid whitesmoke;
}

.ticket-trade-in-background {
  background-color: black;
}

.ticket-trade-in-size {
  width: 600px;
  height: 400px;
  border-radius: 0;
  padding: 20px 50px 0 10px;
}

.ticket-trade-in-modal {
  max-height: calc(100%); /* 为了让关闭按钮不被遮挡 */
  overflow-y: scroll;
}

/* For Chrome, Safari and Opera */
::-webkit-scrollbar {
  width: 5px;
}

::-webkit-scrollbar-track {
  background: transparent; /* change this to your preferred color */
}

::-webkit-scrollbar-thumb {
  background: white; /* change this to your preferred color */
}

/* For Internet Explorer and Edge */
body {
  scrollbar-face-color: white; /* change this to your preferred color */
  scrollbar-track-color: transparent; /* change this to your preferred color */
}

.avatar-container {
  text-align: center;
}

.ticket-container {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 10px;
  margin-bottom: 20px;
}

.subtitle {
  color: white;
  text-align: left;
  margin-left: 20px;
  font-size: 2.5rem;
  margin-bottom: 10px;
}

.coming-soon {
  color: yellow;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
}

.avatar-item {
  display: inline-block;
  margin: 10px;
  align-items: center;
  justify-content: center;
}

.avatar-image {
  width: 80px;
  height: 80px;
  cursor: pointer;
  border-radius: 50%;
  margin-top: 20px;
}

.close {
  position: absolute;
  top: 8px;
  right: 8px;
  cursor: pointer;
  font-size: 1.2rem;
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
}

.close:hover {
  background-color: rgba(0, 0, 0, 0.7);
}
</style>