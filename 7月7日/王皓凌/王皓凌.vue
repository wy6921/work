<template>
<div>
  <div v-if="Math.random()*1000 > 700">
    Now you see me
  </div>
  <div v-else>
    Now you don't
  </div>
  <el-checkbox v-model="checked" @change="quanxuan()">全选</el-checkbox>
  <el-checkbox-group v-model="checkList">
    <el-checkbox label="A"></el-checkbox>
    <el-checkbox label="B"></el-checkbox>
    <el-checkbox label="C"></el-checkbox>
  </el-checkbox-group>
  <p v-model="checkList" v-show="(checkList.length)">{{checkList}}</p>
</div>
</template>

<script>
  export default {
    name: "HomeNews",
    mounted(){
      console.log(Math.random()*1000)
    },
    data(){
      return{
        checkList: [],
        checked:false
      }
    },
    methods:{
      quanxuan(){
        if(this.checked===true)
        {
          this.checkList=[ "A", "B", "C" ]
        }
        else
        {
          this.checkList=[]
        }
      }
    }
  }
</script>

<style scoped>

</style>