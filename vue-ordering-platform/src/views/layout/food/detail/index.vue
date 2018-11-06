<template>
  <div class="detail-container">
    <router-link to="/mainFrame/food/detail/list">商品</router-link>
    <router-link to="/mainFrame/food/detail/comment">评论</router-link>
    <router-link to="/mainFrame/food/detail/merchant">商家</router-link>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
@import 'common/style/mixin.scss';
  .detail-container{
    position: fixed;
    left: 0px;
    top: 0px;
    width: 100%;
    z-index: 9999;
    background: #8c939d;
  }
</style>
