<template>
    <div>
        
     <div class="wrap">
       <BScroll>
      <article class="main">
        <!-- 头部的背景 -->
          <Register/>
     

          <!-- 会员开始 -->
        <section class="user-order">
          <div class="t-vip" id="JS-vipPanel" data-position="4670">
            <i class="tag"><i class="iconfont icon-huiyuan"></i> </i>
            <h3 class="vip-super">超级会员来袭</h3>
            <router-link class="ftr" :to="path" tag="div">
              千元红包，双倍积分，专享折扣
              <i class="iconfont icon-xiangyou"></i>
            </router-link>
          </div>

          <!-- 全部订单开始 -->

          <ul class="t-ul user-list">  
            <li>
              <a href="javascript:;">
                <i class="iconfont icon-caidan"></i>全部订单<span class="ftr"
                  ><i class="iconfont icon-xiangyou"></i
                ></span>
              </a>
            </li>
          </ul>

          <ul class="ul">
            <li class="js-orderCount">
              <a href="javascript:;" data-role="ga" data-done="审核中"
                ><i class="img-sh"></i>审核中</a
              >
            </li>
            <li class="js-orderCount">
              <a
                href="javascript:;"
                data-role="ga"
                data-done="待付款"
                ><i class="img-dzf"></i>待付款</a
              >
            </li>
            <li class="js-orderCount">
              <a
                href="javascript:;"
                data-role="ga"
                data-done="待出行"
                ><i class="img-dcx"></i>待出行</a
              >
            </li>
            <li class="js-orderCount">
              <a
                href="javascript:;"
                data-role="ga"
                data-done="待点评"
                ><i class="img-ddp"></i>待点评</a
              >
            </li>
          </ul>

          <!-- 我的定制订单 -->

          <ul class="t-ul user-list my-order">
            <li>
              <a href="javascript:;" data-role="ga" data-done="我的定制订单">
                <i class="iconfont icon-lianjie"></i>我的定制订单<span
                  class="ftr"
                  ><i class="iconfont icon-xiangyou"></i
                ></span>
              </a>
            </li>
            <li>
           <router-link :to="empty" >
             
                <i class="iconfont icon-lianjie"></i>我的历史订单<span
                  class="ftr"
                  ><i class="iconfont icon-xiangyou"></i
                ></span>
            </router-link>
          </li>
            <li>
              <a href="javascript:;" data-role="ga" data-done="酒店订单">
                <i class="iconfont icon-lianjie"></i>酒店订单<span class="ftr"
                  ><i class="iconfont icon-xiangyou"></i
                ></span>
              </a>
            </li>
          </ul>

          <!-- 春秋钱包 -->
        
          <ul class="t-ul user-list">
            <li>
              <a href="javascript:;">
                <i class="iconfont icon-jifen"></i>春秋钱包<span class="ftr">
                  <span class="crred">开通送20</span
                  ><i class="iconfont icon-xiangyou"></i>
                </span>
              </a>
            </li>
            <li class="js-orderCount">
              <a href="javascript:;" data-role="ga" data-done="我的优惠券">
                <i class="iconfont icon-jifen"></i>我的优惠券<span class="ftr"
                  ><i class="iconfont icon-xiangyou"></i
                ></span>
              </a>
            </li>
            <li>
              <a href="javascript:;" data-role="ga" data-done="我的积分">
                <i class="iconfont icon-jifen"> </i>我的积分<span class="ftr">
                  <span class="crred">积分换好礼</span
                  ><i class="iconfont icon-xiangyou"></i>
                </span>
              </a>
            </li>
            <li>
              <a href="javascript:;" data-role="ga" data-done="我的兑换">
                <i class="iconfont icon-jifen"></i>我的兑换<span class="ftr">
                  <span class="crred">积分兑换记录</span
                  ><i class="iconfont icon-xiangyou"></i>
                </span>
              </a>
            </li>
            <li>
              <a href="javascript:;" data-role="ga" data-done="春秋白花花">
                <i class="iconfont icon-jifen"></i>春秋白花花<span class="ftr"
                  ><i class="iconfont icon-xiangyou"></i
                ></span>
              </a>
            </li>
            <li>
              <router-link :to="url">
                <i class="iconfont icon-jifen"></i>我的收藏<span class="ftr"
                  ><i class="iconfont icon-xiangyou"></i
                ></span>
              </router-link>
            </li>
            <li>
              <a href="javascript:;" data-role="ga" data-done="我的咨询">
                <i class="iconfont icon-jifen"></i>我的咨询<span class="ftr"
                  ><i class="iconfont icon-xiangyou"></i
                ></span>
              </a>
            </li>
          </ul>
          <a
          class="t-more"
          href="javascript:;"
          id="loginOut"
          data-href=""
          ><span>退出登录</span></a
        >
        </section>

        <!-- 头部结束 -->
       
      </article>
     </BScroll>    
     </div>
    </div>
</template>
<script>
import Register from "components/register"
export default {   
name:"mine",

components:{
  Register
},
data(){
  return{
    path:"/member",
    url:"/collect",
    empty:"/empty"
   
  }
  // provide(){
  //   return{
  //     reload:this.reload
  //   }
  // }
}

}


