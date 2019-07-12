<template>
  <div>
      <Header/>
    <article class="m-ct">
      <div class="coupon-box">
        <div class="sp-empty">
          <i></i>
          <p>暂无历史订单</p>
        </div>
      </div>
    </article>
  </div>
</template>
<script>
export default {
  name: "empty"
};
</script scoped>
<style>
.m-ct {
    margin-top:.9rem;
    background-color:#ccc;
}
.coupon-box {
    padding-top: .22rem;
}

.sp-empty {
    text-align: center;
    padding: 1.5rem 0;
    color: #999;
}
.sp-empty i {
    background: url(http://media.china-sss.com/res/dist/m/images/vip/null.png) no-repeat center center;
    background-size: 100% 100%;
}


.sp-empty i {
    width: 2.06rem;
    height: 2.06rem;
    display: inline-block;

    background-size: 100% 100%;
}


/* 空页面结束 */
</style>


