<template>
    
   <div id="content" >
    <BScroll>
        <div>
        <Loading v-if="loadingFalg"/>
        <header id="header" v-if="!loadingFalg">
            <p>规则</p>
            <img src="https://media.china-sss.com/img/M00/04/D3/wKjFbFzuTJ-ANJzCAAHBlPxPY7k191.png"   alt="">
        </header>
        <main id="main" >
            <div class="main-top">
                <h2>需三人助力</h2>
                <p>解锁夜市专享</p> 
                <div class="main-top-center">
                    <span>0</span>
                    <p></p>
                    <span>3</span>
                </div>
                <div class="main-top-invite">
                    <p>
                        邀请好友助力
                    </p>
                </div>
            </div>
            <div class="main-nav">
                
                <router-link to="/night/nightLeft" tag="span">
                    <p>上海</p>                    
                    </router-link>                     
                <router-link to="/night/nightRight" tag="span">
                    <p>宁波杭州</p>
                 </router-link>            
            </div>
            <keep-alive>
                <router-view/>
            </keep-alive>
        </main>
        </div>
        </BScroll>
   </div>

</template>

<script>
import {getNight} from "api/home"
export default {
    name:"night",
    async created(){
        let data = await getNight()
        this.nightList = data[0].data.masterProductList        
        if(data){
            this.loadingFalg=false
        }else{
            this.loadingFalg=true
        }
    },
    
    data(){
        return{
            nightList:[],
            loadingFalg:true
        }
    },
    methods:{
        rightClick(){
        }
    }
}
</script>

<style scoped>
#content {
    height: 100%;
    position: relative;
    box-sizing: border-box;

}

/* 头部 */
#header {
    position: relative;
    height: 4.44rem;
}

#header>img {
    width: 100%;
    height: 4.44rem;
}

#header>p {
    position: absolute;
    color: #ffffff;
    right: .3rem;
    top: .2rem;
}

/* 主体 */
#main {
    padding: 0 .2rem;
    background: #000000;
}

.main-top {
    background: #ffffff;
    height: 4.46rem;
    margin-bottom: .2rem;
    border-radius: .1rem;
    text-align: center;
    padding: .2rem;
}

.main-top>h2 {
    font-size: .6rem;
    font-weight: 700;
    margin-top: .2rem;
}

.main-top>p {
    font-size: .28rem;
    margin-bottom: .21rem;
}

.main-top-center>p {
    width: 5rem;
    height: .3rem;
    border-radius: .15rem;
    background: #dddddd;
    display: inline-block;
    vertical-align: middle;
}

.main-top-center {
    text-align: center;

}

.main-top-center>span {
    font-size: .28rem;
    line-height: .3rem;
    display: inline-block;
    color: #ff6600;
    vertical-align: middle;

}

.main-top-invite {
    margin-top: .36rem;
    width: 6.66rem;
    height: .92rem;
}

.main-top-invite>p {
    width: 6rem;
    height: .92rem;
    border-radius: .46rem;
    background: #ff6600;
    line-height: .92rem;
    font-size: .3rem;
    font-weight: 700;
    color: #ffffff;
    margin-left: .33rem;
}
/* 主体导航 */
.main-nav{
    padding: 0 .2rem;
    background: #ffffff;
}
.main-nav>span{
    width: 1.6rem;
    height: .92rem;
    display: inline-block;
    margin: 0 .85rem;
    text-align: center;
}
.main-nav>span>p{
    font-size: .4rem;
    font-weight: 700;
    height: .9rem;
    line-height: .9rem;
}
.router-link-active>p{
    color: #ff6600;
    border-bottom: 3px solid #ff6600;
}




</style>
