<template>
    <div>
        <!-- <div class="swiper-container" ref="banner">
            <slot name="banner" :contents="banners"></slot>
            
        </div> -->


    </div>
</template>

<script>
// import {shuffling} from "api/destination";

// import "swiper/dist/css/swiper.css";
// import Swiper from "swiper";
// export default {
//     name:"shuffling",
//     async created() {
//         let data = await shuffling()
//         console.log(data.data.data.banners);
//         this.banners = data.data.data.banners
//     },
//     data() {
//         return {
//             banners:[]
//         }
//     },
    
    // mounted() {
    //     new Swiper(this.$refs.banner,{
    //         autoplay:{
    //             disableOnInteraction:false,
    //         },
    //         loop:true,
    //         pagination: {
    //             el: '.swiper-pagination',
    //         },
    //     })
    // },



// }
</script>


<style>
    .swiper-container{
        width: 100%;
        height: 2.6rem;
    }
    .swiper-slide{
        width: 100%;
        height: 100%;
    }
    .swiper-slide>img{
        width: 100%;
        height: 100%;
    }

</style>

