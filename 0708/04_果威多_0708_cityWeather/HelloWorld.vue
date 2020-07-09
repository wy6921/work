<template>
  <div>
    <h1>查询天气，请输入城市名</h1>
    <div>
      <input type="text" v-model="cityName" placeholder="成都" />
      <button @click="getWea" style="margin-left:20px">查询</button>
    </div>
    <div v-if="rightCity == true">
      <compo
        v-for="item in list"
        :key="item.fruit"
        style="float:left; margin-left:30% ;margin-top:'30px"
      >
        <template v-slot:box1>
          <input :type="inputType" />
        </template>
        <template v-slot:box2>
          {{
            item.date +
              "......" +
              item.lowest +
              "~" +
              item.highest +
              "...... 天气：" +
              item.weather
          }}
        </template>
        <template v-slot:box3 style="margin-bottom:50px;">
          <img
            v-if="item.weather == '晴'"
            src="../assets/sun.png"
            alt="图片"
            style="width:20px; "
          />
          <img
            v-else-if="item.weather == '阴'"
            src="../assets/cloud.png"
            alt="图片"
            style="width:20px; "
          />
          <img
            v-else-if="item.weather"
            src="../assets/rain.png"
            alt="图片"
            style="width:20px; "
          />
        </template>
      </compo>
    </div>
    <p v-if="rightCity == false">您输入的城市名有误</p>

    <p @click="showList"></p>
    <slot name="name1"></slot>
  </div>
</template>

<script>
import compo from "./compo.vue";
import { getWeather } from "../../api.js";

export default {
  components: {
    compo,
  },
  mounted() {
    getWeather(this.testData).then((res) => {
      console.log(res.data.newslist);
      this.list = res.data.newslist;
    });
  },
  data() {
    return {
      inputType: "checkbox",
      rightCity: true,
      cityName: "",
      testData: {
        key: "765b7cc79d9c596dbd686d890cb65d9c",
        city: "成都",
      },
      list: [],
    };
  },
  methods: {
    showList() {
      console.log("list", this.list);
    },
    getWea() {
      this.testData.city = this.cityName;
      getWeather(this.testData).then((res) => {
        console.log(res.data);
        if (res.data.code == 200) {
          this.rightCity = true;
          this.list = res.data.newslist;
        } else {
          this.rightCity = false;
        }
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
