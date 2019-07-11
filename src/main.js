import Vue from 'vue';
import App from './App.vue';
import router from "./router"
import store from './store';
import "./common";
import VueTouch from "vue-touch"
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(VueTouch,{name:'v-touch'})
Vue.use(MintUI)
new Vue({
router,
store,
  render: h => h(App),
}).$mount('#app')
