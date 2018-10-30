<template>
  <div class="mine-container">
    <div class="header">
      <span class="title">我的</span>
    </div>
    <div class="login-container">
      <div class="avartor">
        <img src=""/>
      </div>
      <div class="operatorPanel">

      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
@import 'common/style/mixin.scss';
@import 'common/style/variable.scss';
.mine-container{
  .header{
    font-size: $title-font-size;
    @include center;
    height: $header-height;
    line-height: $header-height;
  }
}
</style>
