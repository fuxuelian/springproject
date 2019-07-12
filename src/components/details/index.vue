<template>
    <div>
      <Loading v-if="loadingFalg"/>
        <div id="content" v-if="!loadingFalg">
        <!-- 头部 -->
        <div id="header">
            <a href="javascript:;" @click="handleBack()"><i class="iconfont icon-zuojiantou1"></i></a>
            <a href="javascript:;"><i class="iconfont icon-ziyuan1"></i></a>
            <h2>出境游</h2>
        </div>
        <div class="banner">
          <HomeBanner>
          </HomeBanner>
        </div>
         <!-- 搜索地点  -->
        <div id="search">
            <div class="search-top">
                <a href="javascript:;">深圳<i class="iconfont icon-xjt"></i></a>
                <input type="text" class="search-ipt" placeholder="搜索你想去的地方">
                <i class="iconfont icon-fangdajing"></i>
            </div>
             <!-- 搜索底部 -->
            <div class="search-footer">
                <div class="search-footer-box">
                    <img src="http://media.china-sss.com/pics/gallery/201711/b740bb8d-1a69-42e4-af3c-5b49a637427e_201711201413_500_350.jpg" alt="">
                    <div class="search-footer-box-left">
                        <h3>【限时抢购】深圳直飞日本名古屋往返机票5日自由行（双人赠送Wifi+BIC优惠券+返程升级至27KG行李额）</h3>
                        <p>深圳出发</p>
                        <span>¥<em>1299</em>起</span>
                    </div>
                </div>
                <div class="search-footer-right">
                    <h3>自由玩泰国</h3>
                    <p>错峰出行</p>
                    <img src="http://media.china-sss.com/img/M00/00/02/wKjFbFnEgbOABPMCAABkdEIunTY225.png" alt="">
                </div>
            </div>
        </div>
        <div id="nav">
            <div class="nav-box">
                <h4>热门目的地</h4>
                <span>春秋与你一起发现世界！</span>
            </div>
            <ul class="nav-list">
                <li>
                    <img src="http://media.china-sss.com/img/M00/04/4A/wKjFbFw5cbaATuWsAAF6sOaJ-7M076.jpg" alt="">
                </li>
                <li>
                    <img src="http://media.china-sss.com/img/M00/00/01/wKjFbVm2FwiAbfwzAAB_QLYVgoU239.jpg" alt="">
                </li>
                <li>
                    <img src="http://media.china-sss.com/img/M00/00/03/wKjFbVnpt2-AX0mMAADTHBESUac472.jpg" alt="">
                </li>
                <li>
                    <img src="http://media.china-sss.com/img/M00/00/27/wKjFbVqwwFyAVZwNAACOYNuy9r4595.jpg" alt="">
                </li>
                <li>
                    <img src="http://media.china-sss.com/img/M00/00/44/wKjFbVsY5xmAXGW2AACY0Nfm35A303.jpg" alt="">
                </li>
                <li>
                    <img src="http://media.china-sss.com/img/M00/04/34/wKjFbFvtBTeAP02kAAD9v5DjkFI520.jpg" alt="">
                </li>
                <li>
                    <img src="http://media.china-sss.com/img/M00/04/34/wKjFbFvtBTeAP02kAAD9v5DjkFI520.jpg" alt="">
                </li>
                <li>
                    <img src="http://media.china-sss.com/img/M00/04/34/wKjFbFvtBTeAP02kAAD9v5DjkFI520.jpg" alt="">
                </li>
            </ul>
        </div>
        <div id="main">
            <ul class="main-top-list">
                <li>
                    泰国
                </li>
                <li>
                    日本
                </li>
                <li>
                    东南亚
                </li>
                <li>
                    欧美
                </li>
            </ul>
            <div class="main-content-box">
                <ul class="main-content-list" v-for="(item,index) in detailsList" :key="index">
                    <li>
                        <i class="way">{{item.productTypeName}}</i>
                        <i class="site">{{item.cityName}}出发</i>
                        <img :src="item.imgurl">
                        <div class="tab-box">
                            <h3>{{item.productName}}</h3>
                            <span>班期：{{item.scheduleDateList}}</span>
                            <p>¥<em>{{item.price}}</em>起 <i> 评分{{item.averageScore}} </i></p>
                            
                        </div>
                    </li>
                </ul>
                <template>
                <ul class="main-content-list" v-for="(item,index) in listbox" :key="index+'box'">
                    <li>
                        <i class="way">{{item.productTypeName}}</i>
                        <i class="site">{{item.cityName}}出发</i>
                        <img :src="item.imgurl">
                        <div class="tab-box">
                            <h3>{{item.productName}}</h3>
                            <span>班期：{{item.scheduleDateList}}</span>
                            <p>¥<em>{{item.price}}</em>起 <i> 评分{{item.averageScore}} </i></p>
                            
                        </div>
                    </li>
                </ul>
                </template>
            </div>
        </div>
   </div>
    </div>
</template>



<script>
import HomeBanner from "components/homeBanner";
import { getDetails } from "api/home.js";
import { getlistbox } from "api/home.js";

