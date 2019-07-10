<template>
  <div>
    <!-- 会员专享旅游 -->
    <div class="tab-content">
      <div id="tab-4524" class="t-box" data-position="4524">
        <ul class="item-tr">
          <li v-for="(item,index) in tour" :key="index" tag="li">
            <figure class="img-outer">
              <div class="img-inner">
                <i class="type">团队游</i>
                <i class="tag">{{item.cityName}}{{item.cityType}}</i>
                <img :src="item.imgurl" class="anima" />
              </div>
            </figure>
            <div class="txt-outer">
              <h2>{{item.productName}}</h2>

              <p class="vip">
                <i class="tag iconfont icon-huiyuan"></i>
                <span>立省¥{{item.memberPrice}}起</span>
              </p>

              <ul class="money flex-end">
                <li class="flex-3">
                  <span class="crred">
                    ¥
                    <em>{{item.price}}</em>起
                  </span>
                </li>
                <li class="flex-2">
                  <span class="bybtn">立即购买</span>
                </li>
              </ul>
            </div>
            <a class="link-mask" href="/m/tour/63224#C_4524_"></a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import { getTour } from "api/vip";
export default {
  name: "circum",
  async created() {
    let tour = await getTour();
    this.tour = tour.data.data.products;
  },
  data() {
    return {
      tour: []
    };
  }
};
</script>
<style>
.t-box:last-child {
  margin-bottom: 0;
}

.t-box {
  padding: 0.2rem;
}
.t-box {
  padding: 0.2rem;
  margin: 0.1rem;
}
.t-box {
  background-color: #fff;
  word-wrap: break-word;
}
.item-tr > li {
  padding-left: 0.1rem;
  padding-bottom: 0.11rem;
  overflow: hidden;
  margin-bottom: 0.11rem;
  border-radius: 0.05rem;
  position: relative;
}

.item-tr .img-outer {
  background-color: rgba(48, 49, 72, 1);
  border-radius: 0.02rem;
  position: absolute;
  top: -0.2rem;
  left: -0.4rem;
  border-radius: 0.02rem;
}

.img-outer .img-inner {
  border-radius: 0.08rem;
  overflow: hidden;
}

.item-tr .img-inner {
  width: 2.45rem;
  height: 2.18rem;
}
.item-td .img-inner,
.item-tr .img-inner {
  position: relative;
}

.item-td .img-inner .type,
.item-tr .img-inner .type {
  background-color: rgba(48, 49, 72, 0.8);
}

.item-td .img-inner .type,
.item-tr .img-inner .type {
  top: 0;
  left: 0;
  width: 2.2rem;
  overflow: hidden;
  height: 0.81rem;
  line-height: 0.81rem;
  border-radius: 0 rem 0 0.43rem 0;
  background-color: #314e56;
}
.item-td .img-inner .tag,
.item-td .img-inner .type,
.item-tr .img-inner .tag,
.item-tr .img-inner .type {
  position: absolute;
  z-index: 1;
  display: block;
  text-align: center;
  color: #fff;
  font-size: 0.22rem;
}

.img-inner .tag {
  background-color: rgba(48, 49, 72, 1);
}
.item-td .img-inner .tag,
.item-tr .img-inner .tag {
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 0.42rem;
  line-height: 0.42rem;
  border-radius: 0 0 0.05rem 0.05rem;
  background-color: #667384;
}
.item-td .img-inner .tag,
.item-td .img-inner .type,
.item-tr .img-inner .tag,
.item-tr .img-inner .type {
  position: absolute;
  z-index: 1;
  display: block;
  text-align: center;
  color: #fff;
  font-size: 0.22rem;
}

/* 右边文字描述 */
.item-tr .txt-outer {
  height: 2.1rem;
  width: 4.2rem;
  float: right;
}

.item-td .txt-outer,
.item-tr .txt-outer {
  position: relative;
}

.item-td li .link-mask,
.item-tr li .link-mask {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  opacity: 0;
}

.item-tr h2 {
  min-height: auto;
}

.item-td h2,
.item-tr h2 {
  min-height: 0.78rem;
  max-height: 0.78rem;
  line-height: 0.39rem;
  overflow: hidden;
  color: #333;
  font-size: 0.3rem;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.txt-outer .vip {
  color: #bfa26a;
  line-height: 0.32rem;
  font-size: 0.27rem;
}

.item-tr p {
  height: 0.32rem;
  overflow: hidden;
  margin-top: 0.11rem;
}

.vip .tag {
  display: inline-block;
  vertical-align: top;
  width: 0.32rem;
  height: 0.32rem;
  line-height: 0.32rem;
  border-radius: 100%;
  overflow: hidden;
  text-align: center;
  background: -webkit-linear-gradient(left, #292929, #454545);
  font-weight: 700;
  font-size: 0.23rem;
  color: #ffeac1;
}
.tag {
  font-size: 0.3rem;
}

.item-tr .money {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  line-height: 0.5;
  text-align: right;
}
.item-td .money,
.item-tr .money,
.item-tr p {
  font-size: 0.235rem;
  color: #999;
}

.item-tr .money > li:first-child {
  text-align: left;
}
.flex .flex-3,
.flex-end .flex-3,
.flex-middle .flex-3 {
  -webkit-box-flex: 3;
  flex: 3;
}

.crred {
  color: #f66;
}

.item-tr .money > li:first-child {
  text-align: left;
}

.money > li:first-child em {
  font-size: 0.39rem;
  line-height: 1;
  vertical-align: bottom;
}

.bybtn {
  display: inline-block;
  vertical-align: middle;
  width: 1.3rem;
  line-height: 0.4rem;
  text-align: center;
  background: -webkit-linear-gradient(left, #ffd89a, #ffeac1);

  border-radius: 0.04rem;
  overflow: hidden;
  font-size: 0.3rem;
  color: #333;
}
/* 会员专享旅游结束 */
</style>

