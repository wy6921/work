<template>
  <div id="app">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" @parents="parent($event)"/> -->
    <!-- <Fruits v-slot:fruits="{ fruitslist }">
      {{fruitslist}}---
     <template v-slot:fruits="prop">
        这是插槽！！！
          <ul>
            <li v-for="(item,index) in prop.fruits" :key="index">{{item}}</li>
          </ul>
        end了！end了！
        </template> 
    </Fruits> -->

    <!-- <List></List> -->

    <!-- <Less></Less> -->

     <Menu mode="horizontal" :theme="theme1" active-key="1">
        <router-link to="/list" >
        <Menu-item key="1">
            <Icon type="ios-paper"></Icon>
            首 页
        </Menu-item>
        </router-link>
        <router-link to="/login" >
        <Menu-item key="2">
            <Icon type="ios-people"></Icon>
            登 录
        </Menu-item>
        </router-link>
    </Menu>

    <keep-alive>   
     <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
     <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import Fruits from './components/FruitsCheck.vue'
// import List from './components/Day03/List.vue'
// import Login from './components/Day04/Login.vue'
// import Less from './components/Day04/Less.vue'
// import Vue from 'vue'
// Vue.component('Page',Page)

export default {
  name: 'App',
  components: {
    // HelloWorld,
    // Fruits
    // List,
    // Login
    // Less
  },
  methods:{
    parent(s){
      console.log('!!',s)
    }
  }
}
</script>

<style lang="less" scoped>
#app {
  // font-family: Avenir, Helvetica, Arial, sans-serif;
  // -webkit-font-smoothing: antialiased;
  // -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  // color: #2c3e50;
  margin:0;
}
.nav{
  height:50px;  
  display: flex;
  flex-direction: row ;
  align-items:center;
  justify-content: flex-start;
  li{
    list-style: none;
    padding:0 10px;
    margin:0;
  }
}
</style>
