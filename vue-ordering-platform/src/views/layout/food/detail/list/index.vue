<template>
  <div class="list">
    <div class="content">
      <div ref="foodCategory" class="food-category">
        <ul class="list">
          <li class="item">
            <span>item1</span>
          </li>
          <li class="item">
            <span>item2</span>
          </li>
          <li class="item">
            <span>item3</span>
          </li>
          <li class="item">
            <span>item4</span>
          </li>
          <li class="item">
            <span>item5</span>
          </li>
          <li class="item">
            <span>item6</span>
          </li>
          <li class="item">
            <span>item7</span>
          </li>
          <li class="item">
            <span>item8</span>
          </li>
          <li class="item">
            <span>item9</span>
          </li>
          <li class="item">
            <span>item10</span>
          </li>
          <li class="item">
            <span>item11</span>
          </li>
          <li class="item">
            <span>item12</span>
          </li>
          <li class="item">
            <span>item13</span>
          </li>
          <li class="item">
            <span>item14</span>
          </li>
          <li class="item">
            <span>item15</span>
          </li>
          <li class="item">
            <span>item16</span>
          <li class="item">
            <span>item9</span>
          </li>
          <li class="item">
            <span>item10</span>
          </li>
          <li class="item">
            <span>item11</span>
          </li>
          <li class="item">
            <span>item12</span>
          </li>
          <li class="item">
            <span>item13</span>
          </li>
          <li class="item">
            <span>item14</span>
          </li>
          <li class="item">
            <span>item15</span>
          </li>
          <li class="item">
            <span>item16</span>
          </li>
        </ul>
      </div>
      <div ref="foodList" class="food-list">
        <ul>
          <li class="item">
            <span>item1</span>
          </li>
          <li class="item">
            <span>item2</span>
          </li>
          <li class="item">
            <span>item3</span>
          </li>
          <li class="item">
            <span>item4</span>
          </li>
          <li class="item">
            <span>item5</span>
          </li>
          <li class="item">
            <span>item6</span>
          </li>
          <li class="item">
            <span>item7</span>
          </li>
          <li class="item">
            <span>item8</span>
          </li>
          <li class="item">
            <span>item9</span>
          </li>
          <li class="item">
            <span>item10</span>
          </li>
          <li class="item">
            <span>item11</span>
          </li>
          <li class="item">
            <span>item12</span>
          </li>
          <li class="item">
            <span>item13</span>
          </li>
          <li class="item">
            <span>item14</span>
          </li>
          <li class="item">
            <span>item15</span>
          </li>
          <li class="item">
            <span>item16</span>
          <li class="item">
            <span>item9</span>
          </li>
          <li class="item">
            <span>item10</span>
          </li>
          <li class="item">
            <span>item11</span>
          </li>
          <li class="item">
            <span>item12</span>
          </li>
          <li class="item">
            <span>item13</span>
          </li>
          <li class="item">
            <span>item14</span>
          </li>
          <li class="item">
            <span>item15</span>
          </li>
          <li class="item">
            <span>item16</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  data () {
    return {
      foodCategory: null,
      foodList: null,
      scrollY: 0
    }
  },
  methods: {
    _initScroll () {
      this.foodCategory = new BScroll(this.$refs.foodCategory, {
        click: true
      })

      this.foodList = new BScroll(this.$refs.foodList, {
        probeType: 3
      })

      this.foodList.on('scroll', (pos) => {
        this.scrollY = Math.abs(Math.round(pos.y))
        console.log('scrollY', scrollY)
      })
    }
  },
  mounted () {
    this.$nextTick(() => {
      this._initScroll()
    })
  }
}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
@import 'common/style/mixin.scss';
.list{
  .content{
    display: flex;
    height: px2rem(667);
    .food-category{
      flex: 0 0 45px;
      background: yellow;
    }
    .food-list{
      flex: 1;
      background: #8c939d;
    }
  }
}
</style>
