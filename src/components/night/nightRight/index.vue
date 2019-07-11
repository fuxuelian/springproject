<template>
<div>
 
        <Loading v-if="loadingFalg"/>
            <div class="main-list">
                <ul v-for="(item,index) in nightRight" :key="index">
                    <li>
                        <div class="main-site">
                            <p>出发{{item.departureCity}}</p>
                            <span>共{{item.inventory}}件</span>
                        </div>
                        <img :src="item.pictureUrl">
                        <div class="main-list-box">
                            <h3>{{item.productName}}</h3>
                            <p>一口价:<span>￥<em>{{item.price}}</em>元/人</span></p>
                            <div class="main-list-invite">
                                好友助力解锁
                            </div>
                        </div>
                    </li>
                </ul>
                
    </div>
  
    </div>
</template>



<script>
import {getNight} from "api/home"
export default {
    name:"nightRight",
    async created(){
        let data = await getNight()
        this.nightRight = data[1].data.masterProductList
    if (data) {
      this.loadingFalg = false;
    } else {
      this.loadingFalg = true;
    }
    },
    
    data(){
        return{
            nightRight:[],
            loadingFalg:true
        }
    }
}
</script>



<style scoped>
/* 商品列表 */
.main-list>ul>li{
    padding: .2rem;
    background: #ffffff;
    margin-top: .2rem;
    overflow: hidden;
    position: relative;
}
.main-list>ul>li>img{
    width: 3.2rem;
    height: 2.48rem;
    float: left;
}
.main-site{
    position: absolute;
    width: 2.2rem;
    height: .3rem;
    left: .3rem;
    top: .3rem;
    overflow: hidden;
}
.main-site>p{
    background: rgba(0,0,0,.8);
    width: 1.2rem;
    border-radius:.15rem;
    border-radius:.15rem 0  0 .15rem ;
    float: left;
    text-align: center;
    color: #ffffff;
}
.main-site>span{
    float: left;
    width: 1rem;
    background: #ffcf2a;
    border-radius:0 .15rem .15rem 0;
    text-align: center;
    color: #333;
}
.main-list-box{
    float: left;
    width: 3.18rem;
    height: 1.8rem;
    margin-left: .3rem;
}
.main-list-box>h3{
    width: 3.2rem;
    height: 1.08rem;
    text-overflow:ellipsis;
    overflow: hidden;
    margin-bottom: .1rem;
    font-size: .28rem;
    color: #333;
}
.main-list-box>p{
    width: 3.2rem;
    height: .46rem;
    color: rgba(107, 104, 104, 0.8);
    margin-bottom: .2rem;
}
.main-list-box>p>span{
    color: #ff6600;
    margin-left: .2rem;
    font-size: .32rem;
}
.main-list-box>p>span>em{
    font-size: .44rem;
}
.main-list-invite{
    width: 3.2rem;
    height: .62rem;
    background: #ff6600;
    color: #ffffff;
    text-align: center;
    line-height: .62rem;
}

</style>
