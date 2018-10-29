<template>
  <div class="header-wrap">
    <i class="el-icon-arrow-left left-page-icon"></i>
    <span class="desc">快速註冊</span>
    <span class="register" @click="loginAction">快速登錄</span>
  </div>
</template>

<script>
export default {
  created () {
  },
  props: {
    loginAction: {
      type: Function,
      default: () => {}
    }
  }
}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
@import 'common/style/mixin.scss';

.header-wrap{
  text-align: center;
  position: relative;
  height: px2rem(30);
  width: px2rem(375);
  line-height: 30px;
  font-size: 0px;
  .left-page-icon{
    position: absolute;
    left: 5px;
    top: px2rem(6);
    font-weight: 600;
    font-size: 18px;
  }
  .desc{
    color: #000000;
    font-size: 18px;
    font-weight: 600;
  }
  .register{
    position: absolute;
    right: px2rem(5);
    top: px2rem(6);
    height: px2rem(12);
    line-height: px2rem(12);
    font-size: 12px;
  }
}
</style>
