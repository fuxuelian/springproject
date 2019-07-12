<template>
    <div>
        <!-- 头部 -->
        <router-link to="" ></router-link>
    <div class="header">
        <a href="javascript:;" @click="handleAdd()"><i class="iconfont icon-zuojiantou1"></i></a>
        <h1>上海&nbsp;-&nbsp;广州</h1>
    </div>
    <!-- 导航 -->
    <div class="main">
        <div class="main-nav">
            <ul>
                <li><i class="iconfont icon-xiangzuo"></i>前一天</li>
                <li class="main-flex">
                    <i class="iconfont icon-rili"></i>
                    <span>07-12&nbsp;周五</span>
                    <em><i class="iconfont icon-jiage1"></i>930</em>
                    <i class="iconfont icon-xjt"></i>
                </li>
                <li>后一天<i class="iconfont icon-xiangyou"></i></li>
            </ul>
        </div>

        <!-- 信息提示 -->
        <div class="main-tiem">
            <p><i class="iconfont icon-xinxitishi"></i>所有起飞/降落时间均为当地时间</p>
            
            <!-- 机票列表 -->
            <ul>
                <li>
                    <div class="time-flex">
                        <ul>
                            <li>
                                <em>06:30</em>
                                <p>虹桥国际机场</p>
                            </li>
                            <li>
                                <em class="shijian">2h20m</em>
                                <span class="hr"></span>
                            </li>
                            <li>
                                <em>06:30</em>
                                <p>保安国际机场</p>
                            </li>
                        </ul>
                        <div>
                            <span class="zheko">5.5折</span>
                            <span><i class="iconfont icon-jiage1"></i>980</span>
                        </div>
                    </div>
                    <p class="tiem-info">
                        <span>
                            <i class="iconfont icon-chunqiuhangkong"></i>
                            春秋航空
                            <em>9C8917</em>
                        </span>
                    </p>
                </li>
                <li>
                    <div class="time-flex">
                        <ul>
                            <li>
                                <em>06:30</em>
                                <p>虹桥国际机场</p>
                            </li>
                            <li>
                                <em class="shijian">2h20m</em>
                                <span class="hr"></span>
                            </li>
                            <li>
                                <em>06:30</em>
                                <p>保安国际机场</p>
                            </li>
                        </ul>
                        <div>
                            <span class="zheko">5.5折</span>
                            <span><i class="iconfont icon-jiage1"></i>980</span>
                        </div>
                    </div>
                    <p class="tiem-info">
                        <span>
                            <i class="iconfont icon-chunqiuhangkong"></i>
                            春秋航空
                            <em>9C8917</em>
                        </span>
                    </p>
                </li>
            </ul>
        </div>
    </div>

    <!-- 底部 -->
    <div class="footer">
        <ul>
            <li>
                <i class="iconfont icon-time"></i><span>时间 早到晚</span>
            </li>
            <li>
                <i class="iconfont icon-jiage"></i><span>价格 低到高</span>
            </li>
            <li>
                <i class="iconfont icon-shaixuan"></i><span>更多筛选</span>
            </li>
        </ul>
        
    </div>
    </div>
</template>


<script>
export default {
    name:"xiangqing",
    methods: {
        handleAdd(){
            this.$router.back()
        }
    },


}
</script>

<style scoped>

body,html{
    background-color: #f7f8f9;
}
.header{
    width: 100%;
    height: 0.8rem;
    line-height: 0.8rem;
    padding: 0 .34rem;
    position: fixed;
    left: 0;
    right: 0;
    background-color: #fff;
}
.header h1{
    position: absolute;
    top: 0;
    right: 20%;
    bottom: 0;
    left: 20%;
    text-align: center;
    font-size: .35rem;
    color: #333;
    overflow: hidden;
    font-weight: 400;
}
.header .icon-zuojiantou1{
    font-size: .5rem;
    color: #00be88;
}

/* 导航 */

.main{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0.8rem;
    left: 0;
    bottom: 1rem;
    
}

