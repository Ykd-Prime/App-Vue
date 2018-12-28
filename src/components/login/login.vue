<script>
import {mapState,mapMutations} from 'vuex'
export default {
  data () {
    return {
      pageToggle:0,//0:载入页, 1:登陆页, 2：注册页， 3：忘记密码
      username:'admin',
      password:'',
      anima:false,
      eyepw:false,
      reusername:'',
      repassword:'',
      res:'注册',
      showLoginTip:false,
      tips:false,
      logoImg:'./static/logo.png'
    }
  },

  computed: {
    ...mapState([
      'user'
    ])
  },

  methods: {
    ...mapMutations([
      'login'
    ]),

    reLogin() {
      if (this.username == "admin") {
        this.$router.push('home')
      }
      if (!this.username) {
        this.tips = '请输入用户名';
        this.showLoginTip = true;
        return;
      }
      if (!this.password) {
        this.tips = '请输入密码';
        this.showLoginTip = true;
        return;
      };
      let _this = this;
      this.$axios({
        method:'post',
        url:'http://localhost:80/pjtinphp/login.php',
        data:{
          username:this.username,
          password:this.password
        }
      }).then((i)=> {
        var el = i.data;
        console.log(i);
        if (el == 1) {
          console.log("!!");
          _this.tips = true;
          setTimeout(()=>{
            _this.$router.push('/home')
          },1000)
        }else {
          console.log("??");
          _this.animas()
        }
      })
    },

    animas() {
      let _this = this
      this.anima = true;
      setTimeout(function() {
        _this.amima = false
      },1000)
    },


    register() {
      let _this = this
      if (!this.reusername) {
        this.tips = '请输入用户名';
        this.showLoginTip = true;
        return;
      } else if (!this.repassword) {
        this.tips = '请输入密码';
        this.showLoginTip = true;
        return;
      };
      this.$axios({
        method:'post',
        url:'http://localhost:80/pjtinphp/register.php',
        data:{
          username:this.reusername,
          password:this.repassword
        }
      }).then((i)=> {
        var el = i.data;
        console.log(i);
        if (el == 1) {
          console.log("!!");
          _this.res = "注册成功"
          setTimeout(()=>{
            _this.pageToggle = 1
          },1200)
        }else {
          console.log("??");

        }
      })
    },

    skip() {
      this.$router.push('/home')
    },

    page(i) {
      this.pageToggle = i
    },

    back() {
      this.pageToggle = 1
    },
    eye() {
      if (this.eyepw == false) {
        this.eyepw = true;
        this.$refs.eye.type = "text"
        this.$refs.eye1.type = "text"
      }else {
        this.eyepw = false;
        this.$refs.eye.type = "password"
        this.$refs.eye1.type = "password"
      }
    }
  },

  mounted() {
    let _this = this;
    setTimeout(()=>{
      _this.pageToggle = 1
    },800)
  },
  beforeCreate() {
    this.$store.state.mainNavShow = false
  },

  destroyed() {
    this.$store.state.mainNavShow = true
    this.tips = false
  }

}


</script>

<template lang="html">
  <div id="login" class="clearfix">
    <div class="logo" :class="{zy:anima}" v-show="pageToggle == 1 || pageToggle == 0 || pageToggle == 2">
      <img :src="logoImg" alt="">
      <span @click="skip">skip</span>
    </div>

    <transition name="fadebiu">
      <div class="tips" v-show="tips">
        <span>登陆成功</span>
      </div>
    </transition>

    <div class="head"
      v-show="pageToggle == 3|| pageToggle == 2"
      @click="back()"
      >
      <i class="fa fa-chevron-left"></i>
    </div>
<!-- 载入中 -->
    <transition name="fade">
      <div class="loding" v-show="pageToggle == 0">
        <div class="lodingicon">
          <span><b>启动中...</b></span>
        </div>
      </div>
    </transition>
