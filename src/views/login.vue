<template>
  <div class="login">
    <el-form class="login-form" label-position="top" ref="form" :model="form" label-width="80px">
      <h2>用户登录</h2>
      <el-form-item label="用户名">
        <el-input v-model="form.username" type="text"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input @keyup.enter.native="handleLogin" v-model="form.password" type="password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="handleLogin" class="login-btn" type="primary">登 录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    async handleLogin () {
      const res = await this.$http.post('login', this.form)
      const data = res.data
      if (data.meta.status === 200) {
        this.$message.success('登陆成功')
        sessionStorage.setItem('token', data.data.token)
        this.$router.push({
          name: 'homeindex'
        })
      } else {
        this.$message.error('登录失败')
      }
    }
  }
}
</script>

<style scoped>
  .login {
    background-color: #324152;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .login .login-form {
    background-color: #fff;
    width: 400px;
    padding: 30px;
    border-radius: 5px;
  }
  .login .login-btn {
    width: 100%;
  }
</style>
