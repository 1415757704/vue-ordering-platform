<template>
  <div class="layout-container">
    <div class="main-frame">
      <router-view></router-view>
    </div>
    <div class="footer" @click="setClickEventListener($event)">
      <div class="icon-item">
        <router-link to="/mainFrame/food"><i class="icon iconfont icon-waimai- footer-icon-wrap"></i></router-link>
      </div>
      <div class="icon-item">
        <router-link to="/mainFrame/zhinanzhen"><i class="icon iconfont icon-zhinanzhen footer-icon-wrap"></i></router-link>
      </div>
      <div class="icon-item">
        <router-link to="/mainFrame/order"><i class="icon iconfont icon-dingdan footer-icon-wrap"></i></router-link>
      </div>
      <div class="icon-item">
        <router-link to="/mainFrame/mine"><i class="icon iconfont icon-wode footer-icon-wrap"></i></router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Request from '../../utils/APIRequest'
const ItagElement = 'I'
const Actived = 'actived'

export default {
  created () {
    Request.post('/register', {})
      .then((data) => {
        console.log(data)
      }).catch((err) => {
        console.log(err)
      })
  },
  methods: {
    setClickEventListener ($event) {
      // remove all footer-icon active class
      this._removeAllActivedClass()
      let targetNode = $event.target
      if (ItagElement === targetNode.tagName) {
        targetNode.classList.add(Actived)
      }
      console.log($event.target)
      // $event.target.getElementsByTagName('i')[0].classList.remove('icon-waimai-')
    },
    _removeAllActivedClass () {
      let footIconList = Array.from(document.getElementsByClassName('footer-icon-wrap'))
      footIconList.forEach((item) => {
        item.classList.remove(Actived)
      })
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
    background-color: rgba(246,246,246,0.95);
    z-index: 1100;
    border-top: 1px solid #b6b6b6;
    .icon-item {
      flex: 1;
      @include center;
      i{
        height: 100%;
        width: 100%;
        font-size: 32px;
        display: inline-block;
        line-height: 40px;
        text-align: center;
      }
    }
  }
}
</style>
