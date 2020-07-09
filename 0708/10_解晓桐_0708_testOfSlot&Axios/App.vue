<template>
  <div id="app">
    <img src="./assets/logo.png">

    <Item v-for="(val,key) in lists" :key="key">
      <template slot="input-cont">
        <input :type="val.checkType">
      </template>
      <template slot="city-weather">{{val.city}} {{val.weather}}
      </template>
      <template slot="img">
        <img :src="val.imgSrc"/>
      </template>
    </Item>

    <!-- <AxiosTest></AxiosTest> -->

    <router-view/>
  </div>
</template>

<script>

import Item from "./components/Item"
// import AxiosTest from './components/AxiosTest'

export default {
  name: 'App',
  components:{
    'Item':Item
    // 'AxiosTest':AxiosTest
  },
  data(){
    return{
      lists:[
        {checkType:'checkbox',city:'成都',weather:'晴天',imgSrc:require('./assets/sun.png')},
        {checkType:'radio',city:'武汉',weather:'多云',imgSrc:require('./assets/cloud.png')},
        {checkType:'text',city:'武汉',weather:'多云',imgSrc:require('./assets/overcast.png')}
      ] //在webpack中会将图片图片来当做模块来用，因为是动态加载的，所以url-loader将无法解析图片地址，将图片作为模块加载进去,用require()就可以了
    }
  },
  created(){
        this.$axios({
            method:'get',
            url:'//api.help.bj.cn/apis/weather/?id=101060101'
        }).then((response)=>{
            this.lists[0].city=response.data.city,
            this.lists[0].weather=response.data.weather
        }).catch((error)=>{
            console.log(error)
        }),

        this.$axios({
            method:'get',
            url:'//api.help.bj.cn/apis/weather/?id=101121006'
        }).then((response)=>{
            console.log(response),
            this.lists[1].city=response.data.city,
            this.lists[1].weather=response.data.weather
        }).catch((error)=>{
            console.log(error)
        }),

        this.$axios({
            method:'get',
            url:'//api.help.bj.cn/apis/weather/?id=101010100'
        }).then((response)=>{
            this.lists[2].city=response.data.city,
            this.lists[2].weather=response.data.weather
        }).catch((error)=>{
            console.log(error)
        })
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
