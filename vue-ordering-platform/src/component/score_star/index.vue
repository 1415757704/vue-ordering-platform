<template>
  <div class="score-container" id="score-container" ref="container">
    <i v-show="fullStarNumArr.length > 0" v-for="index in fullStarNumArr" class="star-icon full-icon iconfont icon-star" :key="index"></i>
    <i v-show="fullStarNumArr.length > 0" v-for="index in emptyStarNumArr" class="star-icon iconfont icon-31" :key="index"></i>
  </div>
</template>

<script>
export default {
  data () {
    return {
      fullStarNumArr: [],
      emptyStarNumArr: []
    }
  },
  mounted () {
    let fullStarNum = Math.round((this.getScore * this.starNum) / this.score)
    this.fullStarNumArr = new Array(fullStarNum)
    this.emptyStarNumArr = new Array(parseInt(this.starNum) - fullStarNum)
  },
  methods: {
  },
  props: {
    starNum: {
      type: String,
      default: '5'
    },
    score: {
      type: Number,
      default: 10
    },
    getScore: {
      type: Number,
      default: 5
    }
  }
}
</script>

<style lang="scss" rel="stylesheet/scss">
.score-container{
  display: inline-block;
  font-size: 0px;
  height: 11px;
  .star-icon{
    display: inline-block;
    font-size: 11px;
    line-height: 11px;
    width: 11px;
    height: 11px;
  }
  .full-icon{
    color: #f4ea2a;
  }
}
</style>
