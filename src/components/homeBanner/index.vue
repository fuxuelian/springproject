<template>
<div>
<Loading v-if="loadingFalg"></Loading>
<mt-swipe :auto="3000" v-if="!loadingFalg">
    <mt-swipe-item v-for="(item,index) in banners" :key="index">   
            <img :src="item.imgurl"/>     
    </mt-swipe-item>
    
</mt-swipe>
 </div>
              
    

    
</template>




<script>
import { Swipe, SwipeItem } from "mint-ui";
import { homeBanner } from "api/home";
export default {
  name: "banner",
  async created() {
    let data = await homeBanner();
    this.banners = data.data.data.banners;   
    if(data){
        this.loadingFalg=false
    }else{
        this.loadingFalg=true
    }

  },
  data() {
    return {
      banners: [],
      loadingFalg:true
    };
  },
  mounted() {}
};
</script>


<style scoped>
.mint-swipe {
  height: 2.6rem;
}
.mint-swipe img{
  width: 100%;
    height: 2.6rem;
}
</style>
