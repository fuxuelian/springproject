import Vue from 'vue';
import App from './App.vue';
import router from "./router"
import store from './store';
<<<<<<< HEAD
import "./common";
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)
Vue.config.productionTip = false
import VueTouch from "vue-touch"
Vue.use(VueTouch,{name:'v-touch'})
=======

import "./common";
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import VueTouch from "vue-touch"
Vue.config.productionTip = false
Vue.use(VueTouch,{name:"v-touch"})
>>>>>>> dev
Vue.use(MintUI)
new Vue({
    router,
    store,
    render: h => h(App),  
  }).$mount('#app')
