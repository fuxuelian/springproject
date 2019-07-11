import Vue from "vue";
import Footer from "./footer";
import Header from "./header";
import BScroll from "./BScroll";
import Loading from "./loading";

Vue.component("TabBar",Footer);

Vue.component("HeaderCom",Header);

Vue.component("BScroll",BScroll);
Vue.component("Loading",Loading);