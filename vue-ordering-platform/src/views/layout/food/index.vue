<template>
  <div class="food-container">
    <div class="header-container">
      <div class="position">
        <i class="icon iconfont icon-dingwei1"></i>
        <span class="city">深圳市-广东省</span>
        <span>></span>
      </div>
      <img src="//xs01.meituan.net/waimai_i/img/bannertemp.e8a6fa63.jpg" class="header-image"/>
      <div class="search">
        <i class="icon iconfont icon-sousuo"></i>
        <span class="food-name">唧唧</span>
      </div>
    </div>
    <div class="assort-server">
      <div class="one-row">
        <div class="food item">
          <img src="http://p1.meituan.net/jungle/8b5e1702d4145ccf058ba5fb31008c5310912.png" class="food-area-image"/>
          <span class="desc">美食</span>
        </div>
        <div class="food item">
          <img src="http://p1.meituan.net/jungle/8b5e1702d4145ccf058ba5fb31008c5310912.png" class="food-area-image"/>
          <span class="desc">美食</span>
        </div>
        <div class="food item">
          <img src="http://p1.meituan.net/jungle/8b5e1702d4145ccf058ba5fb31008c5310912.png" class="food-area-image"/>
          <span class="desc">美食</span>
        </div>
        <div class="food item">
          <img src="http://p1.meituan.net/jungle/8b5e1702d4145ccf058ba5fb31008c5310912.png" class="food-area-image"/>
          <span class="desc">美食</span>
        </div>
      </div>
      <div class="one-row">
        <div class="food item">
          <img src="http://p1.meituan.net/jungle/8b5e1702d4145ccf058ba5fb31008c5310912.png" class="food-area-image"/>
          <span class="desc">美食</span>
        </div>
        <div class="food item">
          <img src="http://p1.meituan.net/jungle/8b5e1702d4145ccf058ba5fb31008c5310912.png" class="food-area-image"/>
          <span class="desc">美食</span>
        </div>
        <div class="food item">
          <img src="http://p1.meituan.net/jungle/8b5e1702d4145ccf058ba5fb31008c5310912.png" class="food-area-image"/>
          <span class="desc">美食</span>
        </div>
        <div class="food item">
          <img src="http://p1.meituan.net/jungle/8b5e1702d4145ccf058ba5fb31008c5310912.png" class="food-area-image"/>
          <span class="desc">美食</span>
        </div>
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
.food-container{
  .header-container{
    position: relative;
    font-size: 0;
    .header-image{
      width: 100%;
    }
    .position{
      position: absolute;
      top: px2rem(10);
      left: px2rem(15);
      background: rgba(0,0,0,0.3);
      border-radius: 10px;
      .icon{
        color: #ffffff;
        width: 18px;
        height: 28px;
        margin-left: 3px;
        margin-right: 8px;
      }
      span{
        color: #ffffff;
        font-size: 14px;
        height: 28px;
        line-height: 28px;
        margin-right: 5px;
      }
    }
    .search{
      position: absolute;
      top: px2rem(10);
      left: px2rem(170);
      width: px2rem(167);
      background: #ffffff;
      border-radius: 20px;
      .icon{
        width: 18px;
        height: 28px;
        margin-left: 6px;
        margin-right: 8px;
      }
      span{
        font-size: 14px;
        height: 28px;
        line-height: 28px;
        margin-right: 5px;
      }
    }
  }
  .assort-server{
    padding: px2rem(14);
    .one-row{
      display: flex;
      margin-bottom: px2rem(10);
      .item{
        flex: 1;
        text-align: center;
        width: px2rem(47);
        img{
          width: px2rem(47);
          height: px2rem(47);
          vertical-align: bottom;
        }
        .desc{
          margin-top: 5px;
          display: block;
          line-height: 1em;
          text-align: center;
          font-size: 14px;
          color: #2f2f2f;
        }
      }
    }
  }
}
</style>
