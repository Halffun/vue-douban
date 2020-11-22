<template>
  <div class="star-login">
    <Header></Header>
    <h1>登录</h1>
    <div class="login-wrapper">
      <div class="avatar" :style="`background-image:url(${avatar})`"></div>
      <div class="input-group">
        <label for="username">账号</label>
        <input type="text" id="username" v-model="username" />
      </div>
      <div class="input-group input-group-panel">
        <label for="userpwd">密码</label>
        <input type="password" id="userpwd" v-model="userpwd" />
      </div>
      <p class="forgot-pwd">忘记密码</p>
      <div class="sign" @click="login">登录</div>
    </div>
    <p class="register" @click="register">新用户？点击这里注册</p>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'

export default {
  data() {
    return {
      avatar: require("../assets/imgs/login.png"),
      username: '',
      userpwd: ''
    }
  },
  components: {
    Header
  },
  methods: {
    register() {
      this.$router.push({ path: '/register' })
    },
    login() {
      if (this.username.trim() == '' || this.username.trim() == null) {
        this.$toast('请输入账号')
        return
      }
      if (this.userpwd.trim() == '' || this.userpwd.trim() == null) {
        this.$toast('请输入密码')
        return
      }
      this.$http({
        method: 'post',
        url: this.$util.baseUrl+'/users/userLogin',
        data: {
          username: this.username.trim(),
          userpwd: this.userpwd.trim()
        }
      }).then((res) => {
        if (res.data.code === '80000') {
          // 拿到后端返回的用户信息（用户名和昵称）存到本地
          sessionStorage.setItem('userInfo', JSON.stringify(res.data.data))
          // 跳转首页
          this.$router.push({ path: "/" });
        } else {
          this.$toast(res.data.msg)
        }
      }).catch((err) => {
        console.log(err);
      })
    }
  }
};
</script>

<style lang='stylus' scoped>
input 
  border 0
  outline none
.star-login 
  width 100vw
  height 100vh
  background-image linear-gradient(125deg,#E4FFCD,#6DD5FA,#2980B9,#E4FFCD) 
  background-size 400%
  animation bganimation 8s infinite
  // background url('../assets/imgs/timg.jpg') no-repeat
  // background-size 100% 100%
  // background-image linear-gradient(45deg, #d41a1a, #d9e60c)
  // filter blur(15px)
  overflow hidden
  box-sizing border-box 
  @keyframes bganimation {
  0%{
    background-position: 0% 50%;
  }
  50%{
    background-position: 100% 50%;
  }
  100%{
    background-position: 0% 50%;
  }
  }
  h1 
    margin-top 1.12rem
    margin-bottom 1rem
    height 0.693333rem
    line-height 0.693333rem
    color rgba(16, 16, 16, 1)
    font-size 0.48rem
    text-align center
    font-family Arial
  .login-wrapper 
    width 7.44rem
    height 10.773333rem
    margin-top 1.706667rem
    border-radius 0.266667rem
    background-color #fff
    opacity .6
    box-shadow 0 0 0.533333rem 0 rgba(170, 170, 170, 1)
    border 1px solid rgba(187, 187, 187, 1)
    background-image linear-gradient(125deg,#E4FFCD,#6DD5FA,#2980B9,#E4FFCD)
    background-size 400%
    animation bganimation 8s infinite
    // filter blur(0.4rem)
    overflow hidden
    margin 0 auto    
    .avatar 
      width 2.4rem
      height 2.4rem
      margin 1.093333rem auto 0.773333rem
      border-radius 50%
      background-position center
      background-repeat no-repeat
      background-size 100% 100%
      opacity .7
    .input-group 
      width 5.546667rem
      height 1.226667rem
      line-height 1.226667rem
      display flex
      margin 0 auto
      opacity 0.8
      border-radius 0.533333rem
      border 1px solid rgba(187, 187, 187, 1)
      padding-left 0.533333rem
      label 
        display inline-flex
        // flex 1
        width 0.96rem
        // opacity 0.8
        color #0000FF
        font-size 0.373333rem
        font-family Arial
      input 
        display inline-block
        width 100%
        border-radius 0.533333rem
        padding-left 10px
        font-size 0.373333rem
    .input-group-panel 
      margin-top 10px
    .forgot-pwd 
      margin 10px auto 0.56rem 1.973333rem
      height 0.613333rem
      line-height 0.453333rem
      // opacity 0.3
      color 	#0000FF
      font-size 0.32rem
      font-family Arial
    .sign 
      margin 0 auto
      width 5.546667rem
      height 1.226667rem
      line-height 1.226667rem
      border-radius 0.533333rem
      background-color #42bd56
      text-align center
      left 169px
      opacity 0.8
      color rgba(255, 255, 255, 1)
      font-size 0.48rem
      font-family Arial
  .register 
    height 0.613333rem
    margin-top 2.16rem
    line-height 0.613333rem
    opacity 0.3
    color #0000FF
    font-size 0.373333rem
    text-align center
    font-family Arial
</style>