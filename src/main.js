import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios';
import './reset.css'; // css style reset

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(VueAxios, axios);

axios.defaults.baseURL = "http://localhost:9090";
axios.defaults.withCredentials = true;
// 10.1.1.210:8081
// 10.1.1.55:8081

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
