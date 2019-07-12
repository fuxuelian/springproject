<template>
        <div id="content">
        <!-- 头部 -->
        <div id="header">
            <a href="javascript:;" @click="handleBack()"><i class="iconfont icon-zuojiantou1"></i></a>
            <a href="javascript:;"><i class="iconfont icon-ziyuan1"></i></a>
            <h2>+ 生活</h2>
        </div>
               
        <BScroll>
<div>
    <div id="search">
        <div class="search-top">
            <a href="javascript:;">深圳<i class="iconfont icon-xjt"></i></a>
            <input type="text" class="search-ipt" placeholder="搜索你想去的地方">
            <i class="iconfont icon-fangdajing"></i>
        </div>
    </div>
   
   <homeBanner/>

    <div id="activity">
        <p>
            <i class="iconfont icon-laba"></i>
            <span>下载春秋旅游app,开通春秋钱包，20现金红包任性用</span>
        </p>
        <div class="activity-box">
            <img src="http://media.china-sss.com/img/M00/04/F1/wKjFbF0cXZKAJbPxAACXRhXl-6E290.jpg" alt="">
            <img src="http://media.china-sss.com/img/M00/04/F1/wKjFbF0cXZKAJbPxAACXRhXl-6E290.jpg" alt="">
            <img src="http://media.china-sss.com/img/M00/04/F1/wKjFbF0cXZKAJbPxAACXRhXl-6E290.jpg" alt="">
        </div>
    </div>
    <Loading v-if="loadingFalg"/>

    <div id="main" v-if="!loadingFalg">
        <div class="prefecture">
            <h3>积分专区</h3>
            <ul class="prefecture-list">
                <li v-for="(item,index) in Division" :key="index">
                    <img :src="item.imgurl">
                    <p>{{item.productName}}</p>
                    <span><em>{{item.price}}</em>积分</span>
                </li>
            </ul>
        </div>
        <!-- 人气货品 -->
        <div class="popularity">
            <div class="popularity-top">
                <h3>人气爆款</h3>
                <span>推荐好物不错过</span>
                <span>更多<i class="iconfont icon-xiangyou"></i></span>
            </div>
            <div class="popularity-box">
                <ul class="popularity-list"  >
                    <li v-for="(item,index) in liveList" :key="index">
                        <img :src="item.imgurl">
                        <p>{{item.productName}}}</p>
                        <span>￥<em>{{item.price}}</em> <span>积分可抵扣{{item.pointAmount}}%</span></span>
                        <i>生活</i>
                    </li>
                </ul>
            </div>
        </div>
        <!-- 积分换购 -->
        <div class="ntegral">
            <div class="ntegral-top">
                <h3>积分换购</h3>
                <span> 积分当钱花</span>
            </div>
            <div class="ntegral-img">
                <img src="//media.china-sss.com/img/M00/04/CC/wKjFbFzjwMeASHAvAACNsYdHaGA839.jpg" alt="">
            </div>
            <div class="ntegral-concont">
                <ul class="ntegral-list">
                    <li  v-for="(item,index) in liveList" :key="index">
                        <img :src="item.imgurl">
                        <p>{{item.productName}}</p>
                        <span>￥<em>{{item.price}}</em> <span>{{item.pointAmount}}积分抵扣￥{{item.productSource}}</span></span>
                        <i>生活</i>
                    </li>
                </ul>
            </div>
        </div>
     <!-- 好物集 -->

        <div class="market">
            <div class="market-top">
                <h3>好物集</h3>
                <p>全部宝贝<i class="iconfont icon-xiangyou"></i></p>
            </div>
            <ul class="market-list">
                <li>便携随身</li>
                <li>智享电器</li>
                <li>旅行箱包</li>
                <li>亲子互动</li>
                <li>家居生活</li>
            </ul>
            <div class="market-box-top">
              <div class="market-top-img">
                  <img src="//media.china-sss.com/img/M00/04/AA/wKjFbFy26YSASpeTAAF7yXmkjCE840.jpg" alt="">
              </div>
              <div class="market-box-top-concont">
                  <ul class="market-box-list">
                      <li  v-for="(item,index) in market" :key="index">
                          <img :src="item.imgurl">
                          <p>{{item.productName}}</p>
                          <span>￥<em>{{item.price}}</em> <span>{{item.pointAmount}}积分抵扣￥{{item.productSource}}</span></span>
                          <i>生活</i>
                      </li>
                  </ul>
            </div>
        </div>
            </div>
    </div>
    </div>
