<template lang="html">
  <div class="macthPlan">
    <div class="itemp">
      <span class="p1" @click="anima=false,active=true" :class="{p3:anima==false}">赛程安排</span>
      <span class="p2" @click="anima=true,active=false" :class="{p3:anima==true}">赛事通知</span>
      <div class="triangle" :class="{tabplan:anima}">
        <span id="triangle"></span>
        <span class="triangle-up" :class="{vplan:anima}"></span>
      </div>
    </div>
    <div class="warp warp-plan clearfix" v-show="active">
      <div v-for="(all,index) in tblist" :class="{bgRed:index == 0}" class="tac tblist clearfix" >
        <div class="col-xs-4">{{all.p1}}</div>
        <div class="col-xs-4">{{all.p2}}</div>
        <div class="col-xs-4">{{all.p3}}</div>
      </div>
    </div>
    <div class="warp warp-clue clearfix" v-show="!active">
      <div v-for="(all,index) in cluelist" class="clearfix posr col-xs-12 col-sm-4" >
          <img :src="all.img" alt="" width="50%" class="pull-left">
          <div class="clueP posa">
            <div>{{all.p}}</div>
            <div class="grey">{{all.time}}</div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active:true,
      anima:false,
      tblist:[
        {p1:'局数',p2:'攻击方',p3:'防守方'},
        {p1:1,p2:'+',p3:'+'},
        {p1:2,p2:'+',p3:'+'},
        {p1:3,p2:'+',p3:'+'},
        {p1:4,p2:'+',p3:'+'},
        {p1:5,p2:'+',p3:'+'},
        {p1:6,p2:'+',p3:'+'},
        {p1:7,p2:'+',p3:'+'},
        {p1:8,p2:'+',p3:'+'},
        {p1:9,p2:'+',p3:'+'},
      ],

      cluelist:[
        {
          img:'./static/6zvvlhibczmv9e8mfks4wel8l.jpg',
          p:'场地安排',
          time:'8102.12.31 13:10'
        },
        {
          img:'./static/6zvvlhibczmv9e8mfks4wel8l.jpg',
          p:'场地安排',
          time:'8102.12.31 13:02'
        },
        {
          img:'./static/6zvvlhibczmv9e8mfks4wel8l.jpg',
          p:'场地安排',
          time:'8102.12.31 13:05'
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

.warp-clue {
  position: relative;
  padding: 1rem;
  .clueP {
    left: 50%;
    top: 34%;
    div {
      height: 100%;
      line-height: 100%
    }
  }
  .grey {
    color:rgb(161, 161, 161)
  }
}

.posr {
  position: relative;
  padding: 1rem 0
}

.itemp {
  position: relative;
}

.tblist div{
  padding: 1rem 0;
  border: 1px solid #dbdddd
}

.bgRed div{
  background: #f11818;
  color: #fff;
  border: none
}

.triangle {
  position: absolute;
  top: -.4rem;
  z-index: -1;
}

.p1, .p2 {
  padding: 0 1rem;
  color: rgb(136, 136, 136)
}

.p1 {
  position: relative;

}
.p2 {
  position: absolute;

}

.p3 {
  color: #333
}

.tabplan {
  transform: translateX(8.5rem);
  // animation: p1l 1s alternate forwards
}



@keyframes p1l {
  0%{transform: translateX(0rem)}
  50%{transform: translateX(8.5rem)}
  100%{transform: translateX(0rem)}
}
.p2l {
  left: 0rem;
}

.p1l {
  left: 8.5rem;
}


.warp {
  background: #fff;
  padding: 1rem;
}

#triangle {
  display: inline-block;
  width: 8.2rem;
  height: 3rem;
  background: #fff;
}
.triangle-up{
  position: absolute;
  top: 0;
  left: 8.2rem;
  width:0;
  height:0;
  border-left:0px solid transparent;
  border-right:1.5rem solid transparent;
  border-bottom:3rem solid #fff;
}

.vplan {
  left: -1.5rem;
  border-left:1.5rem solid transparent;
  border-right:0px solid transparent;
  border-bottom:3rem solid #fff;
}
</style>
