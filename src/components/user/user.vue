<script>
import {mapState} from 'vuex'
import iscontent from '../home/hcontent.vue'
import mydata from './mydata.vue'
export default {
  data () {
    return {
      img:'./static/da.jpg',
      show:true,
      warp:true,
      thisTab:0,
      main:4,//4:主页  0：个人资料  1：我的动态 ~
      msgmain:0,
      mainHead:[
        {msg:'动态',},
        {msg:'战绩',},
        {msg:'赛事',},
      ],
      list:[
        {icon:'fa fa-modx',msg:'个人主页'},
        {icon:'fa fa-dribbble',msg:'我的动态'},
        {icon:'fa fa-paste',msg:'我的数据'},
        {icon:'fa fa-calendar',msg:'比赛记录'},
      ],
      fo:[
        {nub:'111',msg:'关注'},
        {nub:'2',msg:'粉丝'},
      ],
      style:{
        headTranF:8,
        foxSizePt:9,
      }
    }
  },
  components: {
    iscontent,
    mydata,
  },
  computed:{
    ...mapState([
      'user',
      'userwarp'
    ])
  },
  methods: {
    setMain(i) {
      this.main = i;
      this.msgmain = i;
    },
    inEdit() {
        this.$router.push({name:"userEdit"})
        this.$store.state.userwarp = 1
        this.show = false
        this.$store.state.mainNavShow = false
    },
    pushBg(event) {
      let _this = this;
      var file = event.target.files[0];
      var reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function () {
          var data64 = reader.result;
          _this.user.background = data64;
      }
    },
  },
  mounted() {
    this.$router.push({name:'user'})
  }
}
</script>

<template lang="html">
  <div class="mainuser clearfix">
    <div class="attabg" :style="{backgroundImage:'url('+user.background+')'}">
      <label for="getBg">
        <div class="setBg" v-if="main == 0">更换背景</div>
      </label>
      <input type="file" name="" value="" id="getBg" @change="pushBg($event)">
    </div>
    <div class="head" v-show="show==false">
      <span class="h4">{{list[msgmain].msg}}</span>
      <span class="fa fa-chevron-left posaLeft posa" @click="show=true,main=4"></span>
    </div>
    <div class="warp clearfix" v-show="userwarp == 0">
      <div class="fox":class="{pt0:!show}"></div>
      <div class="maincontent">
        <div class="userh">
          <div class="posr">
            <i class="fa fa-cog" v-show="main != 4"></i>
            <div class="fix"  @click="inEdit" :style="{backgroundImage:'url('+user.head+')'}"></div>
            <div v-show="show">
              <p>{{$store.state.user.name}}</p>
              <p class="grey">Id: {{$store.state.userid}}</p>
            </div>
          </div>
        </div>
        <div class="page1">
            <div class="foxin clearfix">
              <div class="col-xs-6" v-for="(all,index) in fo">
                <b>{{all.nub}}</b>
                <p>{{all.msg}}</p>
              </div>
            </div>
          <div class="content">
            <ul class="clearfix"  v-show="main == 4">
              <li v-for="(all,index) in list"  @click="setMain(index),show=false">
                <i class="" :class="all.icon"></i>
                <span>{{all.msg}}</span>
                <i class="fa fa-chevron-right"></i>
              </li>
            </ul>

            <div class="userMain" v-show="main == 0">
              <h3>{{this.user.name}}</h3>
              <div class="summary">
                <p>{{this.user.summary}}</p>
              </div>
              <!-- 个人主页 -->
              <div class="userMainHead clearfix">
                <div class="col-xs-4"
                    v-for="(all,index) in mainHead"
                    @click="thisTab = index"
                >
                  <span>{{all.msg}}</span>
                  <div class="h0xItem"
                    v-if="index == 0"
                    :class="{'left133':thisTab == 1,'left233':thisTab == 2}"
                  >
                    <span></span>
                  </div>
                </div>
              </div>

              <div class="hot" v-show="thisTab == 0">
                <iscontent class="bt5"></iscontent>
              </div>

              <div class="hot" v-show="thisTab == 1">
                战绩
                <p> 1</p>
                <p> 1</p>
                <p> 1</p>
                <p> 1</p>
                <p> 1</p>
                <p> 1</p>
              </div>

              <div class="hot" v-show="thisTab == 2">
                赛事
                <p> 1</p>
                <p> 1</p>
                <p> 1</p>
                <p> 1</p>
                <p> 1</p>
                <p> 1</p>
              </div>
            </div>
            <div class="myhot" v-show="main == 1">
              <iscontent></iscontent>
              <iscontent></iscontent>
            </div>
            <div class="mydata" v-show="main == 2">
              <mydata></mydata>
            </div>
            <div class="rec" v-show="main == 3">
              <p>rec</p>
              <p>rec</p>
              <p>rec</p>
              <p>rec</p>
              <p>rec</p>
              <p>rec</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="edit" v-show="userwarp == 1">
      <router-view/>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#getBg {
  display: none;
}

