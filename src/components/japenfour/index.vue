<template>
<div class="main-theme">

            <div class="main-tab">

                
                <!-- 产品滚动列表 -->
                <div class="tab-content">
                    <ul>
                        <li v-for="(item,index) in products" :key="index">
                            <div class="wrap-img">
                                <i>{{item.productTypeName}}</i>
                                <img :src="item.imgurl" alt="">
                            </div>
                            <div class="wrap-txt">
                                <h4>{{item.productName}}</h4>
                                <p>
                                    <span>￥<em>{{item.price}}</em>&nbsp;起</span>
                                    <span class="txt-span">{{item.cityName}}{{item.cityType}}</span>
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
</template>

<script>
import {japenfour} from "api/destination";
export default {
    name:"japenfour",
    async created() {
        console.log(japenfour());
        
        let data = await japenfour();
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
.main-theme{
    border-bottom: .2rem solid #f2f3f7;
    overflow: hidden;
}
.main-theme .theme-title{
    padding: .25rem .3rem 0 .3rem;
    background-color: #fff;
}
.main-theme .theme-title h3{
    font-weight: 700;
    font-size: .3rem;
    color: #333;
}
.main-theme .theme-t{
    height: .7rem;
    font-size: .25rem;
    color: #00be88;
    line-height: .7rem;
    border-bottom: 1px solid #ededed;
}
.main-theme .theme-t h4{
    padding: 0 .3rem;
    width: 1.8rem;
    border-bottom: 1px solid #00be88;
}
.main-theme .tab-nav>ul{
    text-align: center;
    line-height: 1.77rem;
    background-color: #fff;
    font-size: .6rem;
    color: #333;
    overflow: hidden;
    padding: .2rem;
    display: flex;
    justify-content: center;
}
.main-theme .tab-nav>ul>li{
    width: 1.5rem;
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
.main-theme .tab-nav>ul>.tab-color{
    border-color: #00be88;
    color: #00be88;
}

.tab-content{
    float: left;
    width: 100%;
    overflow-x: auto;
    overflow: hidden;
}

.tab-content>ul{
    overflow-x: auto;
    display: -webkit-box;
    padding:  0 0 0 .2rem;
}
.tab-content>ul>li{
    float: initial;
    padding: 0 0 .1rem 0;
    width: 3rem;
    margin: 0;
    box-sizing: border-box;
    overflow: hidden;
}
.tab-content>ul>li>.wrap-img{
    position: relative;
    border-radius: .04rem;
    overflow: hidden;
    padding: 0 .2rem 0 0;
}
.tab-content>ul>li>.wrap-img>i{
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
.tab-content>ul>li>.wrap-img img{
    display: block;
    width: 100%;
    height: 100%;
}
.tab-content>ul>li>.wrap-txt{
    margin-top: .1rem;
    padding: 0 .2rem 0 0;
}
.tab-content>ul>li>.wrap-txt>h4{
    color: #333;
    height: .4rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    line-height: .4rem;
    font-size: 100%;
    font-weight: 400;
    margin-bottom: .1rem;
}
.tab-content>ul>li>.wrap-txt>em{
    display: inline-block;
    font-size: .68rem;
    line-height: 1;
    padding: 0 .05rem;
    vertical-align: baseline;
}
.tab-content>ul>li>.wrap-txt>p>span{
    color: #f66;
}
.tab-content>ul>li>.wrap-txt>p>.txt-span{
    color: #333;
    float: right;
}


</style>

