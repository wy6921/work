<template>
<div class="weather">
    <div v-for="(item,index) in weatherData" :key="index">
        <list-item :data="item">
            <template #title="titleProps">
                <h3 v-if="titleProps.checked">{{titleProps.data.city}} {{titleProps.data.temp}} ℃</h3>
                <h3 v-else>{{titleProps.data.cityen}} {{titleProps.data.tempf}} ℉</h3>
            </template>
            <template #side="">
                <h3>{{sideProps.weather}}</h3>
                <img class="icon" :src="yu"/>
            </template>
        </list-item>
    </div>
</div>
</template>

<script>
import axios from 'axios'
import ListItem from './list-item'
import qing from './src/qing.png'
import yin from './src/yin.png'
import yu from './src/yu.png'
import duoyun from './src/duoyun.png'
export default {
  name: 'WeatherDemo',
  components: {
    ListItem
  },
  mounted () {
    let cityCode = 101270101
    for (let i = 0; i < 10; i++) {
      let url = 'http://api.help.bj.cn/apis/weather/?id=' + (cityCode + i).toString()
      axios
        .get(url)
        .then(response => {
          this.weatherData.push(response.data)
        })
        .catch(error => {
          console.log(error)
        })
        .finally(() => (this.loading = false))
    }
  },
  data () {
    return {
      weatherData: [],
      loading: true,
      qing,
      yin,
      yu,
      duoyun
    }
  },
  watch: {
    weatherData () {
    //   console.log(this.weatherData)
    }
  }
}
</script>

<style>
.weather{
  overflow:scroll;
}
.icon{
    width: 30px;
    height: 30px;
}
</style>
