<template>

    <div>
       <!-- 头部 -->
    <div class="header">
        <a href="javascript:;" @click="handleZuo()"><i class="iconfont icon-zuojiantou1"></i></a>
        <h1>发现</h1>
    </div>

     <!-- 内容 -->
    <div class="main">
        <!-- 搜索 -->
        <div class="top-search">
            <div class="search">
                <i class="iconfont icon-fangdajing"></i>
                <input type="text" class="inp" placeholder="按关键字搜索一下">
                <i class="iconfont icon-quxiao"></i>
            
            </div>   
        </div>
         <!-- 图片轮播 -->
         <div class="pic">
            
                 <!-- <template v-slot:banner="props">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide" v-for="(item,index) in props.banners" :key="index">
                            <img :src="item.imgurl" alt="">
                        </div>
                    </div>
                    <div class="swiper-pagination"></div>
                 </template> -->
               
                <mt-swipe :auto="2000">
                    <mt-swipe-item v-for="(item,index) in banners" :key="index">
                        
                            <img :src="item.imgurl"/>
                       
                    </mt-swipe-item>
                   
                </mt-swipe>
               
             
             <!-- <img src="//media.china-sss.com/img/M00/04/F1/wKjFbF0caw6ASPJDAAHVJmKCp68443.jpg " alt=""> -->
         </div> 
         <!-- 切换 -->
         <div class="main-tab">
            <ul>
                <li class="tab-one"><a href="javascript:;">最新</a></li>
                <li><a href="javascript:;">游人达记</a></li>
                <li><a href="javascript:;">官方推荐</a></li>
            </ul>
         </div>
         <!-- 风景推荐 -->
         <div class="tab-content" >
             
            <ul>
                <!-- <Remark/> -->
                <li>
                    <div class="find-txt">
                        <h2>多家超人气民宿¥599起，莫干山避暑正当时！</h2>
                        <img src="http://media.china-sss.com/img/M00/04/F2/wKjFbF0doNmAeMe4AApyHYZOOB0323.png" alt="">
                        <p>热门首选</p>
                    </div>
                    <div class="find-tag">
                        <div class="find-fl">
                            <img src="http://media.china-sss.com/img/M00/04/65/wKjFbFx4voKASVWNAAGvHh4IL7s229.png" alt="">
                            <strong>春小秋</strong>
                            <i class="iconfont icon-nvx"></i>
                        </div>
                        <div class="find-fr">
                            <p>
                                <i class="iconfont icon-xiaoyanjing"></i>
                                13
                            </p>
                        </div>
                    </div>
                </li>
                
                <li>
                    <div class="find-txt">
                        <h2>有个地方叫稻城，我要和我心爱的人，一起去到那里</h2>
                    </div>
                        <div class="find-img">
                            <img src="http://media.china-sss.com/img/M00/04/16/wKjFbVuNA86AdUSlAAC-8CSSZxU674.jpg" alt="">
                            <img src="http://media.china-sss.com/img/M00/04/16/wKjFbVuNA86AYruiAADr_ZkjqYk780.jpg" alt="">
                            <img src="http://media.china-sss.com/img/M00/04/16/wKjFbFuNA86AGZ9eAADJIl2shLQ868.jpg" alt="">
                        </div>
                    
                    
                    <div class="find-tag">
                        <div class="find-fr">
                            <p>
                                <i class="iconfont icon-xiaoyanjing"></i>
                                33
                            </p>
                        </div>
                    </div>
                </li>
            </ul>
         </div>
    </div>
    </div>

