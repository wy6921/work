<template>
  <div id="app">
    <!-- <searchWeather> </searchWeather> -->
    <!-- <div>
      <router-link to="/HelloWorld">Go to HelloWorld</router-link>
      <router-link to="/pageOne">Go to pageOne</router-link>
      <router-link :to="{ name: 'pageOne' }">Go to view1</router-link>
      <div @click="goto">Go to HelloWorld</div>
    </div> -->
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  methods: {
    // goto() {
    //   this.$router.push({ path: "/HelloWorld" });
    // },
  },
  mounted() {
    this.$router.push({ path: "/searchWeather" });
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
