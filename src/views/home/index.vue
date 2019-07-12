<template>
      <div id="box" >
          <HomeBanner />
        <div class="ipt-box">
            <a href="javascript:;"> 深圳 <i class="iconfont icon-sanjiaodown"></i></a>
            <input type="text" placeholder="搜索你想去的地方" class="ipt">
            <i class="iconfont icon-fangdajing"></i>
        </div>
        <!-- 导航 -->
        <div id="nav">
            <ul class="nav-box">
                <router-link to="/details" tag="li">
                    <img src="https://media.china-sss.com/img/M00/04/36/wKjFbFvyLD-AObSLAAATqap666k706.png" alt="">
                    <p>出境游</p>
                </router-link>
                <li>
                    <img src="https://media.china-sss.com/img/M00/04/36/wKjFbFvyLD-ASRIrAAARE0N2Yh0778.png" alt="">
                    <p>出境游</p>
                </li>
                <li>
                    <img src="https://media.china-sss.com/img/M00/04/36/wKjFbVvyLD-AKwRpAAAOCp8L3l0599.png" alt="">
                    <p>出境游</p>
                </li>
                <li>
                    <img src="https://media.china-sss.com/img/M00/04/36/wKjFbVvyLE-ACTr7AAAMXhfeqlY352.png" alt="">
                    <p>出境游</p>
                </li>
                <li>
                    <img src="https://media.china-sss.com/img/M00/04/45/wKjFbVwm60WANVOWAAAY6j400vE369.png" alt="">
                    <p>飞机</p>
                </li>
                <li>
                    <img src="https://media.china-sss.com/img/M00/04/52/wKjFbVxK9FSAMbMoAAAsmkBE90c687.png" alt="">
                    <p>出境游</p>
                </li>
                <li>
                    <img src="https://media.china-sss.com/img/M00/04/46/wKjFbFwnSQWAQ94tAAAT5ZV3Cbc926.png" alt="">
                    <p>出境游</p>
                </li>
                <li>
                    <img src="https://media.china-sss.com/img/M00/04/0F/wKjFbFt7y0GAWRUsAAASvo84-LY721.png" alt="">
                    <p>出境游</p>
                </li>
                <li>
                    <img src="https://media.china-sss.com/img/M00/04/0F/wKjFbFt7y0GAWRUsAAASvo84-LY721.png" alt="">
                    <p>出境游</p>
                </li>
                <router-link to="/live" tag="li">
                    <img src="https://media.china-sss.com/img/M00/04/42/wKjFbFwYkQiADtkmAAAVf4SVPUs647.png" alt="">
                    <p>生活</p>
                </router-link>
            </ul>
        </div>
        <div id="main">
            <div class="main-header">
                <div class="main-top">
                    <img src="http://media.china-sss.com/pics/gallery/201903/6a1eec05-98b8-4628-a9a4-514c4357c2e5_201903211316.jpg"
                        alt="">
                    <div class="main-top-box">
                        <div class="main-title">
                            <h3>【限时抢购】广州直飞往返日本大阪5日自由行（双人赠送Wifi+BIC优惠券+返程升级至27KG行李额）</h3>
                        </div>
                        <div class="main-text">
                            <p>¥<em>999</em>起</p>
                            <span>广州出发</span>
                            <em>|</em>
                            <span>评分4.36</span>
                        </div>
                    </div>
                </div>
                <div class="main-content">
                    <ul>
                        <li>
                            <p>新人大礼包</p>
                            <p>666优惠券</p>
                            <img src="https://media.china-sss.com/img/M00/00/0C/wKjFbVp4JcWAY0tsAAAgFUy47Eo190.png"
                                alt="">
                        </li>
                        <li>
                            <p>官网专享</p>
                            <p></p>
                            <img src="https://media.china-sss.com/img/M00/04/5E/wKjFbVxuOHKAY54DAACQWiLGk20597.png"
                                alt="">
                        </li>
                        <li>
                            <p>欧美非专场</p>
                            <p></p>
                            <img src="https://media.china-sss.com/img/M00/04/97/wKjFbFykVUiAdnm9AABJDBJhlH4344.png"
                                alt="">
                        </li>
                    </ul>
                </div>

            </div>
            <div class="main-nav">
                <ul>
                    <router-link tag="li" to="/home/homeBody"><p>本季主打</p></router-link >
                    <router-link tag="li" to="/home/quality"><p>品质出境</p></router-link >
                    <router-link tag="li" to="/home/homeInland"><p>省心国内</p></router-link >
                </ul>
                
            <keep-alive>
                <router-view/>
            </keep-alive>
                
            </div>          
        </div>
              <router-link src="http://media.china-sss.com/img/M00/00/0A/wKjFbFpmvGSAQ9FSAABpLtCfBRA957.png" class="night" to="/night" tag="img">
        </router-link>

      </div>
     

   
