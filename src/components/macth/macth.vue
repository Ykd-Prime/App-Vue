<template lang="html">
  <div class="macth">
    <div class="head">
      <thisHead></thisHead>
    </div>
    <div class=" page1" v-if="macthHeadFlag == 0">
      <div class="tab clearfix" :class="{'ml-100':h0cToggle==1}">
        <div class="mymacth">

          <router-link :to="{ name: 'inviteFull', params: {} }" v-for="(all,index) in p" @click.native="pushitviteFunc(1,1)" :key="1">
            <invite></invite>
            <invite></invite>
            <invite></invite>
          </router-link>

        </div>
        <div class="platmacth">
          <macthBigImg></macthBigImg><!-- class="posa l0" -->
          <div class="w70 mauto ">
            <div class="dib macthPageBtnA mt10 mb10" :class="{bgRed:active == true}" @click="active = true">挑战赛</div>
            <div class="dib macthPageBtnB" :class="{bgRed:active == false}" @click="active = false">联赛</div>
          </div>
          <div class="plat1 leftShow" :class="{show:active}">
            <router-link :to="{ name: 'inviteFull', params: {} }" @click.native="pushitviteFunc(1,1)">
              <invite></invite>
            </router-link>
            <router-link :to="{ name: 'inviteFull', params: {} }" @click.native="pushitviteFunc(1,1)">
              <invite></invite>
            </router-link>
            <router-link :to="{ name: 'inviteFull', params: {} }" @click.native="pushitviteFunc(1,1)">
              <invite></invite>
            </router-link>
          </div>
          <div class="plat2" :class="{show:!active}">
            <router-link :to="{ name: 'inviteFull', params: {} }" @click.native="pushitviteFunc(1,2)">
              <invite1></invite1>
            </router-link>
            <router-link :to="{ name: 'inviteFull', params: {} }" @click.native="pushitviteFunc(1,2)">
              <invite1></invite1>
            </router-link>
            <router-link :to="{ name: 'inviteFull', params: {} }" @click.native="pushitviteFunc(1,2)">
              <invite1></invite1>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
import invite from './invite.vue'
import invite1 from './invite1.vue'
import macthBigImg from './macthBigImg.vue'
import thisHead from './macthHead.vue'
import {mapState,mapMutations} from 'vuex'
export default {
  data() {
    return {
      active:true,
      list:4,
      p:['1']
    }
  },
  components: {
    thisHead,
    invite,
    invite1,
    macthBigImg
  },
  computed:{
    ...mapState([
      'h0cToggle',
      'macthHeadFlag',
      'macthFlag'
    ])
  },

  methods: {
    ...mapMutations([
      'pushitvite'
    ]),
    pushitviteFunc(i,x) {
      this.pushitvite({i})
      this.$store.state.macthFlag = x,
      this.$store.state.mainNavShow = false
    },
    platToggle() {
      this.active = this.active == true ? false:true
    }
  },

  mounted() {
    this.$store.state.macthHeadFlag = 0;
    this.$router.push({name:'macth'}),
    this.$store.state.mainNavShow = true
  }
}
</script>

<style lang="scss" scoped>
.page1 {
  margin-top: 11rem;
  overflow: hidden;
  padding-bottom: 5rem;
}

.mymacth,
.platmacth {
  width: 50%;
  float: left;
  padding: 0 .5rem;
}
</style>
