<template lang="html">
  <div class="mainNav">
    <nav class="nav">
      <div class="navRoot" v-show="this.$store.state.mainNavShow">
        <router-link :to="{ name: 'home', params: {} }" class="navLink" @click.native="active=false">
          <i class="fa fa-home navLinkIco" aria-hidden="true"></i>
          <span class="navLinkText">动态</span>
        </router-link>
        <router-link :to="{ name: 'team', params: {} }" class="navLink"  @click.native="active=false">
          <i class="fa fa-ravelry navLinkIco" aria-hidden="true"></i>
          <span class="navLinkText">队伍</span>
        </router-link>
        <router-link :to="{ name: 'macth', params: {} }" class="navLink" @click.native="active=true">
          <i class="fa fa-futbol-o navLinkIco" :class="{'fa-spin':active}" aria-hidden="true"></i>
          <span class="navLinkText">比赛</span>
        </router-link>
        <router-link :to="{ name: 'chat', params: {} }" class="navLink" @click.native="active=false">
          <i class="fa fa-comments-o navLinkIco" aria-hidden="true"></i>
          <span class="navLinkText">聊天</span>
        </router-link>
        <router-link :to="{ name: 'user', params: {} }" class="navLink" @click.native="active=false,$store.state.userwarp = 0">
          <i class="fa fa-user-circle navLinkIco" aria-hidden="true"></i>
          <span class="navLinkText">我的</span>
        </router-link>
      </div>
    </nav>
  </div>
</template>
<script>
import vux from '../store'
export default {
  name: 'mainNav',
  data () {
    return {
      navactive: true,
      age: 0,
      // nshow: 0,
      active:false,
    }
  },
  computed: {
    navshow () {
      return this.$store.state.navshow
    },

    nshow () {
      return this.$store.state.nshow
    }
    // ...mapState({
    //   navshow: state => state.navshow
    // }),
  },
 // computed: mapState({
 //
 // })

  methods: {
    tabToggle: function(index) {
      this.$store.state.nshow = index;
      // window.localStorage.setItem("asd",this.$store.state.nshow)
    }

  },
  mounted(){
    // if(window.localStorage.getItem('asd'))
    // this.nshow=window.localStorage.getItem('asd');
  }
}
</script>

<style lang="css" scoped>
@import '../css/nav.css'
</style>
