<template>
  <section class="wrapper">
    <h2 class="header">
      <div class="title">
        <span :class="{'_30bgB' : choice === false}" @click="upChoice">影院热映</span>
        <span :class="{'_30bgB' : choice === true}" @click="unUpChoice">豆瓣热门</span>
      </div>
      <div class="_3k7Op">
        <span></span>
      </div>
    </h2>
    <div class="content">
      <div class="movie-list" v-if="!choice">
        <MovieWrapper v-for="(item, index) in section1" :key="index"  :movie="item"></MovieWrapper>
      </div>
      <div class="movie-list" v-else>
        <MovieWrapper v-for="(item, index) in section2" :key="index" :movie="item"></MovieWrapper>
      </div>
    </div>
  </section>
</template>

<script>
import MovieWrapper from '@/components/Movie-wrapper.vue'

export default {
  props: ['section1','section2'],
  data() {
    return {
      choice: false
    }
  },
  components: {
    MovieWrapper
  },
  methods: {
    upChoice() {
      this.choice = false
    },
    unUpChoice() {
      this.choice = true
    }
  }
}
</script>

<style lang="stylus" scoped>
.wrapper
  position: relative;
  overflow: hidden;
  padding: 15px 0;
  background-color: #fff;
  margin: 0;
  display: block;
  .header
    margin-bottom: 20px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
    margin: 0 15px 20px;
    line-height: 1.1;
    color: rgba(0,0,0,.5);
    font-weight: normal;
    .title
      display: flex;
      span 
        padding-left: 10px;
        position: relative;
        padding-bottom: 0;
        outline: none;
        font-weight: 400;
        font-size 21px
        display: block;
        &::before
          height: 20px;
          top: 2px;
          content: "";
          position: absolute;
          left: 0;
          width: 1px;
          background-color: rgba(0,0,0,.25);
          transform: scaleX(.5);
          transform-origin: left top;
      ._30bgB
        font-weight: 500;
        color: rgba(0,0,0,.9);
        position: relative;
    ._3k7Op
      padding-bottom: 0;
      font-weight: 500;
      -webkit-box-flex: 1;
      flex: 1;
      text-align: right;
      position: relative;
      color: rgba(0,0,0,.9);
      margin: 0 0 0 auto;
      font-size: 13px;
      line-height: 1;
      display: block;
      span 
        padding-bottom: 0;
        font-weight: 500;
        display: inline-block;
        vertical-align: middle;
        line-height: 13px;
        &::after
          top: 2px;
          content: " ";
          display: inline-block;
          width: 12px;
          height: 12px;
          margin-left: 5px;
          position: relative;
          top: 1px;
          background-size: contain;
          background-repeat: no-repeat;
          background-image: url(../assets/imgs/load.png);
.content  
  margin-bottom: -10px;
  position: relative; 
  .movie-list
    padding-top: 0;
    border-top: none; 
    font-size: 0;
    position: relative;
    margin: 0;
    padding: 0 15px;
    white-space: nowrap;
    overflow-x: scroll;
    padding-bottom: 10px;
            
</style>