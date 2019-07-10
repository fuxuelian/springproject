<template>
  <div>
    <HeaderCom />

    <div class="main">
      <div class="search">
        <!-- 城市地址搜索 -->
        <div class="search-top">
          <a href="javascript:;">
            深圳
            <i class="iconfont icon-xjt"></i>
          </a>
          <input type="text" class="search-ipt" placeholder="搜索你想去的地方" />
          <i class="iconfont icon-fangdajing"></i>
        </div>
      </div>
      <!--热门目的地-->
      <div class="hot-city">
        <div class="hot-tab">
          <Leftlist></Leftlist>
          <!--左侧导航-->

          <!--左侧导航第一级位置内容-->
          
          </div>
        
      </div>
    </div>
  </div>

</template>
<script>
import Leftlist from "components/leftList";
import RightList from "components/rightList";
import BottomList from "components/bottomList";
export default {
  name: "list",

  data() {
    return {};
  },
  components: {
    Leftlist,
    RightList,
    BottomList
  }
};
</script>
<style  scoped>
.main {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0.8rem;
  left: 0;
  bottom: 1rem;
  overflow-y: auto;
  padding-bottom: 2rem;
  background-color: #f2f3f7;
}

/* 城市地址搜索 */
.search {
  padding: 0.2rem;
  position: relative;
  border-top: 1px solid #ccc;
  background-color: #fff;
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
.search .icon-xjt {
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
  outline: none;
}
.search .icon-fangdajing {
  position: absolute;
  left: 2rem;
  top: 0.35rem;
  z-index: 1;
  font-size: 0.3rem;
}

/* 热门目的地 */

/* 左侧导航 */



</style>