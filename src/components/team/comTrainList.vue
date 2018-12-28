<template lang="html">
  <div class="trainList container pt5">
    <div class="page">
      <div class="trainStatus clearfix"><!-- status状态 -->
        <span class="status">{{ trainStatus[1] }}</span>
      </div>
      <!-- 地点 -->
      <div class="gps">
        <i class="fa fa-map-marker"></i>
        <span>{{ map }}</span>
      </div>
      <!-- 时间 -->
      <div class="time mb10">
        <i class="fa fa-globe"></i>
        <span>{{ timer }}</span>
      </div>
      <!-- 便签 -->
      <div class="note">
        <p>{{ trainNote }}</p>
        <i class="fa fa-chain-broken"></i>
      </div>
      <!-- 成员 -->
      <div class="member">
        <div class="mb20 mt20">
          <i class="fa fa-blind"></i>
          <span v-if="teamFlag == 1">成员 ( {{ memberCount }}名 )</span>
          <span v-if="teamFlag == 11">参与成员 ( {{ memberCount }}名 )</span>
        </div>
        <div class="menberHead">
          <img :src="memberHead" alt="">
          <p>{{ memberUesrName }}</p>
          <p class="check" v-show="teamFlag == 11" :class="{'lv':lv == 0}">已签到</p>
        </div>
        <div class="menberHead">
          <img :src="memberHead" alt="">
          <p>{{ memberUesrName }}</p>
          <p class="check" v-show="teamFlag == 11" :class="{'lv':lv == 1}">已签到</p>
        </div>
        <div class="menberHead">
          <img :src="memberHead" alt="">
          <p>{{ memberUesrName }}</p>
          <p class="check" v-show="teamFlag == 11" :class="{'lv':lv == 2}">已签到</p>
        </div>
        <div class="menberHead">
          <img :src="memberHead" alt="">
          <p>{{ memberUesrName }}</p>
          <p class="check" v-show="teamFlag == 11" :class="{'lv':lv == 3}">已签到</p>
        </div>
        <div class="menberHead">
          <img :src="memberHead" alt="">
          <p>{{ memberUesrName }}</p>
          <p class="check" v-show="teamFlag == 11" :class="{'lv':lv == 4}">已签到</p>
        </div>
      </div>
      <!-- 管理按钮 -->
      <div class="setBtn tac" @click="pushNextFunc()" v-if="this.teamFlag == 1">
        管理
      </div>

      <div class="setBtn tac" @click="editFunc()" v-if="this.teamFlag == 11">
        编辑
      </div>
    </div>
  </div>
</template>

<script>
import {mapState,mapMutations} from 'vuex'
export default {
  data() {
    return {
      trainStatus: ['进行中','未开始','两天后'],
      map: '宝钢体育中心',
      timer: "2000.11.11 9:00",
      trainNote: '日常的体能训练，希望大家能够带齐装备，很快就要比赛了，要加油啦(๑•̀ㅂ•́)و✧',
      memberCount: 5,
      memberHead:'./static/4x.jpg',
      memberUesrName: '大水货'
    }
  },
  computed: {
    ...mapState([
      'h1xToggle',
      'teamFlag',
      'lv'
    ])
  },
  methods: {
    ...mapMutations([
      'pushNext',
      'pushEdit'
    ]),

    pushNextFunc() {
      this.pushNext();
      this.$router.push({name:'trainDetail'})
    },

    editFunc() {
      this.pushEdit()
      this.$router.push({name:'trainEdit'})
    }
  }
}
</script>

<style lang="css">
</style>
