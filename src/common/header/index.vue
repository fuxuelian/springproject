<template>
    <div class="header">
        <a href="javascript:;" @click="handleClick()"><i class="iconfont icon-zuojiantou1"></i></a>
        <a href="javascript:;"><i class="iconfont icon-ziyuan1"></i></a>
        <h2>{{title}}</h2>
    </div>


</template>

<script>
export default {
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
</script>

<style>

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

}
.header .icon-zuojiantou1{
    font-size: .5rem;
    position: absolute;
    left: .2rem;
    color: #00be88;
}
.header .icon-ziyuan1{
    font-size: .4rem;
    position: absolute;
    right: .3rem;
    color: #00be88;
}



</style>


