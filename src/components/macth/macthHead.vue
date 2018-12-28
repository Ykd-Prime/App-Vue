<template lang="html">
  <div class="head">
    <div class="h1x">
      <div class="">{{ tab().h1 }}</div>
      <router-link :to="{ name: 'trainHot', params: {} }">
        <span class="fa fa-pencil posaRight"
          v-show="tab().rightFa"
        ></span><!-- 🖊笔图标 -->
      </router-link>
      <span class="fa fa-chevron-left posaLeft"
        v-show="tab().leftFa"
        @click="backMacth()"
      ></span><!-- 返回图标 -->

      <div
        @click="headToggleFunc(0,tab().id)"
        :class="{
                  color333:h0cToggle == 0,
                  'col-xs-4':tab().tab == 3,
                  'col-xs-6':tab().tab == 2
                }"
        >
        {{ tab().tab1 }}
        <!-- 滑条  -->
        <div class="h0xItem"
          :class="{'left133':h0cToggle == 1,'left233':h0cToggle == 2}"
          v-show="!tab().tab == 0">
          <span></span>
        </div>

      </div>

      <div
        @click="headToggleFunc(1,tab().id)"
        :class="{
                  color333:h0cToggle == 1,
                  'col-xs-4':tab().tab == 3,
                  'col-xs-6':tab().tab == 2
                  }"
        >
        {{ tab().tab2 }}
      </div>

      <div v-show="tab().tab == 3"
        @click="headToggleFunc(2,tab().id)"
        :class="{color333:h0cToggle == 2,'col-xs-4':tab().tab == 3}"
        >
        {{ tab().tab3 }}
      </div>
    </div>
  </div>
</template>

<script>
import {mapState,mapMutations} from 'vuex'
export default {
  name: "macthHead",
  data () {
    return {
      headDate: [{//比赛
        id:'h0c',
        h1:'比赛',//标题
        leftFa:false,//左边返回显示
        rightFa:false,//右边图标显示
        tab:2,//导航滑条数
        tab1:'我的比赛',
        tab2:'平台赛事',
        tab3:'',
        flag:0
      },
      {//比赛
        id:'h1c',
        h1:'比赛详情',//标题
        leftFa:true,//左边返回显示
        rightFa:false,//右边图标显示
        tab:0,//导航滑条数
        tab1:'',
        tab2:'',
        tab3:'',
        flag:1
      }],
      headFlag:0,
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
      // 'headDate',

      //macth页
      'macthHeadFlag',
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
      'back',
      'pushMacth'
    ]),
    headToggleFunc(i,flag) {
      this.tab().flag = i
      this.headToggle({i,flag})
    },
    backTeamFunc(i) {
      this.backTeam({i})
      this.$router.push({name:'team'})
    },
    backFunc(i) {
      this.$router.go(-1)
      this.back({i})
    },
    backMacth() {
      this.$router.push({name:'macth'})
      this.$store.state.macthHeadFlag = 0;
      this.$store.state.mainNavShow = true;
      this.$store.state.macthFlag == 0;
    },
    tab(i) {
      if (i) {
        this.macthHeadFlag = i
      }

      // console.log(this.headDate[this.headFlag].flag)
      return this.headDate[this.macthHeadFlag];
    }
  },

}
</script>

<style lang="scss">
@import '../../css/team.scss';
@import '../../css/macth.scss';
</style>
