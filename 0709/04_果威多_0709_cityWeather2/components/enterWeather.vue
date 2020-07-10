<template>
  <div>
    <div>
      <el-card class="box-card" style="margin:0 auto;">
        <div slot="header" class="clearfix">
          <span class="text" style="margin-left:-20px;">{{ list.area }}</span>
          <span class="text" style="margin-left:40px;">{{ list.date }}</span>

          <el-button
            style="float: right; padding: 3px 0;  font-size: 20px;"
            type="text"
            @click="goBack"
            >返回</el-button
          >
        </div>
        <div style="display:flex;align-items: flex-start;flex-direction:column">
          <div class="text item">
            {{ `天气：${list.weather}` }}
          </div>
          <div class="text item">
            {{ `最低气温：${list.lowest}` }}
          </div>
          <div class="text item">
            {{ `最高气温：${list.highest}` }}
          </div>
          <div class="text item">
            {{ `日出时间：${list.sunrise}` }}
          </div>
          <div class="text item">
            {{ `日落时间：${list.sunset}` }}
          </div>
          <div class="text item">
            {{ `小贴士：${list.tips}` }}
          </div>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log(this.$route.params);
  },
  data() {
    return {};
  },
  methods: {
    goBack() {
      this.$router.push({ name: "searchWeather" });
    },
  },
  computed: {
    list: function() {
      // `this` 指向 vm 实例
      return this.$route.params;
    },
  },
};
</script>

<style>
.text {
  font-size: 24px;
}
.box-card {
  width: 70%;
}
</style>
