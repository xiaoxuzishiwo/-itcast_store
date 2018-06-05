<template>

  <el-card class="box-card">
    <!-- 面包屑 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>用户管理</el-breadcrumb-item>
      <el-breadcrumb-item>用户列表</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 搜索 -->
    <div class="shuru">
      <el-input placeholder="请输入内容" v-model="keyUser" class="input-with-select">
        <el-button slot="append" @click="sousuo" icon="el-icon-search"></el-button>
        </el-input>
       </el-select>
      <el-button type="success">添加用户</el-button>
      </el-button>
    </div>
    <!-- 表格数据 -->
    <el-table
      :data="tableData"
      border
      style="width: 100%">
       <el-table-column
        type="index"
        >
    </el-table-column>
    <el-table-column
      prop="username"
      label="姓名"
      width="120"
      class="yi">
    </el-table-column>
    <el-table-column
      prop="email"
      label="邮箱"
      width="150">
    </el-table-column>
    <el-table-column
      prop="mobile"
      label="电话"
      width="100">
    </el-table-column>
    <el-table-column
      width="100"
      label="创建时间">
      <template slot-scope="scope">
        {{ scope.row.create_time | fmDate('YYYY-MM-DD') }}
      </template>
    </el-table-column>
    <el-table-column
      prop="mg_state"
      label="用户状态"
      width="100">
      <template slot-scope="scope">
        <el-switch
          @change="handleChan(scope.row)"
          v-model="scope.row.mg_state"
          active-color="#13ce66"
          inactive-color="#ff4949">
        </el-switch>
        <!-- {{ scope.row.mg_state }} -->
      </template>
    </el-table-column>
    <!-- 操作删改-->
    <el-table-column width="180" label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          type="primary" icon="el-icon-edit"></el-button>
        <el-button
          size="mini"
          type="success" icon="el-icon-check"></el-button>
        <el-button
          size="mini"
          type="danger" icon="el-icon-delete"></el-button>
      </template>
    </el-table-column>
  </el-table>
  <!-- 分页 -->
  <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="pagenum"
      :page-sizes="[2, 4, 6]"
      :page-size="pagesize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total">
    </el-pagination>
  </el-card>
</template>

<script>
export default {
  data () {
    return {
      tableData: [],
      pagenum: 1,
      pagesize: 2,
      total: 0,
      keyUser:''
    }
  },
  created () {
    this.loadData()
  },
  methods: {
    // 状态开关
    async handleChan (user) {
      console.log(user.mg_state)
      const res = await this.$http.put(`users/${user.id}/state/${user.mg_state}`)
      const data = res.data
      if (data.meta.status === 200) {
      this.$message.success('用户状态修改成功')
      } else {
         this.$message.error('用户状态修改失败')
      }
    },
    // 分页
    handleSizeChange (val) {
      this.pagesize = val
      this.pagenum = 1
      this.loadData()
      // console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (val) {
      this.pagenum = val
      this.loadData()
      // console.log(`当前页: ${val}`)
    },
    // 搜索
    sousuo () {
      this.pagenum = 1
      this.loadData()
    },
    // 请求数据
    async loadData () {
      const token = sessionStorage.getItem('token')
      this.$http.defaults.headers.common['Authorization'] = token
      const res = await this.$http.get(`users?pagenum=${this.pagenum}&pagesize=${this.pagesize}&query=${this.keyUser}`)
      const data = res.data
      console.log(data)
      if (data.meta.status === 200) {
        this.total = data.data.total
        this.tableData = data.data.users
      } else {
        this.$message.error('获取数据失败')
      }
    }
  }
}
</script>

<style>
.el-card {
  width:100%;
  height:100%;
}
.el-input {
  width:250px;
  float: left;
}
.shuru {
  margin-top:30px;
}
.el-button {
  float: left;
}
</style>
