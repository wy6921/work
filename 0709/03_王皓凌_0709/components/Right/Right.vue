<template>
  <el-card>
<!--    面包屑-->
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>权限管理</el-breadcrumb-item>
      <el-breadcrumb-item>权限列表</el-breadcrumb-item>
    </el-breadcrumb>
<!--表格-->
    <el-table
      :data="rightdata"
      height="250"
      border
      style="width: 100%">
      <el-table-column
        type="index"
        label="#"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="权限名称"
        width="180">
      </el-table-column>
      <el-table-column
        prop="path"
        label="路径"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="层级">
      </el-table-column>
    </el-table>
  </el-card>
</template>

<script>
  export default {
    name: "Right",
    data() {
      return {
        rightdata: [{
          name: '更新角色信息',
          address: '3',
          path:'/userinfo'
        },]
      }
    }
  }
</script>

<style scoped>

</style>