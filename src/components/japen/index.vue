<template>
    <div>
        <!-- 头部 -->
        <div class="header">
            <a href="javascript:;" @click="handleClickAdd()"><i class="iconfont icon-zuojiantou1"></i></a>
            <a href="javascript:;"><i class="iconfont icon-ziyuan1"></i></a>
            <h2>日本游</h2>
        </div>

        <!-- 内容 -->
        <div class="main"  ref="listBody">
        <BScroll>
            <template>
                
            <!-- 轮播图 -->
                <div>
                    <banner class="banner">
                        <mt-swipe :auto="2000">
                            <mt-swipe-item v-for="(item,index) in banners" :key="index">
                                <img :src="item.imgurl"/>
                            </mt-swipe-item>
                        </mt-swipe>
                    </banner>
                    <div class="search">
                        <!-- 城市地址搜索 -->
                        <div class="search-top">
                            <a href="javascript:;">深圳<i class="iconfont icon-xjt"></i></a>
                            <input type="text" class="search-ipt" placeholder="搜索你想去的地方">
                            <i class="iconfont icon-fangdajing"></i>
                        </div>
                        <!-- 列表导航 -->
                        <div class="main-nav">
                            <ul class="nav-wrap">
                                <li>
                                    <img src="//media.china-sss.com/img/M00/04/D1/wKjFbFznvDWAVivqAAALFv1SAPM842.png" alt="">
                                    <p>机票</p>
                                </li>
                                <li>
                                    <img src="//media.china-sss.com/img/M00/04/D1/wKjFbFznvDaAZYopAAAHJsAc42c784.png" alt="">
                                    <p>酒店</p>
                                </li>
                                <li>
                                    <img src="//media.china-sss.com/img/M00/04/D1/wKjFbFznvDWAD8N6AAAKYPBlJko171.png" alt="">
                                    <p>签证</p>
                                </li>
                                <li>
                                    <img src="//media.china-sss.com/img/M00/04/D1/wKjFbFznvDWAO3QYAAAMPd6rxGk509.png" alt="">
                                    <p>当地玩乐</p>
                                </li>
                                <li>
                                    <img src="//media.china-sss.com/img/M00/04/D1/wKjFbFznvDaAACbUAAAHW-leNGo565.png" alt="">
                                    <p>出境游</p>
                                </li>
                                <li>
                                    <img src="//media.china-sss.com/img/M00/04/D1/wKjFbFznvDWAPGUOAAAIxl2v8KA345.png" alt="">
                                    <p>出境游</p>
                                </li>
                                <li>
                                    <img src="//media.china-sss.com/img/M00/04/D1/wKjFbFznvDaANUoIAAAIkn5Jbp4147.png" alt="">
                                    <p>出境游</p>
                                </li>
                                <li>
                                    <img src="//media.china-sss.com/img/M00/04/D1/wKjFbFznvDWAdxjHAAAJCjhEV7c396.png" alt="">
                                    <p>出境游</p>
                                </li>
                            </ul>
                        </div>
                    </div>


                    <div class="main-theme">
                        <div class="theme-title">
                            <h3>主题推荐</h3>
                        </div>
                        <div class="main-tab">
                            <div class="tab-box">
                                <div class="theme-t">
                                    <h4>当季优选</h4>
                                </div>
                                
                                <div class="tab-nav " >
                                
                                    <ul class="scrollBox::-webkit-scrollbar">
                                        <router-link class="tab-color" to="/japen/spots" tag="li" >热门主推</router-link>
                                        <router-link to="/japen/japenTwo" tag="li">暑期正当时</router-link>
                                        <router-link to="/japen/japenThree" tag="li">温泉体验</router-link>
                                        <router-link to="/japen/japenfour" tag="li">出行搭配</router-link>
                                    </ul>
                                <keep-alive>
                                    <router-view></router-view>
                                </keep-alive>

                                </div>
                            </div>
                        <!-- <Spots/> -->
                        </div>
                    </div>


                    <!-- 城市选择 -->
                    <div class="main-ctiy">
                        <div class="ctiy-box">
                            <h4>热门城市</h4>
                            <span>热门城市</span>
                        </div>
                        <ul class="ctiy-list">
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
                
            

                    <!-- 狂欢 -->
                    <div class="search-footer">
                        <div class="search-footer-box">
                            <img src="http://media.china-sss.com/pics/gallery/201711/b740bb8d-1a69-42e4-af3c-5b49a637427e_201711201413_500_350.jpg" alt="">
                            <div class="search-footer-box-left">
                                <h3>【限时抢购】深圳直飞日本名古屋往返机票5日自由行（双人赠送Wifi+BIC优惠券+返程升级至27KG行李额）</h3>
                                <p>深圳出发</p>
                                <span>￥<em>1299</em>起</span>
                            </div>
                        </div>
                        <div class="search-footer-right">
                            <h3>自由玩泰国</h3>
                            <p>错峰出行</p>
                            <img src="http://media.china-sss.com/img/M00/00/02/wKjFbFnEgbOABPMCAABkdEIunTY225.png" alt="">
                        </div>

                    </div>

                    <!-- 产品 -->
                    <div class="tab-top">
                        <div class="tab-couple">
                            <ul>
                                <li class="couple-color" >自由行</li>
                                <li >跟团游</li>
                                <li >当地玩乐</li>
                            </ul>
                            <div class="tab-city">
                                <ul>
                                    <li class="tabColor">倾情推荐</li>
                                    <li>本州地区</li>
                                    <li>北海道</li>
                                </ul>
                            </div>
                        </div>
                        <Freedom/>
                    </div>
                </div>
            
            </template>
        </BScroll>
    </div>
    </div>