.setBg {
  position: fixed;
  right: 2rem;
  top: 5rem;
  width: 8rem;
  line-height: 3rem;
  color: #fff;
  font-size: 1.2rem;
  text-align: center;
  border-radius: 5rem;
  background: rgba(37, 37, 37, 0.63);
}

.edit {
  position: absolute;
  top: 0;
  left: 0;
  background: #fff;
  width: 100%;
  height: 100%;
}

.userMainHead {
  margin: 2rem 0;
  text-align: center;
  color: #858585;
}
.h0xItem {
  position: absolute;
  width: 33.33333333%;
  height: .5rem;
  left: 33.33333333%;
  top: 2rem;
  // background: #ff4b4b;
  span {
    display: block;
    width: 3rem;
    height: .5rem;
    background: #ff4b4b;
    margin: 0 auto;
    border-radius: .2rem
  }
}
.left133 {
  left:133.33333333%
}

.left233 {
  left:233.33333333%
}

.bt5 {
  border-bottom: .5rem solid #ebebeb;
}

.summary {
  background: #F9F9F9;
  color: #4d4d4d;
  padding: 1rem;
  margin: 1rem 0
}

.attabg {
  position: absolute;
  left: 0;
  right: 0;
  height: 100vh;
  width: 98.7vw;
  margin: 0 auto;
  background-image: url('/static/da.jpg');
  background-size: cover,100%;
  background-attachment: fixed;
  background-position: center center;
}

.head {
  position: fixed;
  background:rgba(0, 0, 0, 0.2);
  color: #fff;
  .fa-chevron-left {
    top: 1.5rem;
    left: 1rem;
    font-size: 2rem
  }
}

.bg {
  position: absolute;
  top: 0;
  z-index: -9;
  width: 100%;
  img {
    min-width: 389px;
    transform: translateY(-12%);
  }
}
.mainuser {
  width: 100%;
  height: 100%;
}
.warp {
  max-width: 768px;
  width: 100%;
  position: absolute;
  // bottom: 3rem;
  top: 80%;
  padding-bottom: 4rem;
  // margin-top: 10rem;
  // overflow: hidden;
  .fox {
    position: relative;
    background: #fff;
    width: 100%;
    padding-top: 9rem;
    border-radius: 88% 88% 0 0;
  }
  .maincontent {
    position: relative;
    background: #fff;
    .userh {
      position: absolute;
      top: -21rem;
      left: 0;
      right: 0;
      transform: translateY(8rem);
      width: 8rem;
      margin: 0 auto;
      border-radius: 5rem;
      .posr {
        width: 8rem;
        margin: 0 auto;
        height: 8rem;
        i {
          position: absolute;
          z-index: 2;
          top: 5.5rem;
          left: 6rem;
          font-size: 2.5rem;
          color: rgba(#ededed, 0.6)
        }
      }
      .fix {
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover,100%;
        height: 8rem;
        width: 8rem;
        overflow: hidden;
        margin: 0 auto;
        border-radius: 5rem;
        position: relative;
      }
      p {
        text-align: center;
        margin: 0;
      }
      .grey {
        font-size: 1.5rem;
        color: rgb(130, 130, 130);
      }
    }
    .content {
      padding: 0 2rem;
      ul {
        li {
          padding: 2rem 0;
          border-bottom: 1px solid #F0F1F2;
          .fa {
            color: #DDDDDD;
            font-size: 2rem
          }
          span {
            color: #333;
            font-size: 1.5rem
          }
          .fa-chevron-right {
            float: right;
          }
        }
      }
    }
    .foxin {
      width: 100%;
      padding-top: 1rem;
      text-align: center;
      border-bottom: 1px solid #F0F1F2;
      b {
        font-size: 2.5rem
      }

      p {
        font-size: 1.3rem;
        color: grey
      }
    }
  }
  .tr {
    transform: translateY(0rem);
  }
  .pt0 {
    padding-top: 0;
  }
}
</style>