export default {
  name: "detailsList",
  async created() {
    let data = await getDetails();
    this.detailsList = data.data.data.products;

    let num = await getlistbox()
    this.listbox = num.data.data.products
    if(data){
      this.loadingFalg=false
    }else{
      this.loadingFalg=true
    }
  },
  data(){
      return{
      detailsList:[],
      listbox:[],
      loadingFalg:true
      }
  },
  components: {
    HomeBanner
  },
  methods:{
    handleBack(){
      this.$router.back()
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

/* 头部 */
#header {
  width: 100%;
  height: 0.8rem;
  line-height: 0.8rem;
  position: fixed;
  left: 0;
  top: 0;
  text-align: center;
  color: #ffffff;
  background: #00be88;
  z-index: 10;
}
#header > h2 {
  position: absolute;
  top: 0;
  right: 20%;
  bottom: 0;
  left: 20%;
  font-size: 0.36rem;
  overflow: hidden;
}
#header .icon-zuojiantou1 {
  font-size: 0.5rem;
  position: absolute;
  left: 0.2rem;
  color: #ffffff;
}
#header .icon-ziyuan1 {
  font-size: 0.4rem;
  position: absolute;
  right: 0.3rem;
  color: #ffffff;
}
/* 背景图 */
.banner{
  margin-top: .8rem;
} 
.banner img {
  width: 100%;
  height: 2.6rem;
  margin-top: 0.8rem;
}

/* 搜索地点 */
#search {
  padding: 0.2rem;
  position: relative;
  box-shadow: 0 16px #f2f3f7;
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
/* 搜索底部 */
.search-footer {
  margin-top: 0.2rem;
  padding: 0.1rem 0;
  overflow: hidden;
}
.search-footer-box {
  width: 71%;
  height: 1.8rem;
  overflow: hidden;
  float: left;
}
.search-footer-box > img {
  width: 2.3rem;
  height: 1.8rem;
  float: left;
}
.search-footer-box-left {
  width: 2.5rem;
  height: 1.8rem;
  float: left;
  padding: 0.11rem;
  background: #f2f3f7;
}
.search-footer-box-left > h3 {
  height: 0.78rem;
  overflow: hidden;
  text-overflow: ellipsis;
}
.search-footer-box-left > p {
  color: #cccccc;
  margin-bottom: 0.1rem;
}
.search-footer-box-left > span {
  color: #ff6666;
}
.search-footer-box-left > span > em {
  font-size: 0.35rem;
}
.search-footer-right {
  width: 1.76rem;
  float: left;
  background: #fff2e6;
  text-align: center;
  padding-top: 0.1rem;
  margin-left: 0.2rem;
}
.search-footer-right > img {
  width: 1.26rem;
  height: 0.9rem;
  margin-top: 0.06rem;
}
/* 导航 */
#nav {
  padding: 0.2rem 0 0.2rem 0.2rem;
  box-shadow: 0 16px #f2f3f7;
}
.nav-box {
  width: 7.3rem;
  margin: 0.2rem 0;
}
.nav-box > h4 {
  display: inline-block;
  font-size: 0.3rem;
}
.nav-box > span {
  color: #aaaaaa;
  font-size: 0.2rem;
  margin-left: 0.2rem;
}
.nav-list {
  display: flex;
  justify-content: space-between;
  overflow-y: auto;
}
.nav-list > li {
  width: 2.16rem;
  height: 1.22rem;
  margin-right: 0.2rem;
}
.nav-list > li > img {
  width: 2.16rem;
  height: 1.22rem;
}
/* 主体 */
/* #main{
    padding: .2rem;
} */
.main-top-list {
  height: 0.82rem;
  display: flex;
  justify-content: space-around;
  border: 1px solid #eeeeee;
  margin-top: .28rem;
}
.main-top-list > li {
  font-size: 0.28rem;
  line-height: 0.82rem;
}
.main-top-list > li:nth-child(1) {
  width: 0.8rem;
  text-align: center;
  border-bottom: 2px solid #00be88;
}

/* 商品 */
/* .main-content-box{
    padding: .2rem;
} */
.main-content-list {
  padding: 0.2rem;
}
.main-content-list > li {
  width: 7.1rem;
  height: 2.2rem;
  position: relative;
  border-bottom: 1px solid #eeeeee;
  padding: 0.2rem 0;
}
.main-content-list > li > img {
  width: 2.3rem;
  height: 2rem;
  float: left;
}
.way {
  position: absolute;
  background: #314e56;
  width: 1rem;
  height: 0.38rem;
  border-radius: 0 0 0.15rem 0;
  color: #ffffff;
  text-align: center;
}
.site {
  position: absolute;
  width: 2.3rem;
  bottom: 0.2rem;
  left: 0;
  height: 0.38rem;
  background: #667384;
  color: #ffffff;
  text-align: center;
}
.tab-box {
  width: 4.48rem;
  height: 2rem;
  float: left;
  margin-left: 0.2rem;
}
.tab-box > h3 {
  font-size: 0.3rem;
  margin-bottom: 0.6rem;
  overflow:hidden; 
  text-overflow:ellipsis;
  display:-webkit-box; 
  -webkit-box-orient:vertical;
  -webkit-line-clamp:2; 
}
.tab-box > span {
  height: 0.3rem;
  color: #cccccc;
}
.tab-box > p {
  font-size: 0.3rem;
  color: #ff6666;
}
.tab-box > p > em {
  font-size: 0.42rem;
}
.tab-box > p > i {
  margin-left: 2rem;
  color: #999999;
  font-size: 0.2rem;
}
</style>
