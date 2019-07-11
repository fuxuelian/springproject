<template>
 
    <div class="wrap">
      <header class="header" id="jsHeader">
        <!-- <a href="javascript:;" data-backurl="http://m.springtour.com/site/Member" class="jsback">
          <i class="iconfont icon-xiangzuo"></i>
        </a>
        <h1>我的收藏</h1> -->
        <Header/>
        <section class="ftr" id="navRight"></section>
      </header>
       
      <article class="main m-ct">
        <div class="collect-box">
          <div class="t-box collect-menu">
            <a class="on" href="javascript:void(0)" id="all">全部（1）</a>
            <a class="ftr" href="javascript:void(0)" id="edit">编辑</a>
          </div>
          <div class="t-box scrolls">
            <ul class="item-tr all">
              <li v-for="(item,index) in collect" :key="index">
                <input type="hidden" value="187011" />
                <i class="iconfont icon-xiangzuo"></i>
                <figure class="img-outer">
                  <div class="img-inner">
                    <i class="type type_ziyouxing">{{item.productTypeName}}</i>
                    <img
                      :src="item.imgurl"
                    />
                    <i class="tag">深圳</i>
                  </div>
                </figure>
                <div class="txt-outer">
                  <h2 class="h2">{{item.productName}}</h2>

                  <p class="money flex">
                    <span class>
                      <span class="crred">
                        ¥
                        <em>{{item.price}}</em>
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
</template>
<script>
import { getCollect,getPic } from "api/collect";

export default {
  name: "collect",
  async created() {
    let data = await getCollect();
    this.collect = data.data.data.products;
    // console.log(this.collect);


    let pic=await getPic()
    console.log(pic)
  },
  data() {
    return {
      collect: []
    };
  }
};
</script>
<style scoped>
body, html {
    height: 100%;
}
.wrap{
    height: 100%;
}

.main{
    height: 100%;
}
/* 头部开始 */
.header,
.header-detail,
.home-header {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 10;
  height: 0.99rem;
  line-height: 0.99rem;
  padding: 0 0.3rem;
  background-color: #fff;
}
.header a,
.header-detail a {
  display: inline-block;
  position: relative;
  z-index: 1;

  color: #69c;
  text-decoration: none;
}
.header i,
.header-detail i {
  display: inline-block;
  vertical-align: middle;
  font-size: 0.43rem;
  line-height: 1;
  color: #00be88;
}

.header h1,
.header-detail h1 {
  position: absolute;
  top: 0;
  right: 20%;
  bottom: 0;
  left: 20%;
  text-align: center;
  font-size: 0.39rem;
  color: #333;
  overflow: hidden;
  font-weight: 400;
}

/* 头部结束 */

/* 列表开始 */

.collect-box {
  margin-bottom: 0.22rem;
  height: 100%;
}
.collect-menu {
  padding: 0.22rem 0.3rem;
  margin-bottom: 0;
  overflow: hidden;
  clear: both;
}
.scrolls{
    overflow: auto;
}
.t-box,
.t-form,
.t-ol,
.t-tab,
.t-ul {
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
  line-height: 0.5rem;
  padding: 0 0.15rem;
  margin-right: 0.1rem;
  background-color: #eee;
  border-radius: 0.06rem;
  color: #666;
}
.collect-menu a.ftr {
  float: right;
  padding: 0 0 0 0.22rem !important;
  margin: 0 !important;
  background-color: transparent !important;
  color: #333 !important;
}

.item-tr {
  color: #999;
  font-size: 0.24rem;
}
.item-tr li {
  position: relative;
  padding-left: 0rem;
  padding-bottom: 0.22rem;
  margin-bottom: 0.22rem;
  overflow: hidden;
}

.item-tr .img-outer {
  position: absolute;
  top: 0;
  left: 0;
  width: 2.5rem;
  margin-right: 0.22rem;
  border-radius: 0.11rem;
  overflow: hidden;
}

.item-tr .txt-outer {
  height: 2.1rem;
  width: 4.5rem;
  float: right;
}

.img-inner .type,
.img-outer .type {
  position: absolute;
  left: 0;
  top: 0;
  display: block;
  line-height: 1;
  color: #fff;
  font-size: 0.22rem;
  padding: 0.1rem 0.26rem 0.12rem 0.16rem;
  border-radius: 0 0 0.35rem 0;
  background-color: #f9c850;
  z-index: 1;
}

.item-tr .tag {
  position: absolute;
  right: 0;
  bottom: 1.4rem;
  left: 0;
  line-height: 0.42rem;
  text-align: center;
  background-color: #667384;
  color: #fff;
  font-size: 0.22rem;
}

.item-tr .h2 {
  line-height: 0.38rem;
  max-height: 0.77rem;
  margin-bottom: 0.16rem;
  color: #333;
  font-size: 0.3rem;
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
  font-size: 0.42rem;
  line-height: 1;
  vertical-align: bottom;
}

address,
cite,
dfn,
em,
i,
strong,
var {
  font-style: normal;
  font-weight: 400;
}
/* 列表结束 */
</style>