</template>

<script>
import {ticket} from "api/destination";
import Freedom from "components/freedom";
import BScroll from "better-scroll";
export default {
    name:"japen",
    async created() {
        let data = await ticket()
        // console.log(data.data.data.banners);
        this.banners = data.data.data.banners;
    
    },
    data() {
        return {
            banners:[]
        }
    },
    components:{
        Freedom,
    },
    methods: {
        handleClickAdd(){
            this.$router.back()
        }
    },
    mounted() {

        this.scroll = new BScroll(this.$refs.orderBody);
        console.log(this.scroll);
    }

}
</script>

<style scoped>
body,html{
    background: #fff;
}
.header{
    width: 100%;
    height: 0.8rem;
    line-height: 0.8rem;
    position: fixed;
    left: 0;
    right: 0;
    text-align: center;
    background: #fff;
    z-index: 10;
}
.header>h2{
    position: absolute;
    top: 0;
    right: 20%;
    bottom: 0;
    left: 20%;
    text-align: center;
    font-size: .35rem;
    color: #333;
    overflow: hidden;
    font-weight: 400;

}
.header .icon-zuojiantou1{
    font-size: .5rem;
    position: absolute;
    left: .2rem;
    color: #00be88;
}
.header .icon-ziyuan1{
    font-size: .4rem;
    position: absolute;
    right: .3rem;
    color: #00be88;
}

/* 内容 */

.main{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0.8rem;
    left: 0;
    bottom: 1rem;
    overflow-y: auto;
    padding-bottom: 2rem;
}

/* 轮播图 */
.banner {
    width: 100%;
    height: 2.6rem;
}
.mint-swipe {
    overflow: hidden;
    position: relative;
    height: 2.6rem;
}


/* 搜索地点 */
.search{
    padding: .2rem;
    position: relative;
    border-bottom: .2rem solid #f2f3f7;

}

/* 城市地址搜索 */

.search-top{
    width: 7.1rem;
    height: .6rem;
}
.search-top>a{
    font-size: .28rem;
    color: #666666;
    width: 1.4rem;
    display: inline-block;
}
.search .icon-xjt{
    font-size: .32rem;
    color: #00be88;
    font-weight: 900;
    margin-left: .1rem;
}
.search-ipt{
    width: 5.6rem;
    height: .6rem;
    background: #f2f3f7;
    border: 0;
    border-radius: .3rem;
    font-size:.3rem;
    text-indent: 1rem;
    outline: none;
}
.search .icon-fangdajing{
    position: absolute;
    left: 2rem;
    top: .35rem;
    z-index: 1;
    font-size: .3rem;
}


/* 列表导航 */