</template>
<script>
// import Shuffling from "components/shuffling";
// import Remark from "components/remark"; 
import {shuffling} from "api/destination";
import { Swipe, SwipeItem } from 'mint-ui';
export default {
    name:"order" ,
    components:{
        // Shuffling,
        // Remark
    },
    methods: {
        handleZuo(){
            this.$router.back()
        }
    },
   
    async created() {
        let data = await shuffling()
        console.log(data.data.data.banners);
        this.banners = data.data.data.banners
    },
    data() {
        return {
            banners:[]
        }
    },



}
</script>
<style scoped>
   .header{
    width: 100%;
    height: 0.8rem;
    line-height: 0.8rem;
    padding: 0 .34rem;
    position: fixed;
    left: 0;
    right: 0;

}
.header h1{
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

/* 搜索 */

.main .top-search{
    padding: .2rem .3rem;
    background-color: #f1f1f1;

}
.main .top-search .search{
    line-height: .5rem;
    border-radius: .5rem;
    box-sizing: border-box;
    overflow: hidden;
    color: #aaa;
    background-color: #fff;
}
.main .top-search .search{
    height: auto;
    line-height: 0;
    padding: .1rem 0;
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
}
.main .top-search .search .inp{
    /* display: block; */
    width: 5rem;
    height: .4rem;
    line-height: 1.5;
    background-color: #fff;
    outline: none;
    border: 0;
    font-size: .25rem;
}
.main .top-search .search .iconfont{
    font-size: .3rem;
    
}
.main .top-search .search .icon-fangdajing{
    margin-right: .2rem;
}
.main .top-search .search .icon-quxiao{
    margin-left: .2rem;
}

/* 图片轮播 */

.main .pic{
    width: 100%;
    height: 2.6rem;
    margin: 0 auto;
    position: relative;
    overflow: hidden;
    z-index: 1;
}

/* 切换 */

.main-tab{
    overflow: hidden;
    
}
.main-tab ul{
    display: flex;
    justify-content: space-around;
    align-items: center;
    overflow: hidden;
    text-align: center;
    font-size: .3rem;
    line-height: .5rem;
    color: #333;
    background-color: #fff;
    position: relative;
}
.main-tab ul .tab-one a{
    color: #00be88;
    border-bottom: 2px solid #00be88;
}
.main-tab ul>li{
    float: left;
    height: .6rem;
    display: flex;
    align-items: center;
}

/* 风景推荐 */

.tab-content ul li{
    padding: .3rem .25rem .15rem .25rem;
    border-top: 1px solid #ccc;
    width: 100%;

}
.tab-content ul li .find-txt{
    position: relative;
}
.tab-content ul li .find-txt h2{
    overflow: hidden;
    line-height: .5rem;
    font-size: .4rem;
    font-weight: 900;
    color: #333;
    text-overflow: ellipsis;
    margin-bottom: .2rem;
}
.tab-content ul li .find-txt img{
    width: 100%;
}
.tab-content ul li .find-txt p{
    width: 1.2rem;
    height: .4rem;
    line-height: .4rem;
    background: #ff75a9;
    text-align: center;
    border-radius: .2rem;
    margin-top: .2rem;
    color: #fff;
    position: static;
    right: 37%;
    bottom: 0;
    left: 0;
    overflow: hidden;
    display: inline-block;
}
.tab-content ul li .find-tag {
    padding-top: .2rem;
    overflow: hidden;
    text-align: right;
    line-height: .7rem;
}
.tab-content ul li .find-tag .find-fl{
    float: left;
    font-size: .3rem;
    color: #333;
    line-height: .6rem
}
.tab-content ul li .find-tag img{
    width: .6rem;
    height: .6rem;
    border-radius: 100%;
    overflow: hidden;
    float: left;
}
.tab-content ul li .find-tag strong{
    font-size: .4rem;
    color: #333;
    display: inline-block;
    vertical-align: middle;
    font-size: .3rem;
    font-weight: 400;
    margin-left: .1rem;
    /* float: left; */
}
.tab-content ul li .find-tag .icon-nvx{
    font-size: .25rem;
    color: #ff75a9;
}
.tab-content ul li .find-tag .find-fr .iconfont{
    font-size: .3rem;
}
.tab-content ul li .find-img {
    width: 100%;
    margin-right: 1%;
    overflow: hidden;
}
.tab-content ul li .find-img img{
    display: inline-block;
    width: 31.6%;
    height: 100%;
    
}
</style>
