<template>
  <div class="login-page">
    <header-component></header-component>
    <div class="login-form">
      <el-input v-model="login.name" placeholder="賬號" :class="{empty: isNameEmpty}" class="name"></el-input>
      <el-input v-model="login.password" placeholder="密碼" :class="{empty: isPasswordEmpty}" class="password"></el-input>
      <span class="forget-password-btn" @click="forgetPassword()">忘記密碼？</span>
      <el-button type="primary" class="login-bn" @click="loginAction()">登錄</el-button>
    </div>
  </div>
</template>

<script>
import HeaderComponent from './header'
export default {
  data () {
    return {
      login: {
        name: '',
        password: ''
      }
    }
  },
  methods: {
    forgetPassword () {
      // TODO
      console.log('forgetPassword')
    },
    loginAction () {
      // TODO
      console.log(`${this.login.name}, ${this.login.password}`)
    }
  },
  computed: {
    isNameEmpty () {
      return this.login.name === undefined || this.login.name === ''
    },
    isPasswordEmpty () {
      return this.login.password === undefined || this.login.password === ''
    }
  },
  components: {
    HeaderComponent
  }
}
</script>

<style lang="scss" scoped>
@import 'common/style/mixin.scss';

html, body{
  height: 100%;
}
.login-page{
  position: relative;
  padding-top: px2rem(10);
  height: 100%;
  .login-form{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    text-align: right;
    .name{
      margin-bottom: px2rem(5);
    }
    .empty{
      border: 1px solid red;
    }
    .login-bn{
      width: 100%;
    }
    .forget-password-btn{
      font-size: 14px;
    }
  }
}
</style>
