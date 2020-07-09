<template>
    <div>
        <h3>拉取数据使用slot的todolist</h3>

        <p>获取
            <select v-model="city"  @change="getData">
                <option v-for="c in cityList" :key="c.index">
                    <p>{{c}}</p>
                </option>
            </select>
            远程数据
        </p>
        <div>
            选择
            <select v-model="type"  @change="changeBox">
                <option value='checkbox' >checkbox</option>
                <option value="radio">radio</option>
            </select>

        </div>

<!--
        <span>选择日期</span> -->

        <Child v-for="item in itemList" :key="item.data">
            <template >
                <input :type="type">
            </template>
            <template v-slot:label :weather = "item.weather">
                <span>{{item.week}}</span>&nbsp;
                <span>最高气温：{{item.highest}}</span>&nbsp;
                <span>最低气温{{item.lowest}}</span>&nbsp;
                <span>{{item.weather}}</span>
            </template>
            <template v-slot:pics>
                <span class="iconfont">{{item.weatherimg}}</span>
            </template>
        </Child>
    </div>
</template>

<script>
// import trance from './trans/trance.vue'
import Child from './child'

import axios from 'axios'
export default {
  name: 'Test',
  data () {
    return {
      itemList: [],
      city: '成都',
      cityList: ['成都', '上海', '西安'],
      type: 'radio',
      typeList: ['checkbox', 'radio'],
      iconList: ['\ue700', '\ue704', '\ue703', '\ue704', '\ue700', '\ue703', '\ue700']
    }
  },
  components: {
    Child
  },
  methods: {
    changeBox: function (e) {
      this.type = e.target.value
    },
    getData: function () {
      // axios.get('http://wthrcdn.etouch.cn/weather_mini?citykey=101280101').then((res) => {
      //     console.log(res)
      //     console.log('test')
      // })
      axios.get('http://api.tianapi.com/txapi/tianqi/index?', {
        params: {
          key: '765b7cc79d9c596dbd686d890cb65d9c',
          city: this.city
        }}).then((res) => {
        // console.log(res)
        // console.log(res.data)
        let tempList = res.data.newslist
        tempList.map((item, index) => {
        //   console.log(this.iconList[index], 'ssss')
          item.weatherimg = this.iconList[index]
        })
        // this.itemList =
        this.itemList = tempList
        console.log(this.itemList)
      })
    }
  },
  mounted () {
    this.getData()
  }
}
</script>
