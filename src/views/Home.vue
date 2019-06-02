<template>
  <div>
    <el-row class="header_nav">
      <el-col :span="24" class="main_layout nav_bar">
        <svg-icon icon-class="logo" class="logo_icon"/>
        <el-menu :default-active="activeIndex" class="el-menu-demo" router mode="horizontal" @select="handleSelect">
            <el-menu-item index="/homepage">首页</el-menu-item>
            <el-menu-item index="/ResCatalog">资源目录</el-menu-item>
            <el-menu-item index="/APIData">云数据</el-menu-item>
            <el-menu-item index="/API">云接口</el-menu-item>
            <el-menu-item index="/MicroService">云服务</el-menu-item>
            <el-menu-item index="/DepartDemand">部门需求</el-menu-item>
            <el-menu-item index="/ShareIndex">共享指数</el-menu-item>
            <el-menu-item index="/PolicyInfo">政策资讯</el-menu-item>
          </el-menu>
        <div class="search_login">
          <el-input v-model="input" class="search_input" placeholder="请输入..." suffix-icon="el-icon-search"></el-input>
          <el-button type="success" size="mini">登录</el-button>
        </div>

      </el-col>
    </el-row>
    <el-row class="main_area">
      <el-col :span="4" class="main_layout">
      </el-col>
      <el-col :span="16">
        <div>
          <router-view></router-view>
        </div>
      </el-col>
      <el-col :span="4" class="main_layout"></el-col>
    </el-row>

  </div>
</template>

<script>
  export default {
    data () {
      return {
        activeIndex: '1',
        activeIndex2: '1',
        input: ''
      }
    },
    methods: {
      handleSelect(key, keyPath) {
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../styles/home';

</style>
