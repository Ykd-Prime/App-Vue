<template lang="html">
  <div class="invite" @click="">
    <div class="inviteItem">
      <span class="posa posaLeft box boxl"></span>
      <span class="posa posaRight box boxr"></span>
      <span class="posa posaRight status" :class="{statusBg:true}">{{ inviteStatus[0] }}</span>
      <p><i class="fa fa-gamepad"></i>挑战赛邀请</p>
    </div>
    <div class="warp">
      <div class="teamVs clearfix">
        <div class="col-xs-4">
          <img :src="p1img" alt="">
          <p>{{ p1name }}</p>
        </div>
        <div class="col-xs-4">
          <p class="vs">vs</p>
        </div>
        <div class="col-xs-4">
          <img :src="p2img" alt="">
          <p>{{ p2name }}</p>
        </div>
      </div>


      <div class="note clearfix">
        <i class="fa fa-chain-broken"></i>
        <div class="map">
          <i class="fa fa-map-marker"></i>
          <span>{{ map }}</span>
        </div>
        <!-- 时间 -->
        <div class="time mb10">
          <i class="fa fa-globe"></i>
          <span>{{ timer }}</span>
        </div>
      </div>

      <div class="redBtn" v-show="this.$store.state.macthHeadFlag == 1">
        报名
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inviteStatus: ['待答复','进行中'],
      p1name:'宝钢小分队',
      p2name:'复仇小分队',
      p1img:'./static/4x.jpg',
      p2img:'./static/4x.jpg',
      map:'广州报告中心',
      timer:'8102-11-11 09:00',
    }
  },

  methods: {
    toEdit() {
      this.$router.push({name:'home'})
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../css/team.scss';

.redBtn {
  background: #ff5959;
  border-radius: 5rem;
  width: 90%;
  color: #fff;
  margin: 2rem auto;
  text-align: center;
  line-height: 4rem
}

.invite {
  background: #fff;
  border-radius: .3rem;
  margin-bottom: 1rem;
}

.inviteItem {
  position: relative;
  border-bottom: dashed .2rem #dbdddd;
  padding: 0 1rem;
  line-height: 5rem;
  // overflow: hidden;
  .status {
    line-height: 2.2rem;
    width:6rem;
    padding-left: 1rem;
    text-align: center;
    border-radius: 0 0 0 2rem;
    right: 0rem;
    font-size: 1.3rem
  }
  .box {
    top: 4.2rem;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 1rem;
    background: #ddd;
  }

  .boxl {
    left: -.8rem
  }
  .boxr {
    right: -.8rem
  }

  .fa {
    color: rgb(255, 0, 90)
  }
  p {
    margin: 0;
  }



  .statusBg {
    background: #ff6e1d;
    color: #fff;
  }
}

.warp {
  overflow: hidden;
  .teamVs {
    .vs {
      font-size: 7rem;
      p {
        margin: 0;
      }
    }

    .col-xs-4 {
      margin-top: 1rem;
      text-align: center;
      .vs {
        line-height: 100%
      }
      img {
        max-width: 10rem;
        border-radius: 15rem;
        margin-bottom: 1rem;
      }
      p:nth-child(2) {
        font-size: 1.4rem
      }
    }
  }

  .time{
    margin: 0;
    .fa{
      color: rgb(251, 0, 0)
    }
  }
}

.note {
  position: relative;
  background: #ddd;
  margin: 1rem;
  padding: 1rem;
  .fa {
    color: rgb(251, 0, 0);
  }
  .fa-chain-broken {
    position: absolute;
    right: 2rem;
    top:-.7rem;
    transform: scale(1.2)
  }
  .map {
    margin-bottom: .5rem;
    margin-left: .3rem;
  }
}
img {
  width: 100%;
}
</style>