.main .main-nav{
    position: fixed;
    width: 100%;
    z-index: 10;
}
.main .main-nav>ul{
    padding: .1rem 0;
    height: .8rem;
    line-height: .8rem;
    color: #fff;
    text-align: center;
    background-color: #00be88;
    display: flex;
    align-items: center;
    justify-content: center;
}
.main .main-nav>ul>li:nth-child(odd){
    width: 4rem;
    height: .6rem;
    line-height: .6rem;
}
.main .main-nav>ul>.main-flex{
    color: #00be88;
    vertical-align: middle;
    background-color: #fff;
    border-radius: .06rem;
    height: .6rem;
    line-height: .6rem;
    width: 100%;
    font-size: .28rem;
}
.main .main-nav>ul>li>em{
    color: #f84;
    font-size: .24rem;
}
.main .main-nav>ul>li>.iconfont{
    font-size: .25rem;
    margin: 0 .1rem;
}
.main .main-nav>ul>li>.icon-xjt{
    font-size: .3rem
}
.icon-jiage1{
    font-size: .2rem;
    margin: 0;
}

/* 信息提示 */

.main-tiem{
    width: 100%;
    position: absolute;
    top: 1rem;
    left: 0;
    overflow-y: auto;
    background-color: #f7f8f9;
}
.main-tiem>p{
    width: 100%;
    height: .6rem;
    line-height: .6rem;
    text-align: center;
    background-color: #f7f8f9;
    color: #999;
    font-size: .25rem;
}
.main-tiem>p>.iconfont{
    font-size: .25rem;
    margin-right: .1rem;
}

/* 机票列表 */

.main-tiem{
    width: 100%;
    overflow: hidden;
}
.main-tiem>ul{
    overflow: hidden;
}
.main-tiem>ul>li{
    padding: .2rem 0;
    background-color: #fff;
    text-align: center;
    width: 100%;
    border-bottom: 1px solid #ccc;
}
.main-tiem>ul>li>.time-flex{
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
}
.main-tiem>ul>li>.time-flex>ul:nth-child(odd){
    display: flex;
    width: 5rem;
    justify-content: space-between;
    align-items: center;
}
.main-tiem>ul>li>.time-flex>ul>li{
    font-size: .25rem;
}
.main-tiem>ul>li>.time-flex>ul>li>em{
    font-size: .3rem;
}
.main-tiem>ul>li>.time-flex>ul>li>.shijian{
    font-size: .2rem;
    color: #ccc;
}
.main-tiem>ul>li>.time-flex>ul>li>p{
    font-size: .2rem;
}

.main-tiem>ul>li>.time-flex>ul>li>.hr{
    border-bottom: 1px solid #000;
    display: block;
    margin-top: .1rem;
}
.main-tiem>ul>li>.time-flex>div>.zheko{
    display: inline-block;
    vertical-align: middle;
    line-height: .2rem;
    padding: .05rem .1rem;
    border: 1px solid #ff8585;
    border-radius: .04rem;
    color: #ff8585;
    font-size: .2rem;
    margin-right: 0;
}
.main-tiem>ul>li>.time-flex>div>span{
    color: #f84;
    display: inline-block;
    font-size: .35rem;
}
.main-tiem>ul>li>.tiem-info{
    padding: .25rem .25rem 0;
    text-align: left;
    overflow: hidden;
}
.main-tiem>ul>li>.tiem-info>span>.icon-chunqiuhangkong{
    display: inline-block;
    font-size: .2rem;
    color: #00be88;
}

/* 底部 */

.footer{
    width: 100%;
    height: 1rem;
    position: fixed;
    left: 0;
    bottom: 0;
    box-shadow: 0 -1px 5px rgba(0, 0, 0, .05);
    background-color: rgba(51,64,80,.95);
}
.footer>ul{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
}
.footer>ul>li{
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    font-size: .25rem;
    color: #fff;
}
.footer>ul>li .iconfont{
    font-size: .4rem;
    display: block;
}
.footer>ul:nth-child(3) li{
    color: #00be88;
}





</style>

