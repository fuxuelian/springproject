<template>
  <div>
    <div class="wrap">
      <header class="header" id="jsHeader">
        <a href="javascript:;" data-backurl="http://m.springtour.com/site/Member" class="jsback">
          <i class="iconfont icon-xiangzuo"></i>
        </a>
        <h1>我的收藏</h1>
        <section class="ftr" id="navRight">

        </section>
      </header>

      <article class="main m-ct">
        <div class="collect-box">
          <div class="t-box collect-menu">
            <a class="on" href="javascript:void(0)" id="all">全部（1）</a>
            <a class="ftr" href="javascript:void(0)" id="edit">编辑</a>
          </div>
          <div class="t-box">
            <ul class="item-tr all">
              <li>
                <input type="hidden" value="187011" />
                <i class="iconfont icon-xiangzuo"></i>
                <figure class="img-outer">
                  <div class="img-inner">
                    <i class="type type_ziyouxing">自由行</i>
                    <img
                      src="http://media.china-sss.com/pics/gallery/201711/b740bb8d-1a69-42e4-af3c-5b49a637427e_201711201413_500_350.jpg"
                    />
                    <i class="tag">深圳</i>
                  </div>
                </figure>
                <div class="txt-outer">
                  <h2 class="h2">【限时抢购】深圳直飞日本名古屋往返机票5日自由行（双人赠送Wifi+BIC优惠券+返程升级至27KG行李额）</h2>

                  <p class="money flex">
                    <span class>
                      <span class="crred">
                        ¥
                        <em>1299.0</em>
                      </span>起
                    </span>
                  </p>
                </div>
                <a class="link-mask" href="http://m.springtour.com/vacation/187011"></a>
              </li>
              <li>
                <input type="hidden" value="187011" />
                <i class="iconfont icon-xiangzuo"></i>
                <figure class="img-outer">
                  <div class="img-inner">
                    <i class="type type_ziyouxing">自由行</i>
                    <img
                      src="http://media.china-sss.com/pics/gallery/201711/b740bb8d-1a69-42e4-af3c-5b49a637427e_201711201413_500_350.jpg"
                    />
                    <i class="tag">深圳</i>
                  </div>
                </figure>
                <div class="txt-outer">
                  <h2 class="h2">【限时抢购】深圳直飞日本名古屋往返机票5日自由行（双人赠送Wifi+BIC优惠券+返程升级至27KG行李额）</h2>

                  <p class="money flex">
                    <span class>
                      <span class="crred">
                        ¥
                        <em>1299.0</em>
                      </span>起
                    </span>
                  </p>
                </div>
                <a class="link-mask" href="http://m.springtour.com/vacation/187011"></a>
              </li>
            </ul>
          </div>
        </div>
        <footer class="footer ft-collect hide">
          <ul class="flex">
            <li>
              <i class="icon-radio"></i>全选
            </li>
            <li id="del">删除选中</li>
          </ul>
        </footer>
      </article>
    </div>
  </div>
</template>
<script>

export default {
    name:"collect"
};
</script>
<style scoped>


/* 头部开始 */
.header, .header-detail, .home-header {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 10;
    height: .99rem;
    line-height: .99rem;
    padding: 0 .3rem;
    background-color: #fff;
}
.header a, .header-detail a {
    display: inline-block;
    position: relative;
    z-index: 1;

    color: #69c;
    text-decoration: none;
}
.header i, .header-detail i {
    display: inline-block;
    vertical-align: middle;
    font-size: .43rem;
    line-height: 1;
    color: #00be88;
}
   
.header h1, .header-detail h1 {
    position: absolute;
    top: 0;
    right: 20%;
    bottom: 0;
    left: 20%;
    text-align: center;
    font-size: .39rem;
    color: #333;
    overflow: hidden;
    font-weight: 400;
}

/* 头部结束 */

/* 列表开始 */

.collect-box {
    margin-bottom: .22rem;
}
.collect-menu {
    padding: .22rem .3rem;
    margin-bottom: 0;
    overflow: hidden;
    clear: both;
}

.t-box, .t-form, .t-ol, .t-tab, .t-ul {
    background-color: #fff;
    padding-top: 1.3rem;
    margin-bottom: -1.5rem;
}
.collect-menu a.on {
    background-color: #00be88;
    color: #fff;
}
.collect-menu a {
    display: block;
    float: left;
    line-height: .5rem;
    padding: 0 .15rem;
    margin-right: .1rem;
    background-color: #eee;
    border-radius: .06rem;
    color: #666;
}
.collect-menu a.ftr {
    float: right;
    padding: 0 0 0 .22rem!important;
    margin: 0!important;
    background-color: transparent!important;
    color: #333!important;
}

.item-tr {
    color: #999;
    font-size: .24rem;
}
.item-tr li {
    position: relative;
    padding-left: 0rem;
    padding-bottom: .22rem;
    margin-bottom: .22rem;
    overflow: hidden;
}

.item-tr .img-outer {
    position: absolute;
    top: 0;
    left: 0;
    width: 2.5rem;
    margin-right: .22rem;
    border-radius: .11rem;
    overflow: hidden;
}

.item-tr .txt-outer {
    height: 2.1rem;
    width: 4.5rem;
    float: right;
 
}

.img-inner .type, .img-outer .type {
    position: absolute;
    left: 0;
    top: 0;
    display: block;
    line-height: 1;
    color: #fff;
    font-size: .22rem;
    padding: .1rem .26rem .12rem .16rem;
    border-radius: 0 0 .35rem 0;
    background-color: #f9c850;
    z-index: 1;
}

.item-tr .tag {
    position: absolute;
    right: 0;
    bottom: 1.4rem;
    left: 0;
    line-height: .42rem;
    text-align: center;
    background-color: #667384;
    color: #fff;
    font-size: .22rem;
}

.item-tr .h2 {
    line-height: .38rem;
    max-height: .77rem;
    margin-bottom: .16rem;
    color: #333;
    font-size: .3rem;
    vertical-align: baseline;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
}


.item-tr .money {
    position: absolute;
    right: 2.8rem;
    bottom: 0;
   
}
.item-tr .flex {
    align-items: flex-end;
}

.crred {
    color: #f66;
}

.item-tr .money em {
    display: inline-block;
    font-size: .42rem;
    line-height: 1;
    vertical-align: bottom;
}

address, cite, dfn, em, i, strong, var {
    font-style: normal;
    font-weight: 400;
}
/* 列表结束 */
</style>


