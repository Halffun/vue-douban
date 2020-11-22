<template>
  <div class="star-box">
    <div class="score-star">
      <div v-for="(item, index) in rating.stars" :key="index">
        <img v-if="item" src="../assets/imgs/star.png" alt="">
        <img v-else src="../assets/imgs/no-star.png" alt="">
      </div>
    </div>
    <div class="score">
      {{rating.score}}
    </div>
  </div>
</template>

<script>
export default {
  props: ['scope'],
  data() {
    return {
      rating: {
        stars: [0,0,0,0,0],
        score: this.scope
      }
    }
  },
  created() {
    let num = Math.floor(this.scope / 2)
    for (let i = 0; i < num; i++) {
      this.rating.stars[i] = 1
    }
  }
}
</script>

<style lang="stylus" scoped> 
  .star-box
    display flex
    -webkit-box-align: center;
    align-items: center;
    font-size 12px
    line-height: 1;
    .score-star
      display: flex;
      -webkit-box-align: start;
      align-items: flex-start;
      vertical-align: middle;
      img
        display: inline-block;
        margin-right: 1px;
        background-color: transparent;
        background-repeat: no-repeat;
        width 10px
        height: 10px
        background-size: 10px 10px;
    .score
      font-weight: 500;
      font-size: 12px; 
      transform: scale(.916) translateY(1px);
      transform-origin: top left;
      color: rgba(0,0,0,.5);
      padding: 3px 0;
      margin: -3px 0;
      margin-left: 4px;
      height: 12px;
      margin-top 1px
      transform translateY(-1%)
</style>