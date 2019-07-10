<template>
  <div>
    <header class="header">
      <span class="jsback"  @click="prev">
        <i class="iconfont icon-zuojiantou1"></i>
      </span>
      <h1>超级会员</h1>
      <section class="ftr" id="navRight">
        <span class="hd-other">
          <i class="iconfont icon-tuichu"></i>
        </span>
      </section>
    </header>
  </div>
</template>
<script>
export default {
  name: "header",
  data() {
    return {
     
    };
  },
  methods:{
    prev(){
      console.log(111)
      this.$router.back()
    }
  }
};
</script>
<style>
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
}


.header .ftr,
.ftr {
  /* height: 1.79rem; */
}
.ftr {
  float: right;
}
.header i,
i {
  display: inline-block;
  vertical-align: middle;
  font-size: 0.4rem;
  line-height: 1;
  color: #00be88;
}
</style>