</BScroll>
      </div>
    

   

</template>



<script>
import { getLive } from "api/home";
import { getLiveBox } from "api/home";
import { liveDivision } from "api/home";

import homeBanner from "components/homeBanner";
export default {
  name: "live",
  async created() {
    let data = await getLive();
    this.liveList = data.data.data.products;
    let databox = await getLiveBox();
    this.market = databox.data.data.products;

    let num = await liveDivision();
    this.Division = num.data.data.products;
    if (data) {
      this.loadingFalg = false;
    } else {
      this.loadingFalg = true;
    }
  },
  data() {
    return {
      liveList: [],
      market: [],
      Division: [],
      loadingFalg: true
    };
  },
  components: {
    homeBanner
  },
  methods: {
    handleBack() {
      this.$router.back();
    }
  }
};
</script>


<style scoped>
#content {
  height: 100%;
  position: relative;
  box-sizing: border-box;
}
.box {
  height: 40rem;
}
.box2 {
  height: 50rem;
}
/* 头部 */
#header {
  width: 100%;
  height: 0.8rem;
  line-height: 0.8rem;
  position: fixed;
  left: 0;
  top: 0;
  text-align: center;
  background: #fff;
  z-index: 10;
  border: 1px solid #eeee;
}
#header > h2 {
  position: absolute;
  top: 0;
  right: 20%;
  bottom: 0;
  left: 20%;
  font-size: 0.36rem;
  overflow: hidden;
  color: #333333;
}
#header .icon-zuojiantou1 {
  font-size: 0.5rem;
  position: absolute;
  left: 0.2rem;
  color: #00be88;
}
#header .icon-ziyuan1 {
  font-size: 0.4rem;
  position: absolute;
  right: 0.3rem;
  color: #00be88;
}
/* 背景图 */
.banner > img {
  width: 100%;
  height: 2.56rem;
}
.banner {
  height: 2.56rem;
}
/* 搜索 */
#search {
  padding: 0.2rem;
  margin-top: .82rem;
  position: relative;
}
.search-top {
  width: 7.1rem;
  height: 0.6rem;
}
.search-top > a {
  font-size: 0.28rem;
  color: #666666;
  width: 1.4rem;
  display: inline-block;
}
#search .icon-xjt {
  font-size: 0.32rem;
  color: #00be88;
  font-weight: 900;
  margin-left: 0.1rem;
}
.search-ipt {
  width: 5.6rem;
  height: 0.6rem;
  background: #f2f3f7;
  border: 0;
  border-radius: 0.3rem;
  font-size: 0.3rem;
  text-indent: 1rem;
}
#search .icon-fangdajing {
  position: absolute;
  left: 2rem;
  top: 0.35rem;
  z-index: 1;
  font-size: 0.3rem;
}
/* 活动 */
#activity {
  padding: 0 0.28rem;
  box-shadow: 0 16px #f2f3f7;
  height: 2.81rem;
  box-shadow: 0 16px #f2f3f7;
}
#activity > p {
  padding-top: 0.28rem;
  height: 0.57rem;
}
#activity > p > span {
  color: #666666;
}
#activity .icon-laba {
  color: #00be88;
}
.activity-box {
  padding-bottom: 0.28rem;
}
.activity-box > img {
  width: 33.3%;
  height: 1.68rem;
  float: left;
}
/* 主体 */
#main {
  padding: 0.28rem;
}
.prefecture > h3 {
  margin-top: .28rem;
  font-size: 0.3rem;
}
.prefecture-list {
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  box-shadow: 0 16px #f2f3f7;
}
.prefecture-list > li {
  width: 3.32rem;
  height: 3, 8rem;
  float: left;
  margin: 0.28rem 0;
}
.prefecture-list > li > img {
  width: 3.32rem;
  height: 2.4rem;
}
.prefecture-list > li > p {
  margin-top: 0.1rem;
  font-size: 0.3rem;
}
.prefecture-list > li > span {
  margin-top: 0.3rem;
  color: #ff6666;
  display: block;
}
.prefecture-list > li > span > em {
  font-size: 0.42rem;
}

