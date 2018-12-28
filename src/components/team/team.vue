<template lang="html">
  <div id="team" v-if="" style="margin: 0 .5rem;">
    <div :class="{'white':teamFlag == 6}"class="head container" style="position:absolute">
      <teamHeadr></teamHeadr>
    </div>
    <div class="team" v-if="this.teamFlag == 0">
      <div class="tab">
        <!-- 我的队伍 -->
        <div class="myTeam container pt5" :class="{tTab:this.h0xToggle}">
          <!-- 大图模糊 -->
          <div class="teamBanner">
            <div class=" tac">
              <img src="../../img/1xx.jpg" alt="" class="w100">
              <div class="teamHead">
                <img :src="teamHead" alt="">
              </div>
              <span class="tn">{{ teamName }}</span>
            </div>
          </div>
          <!-- xx个队员 -->
          <div class="member">
            <div class="tmember">
              <i class="fa fa-user-circle-o"></i>
              <span class="mnub">{{ mnub }}名队员</span>
              <div class="memberH">
                <img :src="teamHead" alt="">
                <img :src="teamHead" alt="">
                <img :src="teamHead" alt="">
                <img :src="teamHead" alt="">
              </div>
            </div>
          <!-- 队长 -->
            <div class="leader">
              <i class="fa fa-user-circle-o"></i>
              <span class="">队长</span>
              <span class="pull-right">{{ teamLeader }}</span>
            </div>
          </div>
          <!-- 管理 -->
          <div class="managa">
            <div class="row">
              <div class="col-xs-4 tac"  @click="flagFunc(1)">
                <router-link :to="{ name: 'trainManage', params: {} }" >
                  <i class="fa fa-wpforms"></i>
                  <span>训练管理</span>
                </router-link>
              </div>
              <div class="col-xs-4 tac" @click="flagFunc(2)">
                <router-link :to="{ name: 'macthManage', params: {} }">
                  <i class="fa fa-trophy"></i>
                  <span>比赛管理</span>
                </router-link>
              </div>
              <div class="col-xs-4 tac" @click="flagFunc(3)">
                <router-link :to="{ name: 'taskManage', params: {} }">
                  <i class="fa fa-snowflake-o"></i>
                  <span>作业管理</span>
                </router-link>
              </div>
              <div class="col-xs-4 tac" @click="flagFunc(4)">
                <router-link :to="{ name: 'goldManage', params: {} }">
                  <i class="fa fa-gift"></i>
                  <span>点评管理</span>
                </router-link>
              </div>
              <div class="col-xs-4 tac" @click="flagFunc(5)">
                <router-link :to="{ name: 'menberManage', params: {} }">
                  <i class="fa fa-male"></i>
                  <span>队员管理</span>
                </router-link>
              </div>
              <div class="col-xs-4 tac" @click="flagFunc(6)">
                <router-link :to="{ name: 'isqq', params: {} }">
                  <i class="fa fa-wheelchair-alt"></i>
                  <span>队伍群聊</span>
                </router-link>
              </div>
            </div>


            <div class="hot mt10 mb10">
              <i class="fa fa-square"></i>
              <span>球队动态</span>
            </div>

            <hcontent></hcontent>
          </div>


        </div>

        <!-- 平台队伍 -->
        <div class="yourTeam w100 container pt10">
          <div class="gps">
            <i class="fa fa-map-marker"></i>
            <span>{{ teamMap }}</span>
          </div>
          <!-- 大图模糊 -->
          <div class="teamBanner mt10">
            <div class=" tac">
              <img src="../../img/1xx.jpg" alt="" class="w100">
              <div class="teamHead">
                <img :src="teamHead" alt="">
              </div>
              <span class="tn">{{ teamName }}</span>
            </div>
          </div>
            <!-- xx个队员 -->
          <div class="member">
            <div class="tmember">
              <i class="fa fa-user-circle-o"></i>
              <span class="mnub">{{ mnub }}名队员</span>
              <div class="memberH">
                <img :src="teamHead" alt="">
                <img :src="teamHead" alt="">
                <img :src="teamHead" alt="">
                <img :src="teamHead" alt="">
              </div>
            </div>
            <!-- 队长 -->
            <div class="leader">
              <i class="fa fa-user-circle-o"></i>
              <span class="">队长</span>
              <span class="pull-right">{{ teamLeader }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
import hcontent from '../home/hcontent'
import teamHeadr from './head.vue'
import testh from './test.vue'
import {mapState,mapMutations} from 'vuex'
export default {
  name: "team",
  data () {
    return {
      boxShow:true,
      teamHead:'./static/4x.jpg',
      teamName:'宝钢大队',
      mnub:15,
      teamLeader:"北极熊",
      teamMap:'广东省广州',
    }
  },

  components: {
    hcontent,
    teamHeadr,
    testh
  },

  computed: {
    ...mapState([
      'h0xToggle',
      'h1xToggle',
      'h2xToggle',
      'h3xToggle',
      'h4xToggle',
      'h5xToggle',
      'teamFlag',
    ])
  },

  methods: {
    ...mapMutations([
      'headToggle',
      'flag',
      'backTeam',
      'back'
    ]),
    headToggleFunc(i,flag) {
      this.headToggle({i,flag})
    },
    flagFunc(i) {
      this.flag({i})
    },
    backTeamFunc(i) {
      this.backTeam({i})
      this.$router.push({name:'team'})
    },
    backFunc(i) {
      this.$router.go(-1)
      this.back({i})
    }
  },

  mounted () {
      // this.flag({i});
      this.$store.state.mainNavShow = true;
      this.$router.push({name:'team'})
  }
}
</script>

<style lang="scss">
@import '../../css/team.scss';
</style>
