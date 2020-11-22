<template>
  <div class="header">
    <div class="primary-wrap">
      <div class="primary">
        <div class="logo" @click="index">
          <h1 style="font-size: 0px">豆瓣</h1>
        </div>
        <div class="search-box" :class="{'on-search': search == true}" @click="searcher">
          <input type="search" class="search-input" name="query" placeholder="搜索">
        </div>
        <div class="nav-btns">
          <div class="nav-btn-item to_login" @click="login"></div>
        </div>
      </div>
      <div class="static">
        <div class="icon-wrap">
          <img class="icon" src="https://img3.doubanio.com/f/frodo/144e6fb7d96701944e7dbb1a9bad51bdb1debe29/pics/app/logo.png" alt="">
        </div>
        <div class="info">
          <h2>豆瓣
            <span>App</span>
          </h2>
          <p>记录你的书影音生活</p>
        </div>
        <div class="btn green">打开App</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: false
    }
  },
  methods: {
    searcher() {
      this.search = !this.search
    },
    login() {
      this.$router.push({ path: '/login' })
    },
    index() {
      this.$router.push({ path: '/' })
    }
  }
}
</script>

<style lang='stylus' scoped>
.header
  width: 100%;
  position: relative;
  z-index: 9999;
  background: #fff;
  .primary
    display: flex;
    justify-content: flex-start;
    align-items: center;
    box-sizing: border-box;
    height: 50px;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 100;
    padding: 0 15px;
    background-color: #fff;
    box-shadow: 0 1px 4px rgba(0,0,0,.05);
    .logo
      display: inline-block;
      font-size: 0;
      height: 26px;
      width: 54px;
      flex: 54px 0 0;
      background: url(../assets/imgs/douban.png) 50% no-repeat;
      background-size: contain;
      margin-right: 15px;
      h1 
        opacity: 0;
        margin: .67em 0;
        line-height: 32px;
        word-break: break-all;
        font-weight: normal;
    .search-box
      width: 100px;
      flex: 100px 0 0;
      height: 30px;
      border-radius: 15px;
      border: 1px solid #dfdfdf;
      color: rgba(0,0,0,.25);
      background-color: #f7f7f7;
      font-size: 15px;
      line-height: 21px;
      padding-left: 8px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      box-sizing: border-box;
    .on-search
      width: 230px;
      flex: 230px 0 0; 
    .search-input 
      box-sizing: border-box;
      border: 0;
      padding-left: 20px;
      background: url(../assets/imgs/search.png) no-repeat 0;
      background-size: 17.33333px;
      border-radius: 3px;
      width: 100%;
      height: 31px;
      font-size: 14px;
      overflow: visible;
      font-family: sans-serif;
      line-height: 1.15;
      margin: 0; 
      outline:none;  
      border:none;
    .nav-btns
      flex: 1;
      font-size: 15px;
      line-height: 21px;
      color: #3ba94d;
      text-align: right;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      .nav-btn-item:last-child
        padding-right: 0;
        border-right: 0;
      .nav-btn-item:first-child
        padding-left: 0;
      .to_login
        display: inline-block;
        width: 20px;
        height: 19px;
        background: url(../assets/imgs/login.png) 100% no-repeat;
        background-size: contain;
      .nav-btn-item
        padding: 0 15px;
  .static
    left: 0;
    width: 100%;
    background-color: #f7f7f7;
    align-items: center;
    margin-top: 50px;
    padding: 0 18px;
    height: 60px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    &:after
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      border: 1px solid #dfdfdf;
      border-left: none;
      border-right: none;
      box-sizing: border-box;
      width: 200%;
      height: 200%;
      transform: scale(.5) translateX(-.5px) translateY(-.5px);
      transform-origin: left top;
      pointer-events: none;
    .icon-wrap
      margin-right: 10px;
      font-size: 0;
      white-space: nowrap;
      background-color: transparent;
      color: #42bd56;
      .icon
        width: 39px;
        height: 39px;
        border-style: none;
    .info
      flex: 1;
      font-size: 0;
      white-space: nowrap;
      background-color: transparent;
      color: #42bd56;
      h2 
        font-size: 15px;
        line-height: 21px;
        color: #191919;
        margin: 0;
        font-weight: 500;
      p 
        font-size: 11px;
        line-height: 16px;
        color: #818181;
        margin: 0;
    .btn.green
      background-color: #42bd56;
      color: #fff;
    .btn 
      width: 80px;
      height: 30px;
      border-radius: 15px;
      text-align: center;
      font-size: 13px;
      line-height: 30px;
      white-space: nowrap;
</style>