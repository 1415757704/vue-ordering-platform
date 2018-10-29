<template>
  <div class="register-page">
    <header-component :loginAction="loginAction"></header-component>
    <div class="register-form">
      <el-input v-model="register.name" ref="name" placeholder="賬號" @blur="_validateEmpty($event, register.name)" class="name inputModel"></el-input>
      <el-input v-model="register.password" ref="password" placeholder="密碼" class="password inputModel" @blur="_validateEmpty($event, register.password)"></el-input>
      <el-input v-model="register.passwordOneMoreTime" ref="passwordAgain" placeholder="再次輸入密碼" class="password inputModel" @blur="_validateEmpty($event, register.passwordOneMoreTime)"></el-input>
      <el-button type="primary" class="register-bn" @click="_registerAction()">登錄</el-button>
    </div>
  </div>
</template>

<script>
import HeaderComponent from './header'

const errorMsg = {
  empty: '輸入不能為空',
  deference: '兩次密碼不一致'
}

export default {
  data () {
    return {
      register: {
        name: '',
        password: '',
        passwordOneMoreTime: ''
      },
      validate: {
        success: false,
        msg: ''
      }
    }
  },
  methods: {
    loginAction () {
      console.log('1241')
      this.$message('login action')
    },
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
      if (!this.register.name || !this.register.password || !this.register.passwordOneMoreTime) {
        this.$message(errorMsg.empty)
        return false
      }
      if (this.register.password !== this.register.passwordOneMoreTime) {
        this.$message(errorMsg.deference)
        return false
      }
      return true
    },
    _registerAction () {
      // 手動校驗
      if (!this._manualValidate()) {
        return
      }

      this.$message('success')
    },
    _changeValidateMessage (success, msg) {
      this.validate.success = success
      this.validate.msg = msg
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
.register-page{
  padding-top: px2rem(10);
  .register-form{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    text-align: right;
    .inputModel {
      margin-bottom: px2rem(8);
    }
    .register-bn{
      width: 100%;
    }
  }
}

</style>
