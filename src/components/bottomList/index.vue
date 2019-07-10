<template>
    <div>
        
        <div class="tab-content">
            <div class="tab-inner">
                <ul class="ul-img">
                    <li v-for="(item,index) in banners" to="/list/rightList" 
                        :key="index">
                        <a href="javascript:;">
                            <h3><span>{{item.title}}</span>{{item.subtitle}}</h3>
                            <img :src="item.imgurl" alt="">
                        </a>
                    </li>
                </ul>  
                <h2><i class="iconfont icon-dianzan"></i>推荐目的地</h2>

                <ul class="ul-city">
                    <li v-for="(item,index) in keywords" :key="index">
                        <a href="javscript:;">{{item.name}}</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>


</template>


<script>
import {destination} from "api/destination"
export default {
    name:"bottomList",
    async created() {
        let data = await destination()
        console.log(data.data.positions[0].data.keywords);
        
        this.keywords = data.data.positions[0].data.keywords;

        // console.log(data.data.data.banners);
        this.banners = data.data.data.banners;

        console.log(this.banners)
    },
    data() {
        return {
            keywords:[],
            banners:[]
        }
    },

}
</script>

<style scoped>

.tab-content .tab-inner{
    padding: .2rem;
    overflow: hidden;
}
.tab-content .tab-inner>.ul-img{
    margin-bottom: .1rem;
    overflow: hidden;
}
.tab-content .tab-inner>.ul-img>li{
    width: 48%;
    margin: 0 2% .2rem 0;
    border-radius: .06rem;
    overflow: hidden;
    display: block;
    float: left;
    position: relative;
}
.tab-content .tab-inner>.ul-img>li>a>h3{
    position: absolute;
    top: 50%;
    right: 0;
    left: 0;
    text-align: center;
    transform: translateY(-50%);
    font-size: .3rem;
    color: #fff;
    font-weight: 500;
}
.tab-content .tab-inner>.ul-img>li>a>h3>span{
    display: block;
    font-weight: 700;
    font-size: .3rem;
}
.tab-content .tab-inner>h2{
    margin-bottom: .2rem;
    font-weight: 700;
    font-size: .3rem;
    color: #333;
}
.tab-content .tab-inner>h2>.icon-dianzan{
    color: #00be88;
    font-size: .3rem;
    margin-right: .1rem;
}
.tab-content .tab-inner>.ul-city{
    overflow: hidden;
}
.tab-content .tab-inner>.ul-city>li{
    width: 31%;
    margin: 0 2.3% .25rem 0;
    display: block;
    float: left;
    position: relative;
}
.tab-content .tab-inner>.ul-city>li>a{
    display: block;
    line-height: .6rem;
    border-radius: .13rem;
    background-color: #fff;
    word-wrap: break-word;
    word-break: break-all;
    overflow: hidden;
    text-align: center;
    color: #333;
}









/* .ul-city {
  overflow: hidden;
}
.ul-city > li {
  width: 31%;
  margin: 0 2.3% 0.25rem 0;
  display: block;
  float: left;
  position: relative;
}
.ul-city > li >a {
  display: block;
  line-height: 0.6rem;
  border-radius: 0.13rem;
  background-color: #fff;
  word-wrap: break-word;
  word-break: break-all;
  overflow: hidden;
  text-align: center;
  color: #333;
} */


</style>


