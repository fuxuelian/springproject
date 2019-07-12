<template>
  <div>
    <div class="wrap login-bd">
      <div class="bd-color"></div>
      <header class="header">
        <span  class="jsback"  @click="prev">
          <i class="iconfont icon-xiangzuo" ></i>
        </span>
        <section class="ftr">
          <span>账号登录</span>
        </section>
      </header>
      <article class="main m-cb">
        <section class="login-outer">
          <div class="login-img">
            <img
              src="http://media.china-sss.com/chunqiu/m/images/user/portrait.png?releaseno=20190613_20190627_1"
            />
          </div>
          <ul class="login-input">
            <li>
              <input type="text" name="phone" value placeholder="手机号码" maxlength="11" />
              <span class="pnr" id="JS_getCode" data-url="/site/loginnew/GetLoginSmsCode">
                <em>获取动态密码</em>
              </span>
            </li>
            <li>
              <input type="text" value name="authCode" placeholder="短信动态密码" />
              <span class="pnr dn js-input-empty">
                <i class="icon-empty"></i>
              </span>
            </li>
          </ul>
          <p class="other js-msgTips">*未注册春秋账号的手机号，登录时将自动注册</p>
          <p class="other js-msgTips" style="display:none">*您还不是春秋会员，输入动态密码登录将自动注册</p>
          <p class="other js-msgTips" style="display:none">
            <span>
              <i class="icon-radiobox"></i>我愿意接受
              <a class="crgreen" href="#">《春秋旅游网隐私与服务条款》</a>
            </span>
          </p>
          <div
            class="login-btn"
            id="loginSubmit"          
          >
            <a class="btn" href="javascript:;">登录</a>
          </div>
        </section>
        <footer class="l-footer">
          <ul class="flex">
            <li>
              <a href="#">
                <i class="icon-qq"></i>QQ
              </a>
            </li>
            <li>
              <a href="#">
                <i class="icon-sina"></i>微博
              </a>
            </li>
            <li>
              <a href="#">
                <i class="icon-alpay"></i>支付宝
              </a>
            </li>
          </ul>
        </footer>
      </article>
    </div>

    <footer class="l-footer">
      <ul class="flex">
        <li>
          <a href="#">
            <i class="iconfont icon-qq"></i>QQ
          </a>
        </li>
        <li>
          <a href="#">
            <i class="iconfont icon-weibo"></i>微博
          </a>
        </li>
        <li>
          <a href="#">
            <i class="iconfont icon-changyonglogo30"></i>支付宝
          </a>
        </li>
      </ul>
    </footer>
  </div>
</template>
<script>
export default {
  name: "login",
  methods:{
    prev(){
    this.$router.back()
    }
  }
};
</script>
<style scoped>


.login-bd .bd-color {

    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    zoom: 1;
    background-color: #fff;

}

/* 头部开始 */


.login-bd .header, .login-bd .main {

    position: relative;
    z-index: 2;

}
.header, .header-detail, .home-header {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 10;
    height: .99rem;
    line-height: .99rem;
    padding: 0 .3rem;

}

.header a, .header-detail a {

    display: inline-block;
    position: relative;
    z-index: 1;
}
a {
    color: #69c;
    text-decoration: none;

}

.header i, .header-detail i {

    display: inline-block;
    vertical-align: middle;
    font-size: .42rem;
    line-height: .5rem;
    color: #00be88;

}

.header .ftr, .header-detail .ftr {

    height: .1rem;

}
.ftr {

    float: right;

}

/* 头部结束 */

/* 登录开始 */

.login-bd .login-outer {

    padding: 0 .64rem;
    overflow: hidden;

}
/* 头像开始 */

.login-img, .login-img img {

    width: 1.7rem;
    height: 1.7rem;

}
.login-img {

    display: block;
    margin: .22rem auto;
    border: 2px solid #f0f3f2;
    border-radius: 100%;
    overflow: hidden;

}

img img {

    width: 1.7rem;
    height: 1.7rem;

}

/* 头像结束 */

/* 登录框开始 */
.login-bd .login-input {

    margin-top: .95rem;
    outline: none;

}

.login-input li {

    position: relative;
    line-height: 1rem;
    padding: .15rem 0;
    margin-bottom: .22rem;
    font-size: .32rem;
    border-bottom: 1px solid #ccc;

}

.login-input input {
    outline: none;
    width: 80%;
    font-size: .32rem;
    color: #454545;
    border:0;
    -webkit-appearance: none;
    border-radius: 0;

}

.pnr {

    position: absolute;
    right: 0;
   

}

.login-input em {

    display: inline-block;
    height: .8rem;
    line-height: .8rem;
    padding: 0 .25rem;
    background-color: #fff;
    border-radius: .68rem;
    border: 1px solid #ccc;
    overflow: hidden;
    color: #ccc;
    font-size: .27rem;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;

}

/* 登录框结束 */

/* 登录按钮 */
.other {
    font-size:.3rem;
    margin-bottom: .22rem;
    color: #999;

}

.login-btn {

    padding: .11rem 0 .22rem 0;
    margin-top: .8rem;

}


.login-btn .btn {

    display: block;
    line-height:.92rem;
    border-radius: .92rem;
    overflow: hidden;
    text-align: center; 
    background: -webkit-linear-gradient(left,#00be88,#00be89);
    box-shadow: 0 1px 8px rgba(0,176,126,.5);
    opacity: .36;
    color: #fff;
    font-size: .33rem;

}

/* 登录按钮结束 */

/* footer start */

.l-footer {

    position: fixed;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 10;
    background-color: #fff;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    box-shadow: none;
    height: .35rem;
    line-height: .35rem;
    padding: .25rem .9rem .8rem .9rem;
    text-align: center;

}

.flex {
    display: flex;

}


.l-footer .flex li {

    font-size: .27rem;
    color: #7d7f82;
    position: relative;
    flex: 1;
}

.l-footer a {

    color: #7d7f82;

}

.l-footer .flex i {

    display: inline-block;
    vertical-align: middle;
    margin-right: .1rem;
    font-size: .38rem;
    color: #7d7f82;

}

</style>

