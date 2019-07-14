<template>
    <div class="wrap-free">
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
</template>

<script>
import {ticketpicTwo} from "api/destination";

export default {
    name:"ticketpicTwo",
    async created() {
        let data = await ticketpicTwo()
       
        this.products = data.data.data.products;
    
    },
    data() {
        return {
            products:[]
        }
    },

    

}
</script>

<style scoped>
.wrap-pic .wrap-free>ul{
    margin: .3rem;
    color: #999;
    overflow: hidden;
}
.wrap-pic .wrap-free>ul>li{
    display: block;
    float: left;
    width: 46%;
    margin-right: 4%;
    margin-bottom: .2rem;
    position: relative;
}
.wrap-pic .wrap-free>ul>li>.wrap-img{
    position: relative;
    border-radius: .04rem;
    overflow: hidden;
}
.wrap-pic .wrap-free>ul>li>.wrap-img>i{
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
.wrap-pic .wrap-free>ul>li>.wrap-img img{
    display: block;
    width: 100%;
}
.wrap-pic .wrap-free>ul>li>.wrap-txt{
    margin-top: .2rem;
}
.wrap-pic .wrap-free>ul>li>.wrap-txt>h4{
    color: #333;
    height: .8rem;
    overflow: hidden;
    line-height: .4rem;
    font-size: 100%;
    font-weight: 400;
}
.wrap-pic .wrap-free>ul>li>.wrap-txt>em{
    display: inline-block;
    font-size: .68rem;
    line-height: 1;
    padding: 0 .05rem;
    vertical-align: baseline;
}
.wrap-pic .wrap-free>ul>li>.wrap-txt>p>span{
    color: #f66;
}
.wrap-pic .wrap-free>ul>li>.wrap-txt>p>.txt-span{
    color: #333;
    float: right;
}



</style>

