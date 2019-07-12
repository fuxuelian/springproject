<template>
  <div class="mark">
        
        <ul class="chat-tag">
            <li v-for="(item,index) in icon" :key="index">
              <a >
                <i v-html="item.infor" class="iconfont"></i>
                <p>{{item.title}}</p>
              </a>
            </li>
          </ul>
        
      <router-link to="/home" tag="div" class="dialog-ft">
        <a class href="javascript:;">
          <i>X</i>
        </a>
  </router-link>
  </div>
</template>
<script>
export default {
  name: "telme",
  data() {
    return {
        icon:[
             {
        infor:"&#xe63d;",
        title:"电话咨询"
        
        },
        {
        infor:"&#xe602;",
        title:"在线客服"
        },
        ]
      
    };
  }
};
</script>
<style>
.mark{
    height: 100%;
    width:100%;
    background-color: rgba(0,0,0,.5);
}
.an-show {
    opacity: 1;
}
.z-num {
    z-index: 19;
}
.dialog-plus {
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 20;
    background-color: rgba(255,255,255,.95);
}
.dialog-bd {
    text-align: center;
    font-size: .26rem;
    color: #aaa;
}

.dialog-plus .dialog-bd {
    height: 100%;
    position: relative;
    padding-bottom: 1.95rem;
    box-sizing: border-box;
}

.dialog-plus{
    max-height: 100%;
    overflow-y: auto;
    padding: .3rem;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}

.chat-tag {
    position: fixed;
    right: 0;
    left: 0;
    bottom: 6rem;
    display: block;
    text-align: center;
    clear: both;
    color: #fff;
    height: .25rem;
}

.chat-tag li { 
    animation: telLoad .6s ease;
    margin: 0 .5rem;

    
}
.chat-tag li {
    display: inline-block;
    margin: 0 .5rem;
}

a {
    color: #666;
    text-decoration: none;
}
user agent stylesheet
a:-webkit-any-link {
    color: -webkit-link;
    cursor: pointer;
    text-decoration: underline;
}
.chat-tag i {
    display: block;
    padding: .35rem;
    margin-bottom: .22rem;
    background-color: #00be88;
    border-radius: 100%;
    font-size: .5rem;
    color: #fff;
    height: .5rem;
}
.dialog-ft{
    width: 1.2rem;
    height: 1.2rem;
    border-radius: 50%;
    text-align: center;
    line-height: 1.2rem;
    position: absolute;
    border:1px solid #a0a0a0;
    bottom: 2.5rem;
    left: 0;
    right: 0;
    margin: 0 auto;
}
.dialog-ft>a>i{
    font-size: .5rem;

}
</style>