.main-nav{
    padding-bottom: .3rem;
}
.nav-wrap{
    flex-shrink: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;

}
.nav-wrap>li{
    display: block;
    width: 25%;
    padding-top: .3rem;
    text-align: center;
    color: #333;

}
.nav-wrap>li>img{
    display: block;
    width: .8rem;
    height: .8rem;
    margin: 0 auto;
    margin-bottom: .1rem;
}
.nav-wrap>li>p{
    text-align: center;
    color: #333333;
    font-size: .24rem;
}
.main-nav>p{
    position: relative;
    height: .24rem;
    width: 100%;
    text-align:center;
}
.main-nav>p>span{
    display:inline-block;
    width: .12rem;
    height: .12rem;;
    line-height: .28rem;
    border-radius: 50%;
    border: 1px solid #cccccc; 
}

/* 城市主题 */
.main-theme{
    border-bottom: .2rem solid #f2f3f7;
    overflow: hidden;
}
.main-theme .theme-title{
    padding: .25rem .3rem 0 .3rem;
    background-color: #fff;
}
.main-theme .theme-title h3{
    font-weight: 700;
    font-size: .3rem;
    color: #333;
}
.main-theme .theme-t{
    height: .7rem;
    font-size: .25rem;
    color: #00be88;
    line-height: .7rem;
    border-bottom: 1px solid #ededed;
}
.main-theme .theme-t h4{
    padding: 0 .3rem;
    width: 1.8rem;
    border-bottom: 1px solid #00be88;
}
.main-theme .tab-nav>ul{
    text-align: center;
    line-height: 1.77rem;
    background-color: #fff;
    font-size: .6rem;
    color: #333;
    overflow: hidden;
    padding: .2rem;
    display: flex;
    justify-content: center;
}
.main-theme .tab-nav>ul>li{
    width: 1.5rem;
    height: .5rem;
    line-height: .5rem;
    border-radius: .5rem;
    padding: 0 .1rem;
    margin-right: .3rem;
    border: 1px solid #f2f4f6;
    background-color: #f5f5f5;

    color: #555;
    box-sizing: border-box;
    font-size: .25rem;
    display: block;
    float: left;
}
/* .main-theme .tab-nav>ul>.tab-color{
    border-color: #00be88;
    color: #00be88;
} */

.main-theme .tab-nav>ul>.router-link-active{
    border-color: #00be88;
    color: #00be88;
}


/* 产品滚动列表 */


/* 城市选择导航 */

.main-ctiy{
    padding:.2rem 0 .2rem .2rem;
    border-bottom: .2rem solid #f2f3f7;

}
.ctiy-box{
    width:7.3rem;
    margin-bottom: .2rem;
}
.ctiy-box>h4{
    display: inline-block;
    font-size: .3rem;
}
.ctiy-box>span{
    color: #aaaaaa;
    font-size: .2rem;
    margin-left: .2rem;
}
.ctiy-list{
    display: flex;
    justify-content: space-between;
    overflow-y: auto;
}
.ctiy-list>li{
    width: 2.16rem;
    height: 1.22rem;
    margin-right: .2rem;
}
.ctiy-list>li>img{
    width: 2.16rem;
    height: 1.22rem;
}
::-webkit-scrollbar {
        display: none;
    }


/* 狂欢 */
.search-footer{
    margin-top: .2rem;
    padding: .1rem .2rem;
    overflow: hidden;
    border-bottom: .2rem solid #f2f3f7;

}
.search-footer-box{
    width: 5.12rem;
    height: 1.8rem;
    overflow: hidden;
    float: left;
}
.search-footer-box>img{
    width: 2.3rem;
    height: 1.8rem;
    float: left;
}
.search-footer-box-left{
    width: 2.5rem;
    height: 1.8rem;
    float: left;
    padding: .11rem;
    background: #f2f3f7;
}
.search-footer-box-left>h3{
    height: .78rem;
    overflow: hidden;
    text-overflow: ellipsis;
}
.search-footer-box-left>p{
    color: #cccccc;
    margin-bottom: .1rem;
}
.search-footer-box-left>span{
    color: #ff6666;

}
.search-footer-box-left>span>em{
    font-size: .35rem;
}
.search-footer-right{
    width: 1.76rem;
    float: left;
    background: #fff2e6;
    text-align: center;
    padding-top: .1rem;
    margin-left: .2rem;
}
.search-footer-right>img{
    width: 1.26rem;
    height: .9rem;
    margin-top: .06rem;
}

