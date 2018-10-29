<template>
  <div class="login-page">
    <header-component></header-component>
    <div class="login-form">
      <el-input v-model="login.name" placeholder="賬號" @blur="_validateEmpty($event, login.name)" class="name"></el-input>
      <el-input v-model="login.password" placeholder="密碼" @blur="_validateEmpty($event, login.password)" class="password"></el-input>
      <span class="forget-password-btn" @click="forgetPassword()">忘記密碼？</span>
      <el-button type="primary" class="login-bn" @click="loginAction()">登錄</el-button>
    </div>
  </div>
</template>

<script>
import HeaderComponent from './header'
import { errorMsg } from 'config/errorMsgConfig'

export default {
  data () {
    return {
      login: {
        name: '',
        password: ''
      },
      validate: {
        success: false,
        msg: ''
      }
    }
  },
  methods: {
    _validateEmpty ($event, data) {
      if (!data) {
        this._changeValidateMessage(false, errorMsg.empty)
        $event.target.classList.add('empty')
        return false
      }
      $event.target.classList.remove('empty')
      return true
    },
    _manualValidate () {
      if (!this.login.name || !this.login.password) {
        this.$message(errorMsg.empty)
        return false
      }
      return true
    },
    forgetPassword () {
      // TODO
      console.log('forgetPassword')
    },
    _changeValidateMessage (success, msg) {
      this.validate.success = success
      this.validate.msg = msg
    },
    loginAction () {
      // 手動校驗
      if (!this._manualValidate()) {
        return
      }

      this.$message('success')
    }
  },
  computed: {
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
