<template>
<div class="tab">
    <div>
        <Loading v-if="loadingFalg"></Loading>
       <ul class="tab-list" v-if="!loadingFalg" >
            <router-link to="/order-details"  tag="li" v-for="(item,index) in homeList" :key="index">
                <i class="way">{{item.productTypeName}}</i>
                <i class="site">{{item.cityName}}出发</i>
                <img :src="item.imgurl">
                <div class="tab-box">
                    <h3>{{item.productName}}</h3>
                    <span>班期：{{item.scheduleDateList}}</span>
                    <p>¥<em>{{item.price}}</em>起 </p>
                </div>
            </router-link>
        </ul>

      </div>
    </div>
</template>

<script>

import {getQuality} from "api/home.js"
export default {
    name:"homeQuality",
   async created(){
        let data=await getQuality()
        this.homeList = data.data.data.products
        
        if(data){
          this.loadingFalg=false
        }else{
          this.loadingFalg=true
        }
        
    },
    data(){
      return{
        homeList:[],
        loadingFalg:true,
      }
    },
};
</script>


<style scoped>
.tab{
  padding-bottom: .8rem;
}

.tab-list {
  padding: 0.2rem;
}
.tab-list > li {
  width: 100%;
  height: 2.2rem;
  position: relative;
  border-bottom: 1px solid #eeeeee;
  padding: 0.2rem 0;
}
.tab-list > li > img {
  width: 33.3%;
  height: 2rem;
  float: left;
}
.way {
  position: absolute;
  background: #314e56;
  width: 1rem;
  height: 0.38rem;
  border-radius: 0 0 0.15rem 0;
  color: #ffffff;
  text-align: center;
  
}
.site {
  position: absolute;
  width: 33.3%;
  bottom: 0.2rem;
  left: 0;
  height: 0.38rem;
  background: #667384;
  color: #ffffff;
  text-align: center;
}
.tab-box {
  width: 62%;
  height: 2rem;
  float: left;
  margin-left: 0.2rem;
}
.tab-box > h3 {
  font-size: 0.3rem;
  margin-bottom: 0.6rem;
  overflow:hidden; 
  text-overflow:ellipsis;
  display:-webkit-box; 
  -webkit-box-orient:vertical;
  -webkit-line-clamp:2; 
  }
.tab-box > span {
  height: 0.3rem;
  color: #cccccc;
}
.tab-box > p {
  font-size: 0.3rem;
  color: red;
}
.tab-box > p > em {
  font-size: 0.42rem;
}

</style>
