<template>
  <div>
    <router-view></router-view>

    <h2>home</h2>
  
    <router-link to="/ticket" tag="button">二级路由跳转</router-link>
    <router-link to="/japen" tag="button">二级路由跳转</router-link>
  </div>
</template>
<script>
export default {
  name: "home",

  data() {
    return {


    };
  },
  methods: {}
};
</script>
<style scoped>



</style>


