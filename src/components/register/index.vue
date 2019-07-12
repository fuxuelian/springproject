<template>
  <div>
    <section class="t-user">
      <div class="user-icon">
        <a href="#">
          <i class="iconfont icon-icon-- infor"></i>
        </a>
      </div>
      <p class="user-login">
        登录春秋，即刻启程
        <router-link
         :to="path" tag="div"     
        >登录/注册</router-link>
      </p>
    </section>
  </div>
</template>
<script>

export default {
    name:"register",
    data(){
        return{
            path:"/login"
        }
    }
};
</script>
<style scoped>
.t-user {
    min-height:2.9rem;
    background: url(http://media.china-sss.com/chunqiu/m/images/user/top-bg.png) no-repeat 0 0;
    background-size: auto;
    background-size: 100% 100%;
    position: relative;
}

.t-user .user-icon {
    position: absolute;
    top: .22rem;
    right: .3rem;
}
.t-user .user-login {
    position: absolute;
    right: 0;
    bottom: .64rem;
    left: 0;
    text-align: center;
    color: #fff;
    font-size: .32rem;
    text-shadow: 0 0 5px rgba(0,0,0,.2);
}
.infor{
    font-size: .4rem;
    color: #fff;
}
.t-user .user-login div {
    display: block;
    width: 3.08rem;
    line-height: .74rem;
    margin: 0 auto;
        margin-top: 0px;
    background-color: #f84;
    border-radius: .74rem;
    box-shadow: 0 0 5px rgba(0,0,0,.2);
    text-shadow: none;
    overflow: hidden;
    margin-top: .32rem;
    color: #fff;
    font-size: .3rem;
}



</style>