/* 人气货品 */
.popularity-top {
  width: 6.9rem;
  height: 0.32rem;
  margin-top: 0.28rem;
}
.popularity-top > h3 {
  display: inline-block;
  font-size: 0.3rem;
  font-weight: 600;
  margin-top: .28rem;
}
.popularity-top > span {
  color: #999999;
  font-size: 0.22rem;
}
.popularity-top > span:nth-of-type(1) {
  margin-left: 0.2rem;
}
.popularity-top > span:nth-of-type(2) {
  margin-left: 3rem;
}
.popularity-list {
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  box-shadow: 0 16px #f2f3f7;
  margin-top: 0.4rem;
}
.popularity-list > li {
  width: 3.32rem;
  height: 3.8rem;
  float: left;
  position: relative;
}
.popularity-list > li > img {
  width: 3.32rem;
  height: 2.4rem;
}
.popularity-list > li > p {
  margin-top: 0.1rem;
  font-size: 0.28rem;
  height: 0.72rem;
}
.popularity-list > li > span {
  color: #ff6666;
}
.popularity-list > li > span > em {
  font-size: 0.42rem;
}
.popularity-list > li > i {
  position: absolute;
  width: 1.02rem;
  height: 0.38rem;
  left: 0;
  top: 0;
  background: #314e56;
  border-radius: 0.05rem 0 0.22rem 0;
  color: #fff;
  text-align: center;
  line-height: 0.38rem;
}

.ntegral {
  box-shadow: 0 16px #f2f3f7;
}
.ntegral-list {
  display: flex;
  justify-content: space-between;
  overflow-x: auto;
  overflow-y: hidden;
}
.ntegral-list::-webkit-scrollbar {
  display: none;
}

.ntegral-list > li {
  width: 3.32rem;
  height: 3.4rem;
  float: left;
  position: relative;
  margin-top: 0.2rem;
  margin-right: 0.4rem;
}
.ntegral-list > li > img {
  width: 3.32rem;
  height: 2.4rem;
}
.ntegral-list > li > p {
  margin-top: 0.1rem;
  font-size: 0.3rem;
}
.ntegral-list > li > span {
  color: #ff6666;
}
.ntegral-list > li > span > em {
  font-size: 0.42rem;
}
.ntegral-list > li > i {
  position: absolute;
  width: 1.02rem;
  height: 0.38rem;
  left: 0;
  top: 0;
  background: #314e56;
  border-radius: 0.05rem 0 0.22rem 0;
  color: #fff;
  text-align: center;
  line-height: 0.38rem;
}

/* 积分换购 */
.ntegral-top {
  width: 100%;
  height: 0.44rem;
  padding: 0.28rem 0;
  margin-top: .28rem;

}
.ntegral-top > h3 {
  font-size: 0.3rem;
  display: inline-block;
  font-weight: 600;
}
.ntegral-top > span {
  margin-left: 0.4rem;
  color: #999;
}
.ntegral-img > img {
  width: 100%;
}

/* 好物集 */

.market-top {
  height: 0.3rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 0.28rem 0;
}

.market-top > h3 {
  font-weight: 600;
  font-size: 0.3rem;
}
.market-top > p {
  color: #999999;
}
.market-list {
  height: 0.8rem;
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid #eeeeee;
}
.market-list > li {
  text-align: center;
  font-size: 0.28rem;
  line-height: 0.8rem;
  color: #666666;
  font-weight: 400;
}
.market-box-top {
  margin-top: 0.1rem;
}

.market-box-list {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.market-box-list > li {
  width: 3.32rem;
  height: 3.4rem;
  float: left;
  position: relative;
  margin-top: 0.2rem;
}
.market-box-list > li > img {
  width: 3.32rem;
  height: 2.4rem;
}
.market-box-list > li > p {
  margin-top: 0.1rem;
  font-size: 0.3rem;
}
.market-box-list > li > span {
  color: #ff6666;
}
.ntegral-list > li > span > em {
  font-size: 0.42rem;
}
.market-box-list > li > i {
  position: absolute;
  width: 1.02rem;
  height: 0.38rem;
  left: 0;
  top: 0;
  background: #314e56;
  border-radius: 0.05rem 0 0.22rem 0;
  color: #fff;
  text-align: center;
  line-height: 0.38rem;
}
</style>
