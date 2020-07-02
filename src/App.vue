<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <div>
      <router-view></router-view>
    </div>
    <footnav></footnav>
  </div>
</template>
<script>
import footnav from './views/footnav'
export default {
  components:{
    footnav
  }
}
</script>
<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow: hidden;
  width: 100%;
  margin-bottom:50px;
}
</style>
