<template>
    <div>
        <ul>
            <li>
                <div class="find-txt">
                    <h2>多家超人气民宿¥599起，莫干山避暑正当时！</h2>
                    <img src="http://media.china-sss.com/img/M00/04/F2/wKjFbF0doNmAeMe4AApyHYZOOB0323.png" alt="">
                    <p>热门首选</p>
                </div>
                <div class="find-tag">
                    <div class="find-fl">
                        <img src="http://media.china-sss.com/img/M00/04/65/wKjFbFx4voKASVWNAAGvHh4IL7s229.png" alt="">
                        <strong>春小秋</strong>
                        <i class="iconfont icon-nvx"></i>
                    </div>
                    <div class="find-fr">
                        <p>
                            <i class="iconfont icon-xiaoyanjing"></i>
                            13
                        </p>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import {remark} from "api/destination";
export default {
    name:"remark",
    async created() {
        console.log(remark())
        let data = await remark()
        // console.log(data);
        
    },

}
</script>

<style>



</style>

