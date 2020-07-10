<template>
  <div>
    <h1>查询天气，请输入城市名</h1>
    <div>
      <el-input
        v-model="cityName"
        placeholder="成都"
        style="width:200px"
      ></el-input>
      <el-button type="primary" @click="getWea" style="margin-left:10px"
        >查询</el-button
      >
      <el-button type="primary" @click="dialogFormVisible = true"
        >登录</el-button
      >

      <!-- //弹出表单 -->
      <el-dialog title="登录" :visible.sync="dialogFormVisible">
        <el-form :model="form">
          <el-form-item label="账号" :label-width="formLabelWidth">
            <el-input v-model="form.id" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="密码" :label-width="formLabelWidth">
            <el-input v-model="form.password" autocomplete="off"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="wantLogin">确 定</el-button>
        </div>
      </el-dialog>
    </div>
    <div v-if="rightCity == true" style="margin-left:50px">
      <el-table :data="list" style="width: 100%" @row-click="enterWea">
        <el-table-column prop="area" label="城市" width="150">
        </el-table-column>
        <el-table-column prop="date" label="日期" width="150">
        </el-table-column>
        <el-table-column prop="lowest" label="最高气温" width="150">
        </el-table-column>
        <el-table-column prop="highest" label="最低气温" width="150">
        </el-table-column>
        <el-table-column prop="weather" label="天气" width="150">
        </el-table-column>
        <el-table-column prop="tips" label="小贴士" width="300">
        </el-table-column>
      </el-table>
      <!-- <compo
        v-for="item in list"
        :key="item.fruit"
        style="float:left; margin-left:30% ;margin-top:'30px"
      >
        <template v-slot:box1>
          <el-checkbox label="1"></el-checkbox>
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
      </compo> -->
    </div>
    <div>
      <p v-if="rightCity == false">您输入的城市名有误</p>
      <p @click="showList"></p>
    </div>
    <!-- <div class="place">
      <div class="placeOne"></div>
      <div class="placeTwo"></div>
      <div class="placeThree"></div>
    </div> -->
  </div>
</template>

<script>
// import compo from "./compo.vue";

import { getWeather } from "../../api.js";

export default {
  components: {
    // compo,
  },
  mounted() {
    getWeather(this.testData).then((res) => {
      console.log(res.data.newslist);
      this.list = res.data.newslist;
    });
  },
  data() {
    return {
      dialogTableVisible: false,
      dialogFormVisible: false,
      formLabelWidth: "120px",
      login: 0,
      form: {
        id: "",
        password: "",
      },
      checked: false,
      rightCity: true,
      cityName: "",
      testData: {
        key: "765b7cc79d9c596dbd686d890cb65d9c",
        city: "成都",
      },
      list: [],
    };
  },

  beforeRouteLeave(to, from, next) {
    if (this.form.id == "123" && this.form.password == "456") next();
    else next(false);
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
    enterWea(data) {
      console.log(data);
      this.$router.push({ name: "enterWeather", params: data });
    },
    wantLogin() {
      this.dialogFormVisible = false;
      if (this.form.id == "123" && this.form.password == "456") {
        this.$alert("成功登陆，可以访问天气详情", "登录提示", {
          confirmButtonText: "确定",
          callback: (action) => {
            this.$message({
              type: "info",
              message: `action: ${action}`,
            });
          },
        });
      } else {
        this.$alert("登录失败", "登录提示", {
          confirmButtonText: "确定",
          callback: (action) => {
            this.$message({
              type: "info",
              message: `action: ${action}`,
            });
          },
        });
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@width: 200px;
@height: @width;

.place {
  width: 100%;
  height: @height;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.placeOne {
  background-color: red;
  width: @width;
  height: @height;
}

.placeTwo {
  background-color: blue;
  width: @width;
  height: @height;
}
.placeThree {
  background-color: yellow;
  width: @width;
  height: @height;
}

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
