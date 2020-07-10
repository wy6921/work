<template>
  <children>
    <!-- 选择框 -->
    <el-checkbox slot="fuxuan" v-model="checked">备选项</el-checkbox>
    <!-- 选择器 -->
    <el-select slot="city" v-model="value" placeholder="请选择" @change="btn">
      <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
      </el-option>
    </el-select>
    <!-- 卡片 -->
    <el-card v-show="checked" slot="tianqi" class="box-card">
      <div v-for="item in tianqi" class="text item">
        <i :class="weatherclass">{{item}}</i>
      </div>
    </el-card>

  </children>
</template>
<script>
  import children from './child';
  export default {
    name: 'parent',
    created() {
      this.btn()
    },
    components: {
      children
    },
    data() {
      return {
        tianqi: ['', '', '', '',''],
        weatherclass: '',
        value: '成都',
        checked: true,
        options: [{
          value: '成都',
          label: '成都'
        }, {
          value: '上海',
          label: '上海'
        }, {
          value: '北京',
          label: '北京'
        }]
      }
    },
    methods: {
      btn() {

        console.log(this.value)
        this.sendGet();
      },
      sendGet() {
        this.$axios.get('http://api.tianapi.com/txapi/tianqi/index', {//这里将axios.get 改为this.$axios.get
          params: {
            key: '765b7cc79d9c596dbd686d890cb65d9c',
            city: this.value
          }
        })
          .then(resp => {
            console.log(resp);
            this.tianqi[0] = '日期' + resp.data.newslist[0].date
            this.tianqi[1] = '最高温度' + resp.data.newslist[0].highest
            this.tianqi[2] = '最低温度' + resp.data.newslist[0].lowest
            this.tianqi[3] = '天气' + resp.data.newslist[0].weather
            this.tianqi[4] = '小贴士' + resp.data.newslist[0].tips
            switch (resp.data.newslist[0].weather) {
              case "小雨":
                this.weatherclass='el-icon-light-rain'
                break
              case "阴":
              this.weatherclass='el-icon-cloudy'
                break
                case "晴":
                this.weatherclass='el-icon-sunny'
                break
                case "大雨":
                this.weatherclass=' el-icon-heavy-rain'
                break
                case "小雨转阴":
                this.weatherclass="el-icon-cloudy"
                break
                case "雷阵雨转阴":
                this.weatherclass="el-icon-cloudy"
                break
                case "多云转中雨":
                this.weatherclass="el-icon-heavy-rain"
                break
            }
            console.log(this.tianqi)
          }).catch(err => {
            console.log(err);
          })
      },
    }
  }
</script>

<style>
  .text {
    font-size: 14px;
  }

  .item {
    padding: 18px 0;
  }

  .box-card {
    width: 480px;
  }
</style>