/* 产品 */

.tab-top .tab-couple>ul{
    text-align: center;
    height: .8rem;
    line-height: .8rem;
    background-color: #fff;
    font-size: .3rem;
    color: #333;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-bottom: 1px solid #ccc;
}
.tab-top .tab-couple>ul>.couple-color{
    color: #00be88;
    border-bottom: .03rem solid #00be88;
}
.tab-top .tab-couple>ul>li{
    position: relative;
    display: block;
    height: .8rem;
    overflow: hidden;
    text-align: center;
    font-size: .3rem;
    color: #555;
}
.tab-top .tab-city{
    padding: .3rem .3rem;
}
.tab-top .tab-city>ul{
    text-align: center;
    line-height: 1.77rem;
    background-color: #fff;
    font-size: .6rem;
    color: #333;
    display: flex;
    justify-content: space-around;
}
.tab-top .tab-city>ul>.tabColor{
    background-color: #e5f8f3;
    border-color: #00be88;
    color: #00be88;
}
.tab-top .tab-city>ul>li{
    width: 100%;
    height: .5rem;
    line-height: .5rem;
    border-radius: .5rem;
    padding: 0 .1rem;
    margin-right: .3rem;
    border: 1px solid #f2f4f6;
    background-color: #f5f5f5;
    color: #555;
    box-sizing: border-box;
    font-size: .25rem;
    display: block;
    float: left;
}


.tab-list .list-content{
    padding: 0 .2rem;
    
}
.tab-list .list-content>ul>li{
    padding: .2rem 0;
    overflow: hidden;
    border-radius: .04rem;
    position: relative;
    border-bottom: 1px solid #f5f5f5;
}
.tab-list .list-content>ul>li>.list-img{
    position: absolute;
    top: 0;
    left: 0;
    border-radius: .04rem;
    width: 2.5rem;
    height: 2.5rem;
    position: relative;
    float: left;
}
.tab-list .list-content>ul>li>.list-img>.type{
    position: absolute;
    z-index: 1;
    display: block;
    text-align: center;
    color: #fff;
    font-size: .2rem;
    top: 0;
    left: 0;
    width: 1.2rem;
    overflow: hidden;
    height: .4rem;
    line-height: .4rem;
    border-radius: .1rem 0 1rem 0;
    background-color: #314e56;
    padding: 0;
}
.tab-list .list-content>ul>li>.list-img>.tag{
    width: 100%;
    height: .4rem;
    line-height: .4rem;
    border-radius: 0 0 .09rem .09rem;
    background-color: #667384;
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
    display: block;
    text-align: center;
    color: #fff;
    font-size: .2rem;
}
.tab-list .list-content>ul>li>.list-img>img{
    width: 100%;
    height: 100%;
    display: block;
}
.tab-list .list-content>ul>li>.list-txt{
    height: 2.5rem;
    position: relative;
    padding-left: .3rem;
    overflow: hidden;
}
.tab-list .list-content>ul>li>.list-txt>h4{
    min-height: 1rem;
    max-height: 1rem;
    overflow: hidden;
    line-height: .5rem;
    color: #333;
    font-size: .3rem;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp:2;
    font-weight: 500;
}
.tab-list .list-content>ul>li>.list-txt>p{
    height: .35rem;
    overflow: hidden;
    margin-top: .2rem;
    color: #999;
}
.tab-list .list-content>ul>li>.list-txt>.label>span{
    display: inline-block;
    vertical-align: top;
    line-height: .3rem;
    padding: 0 .32em;
    border: 1px solid #ccc;
    border-radius: .04rem;
    margin-right: .21rem;
    margin-bottom: .2rem;
    font-size: .2rem;
    background: #f5f5f5;
}
.tab-list .list-content>ul>li>.list-txt>.money{
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    line-height: 1;
    margin-left: .2rem;
    
}
.tab-list .list-content>ul>li>.list-txt>.money>span:nth-child(2){
    float: right;
}
.tab-list .list-content>ul>li>.list-txt>.money>span:nth-child(1){
    color: #f66;

}
.icon-jiage1{
    font-size: .2rem;
    color: #f66;
}


</style>

