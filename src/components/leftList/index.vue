<template>

    <div class="hot-tab">
        
       
        <ul>
            <router-link class="tab-one" 
            v-for="(item,index) in citys" to="/list/bottomList" 
            :key="index" tag="li">{{item.title}}</router-link>

            
             
        </ul>
        <router-view></router-view>
    </div>


</template>


<script>
import {destination} from "api/destination";
export default {
    name:"Leftlist",
    
    data() {
        return {
            citys:[
                {
                    path:"/components/rightList",
                    title:"当季热门"
                },
                {
                    path:"/components/rightList",
                    title:"国内"
                },
                {
                    path:"/components/rightList",
                    title:"日本"
                },
                {
                    path:"/components/rightList",
                    title:"欧洲"
                },
                {
                    path:"/components/rightList",
                    title:"东南亚"
                },
                {
                    path:"/components/rightList",
                    title:"韩国"
                },
                {
                    path:"/components/rightList",
                    title:"美洲"
                },
                {
                    path:"/components/rightList",
                    title:"港澳台"
                },
                {
                    path:"/components/rightList",
                    title:"海岛"
                },
                {
                    path:"/components/rightList",
                    title:"周边"
                },
                
            ]
        }
    },


}
</script>

<style scoped>

.hot-city .hot-tab>ul{
    width: 1.5rem;
    background-color: #fff;
    float: left;
    overflow: hidden;
    /* z-index: 10; */
}
.hot-city .hot-tab>ul>.router-link-active{
    background-color: #f6f7fb;
    
}
.hot-city .hot-tab>ul>li{
    
    height: 1rem;
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    overflow: hidden;
    font-size: .3rem;
    color: #333;
    color: #00be88;
}
.btn-active{
    background-color: #f6f7fb;
}
.active{
    background: #fff;
}



</style>


