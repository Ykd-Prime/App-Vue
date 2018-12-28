<template lang="html">
  <div class="invite">
    <div class="inviteItem">
      <span class="posa posaLeft box boxl"></span>
      <span class="posa posaRight box boxr"></span>
      <span class="posa posaRight status" :class="{statusBg:true}">{{ inviteStatus[2] }}</span>
      <p><i class="fa fa-gamepad"></i>{{ inviteName }}联赛</p>
    </div>
    <div class="warp">
      <div class="teamVs clearfix">
        <div class="col-xs-12"><img :src="inviteImg" alt=""></div>
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

        <div class="time mb10">
          <i class="fa fa-user-circle"></i>
          <span>已报名{{ nub }}队</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inviteStatus: ['待答复','进行中','参赛中'],
      p1name:'宝钢小分队',
      p2name:'复仇小分队',
      p1img:'./static/4x.jpg',
      p2img:'./static/4x.jpg',
      map:'红牛俱乐部联赛(淘汰赛)',
      timer:'8102-11-11 09:00',
      inviteName:'红牛俱乐部',
      inviteImg:'./static/6zvvlhibczmv9e8mfks4wel8l.jpg',
      nub:18
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../css/team.scss';
.invite {
  background: #fff;
  border-radius: .3rem;
  margin-bottom: 1rem;
}

.col-xs-12 {
  margin: 1rem 0
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
    background-image: -webkit-linear-gradient(297deg, #ED3A40 0%, #F77B6C 95%);
    background-image: -o-linear-gradient(297deg, #ED3A40 0%, #F77B6C 95%);
    background-image: linear-gradient(27deg, #ED3A40 0%, #F77B6C 95%);;
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
