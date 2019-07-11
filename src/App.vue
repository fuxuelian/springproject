<template>
  <div id="app">
    <router-view></router-view>
<<<<<<< HEAD
   
    
    <TabBar/>

=======


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
