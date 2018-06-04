<template>
  <el-container class="container">
    <el-header class="header">
      <!-- 头部 -->
      <el-row :gutter="20">
        <el-col :span="4"><div class="grid-content bg-purple"></div><img src="@/images/logo.png" alt=""></el-col>
        <el-col :span="16"><div class="grid-content bg-purple"></div>后台管理</el-col>
        <el-col :span="4"><div class="hright grid-content bg-purple"></div><a href="#" @click.prevent="handleLogout">退出</a></el-col>
      </el-row>
    </el-header>
    <el-container class="">
      <!-- 侧边栏 -->
      <el-aside width="200px">
        <el-menu
          :router="true"
          :unique-opened="true"
          default-active="1-1"
          class="menu">
          <!-- 第一个 -->
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>权限管理</span>
            </template>
              <el-menu-item-group>
                <el-menu-item index="/users"><i class="el-icon-menu"></i>选项1
              </el-menu-item>
              </el-menu-item-group>
          </el-submenu>
          <!-- 第二个 -->
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>权限管理</span>
            </template>
              <el-menu-item-group>
                <el-menu-item index="/users"><i class="el-icon-menu"></i>选项1
              </el-menu-item>
              </el-menu-item-group>
                <el-menu-item index="1-3"><i class="el-icon-menu"></i>选项3
              </el-menu-item>
          </el-submenu>
          <!-- 第三个 -->
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>商品管理</span>
            </template>
              <el-menu-item-group>
                <el-menu-item index="/users"><i class="el-icon-menu"></i>选项1
              </el-menu-item>
              </el-menu-item-group>
                <el-menu-item index="/users"><i class="el-icon-menu"></i>选项3
              </el-menu-item>
          </el-submenu>
          <!-- 第四个 -->
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>订单管理</span>
            </template>
              <el-menu-item-group>
                <el-menu-item index="/users"><i class="el-icon-menu"></i>选项1
              </el-menu-item>
              </el-menu-item-group>
                <el-menu-item index="/users"><i class="el-icon-menu"></i>选项3
              </el-menu-item>
          </el-submenu>
          <!-- 第五个 -->
          <el-submenu index="5">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>数据统计</span>
            </template>
              <el-menu-item-group>
                <el-menu-item index="/users"><i class="el-icon-menu"></i>选项1
              </el-menu-item>
              </el-menu-item-group>
                <el-menu-item index="/users"><i class="el-icon-menu"></i>选项3
              </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
  <!-- 内容区 -->
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  methods: {
    handleLogout () {
      sessionStorage.removeItem('token')
      this.$router.push({
        name: 'login'
      })
      this.$message.success('退出成功')
    }
  }
}
</script>

<style>
.container {
  height:100%;
  width:100%;
}
.el-header{
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
    padding:0;
  }
.grid-content{
  float: right;
}
.el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
.el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
  }
.hright {
  float: right;
  text-decoration: none;
}
/*内容区*/
.el-main {
  width:100%;
  height:100%;
}
.content {
  width:100%;
  height:100%;
}
</style>