</template>
<script>

import HomeBanner from "components/homeBanner";
import HomeBody from "components/homeBody";

export default {
  name: "home",
  components: {
    HomeBanner,
    HomeBody
  },
  data() {
    return {};
  },
  methods: {}
  // mounted(){
  //   console.log(this.$refs.bscroll)
  //   // this.scroll=new scroll(this.$refs.bscroll)
  // }
};
</script>
<style scoped>
#box {
  position: relative;
  box-sizing: border-box;
}

.ipt-box {
  position: absolute;
  padding: 0 0.3rem;
  left: 0.6rem;
  top: 2.2rem;
  background: #ffffff;
  box-shadow: 0 3px #e4e2e2;
  width: 90%;
  height: 0.82rem;
  box-sizing: border-box;
  overflow: hidden;
  z-index: 10;
}
.ipt-box > a {
  display: block;
  width: 1.2rem;
  height: 0.82rem;
  float: left;
  text-align: center;
  line-height: 0.82rem;
  background: #ffffff;
  border-radius: 0.03rem 0 0 0.03rem;
}
.ipt {
  float: left;
  height: 0.82rem;
  width: 60%;
  border: 0;
  border-radius: 0 0.03rem 0.03rem 0;
  padding-left: 1rem;
  font-size: 0.3rem;
}
.icon-fangdajing {
  position: absolute;
  left: 2rem;
  top: 0.24rem;
}
.ipt-box i {
  font-size: 0.3rem;
}
/* 导航 */

#nav {
  padding: 0.46rem 0.2rem 0.2rem 0.2rem;
  margin-bottom: 0.2rem;
  box-shadow: 0 12px #e4e2e2;
  overflow: hidden;
}
.nav-box {
  width: 100%;
  height: 3.16rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
}
.nav-box > li > img {
  width: 1.24rem;
  height: 0.98rem;
}
.nav-box > li > p {
  text-align: center;
  color: #333333;
  font-size: 0.24rem;
}
/* 主体 */
.main-header {
  padding: 0.2rem;
  box-shadow: 0 12px #e4e2e2;
}
.main-top {
  width: 100%;
  height: 1.76rem;
  border-bottom: 1px solid #eeeeee;
}
.main-top > img {
  width: 33.3%;
  height: 1.56rem;
  float: left;
}
.main-top-box {
  width: 62%;
  height: 1.78rem;
  float: left;
  margin: 0 0 0.2rem 0.2rem;
}
.main-top-box > .main-title > h3 {
  font-size: 0.24rem;
}
.main-title {
  font-size: 0.3rem;
  margin-bottom: 0.6rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
.main-text > p {
  float: left;
  color: red;
  margin-right: 0.8rem;
}
.main-text > p > em {
  font-size: 0.42rem;
}
.main-text > span {
  float: left;
  margin-top: 0.2rem;
  color: #cccccc;
}
.main-text > em {
  float: left;
  padding: 0 0.1rem;
  margin-top: 0.2rem;
  color: #cccccc;
}
/* 主体优惠 */
.main-content {
  width: 100%;
  height: 1.8rem;
  overflow: hidden;
}
.main-content > ul {
  width: 100%;
  height: 1.8rem;
  display: flex;
  justify-content: space-between;
}
.main-content > ul > li>img{
  width: 2.14rem;
}
.main-content > ul > li:nth-child(1) {
  width: 2.22rem;
  height: 1.62rem;
  background: #fff2e6;
}
.main-content > ul > li:nth-child(2) {
  width: 2.22rem;
  height: 1.62rem;
  background: #f5f0fb;
}
.main-content > ul > li:nth-child(2) > p {
  margin-bottom: 0.3rem;
}
.main-content > ul > li:nth-child(3) > p {
  margin-bottom: 0.3rem;
}
.main-content > ul > li:nth-child(3) {
  width: 2.22rem;
  height: 1.62rem;
  background: #ffefec;
}
.main-content > ul > li > p {
  font-size: 0.28rem;
}
.main-content > ul > li {
  width: 33.3%;
  padding-top: 0.18rem;
  text-align: center;
  float: left;
}

/* 商品 */
.main-nav > ul {
  height: 0.82rem;
  width: 7.5rem;
  margin-top: 0.28rem;
  display: flex;
  justify-content: space-around;
  border-bottom: 1px solid #eeeeee;
}
.main-nav > ul > li > p {
  width: 1.2rem;
  text-align: center;
  line-height: 0.82rem;
  color: #555555;
}

/* 商品列表 */

.router-link-active{
    border-bottom: 3px solid #00be88;
}
.main-nav  .router-link-active>p{
    color: #00be88;
}
/* 夜市图 */
.night {
  position: fixed;
  right: 0;
  bottom: 2rem;
  width: 1.4rem;
  height: 1.4rem;
}

</style>


