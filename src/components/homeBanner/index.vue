<template>
<div>
<mt-swipe :auto="3000">
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
    console.log(this.banners);
  },
  data() {
    return {
      banners: []
    };
  },
  mounted() {}
};
</script>


<style scoped>
.mint-swipe {
  width: 100%;
  height: 2.6rem;
}

</style>
