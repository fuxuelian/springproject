import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import home from "./home";
import list from "./list";
import mine from "./mine";
import order from "./order";
import telme from "./telme";
import ticket from "./ticket";
import japen from "./japen";
import member from "./member";
import login from "./login";
import collect from "./collect";
import empty from "./empty"
import details from "./details";
import night from "./night";
import orderDetails from "./order-details";
import live from "./live";
import xiangqing from "./xiangqing"

export default new Router({
    routes:[
      {
        path:"/",
        redirect:"/home"
      },
      home,
      list,
      mine,
      order,
      ticket,
      japen,
      telme,
      member,
      login,
      collect,
      empty,
      details,
      orderDetails,
      night,
      live,
      xiangqing
    ]
})

