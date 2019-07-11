<template>
<<<<<<< HEAD
  <div>
    <header class="header">
      <span class="jsback"  @click="prev">
        <i class="iconfont icon-zuojiantou1"></i>
      </span>
      <h1>{{title}}</h1>
      <section class="ftr" id="navRight">
        <span class="hd-other">
          <i class="iconfont icon-tuichu"></i>
        </span>
      </section>
    </header>
  </div>
=======
    <div class="header">
        <a href="javascript:;" @click="handleClick()"><i class="iconfont icon-zuojiantou1"></i></a>
        <a href="javascript:;"><i class="iconfont icon-ziyuan1"></i></a>
        <h2>{{title}}</h2>
    </div>


>>>>>>> dev
</template>

<script>
export default {
<<<<<<< HEAD
  name: "headerCom",
  data() {
    return {
     
    };
  },
  methods:{
    prev(){
      
      this.$router.go(-1)
    }
  }
};
=======
    name:"headerCom",
    props:{
        title:{
            type:String,
            default:"目的地"
        }
    },
    data() {
        return {
            
        }
    },
    methods: {
        handleClick(){
            this.$router.back()
        }
    },



}
>>>>>>> dev
</script>

<style>
<<<<<<< HEAD
.header h1,
h1 {
  height: 0.9rem;
  position: absolute;
  top: 0;
  right: 20%;
  bottom: 0;
  left: 20%;
  text-align: center;
  font-size: 0.35rem;
  color: #333;
  overflow: hidden;
}
.header {
  padding: 0 0.32rem;
   height: 0.9rem;
  line-height: 0.9rem;
  position: relative;
  z-index: 10;
  background: #fff;
}
=======
>>>>>>> dev

.header{
    width: 100%;
    height: 0.8rem;
    line-height: 0.8rem;
    position: fixed;
    left: 0;
    right: 0;
    text-align: center;
    background: #fff;
    z-index: 10;
}
.header>h2{
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

<<<<<<< HEAD

.ftr {
  float: right;
=======
}
.header .icon-zuojiantou1{
    font-size: .5rem;
    position: absolute;
    left: .2rem;
    color: #00be88;
>>>>>>> dev
}
.header .icon-ziyuan1{
    font-size: .4rem;
    position: absolute;
    right: .3rem;
    color: #00be88;
}



</style>


