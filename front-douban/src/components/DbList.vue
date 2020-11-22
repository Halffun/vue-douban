<template>
  <div class="app-list">
    <h2 class="app-list-header">
      <span>豆瓣榜单</span>
      <div class="header-right"></div>
    </h2>
    <div class="list">
      <div class="list-left" style="background-color: rgb(50, 50, 59);">
        <div class="list-left-1">
          <div class="list-left-2" style="background-image: url(https://img1.doubanio.com/img/files/file-1543460329.png);"></div>
        </div>
      </div>
      <ul class="list-right" style="background-image: url(https://img9.doubanio.com/view/photo/photo/public/p2309770674.jpg);">
        <div class="list-right-1" style="background-color: rgb(50, 50, 59);display: block;"></div>
        <li>
          <span class="list-num">1.</span>
          <span class="list-name">肖申克的救赎</span>
          <span class="list-score">9.7</span>
        </li>
      </ul>
    </div>
    <div class="list">
      <div class="list-left" style="background-color: rgb(45, 56, 76);">
        <div class="list-left-db">
          <div class="list-left-header">
            <div class="header">WEEK</div>
            豆瓣周榜
          </div>
          <div class="list-left-footer">华语口碑剧集</div>
        </div>
      </div>
      <ul class="list-right" style="background-image: url(https://img1.doubanio.com/view/photo/photo/public/p2621541209.jpg);">
        <div class="list-right-1" style="background-color: rgb(45, 56, 76);display: block;"></div>
        <li>
          <span class="list-num">1.</span>
          <span class="list-name">在一起</span>
          <span class="list-score">8.7</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
.app-list
  padding: 25px 15px;
  background-color: #fff;
  overflow: hidden;
  margin: 0;
  display: block;
  .app-list-header
    font-weight: 500;
    margin: 0 0 20px;
    line-height: 1.1;
    font-size: 21px;
    color: rgba(0,0,0,.9);
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
    .header-right
      font-weight: 500;
      color: rgba(0,0,0,.9);
      margin: 0 0 0 auto;
      font-size: 13px;
      line-height: 1;
      display: block;
      &:after
        content: " ";
        display: inline-block;
        width: 12px;
        height: 12px;
        margin-left: 5px;
        position: relative;
        top: 1px;
        background-size: contain;
        background-repeat: no-repeat;
        background-image: url(../assets/imgs/load.png)
  .list  
    height: 100px;
    position: relative;
    width: 100%;
    border-radius: 4px;
    box-shadow: 0 2px 1px rgba(0,0,0,.08);
    margin-bottom: 12px;
    text-decoration: none;
    display: flex;
    .list-left
      width: 100px;
      border-radius: 4px 0 0 4px;
      flex-shrink: 0;
      height: 100px;
      position: relative;
      .list-left-1
        width: 100%;
        height: 100%;
        position: absolute;
        right: 0;
        bottom: 0;
        .list-left-2
          background-position: 50%;
          background-size: contain;
          width: 100%;
          height: 100%;
          position: absolute;
          right: 0;
          bottom: 0;
          border-radius: 4px 0 0 4px;
    .list-right
      background-position: 50%;
      background-repeat: no-repeat;
      background-size: cover;
      -webkit-box-flex: 1;  
      flex: 1;
      position: relative;
      padding: 20px 20px 20px 16px;  
      flex-direction: column;
      -webkit-box-pack: justify;  
      justify-content: space-between;
      border-radius: 0 4px 4px 0;
      overflow: hidden;
      margin: 0;
      list-style: none;
      .list-right-1
        width: 100%;
        height: 100%;
        position: absolute;
        right: 0;
        bottom: 0;
        border-radius: 0 4px 4px 0;
        opacity: .8;
      li 
        position: relative;
        padding-right: 20px;
        background-repeat: no-repeat;
        background-size: 8px;
        background-position: 100%;
        line-height: 1;
        font-size 12px
        margin: 0;
        padding: 0;
        .list-num
          color: #fff;
          font-size: 12px;
          margin-right: 2px;
          font-family: -apple-system,BlinkMacSystemFont,sans-serif;
        .list-name
          max-width: 80%;
          display: inline-block;
          overflow: hidden;
          text-overflow: ellipsis;
          vertical-align: middle;
          white-space: nowrap;
          font-size: 13px;
          color: #fff;
        .list-score
          margin-left: 6px;
          color: #ffac2d;
          font-size: 11px;
          font-weight: 400;
          opacity: .8;
          display: inline-block;
          vertical-align: middle;            
          transform: translateY(.5px);
          font-family: -apple-system,BlinkMacSystemFont,sans-serif;
.list-left-db
  width: 100%;
  height: 100%;
  position: absolute;
  right: 0;
  bottom: 0;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  .list-left-header
    font-size: 13px;
    text-align: center;
    color: hsla(0,0%,100%,.6);
    margin-bottom: 4px;
    position: relative;
    width: 100%;
    .header
      font-weight: 500;
      opacity: .1;
      font-size: 30px;
      letter-spacing: -1.5px;
      text-align: center;
      color: hsla(0,0%,100%,.9);
      bottom: 10px;
      left: 0;
      margin: auto;
      font-family: -apple-system,BlinkMacSystemFont,sans-serif;
      width: 100%;
      height: 100%;
      position: absolute;
      right: 0;
  .list-left-footer
    font-weight: 500;
    font-size: 17px;
    color: hsla(0,0%,100%,.9);
    padding: 0 10px;
    text-align: center;
    margin-bottom: 2px;
    line-height: 20px;
</style>