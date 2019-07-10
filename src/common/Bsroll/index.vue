<template>
    <div class="wrapper" ref="wrapper">
        <slot></slot>
    </div>
</template>
<script>
import Bsroll from "better-scroll"
export default {
    name:Bsroll,
    mounted(){
        this.scorll=new Bsroll(this.$refs.wrapper);
       
    }
}
</script>
<style>
    .wrapper{
        height: 100%;
    }
</style>


