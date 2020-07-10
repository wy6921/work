<template>
<div>
  <div class="baba">
      <div class="header">1</div>
      <div class="bobo">2</div>
      <div class="footer">3</div>
  </div>
  <button @click="back">返回</button>

</div>

</template>

<script>
export default {
  name: 'detail',
  methods: {
    back () {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang='less'>
@mainCorlor: #1c2438;
    .baba{
        display:flex;
        // flex-direction:column;
        align-items:center;
        justify-content:space-between;
        // height: 400px;
        .header{
          // flex:1;
          width:200px ;
          height:400px;
          // color:@mainCorlor;
          background-color:@mainCorlor;
          color: white;
        }
        .bobo{
          // width:400px;
          height:  400px;
          flex:1;
          background: whitesmoke;
        }
        .footer{
          width:200px ;
          height:400px;
          background-color:@mainCorlor;
          color: white;
        }
    }
</style>
