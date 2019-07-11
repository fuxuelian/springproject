<template>
  <div id="app">
<<<<<<< HEAD
    <router-view></router-view>
<<<<<<< HEAD
   
    
    <TabBar/>

=======

=======
    <keep-alive>
        <router-view></router-view>
    </keep-alive>
>>>>>>> he

    <TabBar v-if="$route.meta.flag"/>
>>>>>>> he
  </div>
</template>

<script>

import TabBar from "common/footer/"


export default {
  name: 'app',
  components: {
   TabBar


  }
}
</script>

<style scoped>
  #app{
    height: 100%;
  }
  

</style>
