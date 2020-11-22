<template>
  <div class="movie-box">
    <van-image
      class="cover-image"
      radius="5px"
      :src="movie.img"
    >
      <template v-slot:error>
        <img src="https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2452075545.jpg" alt=""/>
      </template>
    </van-image>
    <div class="title">{{movie.nm}}</div>
    <Star :scope="movie.sc"></Star>
  </div>
</template>

<script>
import Star from './Star.vue'

export default {
  components: {
    Star,
  },
  props: ['movie']
}
</script>

<style lang="stylus" scoped>
.movie-box
  position: relative;
  vertical-align: text-top;
  outline: none;
  display: inline-block;
  width: calc((100% - 45px) / 3);
  margin-right: 10px;
  
.cover-image
  width: 100px;
  height: 145px;

.title
  font-size: 13px;
  font-weight: 700;
  line-height: 23px;
  color: rgba(0,0,0,.9);
  margin-top: 4px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;


</style>