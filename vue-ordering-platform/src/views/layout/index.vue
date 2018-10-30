<template>
  <div class="layout-container">
    <div class="main-frame">
    </div>
    <div class="footer" @click="setClickEventListener($event)">
      <div class="icon-item">
        <i class="icon iconfont icon-waimai-"></i>
      </div>
      <div class="icon-item">
        <i class="icon iconfont icon-zhinanzhen"></i>
      </div>
      <div class="icon-item">
        <i class="icon iconfont icon-dingdan"></i>
      </div>
      <div class="icon-item">
        <i class="icon iconfont icon-wode"></i>
      </div>
    </div>
  </div>
</template>

<script>
const ItagElement = 'I'
export default {
  methods: {
    setClickEventListener ($event) {
      let targetNode = $event.target
      if (ItagElement === targetNode.tagName) {
        // targetNode.classList.add()
      }
      console.log($event.target)
      // $event.target.getElementsByTagName('i')[0].classList.remove('icon-waimai-')
    }
  }
}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
@import 'common/style/mixin.scss';

.layout-container{
  padding-bottom: px2rem(40);
  .main-frame{
    width: 100%;
  }
  .footer{
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    width: 100%;
    height: px2rem(40);
    .icon-item {
      flex: 1;
      @include center;
      i{
        height: 32px;
        width: 32px;
        font-size: 32px;
        display: inline-block;
      }
      i.actived {
        color: #3a8ee6;
      }
    }
  }
}
</style>
