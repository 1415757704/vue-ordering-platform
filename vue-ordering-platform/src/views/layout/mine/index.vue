<template>
  <div class="mine-container">
    <div class="login-container">
      <div class="avartor">
        <img src=""/>
        <span class="login-btn">登录</span>
      </div>
    </div>
    <div class="operator-list-container">
      <div class="address-manager item">
        <span class="icon iconfont icon-dingwei1"></span>
        <a class="address-manager-link">地址管理</a>
      </div>
      <div class="voucher item">
        <span class="icon iconfont icon-wodedaijinquan"></span>
        <a class="voucher-link">商家代金券</a>
      </div>
    </div>
    <div class="operator-list-container">
      <div class="opinion item">
        <span class="icon iconfont icon-youjian"></span>
        <a class="opinion-link">意见反馈</a>
      </div>
      <div class="problem item">
        <span class="icon iconfont icon-wenti"></span>
        <a class="problem-link">常见问题</a>
      </div>
    </div>
    <div class="operator-list-container">
      <a class="phone-link">
        <span class="phone">客服电话：400</span>
      </a>
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

  .login-container{
    background: url("//xs01.meituan.net/waimai_i/img/user-banner.8c03fc75.png") no-repeat;
    background-size: 100% 100%;
    height: 160px;
    .avartor{
      width: 72px;
      height: 72px;
      border: 3px solid rgba(255,255,255,0.4);
      border-radius: 50%;
      position: absolute;
      top: 28px;
      left: 50%;
      margin-left: -36px;
      .login-btn{
        font-size: 18px;
        position: absolute;
        bottom: -32px;
        left: 18px;
      }
    }
  }
  .operator-list-container{
    margin-bottom: px2rem(10);
    background: #ffffff;
    .item{
      margin-left: px2rem(15);
      position: relative;
      .icon{
        position: absolute;
        top: 13px;
        left: 13px;
        width: 32px;
        height: 32px;
        font-size: 18px;
      }
      a{
        height: px2rem(45);
        font-size: 14px;
        display: block;
        line-height: px2rem(45);
        background: #fff no-repeat left center;
        -webkit-background-size: 16px;
        background-size: 16px;
        border-bottom: 1px solid #E4E4E4;
        color: #333;
        margin-left: 15px;
        padding-right: 9px;
        padding-left: 27px;
      }
    }
    .phone-link{
      display: inline-block;
      width: 100%;
      font-size: 0;
      .phone{
        display: inline-block;
        height: px2rem(45);
        line-height: px2rem(45);
        width: 100%;
        text-align: center;
        color: #FFB000;
        font-size: 15px;
      }
    }

  }
}
</style>
