<template lang="html">
  <div class="homenav">
    <!-- h0x -->
    <div class="h0x" v-if="this.teamFlag == 0">
      <div class="row">
        <div class="col-xs-6" ref="topInfo" @click="headToggleFunc(0,'h0x')" :class="{color333:!this.h0xToggle}">我的队伍
          <div class="h0xItem" :class="{'left133':h0xToggle == 1}"><span></span></div>
        </div>
        <div class="col-xs-6" @click="headToggleFunc(1,'h0x')" :class="{color333:this.h0xToggle}">平台队伍</div>
      </div>
    </div>

    <!-- h1x 队伍训练管理-->
    <div class="h1x" v-if="this.teamFlag == 1">
      <div class="">队伍训练</div>
      <router-link :to="{ name: 'trainHot', params: {} }">
        <span class="fa fa-pencil posaRight"></span><!-- 🖊笔图标 -->
      </router-link>
      <span class="fa fa-chevron-left posaLeft" v-show="!$store.state.nshow" @click="backTeamFunc(1)"></span><!-- 返回图标 -->
      <div class="col-xs-6" ref="topInfo"
        @click="headToggleFunc(0,'h1x')"
        :class="{color333:!this.h1xToggle}">
        列表
        <div class="h0xItem" :class="{'left133':h1xToggle == 1}"><span></span></div>
      </div>
      <div class="col-xs-6" @click="headToggleFunc(1,'h1x')" :class="{color333:h1xToggle}">日历</div>

    </div>

    <!-- h11x  队伍训练详情-->
    <div class="h0x" v-if="this.teamFlag == 11">
      <div class="fff">队伍训练详情</div>
      <span class="fa fa-chevron-left posaLeft posa" @click="backFunc(1)"></span>
    </div>

    <!-- h12x 队伍训练编辑-->
    <div class="h0x" v-if="this.teamFlag == 12">
      <div class="fff">队伍训练</div>
      <span class="fa fa-chevron-left posaLeft posa" @click="backFunc(11)"></span>
      <i class="fa fa-paper-plane posa posaRight"></i>
    </div>

    <!-- h2x 比赛管理-->
    <div class="h1x" v-if="this.teamFlag == 2">
      <div class="">队伍比赛</div>
      <router-link :to="{ name: 'trainHot', params: {} }">
        <span class="fa fa-pencil posaRight"></span><!-- 🖊笔图标 -->
      </router-link>
      <span class="fa fa-chevron-left posaLeft" v-show="!$store.state.nshow" @click="backTeamFunc(1)"></span><!-- 返回图标 -->
      <div class="col-xs-6" ref="topInfo"
        @click="headToggleFunc(0,'h2x')"
        :class="{color333:!this.h2xToggle}">
        列表
        <div class="h0xItem" :class="{'left133':h2xToggle == 1}"><span></span></div>
      </div>
      <div class="col-xs-6" @click="headToggleFunc(1,'h2x')" :class="{color333:h2xToggle}">日历</div>

    </div>

    <!-- h3x 作业管理  -->
    <div class="h1x" v-if="this.teamFlag == 3">
      <div class="">队伍作业</div>
      <router-link :to="{ name: 'trainHot', params: {} }">
        <span class="fa fa-pencil posaRight"></span><!-- 🖊笔图标 -->
      </router-link>
      <span class="fa fa-chevron-left posaLeft" v-show="!$store.state.nshow" @click="backTeamFunc(1)"></span><!-- 返回图标 -->
      <div class="col-xs-4" ref="topInfo"
        @click="headToggleFunc(0,'h3x')"
        :class="{color333:h3xToggle == 0}">
        未完成
        <div class="h0xItem" :class="{'left133':h3xToggle == 1,'left233':h3xToggle == 2}"><span></span></div>
      </div>
      <div class="col-xs-4" @click="headToggleFunc(1,'h3x')" :class="{color333:h3xToggle == 1}">已完成</div>
      <div class="col-xs-4" @click="headToggleFunc(2,'h3x')" :class="{color333:h3xToggle == 2}">批改中</div>
      <div class="posa w100">
      </div>
    </div>

    <!-- h4x  点评管理-->
    <div class="h1x" v-if="this.teamFlag == 4">
      <div class="">点评管理</div>
      <router-link :to="{ name: 'trainHot', params: {} }">
        <span class="fa fa-pencil posaRight"></span><!-- 🖊笔图标 -->
      </router-link>
      <span class="fa fa-chevron-left posaLeft" v-show="!$store.state.nshow" @click="backTeamFunc(0)"></span><!-- 返回图标 -->
    </div>

    <!-- h5x  队员管理-->
    <div class="h1x" v-if="this.teamFlag == 5">
      <div class="">队员管理</div>
      <span class="fa fa-chevron-left posaLeft" v-show="!$store.state.nshow" @click="backTeamFunc(0)"></span><!-- 返回图标 -->
    </div>

    <!-- h6x  队伍群聊-->
    <div class="h1x blackColor" v-if="this.teamFlag == 6">
      <div class="blackColor">{{ teamName }} 群聊</div>
      <span class="fa fa-chevron-left posaLeft "
            v-show="!$store.state.nshow"
            @click="backTeamFunc(0)"
            style="color:#1b1b1b"
            ></span><!-- 返回图标 -->
    </div>


    <!-- 比赛页  -->
    <!-- <div class="h0x" v-if="this.teamFlag == 0">
      <div class="row">
        <div class="col-xs-6" ref="topInfo" @click="headToggleFunc(0,'h0c')" :class="{color333:!this.h0xToggle}">我的队伍
          <div class="h0xItem" :class="{'left133':h0xToggle == 1}"><span></span></div>
        </div>
        <div class="col-xs-6" @click="headToggleFunc(1,'h0c')" :class="{color333:this.h0cToggle}">平台队伍</div>
      </div>
    </div> -->
  </div>
</template>

<script>
import {mapState,mapMutations} from 'vuex'
export default {
  name: "team",
  data () {
    return {
      boxShow:true,
      teamHead:'../../static/4x.jpg',
      teamName:'宝钢大队',
      mnub:15,
      teamLeader:"北极熊",
      teamMap:'广东省广州',

    }
  },

  components: {
  },

  computed: {
    ...mapState([
      //team页
      'teamFlag',
      'h0xToggle',
      'h1xToggle',
      'h2xToggle',
      'h3xToggle',
      'h4xToggle',
      'h5xToggle',

      //macth页
      'macthFlag',
      'h0cToggle',
      'h1cToggle',
      'h2cToggle',
      'h3cToggle',
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
  }
}
</script>


<style lang="css">

</style>
