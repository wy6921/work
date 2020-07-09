<template>
  <div>
    <input v-model="addInfo" />
    <button @click="addList">添加城市</button>
    <List v-for="(item,idx) in list" :key="idx">
      <template v-slot:choice>
        <input :type="item.type" />
      </template>
      <template v-slot:weatherData>
        <span>{{item.city}} {{item.temp}}</span>
      </template>
      <template v-slot:weatherImg>
        <img :src="item.imgAddr" class="weatherImg" />
      </template>
    </List>
  </div>
</template>

<script>
import List from "./list.vue";
import axios from "axios";
export default {
  data() {
    return {
      addInfo: "",
      resData: {},
      list: [
        {
          type: "radio",
          city: "成都",
          temp: "",
          imgAddr: ''
        }
        // {
        //   type: "radio",
        //   city: "北京",
        //   temp: "37℃",
        //   imgAddr: require("../static/font/sun.png")
        // },
        // {
        //   type: "radio",
        //   city: "上海",
        //   temp: "35℃",
        //   imgAddr: require("../static/font/cloudy.png")
        // }
      ]
    };
  },

  components: {
    List
  },
  mounted: function() {
    //渲染之前请求成都的数据，用作显示
    axios
      .get("http://api.tianapi.com/txapi/tianqi/index", {
        params: {
          key: "765b7cc79d9c596dbd686d890cb65d9c",
          city: "成都"
        }
      })
      .then((res) =>{
        console.log(res);
        this.resData = res.data.newslist[0];
        this.list[0].temp = this.resData.highest;
        this.list[0].imgAddr=require(`../static/font/${res.data.newslist[0].weatherimg}`)
      })
      .catch(function(err) {
        console.log(err);
      });
  },

  methods: {
    addList() {
      axios
        .get("http://api.tianapi.com/txapi/tianqi/index", {
          params: {
            key: "765b7cc79d9c596dbd686d890cb65d9c",
            city: this.addInfo
          }
        })
        .then((res)=> {
          console.log(res);
          this.list.push({
            type: "radio",
            city: this.addInfo,
            temp: res.data.newslist[0].highest,
            imgAddr: require(`../static/font/${res.data.newslist[0].weatherimg}`)
          });
        })
        .catch(function(err) {
          console.log(err);
        });
        
    }
  }
};
</script>

<style>
.weatherImg {
  width: 30px;
}
</style>