</script>
<style scoped>


    .wrap{
    /* margin: 0 auto; */
    width: 100%;
    overflow-y: auto;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    
}
    .t-user{ min-height: 2.5rem;
    background: url(http://media.china-sss.com/chunqiu/m/images/user/top-bg.png) no-repeat 0 0;
    background-size: 100% 100%;
    position: relative;}


   
    .t-user .user-portrait {
    position: absolute;
    top: .49rem;
    left: .7rem;
    }

.user-icon>i{
    display: block;
    /* width: 1rem;
    height: 1rem; */
    font-size: .5rem;
    position: absolute;
    top: .2rem;
    right: .1rem;
    color:#fff;
}
/* 头像 */
.user-portrait {
    display: block;
    width: 1.2rem;
    height: 1.2rem;
    border-radius: 100%;
    overflow: hidden;
    border: 5px solid #fff;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    -o-box-sizing: border-box;
    box-sizing: border-box;
    background: url(http://media.china-sss.com/chunqiu/m/images/user/portrait.png) no-repeat 0 0;
    background-size: 100% 100%;
}


/* username */
.t-user .user-name {
    position: absolute;
    top: .8rem;
    left: 2rem;
    text-shadow: 0 0 5px rgba(0,0,0,.1);
    line-height: 1;
    font-size: .4rem;
    color: #fff;
}

.t-user .user-wallet {
    background-color: #fee489;
    bottom: .6rem;
    color: #52492b;
     position: absolute;
    right: .6rem;
    bottom: 1rem;
    line-height: .5rem;
    border-radius: .4rem;
    padding: 0 .2rem;
    font-size:.25rem;

}
.t-user .user-wallet>i{
    font-size: .25rem;
}
.t-user .user-integral {
    position: absolute;
    right: .5rem;
    bottom: .4rem;
    line-height: .5rem;
    border-radius: .4rem;
    padding: 0 .2rem;
    background-color: rgba(12,78,90,.65);
    box-shadow: 0 0 5px rgba(0,0,0,.1);
    color: #fff;
    font-size: .3rem;
}


.vip-user{
    position:absolute;
    right: .6rem;
    bottom:1rem; 
}
/* 头部结束 */

/*超级会员 */
.user-order .t-vip {
    display:flex;
    padding: 0 .3rem;
    line-height: 1rem;
    position: relative;
    background: -webkit-linear-gradient(left,#ffeac1,#fff);
    
  
}
.user-order{
    overflow: scroll;
}

.user-order .t-vip .tag {
    display: flex;
    display: inline-block;
    vertical-align: middle;
    padding: 0 .2rem;
    margin-right: .3rem;
    height: .42rem;
    line-height: .42rem;
    border-radius: .04rem;
    background: left,#2d2d2d,#414141;
    
    
    font-weight: 700;
    font-size: .47rem;
    color: #ffeac1;
}
 .vip-super{
   
   margin-right:.5rem;
}
.ftr{
    color:#bfa26a;
    font-size: .26rem;
    float: right;
}
.tag .icon-huiyuan{
    font-size:.5rem;
    background-color:#2d2d2d;
    position: absolute;
    top:.3rem;
    left: .3rem;
    margin-right: .2rem;

}

/* 全部订单开始 */

.t-ul li {
    line-height: 1rem;
    padding: 0 .3rem;
  display: flex;
}
.t-ul li, .t-ul ul {
    overflow: hidden;
    clear: both;

}

.user-list li a {
    color: #333;
    font-size: .3rem;
}

.user-list .icon-xiangyou{
    position: absolute;
    right: .23rem;
}

.ftr{
    float: right;
}
.user-list .ftr i {
    color: #bbb;
    font-size: .3rem;
    margin: 0 0 0 3rem;
   
  
}
.user-list li a i{
    font-size: .3rem;
    
}
.icon-caidan{
    margin-right:.3rem;
}
   
/* q全部审核 */

.user-order .ul {
    padding: .23rem 0;
    margin: 0 .23rem;
    color: #333;
}
.icon-jifen{
    margin-right: .3rem;
}
.user-order .ul li {
    clear: initial!important;
    display: block;
    float: left;
    width: 25%;
    height: .5rem;
    line-height: .5rem;
    padding: 0 0;
    text-align: center;
    position: relative;
}

.user-order .ul li a {
    color: #333;
}
.t-ul li a {
    display: block;
}

.user-order .ul i.img-sh {
    background-position: 0 0rem;
}

.user-order .ul i {
    display: block;
    width: .5rem;
    height: .5rem;
    margin: 0 auto;
    margin-bottom: .11rem;
    background: url(http://media.china-sss.com/chunqiu/m/images/user/user-icon.png) no-repeat 0 0;
    background-size: 1rem 4rem;
}


    /* 我的定制订单 */

    .my-order{
        margin-top:1rem;
    }
    .my-order i{
        font-size: .3rem;
        color:#ccc;
        margin-right: .1rem;
    }

    /* 春秋钱包 */

.icon-xiangyou{
    float: right;
}
    /* 退出登录 */

    .t-more {
        display: block;
        line-height: 1.88rem;
        color: #999;
        font-size: .3rem;
        text-align: center;
    }
</style>