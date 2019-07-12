<template>
    <div>
        
        <div class="tab-content">
            <Loading v-if="loadingFlag"/>
        <ul v-if="!loadingFlag">
            <li v-for="(item,index) in dates" :key="index">
                <div class="find-txt">
                    <h2>{{item.detail.title}}</h2>
                    <img :src="item.pictures[0].url" alt="">
                    <p>{{item.detail.articleTag}}</p>
                </div>
                <div class="find-tag">
                    <div class="find-fl">
                        <img :src="item.author.url" alt="">
                        <strong>{{item.author.name}}</strong>
                        <i class="iconfont icon-nvx"></i>
                    </div>
                    <div class="find-fr">
                        <p>
                            <i class="iconfont icon-xiaoyanjing"></i>
                            {{item.detail.articleBrowseCount}}
                        </p>
                    </div>
                </div>
            </li>
        </ul>
        </div>
</div>
</template>

<script>
import {shuffling} from "api/destination";
export default {
    name:"shuffling",
    async created() {
        let data = await shuffling()
        console.log(data.data);
        this.dates = data.data;

        if (data) {
            this.loadingFlag = false
        } else {
            this.loadingFlag = true

        }
    },
    data() {
        return {
            dates:[],
            loadingFlag:true
        }
    },

}
</script>

<style scoped>

.tab-content ul li{
    padding: .3rem .25rem .15rem .25rem;
    border-top: 1px solid #ccc;

}
.tab-content ul li .find-txt{
    position: relative;
}
.tab-content ul li .find-txt h2{
    overflow: hidden;
    line-height: .5rem;
    font-size: .4rem;
    font-weight: 500;
    color: #333;
    text-overflow: ellipsis;
    margin-bottom: .2rem;
}
.tab-content ul li .find-txt img{
    width: 100%;
}
.tab-content ul li .find-txt p{
    width: 1.2rem;
    height: .4rem;
    line-height: .4rem;
    background: #ff75a9;
    text-align: center;
    border-radius: .2rem;
    margin-top: .2rem;
    color: #fff;
    position: static;
    right: 37%;
    bottom: 0;
    left: 0;
    overflow: hidden;
    display: inline-block;
}
.tab-content ul li .find-tag {
    padding-top: .2rem;
    overflow: hidden;
    text-align: right;
    line-height: .7rem;
}
.tab-content ul li .find-tag .find-fl{
    float: left;
    font-size: .3rem;
    color: #333;
    line-height: .6rem
}
.tab-content ul li .find-tag img{
    width: .6rem;
    height: .6rem;
    border-radius: 100%;
    overflow: hidden;
    float: left;
}
.tab-content ul li .find-tag strong{
    font-size: .4rem;
    color: #333;
    display: inline-block;
    vertical-align: middle;
    font-size: .3rem;
    font-weight: 400;
    margin-left: .1rem;
    /* float: left; */
}
.tab-content ul li .find-tag .icon-nvx{
    font-size: .25rem;
    color: #ff75a9;
}
.tab-content ul li .find-tag .find-fr .iconfont{
    font-size: .3rem;
}
.tab-content ul li .find-img {
    width: 100%;
    margin-right: 1%;
    overflow: hidden;
}
.tab-content ul li .find-img img{
    display: inline-block;
    width: 31.6%;
    height: 100%;
    
}

</style>

