import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import home from "./home";
import list from "./list";
import mine from "./mine";
import order from "./order";
import telme from "./telme";
<<<<<<< HEAD
import member from "./member";
import login from "./login";
;

export default new Router({
    routes:[
      home,
      list,
      mine,
      order,
      telme ,
      member,
      login
    ]
})
=======
import details from "./details";
import night from "./night";
import orderDetails from "./order-details";
import live from "./live";
export default new Router({
  routes: [{
      path: '/',
      redirect: "/home"
    },
    home,
    list,
    mine,
    order,
    telme,
    details,
    orderDetails,
    night,
    live
  ]
})
>>>>>>> he
