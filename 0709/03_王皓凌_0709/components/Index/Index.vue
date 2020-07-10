<template>
  <el-container class="container">
    <!--    头部-->
    <el-header class="header">
      <el-row>
        <el-col :span="6">
          <div class="grid-content bg-purple" style="color: aqua;">
            <el-image style="width: 60px; height: 60px" src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3047465499,372369893&fm=26&gp=0.jpg" :fit="fit"></el-image>
            ~~~~~~
          </div>
        </el-col>
        <el-col :span="11">
          <div class="grid-content bg-purple-light">
            <h3 class="middle"></h3>
          </div>
        </el-col>
        <el-col :span="7">
          <div class="grid-content bg-purple">
            <el-button type="success" icon="el-icon-user"></el-button>
            <el-button type="success" icon="el-icon-lock"></el-button>
            <el-button type="success" icon="el-icon-delete"></el-button>
            <el-button type="success" icon="el-icon-arrow-down"></el-button>
            <el-button type="success" icon="el-icon-switch-button" @click="quit()"></el-button>
          </div>
        </el-col>
      </el-row>

    </el-header>
    <el-container>
      <!--      侧边导航-->
      <el-aside class="aside" width="200px">
        <el-menu :router="true" default-active="0" class="el-menu-vertical-demo" @open="handleOpen"
          @close="handleClose">
          <el-submenu index="1">
            <template slot="title">
              <span>用户管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/index/user">用户列表</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
              <el-menu-item index="1-3">选项3</el-menu-item>
              <el-menu-item index="1-4">选项4</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <span>权限管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/index/role">角色列表</el-menu-item>
              <el-menu-item index="/index/right">权限列表</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <span>数据统计</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/index/reports">数据报表</el-menu-item>
              <el-menu-item index="/index/echart1">直方图</el-menu-item>
              <el-menu-item index="/index/echart2">饼图</el-menu-item>
              <el-menu-item index="/index/echart3">地图1</el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <el-submenu index="4">
            <template slot="title">
              <span>航线展示</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/index/echart4">地图2</el-menu-item>
              <el-menu-item index="/index/echart5">3d地图</el-menu-item>
              <el-menu-item index="/index/echart6">2d</el-menu-item>
              <el-menu-item index="/index/parent">parent</el-menu-item>
              <el-menu-item index="/index/child">child</el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <el-submenu index="5">
            <template slot="title">
              <span>练习</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/index/demo1">权限练习1（此页面不能进入）</el-menu-item>
              <el-menu-item index="/index/demo2">练习2</el-menu-item>
              <el-menu-item index="/index/demo3">练习3</el-menu-item>
              <el-menu-item index="/index/demo4">练习4</el-menu-item>
              <el-menu-item index="/index/demo5">练习5</el-menu-item>
              <el-menu-item index="/index/demo6">练习6</el-menu-item>
              <el-menu-item index="/index/demo7">练习7</el-menu-item>
              <el-menu-item index="/index/demo8">练习8</el-menu-item>
            </el-menu-item-group>
          </el-submenu>

        </el-menu>
      </el-aside>
      <!--内容部分-->
      <el-main class="main">
        <!-- <div>
          <h1>以下为刚才用户登录的信息</h1>
          用户名:{{this.$route.params.userId}}
          密码:{{this.$route.params.password}}
        </div> -->
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<style>
  .middle {
    text-align: center;
  }

  .header {
    background-color: rgb(48, 39, 39);
    text-align: center;
    line-height: 60px;
  }

  .aside {
    background-color: white;
  }

  .container {
    color: #333;
    height: 100%;
  }

  .main {
    background-color: #e9eef3;
    height: 100%;
  }
</style>

<script>
  export default {
    name: 'index',
    data() {
      return {
        fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
      }
    },
    mounted() {
      this.$message({
        message: '登录成功',
        type: 'success'
      });
    },
    methods: {
      handleOpen(key, keyPath) {
      },
      handleClose(key, keyPath) {
      },
      quit() {

        this.$router.push('/login')
        this.$message({
          message: '退出成功',
          type: 'success'
        });
      }
    }
  };
</script>