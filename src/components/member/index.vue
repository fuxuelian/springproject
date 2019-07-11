<template>
 
     
   
      <div class="wrap" >
      <!-- 头部开始 -->
       <Header v-if="$route.meta.headerFlag"/>
      <!-- 头部结束 -->
          
      <!-- 主页部分开始 -->
       <div class="box">
        
          <BScroll  ref="bscroll">
           
            <article>
                <div class="loading" >
                  <i class="fa fa-spinner fa-pulse"></i>
                </div>
        <section class="vip-info vip-info-bg">
          <h2 class="h2">超级会员</h2>
          <a class="h3 js-plusList" href="javascript:;">开通立享六大权益，预计可省1280元 &gt;</a>
        </section>
        <section class="t-box nav-box vip-nav">
          <h2 class="h2">超级会员权益</h2>
          <div class="swiper-container">
            <a href="#">
              <img
                src="http://media.china-sss.com/img/M00/04/CF/wKjFbFznhqmAGNERAAATBbeIpLs009.png"
                alt
              />
              <span>优惠礼券包</span>
            </a>
            <a href="#">
              <img
                src="http://media.china-sss.com/img/M00/04/CF/wKjFbFznhqmADyOYAAAQ8QTMiHc021.png"
                alt
              />
              <span>双倍积分</span>
            </a>
            <a href="#">
              <img
                src="http://media.china-sss.com/img/M00/04/CF/wKjFbFznhqiAW88MAAAMmC9_jUc340.png"
                alt
              />
              <span>会员专享价</span>
            </a>
            <a href="#">
              <img
                src="http://media.china-sss.com/img/M00/04/CF/wKjFbFznhqiAW88MAAAMmC9_jUc340.png"
                alt
              />
              <span>生活特权</span>
            </a>
            <a href="#">
              <img
                src="http://media.china-sss.com/img/M00/04/CF/wKjFbFznhqmAIwObAAANr-HgXIQ929.png"
                alt
              />
              <span>秒杀提前枪</span>
            </a>
            <a href="#">
              <img
                src="http://media.china-sss.com/img/M00/04/CF/wKjFbFznhqmALz-gAAASlgyWBh8612.png"
                alt
              />
              <span>直享拼团价</span>
            </a>
          </div>

          <a data-role="ga" class="btn btn-on" href="#">
            <span>
              立即开通¥
              <em>199</em>/年
            </span>
          </a>
        </section>
        <!-- 轮播图开始 -->
        <!-- 用swiper实现轮播 -->
       
           
            <section class="flash-box"> 
               <mt-swipe :auto="3000" >
                <mt-swipe-item  v-for="(item,index) in banners" :key="index">               
                    <a href="item.linkurl">
                      <img :src="item.imgurl"/>
                    </a>
                </mt-swipe-item>
                <div></div>
              </mt-swipe>         
          </section>
         
        <!-- 轮播图结束 -->

        <!-- 优惠券礼包开始 -->
        <section class="t-box">
          <div class="t-tit">
            <h3 class="h3">优惠券礼包</h3>
            <a class="ftr cr9" href="#">
              权益详情
              <i class="iconfont icon-xiangyou"></i>
            </a>
          </div>
          <div class="t-txt">
            <a href="#">
              <img
                src="http://media.china-sss.com/img/M00/04/CD/wKjFbFzlK4aAXCNBAAC-KnB4q4c831.png"
              />
            </a>
            <a class="t-fb" href="#">
              立即开通
              <i class="iconfont icon-xiangyou"></i>
            </a>
          </div>
        </section>
        <!-- 优惠礼包结束 -->

        <!-- 双倍积分开始 -->

        <section class="t-box">
          <div class="t-tit">
            <h3 class="h3">双倍积分</h3>
            <a class="ftr cr9" href="#">
              权益详情
              <i class="iconfont icon-xiangyou"></i>
            </a>
          </div>
          <div class="t-txt">
            <a href="#">
              <img
                src="http://media.china-sss.com/img/M00/04/CD/wKjFbFzkwdWAN6QMAAD8x7sOOEY933.png"
                alt
              />
            </a>
            <a class="t-fb" href="#">
              立即开通
              <i class="iconfont icon-xiangyou"></i>
            </a>
          </div>
        </section>
        <!-- 双倍积分结束 -->

        <!-- 会员专享开始 -->

        <section class="t-tab vip-price">
          <div class="t-tit">
            <h3 class="h3">会员专享</h3>
            <a class="ftr cr9" href="#">
              权益详情
              <i class="iconfont icon-xiangyou"></i>
            </a>
          </div>
          <div class="t-txt">
            <a class="ad-img" href="#">
              <img
                src="http://media.china-sss.com/img/M00/04/CD/wKjFbFzkwdWAG-KxAAEbX_G0tjA856.png"
                alt
              />
            </a>
            <a class="t-fb" href="#">
              立即开通
              <i class="iconfont icon-xiangyou"></i>
            </a>
          </div>
          <keep-alive>
          <div class="box-tab">
            <Loading v-if="loadingFlag"/>
            <section class="search-tab" v-if="!loadingFlag">
              <ul class="tab-nav">
                <router-link class="on" to="/member/enjoy" tag="li">赏玩国内</router-link>
                <router-link class="on" to="/member/leave" tag="li">畅玩出境</router-link>
                <router-link class="on" to="/member/circum" tag="li">品玩周边</router-link>
                <router-link class="on" to="/member/together" tag="li">随行好物</router-link>
              </ul>
            </section>
            <router-view/>
         
            <!-- <MemberList/> -->
            
            <!-- 会员专享优惠列表开始 -->
           
            <!-- 会员专享优惠列表结束 -->
          </div>
         </keep-alive> 
          <a class="t-fb" href="#">
            开通立享
            <i class="icon-link"></i>
          </a>
        </section>
        <!-- 会员专享结束 -->

        <!-- 生活特权开始 -->
        <section class="t-box t-swiper">
          <div class="t-tit">
            <h3 class="h3">生活特权</h3>
            <a class="ftr cr9" href="#">
              权益详情
              <i class="iconfont icon-xiangyou"></i>
            </a>
          </div>
          <div class="t-txt">
            <a class="ad-img" href="#">
              <img
                src="http://media.china-sss.com/img/M00/04/CD/wKjFbFzkwdWAG-KxAAEbX_G0tjA856.png"
                alt
              />
            </a>
          </div>
           <div class="scroll-box">
          <div class="swiper-container swiper-item">
             
            <ul class="item-td swiper-wrapp aqy-img">
              <li v-for="(item,index) in oimg" :key="index">
                <div class="img-outer">
                  <div class="img-inner">
                    <img class="animas" :src="item.imgurl" />
                  </div>
                </div>
                <div class="txt-outer">
                  <h2>{{item.title}}</h2>
                  <span class="btn">立即领取</span>
                </div>
              </li>
              
            </ul>
            </div>
            </div>
            <a class="t-fb" href="#">
              立即开通
              <i class="iconfont icon-xiangyou"></i>
            </a>
          
        
        </section>

        <!-- 生活特权结束 -->
        <!-- 秒杀提前抢开始 -->

        <section class="t-box">
          <div class="t-tit">
            <h3 class="h3">秒杀提前抢</h3>
            <a class="ftr cr9" href="#">
              权益详情
              <i class="iconfont icon-xiangyou"></i>
            </a>
          </div>
          <div class="t-txt">
            <a href="#">
              <img
                src="http://media.china-sss.com/img/M00/04/CD/wKjFbFzlK4aAXCNBAAC-KnB4q4c831.png"
                alt
              />
            </a>
            <a class="t-fb" href="#">
              立即开通
              <i class="iconfont icon-xiangyou"></i>
            </a>
          </div>
        </section>
        <!-- 秒杀提前抢结束 -->

        <!-- 直享拼团价开始 -->
        <section class="t-box">
          <div class="t-tit">
            <h3 class="h3">秒杀提前抢</h3>
            <a class="ftr cr9" href="#">
              权益详情
              <i class="iconfont icon-xiangyou"></i>
            </a>
          </div>
          <div class="t-txt">
            <a href="#">
              <img
                src="http://media.china-sss.com/img/M00/04/CD/wKjFbFzlK4aAXCNBAAC-KnB4q4c831.png"
                alt
              />
            </a>
            <a class="t-fb" href="#">
              立即开通
              <i class="iconfont icon-xiangyou"></i>
            </a>
          </div>
        </section>
         </article>
        </BScroll>
     
    </div>
      <!-- footers  start -->
      <footer class="footer vip-footer">
        <ul class="flex">
          <li class="flex-3">
            超级会员¥
            <em>199</em>/年
          </li>
          <li class="flex-2">
            <a href data-role="ga" data-done="底部/立即预订/">立即开通</a>
          </li>
        </ul>
      </footer>

      <!--footer  end  -->
    </div>
 
 
  
