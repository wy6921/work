<template>
  <div>
    <h1>天气查询</h1>
    <!-- <input v-model="addInfo" /> -->
    <i-input size="large" placeholder="请输入城市名" v-model="addInfo" id="input1"></i-input>
    <!-- <button @click="addList">添加城市</button> -->
    <i-button type="primary" shape="circle" icon="ios-search"  @click="addList">搜索城市</i-button>
    <!-- <List v-for="(item,idx) in list" :key="idx">
      <template v-slot:choice>
        <input :type="item.type" />
      </template>
      <template v-slot:weatherData>
        <span @click="toDetails">{{item.city}} {{item.temp}}</span>
      </template>
      <template v-slot:weatherImg>
        <img :src="item.imgAddr" class="weatherImg" />
      </template>
    </List>-->
    <i-table :columns="tableHead" :data="bodyData" @on-row-click="toDetails"></i-table>
  </div>

</template>

<script>
// import List from "./list.vue";
import axios from "axios";
export default {
  data() {
    return {
      addInfo: "",
      resData: {},
      list: [
        {
          // type: "radio",
          city: "成都",
          // temp: "",
          // imgAddr: ""
        }
      ],
      tableHead: [
        {
          title: "城市",
          key: "area"
        },
        {
          title: "日期",
          key: "date"
        },
        {
          title: "最高气温",
          key: "highest"
        },
        {
          title: "最低气温",
          key: "lowest"
        },
        {
          title: "湿度",
          key: "humidity"
        },
        {
          title: "风力",
          key: "windsc"
        }
      ],
      bodyData: []
    };
  },

  components: {
    // List
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
      .then(res => {
        console.log(res);
        if (res.data.code == 200) {
          // this.resData = res.data.newslist[0];
          // this.list[0].temp = this.resData.highest;
          // this.list[0].imgAddr = require(`../static/font/${res.data.newslist[0].weatherimg}`);
          this.bodyData = res.data.newslist
        } else {
          // this.list[0].city = "查询失败";
          this.$Message.warning('查询失败！');
        }
      })
      .catch(function(err) {
        console.log(err);
      });
  },
  // beforeRouteLeave (to, from, next) {
  //   console.log(sessionStorage.getItem("isLogin"))
  //   let flag = sessionStorage.getItem("isLogin")
  //           if(flag==true){
  //               next()
  //           }else{
  //             this.$Message.warning('未登录！请登录后访问');
  //             // next({ path:'/login' })
  //           }
            
  //       },
  methods: {
    addList() {
      axios
        .get("http://api.tianapi.com/txapi/tianqi/index", {
          params: {
            key: "765b7cc79d9c596dbd686d890cb65d9c",
            city: this.addInfo
          }
        })
        .then(res => {
          console.log(res);
          if (res.data.code == 200) {
            // this.list.push({
            //   type: "radio",
            //   city: this.addInfo,
            //   temp: res.data.newslist[0].highest,
            //   imgAddr: require(`../static/font/${res.data.newslist[0].weatherimg}`)
            // });
             this.bodyData = res.data.newslist
          } else {
            // this.list.push({
            //   type: "radio",
            //   city: this.addInfo,
            //   temp: "天气查询失败",
            //   imgAddr: ""
            // });
            this.$Message.warning('查询失败！');
          }
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    //点击城市名称跳转到详情页
    toDetails(rowsData) {
      console.log(rowsData)
      this.$router.push({ name: "details",params:rowsData});
    }
  }
};
</script>

<style>
.weatherImg {
  width: 30px;
}
#input1{
  width: 150px;
  margin: 10px;
}
</style>