<template>
    
        <div class="tab-inner">
            
        <!-- <ul class="ul-img">
            <li>
                <a href="javascript:;">
                    <h3><span>大阪</span>OSAKA</h3>
                    <img src="//media.china-sss.com/img/M00/00/0D/wKjFbFp6b12ACHsLAAJdxtx8hcM135.jpg" alt="">
                </a>
            </li>
            <li>
                <a href="javascript:;">
                    <h3><span>大阪</span>OSAKA</h3>
                    <img src="//media.china-sss.com/img/M00/00/0D/wKjFbFp6b12ACHsLAAJdxtx8hcM135.jpg" alt="">
                </a>
            </li>
            <li>
                <a href="javascript:;">
                    <h3><span>大阪</span>OSAKA</h3>
                    <img src="//media.china-sss.com/img/M00/00/0D/wKjFbFp6b12ACHsLAAJdxtx8hcM135.jpg" alt="">
                </a>
            </li>
        </ul>
        <h2>
            <i class="iconfont icon-dianzan"></i>推荐目的地
        </h2> -->

        </div>

    


</template>


<script>
import {destination} from "api/destination"
export default {
    name:"rightList",
    async created() {
        let data = await destination()
        console.log(data);
        
        
    },
    data() {
        return {
            
        }
    },

}
</script>

<style scoped>
/* 左侧导航第一级位置内容 */
.tab-inner {
  padding: 0.2rem;
  overflow: hidden;
}
.tab-inner > .ul-img {
  margin-bottom: 0.1rem;
  overflow: hidden;
}
.tab-inner > .ul-img > li {
  width: 48%;
  margin: 0 2% 0.2rem 0;
  border-radius: 0.06rem;
  overflow: hidden;
  display: block;
  float: left;
  position: relative;
}
.tab-inner > .ul-img > li > a > h3 {
  position: absolute;
  top: 50%;
  right: 0;
  left: 0;
  text-align: center;
  transform: translateY(-50%);
  font-size: 0.3rem;
  color: #fff;
  font-weight: 500;
}
.tab-inner > .ul-img > li > a > h3 > span {
  display: block;
  font-weight: 700;
  font-size: 0.3rem;
}
.tab-inner > h2 {
  margin-bottom: 0.2rem;
  font-weight: 700;
  font-size: 0.3rem;
  color: #333;
}
.tab-inner > h2 > .icon-dianzan {
  color: #00be88;
  font-size: 0.3rem;
  margin-right: 0.1rem;
}


</style>