</template>
<script>
import Header from "common/header";
import BScroll from "common/BScroll"
// import BScroll from "better-scroll"

import { Swipe, SwipeItem } from "mint-ui";
import { getVip, getAqy} from "api/vip";


export default {
  name: "member",
  props:{
    type:String,
    default:"我的收藏",
    require:true,
    title:"我的页面"
  },
  async created() {
    let data = await getVip();
    this.banners = data.data.data.banners;

    let oimg = await getAqy();
    this.oimg = oimg.data.data.banners;
    if(data&&oimg){
      this.loadingFlag=false
    }else{
      this.loadingFlag=true
    }
   

  },
  data() {
    return {
      banners: [],
      oimg: [],
      loadingFlag:true
     
    };
  },
  // mounted(){
  //   this.scroll=new BScroll(this.$refs.bscroll)
  //   this.scroll.hasVerticalScroll=true
  //   console.log(this.scroll)
  // },

  components: {
    Header,
    // BScroll
    // MemberList
  }
};
</script>
<style>
.wrap{
  height:100%;
}

.loading{
  width:100%;
  height:100%;
  display:flex;
  justify-content: center;
  align-content: center;
}
.loading>i{
font-size:.4rem;
}
.box{
  height: 100%;
  /* width:max-content; */
  overflow: auto;
  /* position: relative;
  top: 0;
  left: 0; */
}
.wrap .main {
 
  /* overflow-y: auto; */
  /* position: absolute;
  top: 0.9rem;
  left: 0;
  bottom: 0; */
  /* height: 100%; */
}
/* 主页开始 */