<!-- 登陆 -->
    <transition>
      <div class="login" v-show="pageToggle == 1">
        <div class="userinput">
          <div class="username">
            <i class="fa fa-wheelchair-alt"></i>
            <input type="text" name="" value="" v-model="username" placeholder="name">
          </div>
          <div class="userpassword">
            <i class="fa fa-wheelchair-alt"></i>
            <input type="password" name="" value="" ref="eye" v-model="password" placeholder="password">
            <i :class="{'fa-eye-slash':eyepw, 'fa-eye':!eyepw}" class="posa fa" @click="eye()"></i>
          </div>
          <div class="col-xs-6" @click="page(2)"><span style="color:#ff4b4b">立刻注册</span></div>
          <div class="col-xs-6" @click="page(3)">忘记密码?</div>
          <div class="col-xs-12" @click="reLogin()" v-show="this.username && this.password">登陆</div>
        </div>
      </div>
    </transition>

<!-- 注册 -->
    <transition>
      <div class="register" v-show="pageToggle == 2">
        <div class="userinput">
          <div class="username">
            <i class="fa fa-wheelchair-alt"></i>
            <input type="text" name="" value="" v-model="reusername" placeholder="name">
          </div>
          <div class="userpassword">
            <i class="fa fa-wheelchair-alt"></i>
            <input type="password" name="" value="" ref="eye1" v-model="repassword" placeholder="password">
            <i :class="{'fa-eye-slash':eyepw, 'fa-eye':!eyepw}" class="posa fa" @click="eye()"></i>
          </div>

          <div class="col-xs-12" @click="register()">{{res}}</div>
        </div>
      </div>
    </transition>
<!-- 忘记密码 -->
    <transition>
      <div class="repassword" v-show="pageToggle == 3">
        暂定
      </div>
    </transition>
  </div>
</template>

<style lang="scss" scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

.fadebiu-enter-active, .fadebiu-leave-active {
  transition: all .5s;
}
.fadebiu-enter, .fadebiu-leave-to {
  transform: translateY(16rem);
  opacity: 0;
}
.head {
  z-index: 999;
  background: none;
  text-align: left;
  i {
    margin-left: 1rem;
  }
}

#login {
  position: relative;
  height: 100%;
  padding-bottom: -5rem;
  .loding,
  .login,
  .register,
  .repassword {
    position: absolute;
    width: 100%;
    height: 100%;
    background: #fff;
  }
// 通用input
  input {
    border: none;
    color:#41b883;
    padding-left: 1rem;
    width: 88%;
  }
  input:focus {
    outline: medium;
  }
  .username,
  .userpassword {
    text-align: left;
    padding: 1rem 1.5rem;
    border-bottom: 1px solid #E6E6E6;
  }
// 忘记密码
  .repassword {

  }
// 一logo
  .logo {
    position: absolute;
    top: 10rem;
    width: 100%;
    text-align: center;
    z-index: 999;
    img {
      margin: 0 auto;
      max-width: 50%;
    }
  }
// 载入中
  .loding {
    z-index: 9;
    .lodingicon {
      position: absolute;
      bottom: 5rem;
      left: 0;
      right: 0;
      margin:auto;
      text-align: center;
      span {
        color: #4A4A4A;
        border: .1rem solid #979797;
        padding: .5rem 2rem;
        border-radius: 5rem;
        font-size: 1.5rem;
        b {
        }
      }
    }
  }

.tips {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 5%;
  margin: auto;
  z-index: 9999;
  text-align: center;
}

// 登陆页
  .login {
    z-index: 8;
    bottom: 0;
    .userinput {
      position: absolute;
      left: 0;
      right: 0;
      top: 50%;
      width: 90%;
      margin: 0 auto;
      .col-xs-6 {
        padding: 1.5rem 0;
        text-align: center;
      }

      .col-xs-12 {
        text-align: center;
        background: #EB3A40;
        color: #fff;
        padding: 1.5rem 0;
        border-radius: 5rem
      }

    }
  }
// 注册！！！
  .register {
    z-index: 7;
    background: #fff;
    .userinput {
      position: absolute;
      left: 0;
      right: 0;
      top: 50%;
      width: 90%;
      margin: 0 auto;

      .col-xs-12 {
        text-align: center;
        background: #EB3A40;
        color: #fff;
        padding: 1.5rem 0;
        margin-top: 2rem;
        border-radius: 5rem
      }
    }
  }
}
.zy {
  animation: move .2s;
  animation-iteration-count:2
  // alternate
}
@keyframes move {
  0% {transform:rotate(15deg);}
  25% {transform: rotate(0deg);}
  50% {transform: rotate(-15deg);}
  75% {transform: rotate(0deg);}
  100% {transform: rotate(15deg);}
}

</style>
