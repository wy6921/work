<template>
  <el-calendar v-model="value" style="width: 80%;height: 80%;">
  </el-calendar>
</template>

<script>
  export default {
    name:'Pra',
      data () {
          return {
            value: new Date(),
          }
      },
      watch:{
        
      },
      computed: {
      },
      methods: {
      }
  }
</script>
<style scoped>
  
</style>
