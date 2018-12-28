<template lang="html">
  <div id="home"  ref="view">
    <div class="head container" :class="{isFixed:isFixed}">
      <div class="homenav" v-if="">
          <div class="h1x">{{ taiwu }}</div>
          <router-link :to="{ name: '', params: {} }"></router-link>
          <span class="fa fa-pencil pull-right" @click="nst()" v-show="this.$store.state.mainNavShow"></span>
          <span class="fa fa-chevron-left pull-left" v-show="!this.$store.state.mainNavShow" @click="nst()"></span>
      </div>
    </div>
    <hcontent v-show="this.$store.state.mainNavShow"></hcontent>
    <hpush v-show="!this.$store.state.mainNavShow"></hpush>

    <div class="team"></div>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
import hpush from './hpush'
import hcontent from './hcontent'
export default {
  name:"home",
  data () {
    return {
      taiwu: '钓鱼吧',
      theScroll:null,
      isFixed:false
    }
  },
  components: {
    hcontent,
    hpush,
  },
  methods: {
    ...mapMutations([
      'saveMsg',
      'infoed'
    ]),

    nst: function() { // nst:navShowToggle
      this.$store.state.mainNavShow = !this.$store.state.mainNavShow;
      this.taiwu = this.$store.state.mainNavShow ?  '发布动态' : '钓鱼吧'
    },

    // 下拉头部固定
    headScroll () {
      var top = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      var i = top - this.theScroll;
      this.theScroll = top;
      if (i<0) {
        //上拉
        this.isFixed = true
      }else {
        //下拉
        this.isFixed = false
      }
    }
  },
  mounted () {
    // this.box = this.$refs.view
    // this.box.addEventListener('scroll', this.headScroll)
    window.addEventListener('scroll', this.headScroll)
    // console.log(this.$store.state.mainNavShow);
    // console.log(this.$store.team.h0xToggle);
  },
  destroyed () {
    window.removeEventListener('scroll', this.headScroll)
  },
  computed: {
    nshow() {
      return this.$store.state.mainNavShow
    }
  },
}
</script>

<style lang="css" scoped>
  @import '../../css/home.css';
  #home {
    height: 100%;
  }
</style>
