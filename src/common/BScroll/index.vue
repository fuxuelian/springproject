<template>
    <div class="wrapper" ref="wrapper">
        <slot></slot>
    </div>
</template>

<script>
import BScroll from "better-scroll"
export default {
    name:"BScroll",
    mounted() {
        // loadingFlag:false
    },
    mounted() {
        this.scroll = new BScroll(this.$refs.wrapper,{
            probeType:1
        });
        // this.scroll.on("scroll",({x,y})=>{
        //     if(y>30){
        //         // this.loadingFlag = false
        //     }
        // })
    },


}
</script>

<style>
.wrapper{
    height: 100%;
}


</style>

