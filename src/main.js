import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueVideoPlayer from 'vue-video-player'

import './assets/style/reset.css'
import './assets/style/border.css'
import './assets/style/iconfont.css'
import 'swiper/css/swiper.css'
import 'video.js/dist/video-js.css'

Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)
Vue.use(VueVideoPlayer)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
