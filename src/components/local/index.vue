<template>
    <div class="tab-list">
                <div class="list-content">
                    <ul v-for="(item,index) in products" :key="index">
                        <li>
                            <div class="list-img">
                                <i class="type">{{item.productTypeName}}</i>
                                <i class="tag">{{item.cityName}}{{item.cityType}}</i>
                                <img :src="item.imgurl" alt="">
                            </div>
                            <div class="list-txt">
                                <h4>{{item.productName}}</h4>
                                <p class="label">
                                    <span class="bggray">大阪一地 </span>
                                    <span class="bggray">大阪一地 </span>
                                    <span class="bggray">大阪一地 </span>
                                </p>
                                <p>班期：{{item.scheduleDateList}}</p>
                                <p class="money">
                                    <span><i class="iconfont icon-jiage1"></i><em>{{item.price}}</em>起</span>
                                    <span> 评分{{item.averageScore}} </span>
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
</template>

<script>
import {local} from "api/destination";
export default {
    name:"local",
    async created() {
        let data = await local();
        console.log(data.data.data.products);
        this.products = data.data.data.products
    },
    data() {
        return {
            products:[]
        }
    },


}
</script>


<style scoped>


.tab-top .tab-couple>ul{
    text-align: center;
    height: .8rem;
    line-height: .8rem;
    background-color: #fff;
    font-size: .3rem;
    color: #333;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-bottom: 1px solid #ccc;
}
.tab-top .tab-couple>ul>.couple-color{
    color: #00be88;
    border-bottom: .03rem solid #00be88;
}
.tab-top .tab-couple>ul>li{
    position: relative;
    display: block;
    height: .8rem;
    overflow: hidden;
    text-align: center;
    font-size: .3rem;
    color: #555;
}
.tab-top .tab-city{
    padding: .3rem .3rem;
}
.tab-top .tab-city>ul{
    text-align: center;
    line-height: 1.77rem;
    background-color: #fff;
    font-size: .6rem;
    color: #333;
    display: flex;
    justify-content: space-around;
}
.tab-top .tab-city>ul>.tabColor{
    background-color: #e5f8f3;
    border-color: #00be88;
    color: #00be88;
}
.tab-top .tab-city>ul>li{
    width: 100%;
    height: .5rem;
    line-height: .5rem;
    border-radius: .5rem;
    padding: 0 .1rem;
    margin-right: .3rem;
    border: 1px solid #f2f4f6;
    background-color: #f5f5f5;
    color: #555;
    box-sizing: border-box;
    font-size: .25rem;
    display: block;
    float: left;
}


.tab-list .list-content{
    padding: 0 .2rem;
    
}
.tab-list .list-content>ul>li{
    padding: .2rem 0;
    overflow: hidden;
    border-radius: .04rem;
    position: relative;
    border-bottom: 1px solid #f5f5f5;
}
.tab-list .list-content>ul>li>.list-img{
    position: absolute;
    top: 0;
    left: 0;
    border-radius: .04rem;
    width: 2.5rem;
    height: 2.5rem;
    position: relative;
    float: left;
}
.tab-list .list-content>ul>li>.list-img>.type{
    position: absolute;
    z-index: 1;
    display: block;
    text-align: center;
    color: #fff;
    font-size: .2rem;
    top: 0;
    left: 0;
    width: 1.2rem;
    overflow: hidden;
    height: .4rem;
    line-height: .4rem;
    border-radius: .1rem 0 1rem 0;
    background-color: #314e56;
    padding: 0;
}
.tab-list .list-content>ul>li>.list-img>.tag{
    width: 100%;
    height: .4rem;
    line-height: .4rem;
    border-radius: 0 0 .09rem .09rem;
    background-color: #667384;
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
    display: block;
    text-align: center;
    color: #fff;
    font-size: .2rem;
}
.tab-list .list-content>ul>li>.list-img>img{
    width: 100%;
    height: 100%;
    display: block;
}
.tab-list .list-content>ul>li>.list-txt{
    height: 2.5rem;
    position: relative;
    padding-left: .3rem;
    overflow: hidden;
}
.tab-list .list-content>ul>li>.list-txt>h4{
    min-height: 1rem;
    max-height: 1rem;
    overflow: hidden;
    line-height: .45rem;
    color: #333;
    font-size: .3rem;
    text-overflow: ellipsis;
    white-space: 6;
    font-weight: 500;
}
.tab-list .list-content>ul>li>.list-txt>p{
    height: .35rem;
    overflow: hidden;
    margin-top: .2rem;
    color: #999;
}
.tab-list .list-content>ul>li>.list-txt>.label>span{
    display: inline-block;
    vertical-align: top;
    line-height: .3rem;
    padding: 0 .32em;
    border: 1px solid #ccc;
    border-radius: .04rem;
    margin-right: .21rem;
    margin-bottom: .2rem;
    font-size: .2rem;
    background: #f5f5f5;
}
.tab-list .list-content>ul>li>.list-txt>.money{
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    line-height: 1;
    margin-left: .2rem;
    
}
.tab-list .list-content>ul>li>.list-txt>.money>span:nth-child(2){
    float: right;
}
.tab-list .list-content>ul>li>.list-txt>.money>span:nth-child(1){
    color: #f66;

}
.icon-jiage1{
    font-size: .2rem;
    color: #f66;
}


</style>

