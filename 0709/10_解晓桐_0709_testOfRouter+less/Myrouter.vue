<template>
   <div id="xxtRouter">

       <!-- <template class="cont">
           <template class="cont-right"></template>
           <template class="cont-middle"></template>
           <template class="cont-left"></template>
           <p>------这是MyRouter的界面------</p>
       </template> -->

        <h1 style="margin:30px;">空气质量信息详情</h1>
    
        <div class="lists">
        <Table stripe :columns="columns1" :data="elseData"></Table>
        </div>
        
       <Button @click="goHome" type="primary" long>返回城市列表</Button>
       
   </div>
</template>

<script>
export default {
  name: 'xxtRouter',
  data () {
    return {
      value:'等待输入……',
      data:'',
      elseData:[],
      columns1: [
                    {
                        title: '空气质量参数',
                        key: 'en'
                    },
                    {
                        title: '名称',
                        key: 'cn'
                    },
                    {
                        title: '数值',
                        key: 'val'
                    }
                ]
    }
  },
  created () {
    
      this.$axios({
      method: 'get',
      url:  '//api.help.bj.cn/apis/aqi2/?id=101060101'
    }).then((response) => {
      this.data=response.data,
      this.elseData= this.data.data,
      console.log(this.elseData)
    }).catch((error) => {
      console.log(error)
    })
  },
  methods: {
    goHome: function () {
      this.$router.push({path: '/citylist'})
    }
  }
}
</script>

<style lang="less" scope>
.ivu-btn-long{
  width:30%;
  margin:0px 0px 30px;
  font-size: 18px;
}
</style>



