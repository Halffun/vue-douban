<template>
  <div class="home_guide">
    <Header></Header>
    <div class="page">
      <div class="app-content">
        <div class="app-items app-type1">
          <router-link to="/movie">
            <h2 style="color: #2384E8;">找电影</h2>
            <span>影院热映</span>
          </router-link>
          <router-link to="/tv">
            <h2 style="color: #7A6ADB;">热播剧</h2>
            <span>剧集综艺</span>
          </router-link>
          <router-link to="/book">
            <h2 style="color: #9F7860;">畅销书</h2>
            <span>畅销排行</span>
          </router-link>
          <router-link to="/group">
            <h2 style="color: #2AB8CC;">找小组</h2>
            <span>志趣相投</span>
          </router-link>
          <router-link to="/music">
            <h2 style="color: #F48F2E;">找音乐</h2>
            <span>新碟榜</span>
          </router-link>
          <router-link to="/">
            <h2 style="color: #42BD56;">豆品</h2>
            <span>生活美学</span>
          </router-link>
        </div>
      </div>
      <div class="app">
        <DbList></DbList>
      </div>
      <div style="padding: 0 15px;">
        <div class="footer-wraper">
          <div class="footer-btn">尽情期待</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import DbList from '@/components/DbList.vue'

export default {
  data () {
    return {

    }
  },
  created() {
    
  },
  methods: {
    
  },
  components: {
    Header,
    DbList
  }
}
</script>

<style lang="stylus" scoped>
.page
  max-width: 650px
  padding-top: 0px
  background: #fff
  margin: 0 auto
  overflow-x: hidden
  .app-content
    padding: 15px 18px 0
    .app-items
      border: 1px solid rgba(236,236,236,0.5)
      border-radius: 4px
      overflow: hidden
      display: flex
      flex-wrap: wrap
      a
        flex: 1 1 33.3%
        display: block
        border-right: 1px solid rgba(236,236,236,0.5)
        border-bottom: 1px solid rgba(236,236,236,0.5)
        box-sizing: border-box
        width: 33.3%
        padding: 18px 0 16px
        text-align: center
        h2 
          font-weight: 500
          font-size: 19px
          line-height: 26px
          margin-bottom: 2px
        span 
          display: block
          color: #818181
          font-size: 13px
          line-height: 17px
          letter-spacing: 1px
#app 
  max-width: 650px;

.footer-wraper
  padding: 10px 0;
  .footer-btn
    height: 40px;
    line-height: 40px;
    font-size: 15px;
    width: 100%;
    margin: 0 auto;
    text-align: center;
    background-color: #42BD56;
    color: #fff;
    display: block;
    border-radius: 40px;
</style>