.m-ctb {
  overflow: auto;
}
.m-ctb {
  padding-bottom: 1.2rem;
  margin-top: 0.9rem;
}
/* 会员部分 */

.vip-info-bg {
  background-image: url(http://media.china-sss.com/res/dist/m/images/vip/vip-info-on.pngg);
}
.vip-info {
  padding: 0.85rem 1.12rem 0.3rem 1.17rem;
  height: 2.6rem;
  background: url(http://media.china-sss.com/res/dist/m/images/vip/vip-info-on.png)
    no-repeat center center;
  background-size: 100% 100%;
  position: relative;
}
.vip-info,
.vip-info a {
  color: #ffeab6;
}

.nav-box {
  padding: 0.3rem 0;
}
.vip-nav {
  text-align: center;
  margin-bottom: 0;
}
.t-box {
  padding: 0.3rem;
}
.t-box {
  padding: 0.3rem;
}
.t-box {
  background-color: #fff;
  word-wrap: break-word;
}

/* 图标导航开始 */

.nav-box .swiper-container {
  padding-bottom: 0.45rem;
  position: relative;
}
.swiper-container {
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  z-index: 1;
}
/* 导航 */
.vip-nav .h2 {
  display: inline-block;
  padding: 0 0.42rem;
  margin: 0 auto;
  background: url(http://media.china-sss.com/res/dist/m/images/vip/vip-tit.png)
    no-repeat center center;
  background-size: 100% 0.25rem;
  font-weight: 700;
  font-size: 0.32rem;
  color: #333;
}

.nav-box .swiper-container a {
  display: block;
  float: left;
  width: 33.33%;
  padding-top: 0.32rem;
  text-align: center;
  color: #333;
}

.nav-box img {
  display: block;
  width: 0.85rem;
  height: 0.85rem;
  margin: 0 auto;
  margin-bottom: 0.22rem;
}
img {
  display: block;
  border: 0;
  max-width: 100%;
  height: auto;
  background: url(http://media.china-sss.com/res/dist/m/images/img-404.png)
    no-repeat center center;
  background-size: 25%;
}

/* 立即开通 */

.btn,
.vip-nav .btn {
  display: inline-block;
  text-align: center;
  vertical-align: middle;
}

.vip-nav .btn-on span {
  padding: 0 0.9rem;
}
.btn span {
  display: block;
  height: 0.6rem;
  line-height: 0.6rem;
  border-radius: 0.95rem;
  background: -webkit-linear-gradient(left, #ffd89a, #ffeac1);
  font-size: 0.3rem;
  color: #333;
}
.vip-nav .btn em {
  font-weight: 800;
  font-size: 0.38rem;
}

/* 轮播图开始 */

.flash-box,
.flash-box img {
  width: 100%;
  height: 2.16rem;
  overflow: hidden;
}
/* 轮播图结束 */

/* 优惠券礼包 */
.t-box {
  padding: 0.3rem;
}
.t-box .t-tit .h3 {
  display: inline-block;
  line-height: 0.5rem;
  font-weight: 700;
  font-size: 0.32rem;
  color: #333;
}
.ftr {
  height: 0.6rem;
}
.cr9 {
  color: #999;
}
.t-box .t-txt img {
  border-radius: 0.08rem;
  overflow: hidden;
}
.t-fb {
  display: block;
  position: relative;
  padding-top: 0.2rem;
  margin-top: 0.2rem;
  text-align: center;
  font-size: 0.3rem;
  color: #bfa26a;
}

.t-fb i {
  display: inline-block;
  vertical-align: middle;
  margin-left: 0.05rem;
  color: #bfa26a;
}

/* 会员专享价开始 */
.vip-price {
  overflow: hidden;
}

.t-tab {
  margin-bottom: 0.21rem;
  background-color: #fff;
}

.t-tab .t-tit {
  padding: 0.3rem;
  margin-bottom: 0;
}
.t-tab .t-tit .h3 {
  display: inline-block;
  line-height: 0.5rem;
  font-weight: 700;
  font-size: 0.32rem;
  color: #333;
}

.t-tab .ad-img {
  display: block;
  padding: 0 0.3rem 0.3rem 0.3rem;
  overflow: hidden;
}

/* 会员专享导航 */
.tab-nav {
  width: 100%;
  overflow: hidden;
  text-align: center;
  line-height: 0.88rem;
  background-color: #fff;
  font-size: 0.3rem;
  color: #333;
  position: relative;
}
.vip-price .tab-nav li.on {
  color: #bfa26a;
}
.tab-nav li {
  position: relative;
  display: block;
  float: left;
  height: 0.84rem;
  line-height: 0.84rem;
  padding: 0 0.2rem;
}

/*会员专享旅游优惠开始 */


/* 会员专享旅游结束 */

/* 生活特权开始 */
/* .aqy-img::-webkit-scrollbar { width: 0 !important } */
.swiper-item {
  padding: 0.2rem 0 0 0.05rem;
  margin: 0;
  float: left;
  width: 100%;
}
/* .scroll-box{
  width: 100%;
  height: 100%;
} */
.swiper-item .aqy-img {
  display: flex;
  width: 7rem;
  height: 3.5rem;
  padding: 0;
  margin: 0 0 0.43rem 0;
  box-sizing: border-box;
  overflow-x: auto;
  
}

.aqy-img {
  width: 20rem;
}

.aqy-img > li {
  display: block;
  float: left;

  margin-right: 4%;
}
.item-td > li,
.item-tr > li {
  margin-bottom: 0.43rem;
  border-radius: 0.09rem;
  position: relative;
}

.animas {
  animation: imgLoad 0.8s;
  -webkit-animation: imgLoad 0.8s;
  display: block;
  border: 0;
  max-width: 100%;
  height: auto;
  background: url(http://media.china-sss.com/img/M00/04/C9/wKjFbFzehd2AdKzSAAFhOup6Dew913.png)
    no-repeat center center;
  background-size: 25%;
}

.item-td .txt-outer .btn {
  display: block;
  margin: 0 auto;
  width: 1.81rem;
  height: 0.58rem;
  line-height: 0.58rem;
  border-radius: 0.58rem;
  text-align: center;
  overflow: hidden;
  background: -webkit-linear-gradient(left, #ffd89a, #ffeac1);
  color: #333;
}

/* 生活特权结束 */

/* footer  start */

.vip-footer {
  height: 0.8rem;
  line-height: 0.8rem;
  padding: 0.11rem 0.3rem;
  background-color: #222;
  font-size: 0.3rem;
  color: #ffeac1;
  position: fixed;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 10;
}

.flex .flex-3,
.flex-end .flex-3,
.flex-middle .flex-3 {
  -webkit-box-flex: 3;

  flex: 3;
  vertical-align: center;
}

.vip-footer em {
  font-weight: 700;
  font-size: 0.44rem;
}
.vip-footer ul li {
  float: left;
}

.vip-footer ul li:last-child {
  border-radius: 0.8rem;
  background: -webkit-linear-gradient(left, #ffd89a, #ffeac1);

  text-align: center;
  color: #fff;
  font-size: 0.34rem;
  background-color: #f84;
  position: absolute;
  right: 0;
  bottom: 0;
}
.flex-2 {
  flex: 2;
}

.vip-footer ul li:last-child a {
  display: block;
  font-weight: 700;
  font-size: 0.32rem;
  color: #333;
  padding: 0 1rem;
}

/*底部结束  */
</style>


