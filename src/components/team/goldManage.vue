<!-- 点评管理 -->
<template lang="html">
  <div class="gold">
    <div class="main" v-for="(all,index) in this.menber">
      <div class="headr">
        <i class="fa fa-angle-double-right"></i>
        <span>2017学年点评</span>
        <i class="fa fa-angle-double-left"></i>
      </div>
      <div class="goldUser clearfix">
        <div class="heart">
          <i class="fa fa-heart"></i>
          <i class="fa fa-heart"></i>
          <i class="fa fa-heart"></i>
          <i class="fa fa-heart"></i>
          <i class="fa fa-heart"></i>
        </div>
        <div class="userh">
          <div class="w100" :style="{backgroundImage:'url('+all.head+')'}"></div>
        </div>
        <div class="msg">
          <p>{{all.name}}</p>
          <p>平均分 4.0</p>
        </div>
      </div>
      <div class="goldImg clearfix">
          <div class="xs4">
            <div class="w100" :style="{backgroundImage:'url('+all.img+')'}"></div>
          </div>
          <div class="xs4">
            <div class="w100" :style="{backgroundImage:'url('+all.img+')'}"></div>
          </div>
          <div class="xs4">
            <div class="w100" :style="{backgroundImage:'url('+all.img+')'}"></div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  computed: {
    ...mapState([
      'user',
      'menber'
    ])
  }
}
</script>

<style lang="scss" scoped>
@mixin wh100 {
  width: 100%;
  height: 100%;
}

@mixin humen {
  width: 8rem;
  height: 8rem;
  border-radius: 5rem;
  overflow: hidden;
}

@mixin bgcenter {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}

.main {
  @include wh100;
  background: #fff;
  margin-bottom: .5rem;
}

.headr {
  position: relative;
  padding: 1rem 0;
  text-align: center;
  border: .1rem solid #E8E8E8;
  span {
    font-weight: 600;
    font-size: 2.5rem;
    color: #333
  }
  i {
    height: 1rem;
    overflow: hidden;
    font-weight: 600;
    font-size: 2rem;
    color: #ff4b4b;
    transform:translateY(-.3rem);
  }
}
.heart {
  width: 15rem;
  height: 1rem;
  right: 1rem;
  text-align: right;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  i {
    color: rgb(175, 209, 165);
    font-size: 2rem
  }
}


.goldUser {
  position: relative;
  padding: 1rem 1rem;
  .userh {
    @include humen;
    float: left;
    margin-right: .8rem;
  }

  .w100 {
    height: 100%;
    @include bgcenter;
  }

  .msg {
    position: relative;
    float: left;
    height: 8rem;
    padding: 2rem 0;
    p {
      margin: 0;
    }
  }
}

.goldImg {
  text-align: center;
  .xs4 {
    width: 12rem;
    height: 12rem;
    display: inline-block;
  }
  .w100 {
    @include bgcenter
    height: 100%;
  }
  @media (max-width: 320px) {
    .xs4 {
      width: 7rem;
      height: 7rem;
    }
  }
  @media (min-width: 320px) {
    .xs4 {
      width: 9rem;
      height: 9rem;
    }
  }
  @media (min-width: 375px) {
    .xs4 {
      width: 11rem;
      height: 11rem;
    }
  }
  @media (min-width: 500px) {
    .xs4 {
      width: 13rem;
      height: 13rem;
    }
  }
  @media (min-width: 600px) {
    .xs4 {
      width: 15rem;
      height: 15rem;
    }
  }
  @media (min-width: 768px) {
    .xs4 {
      width: 24.3333333rem;
      height: 24.3333333rem;
    }
  }
}






</style>
