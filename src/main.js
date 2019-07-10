import Vue from 'vue';
import App from './App.vue';
import router from "./router"
import store from './store';
import "./common";
<<<<<<< HEAD

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
=======
import MintUI from 'mint-ui'
>>>>>>> he

import 'mint-ui/lib/style.css'
Vue.use(MintUI)
new Vue({
    router,
    store,
    render: h => h(App),
    
  }).$mount('#app')
