import Vue from 'vue';
import App from './App.vue';
import router from "./router"
import store from './store';
import "./common";

import MintUI from 'mint-ui'
<<<<<<< HEAD

=======
>>>>>>> zhangbaoyin
import 'mint-ui/lib/style.css'

Vue.use(MintUI)

<<<<<<< HEAD
=======

>>>>>>> zhangbaoyin
Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App),
    
  }).$mount('#app')
