<template lang="html">
  <div class="chat"style="margin: 5.5rem .5rem 0 .5rem;">
    <div class="head" :class="{bgfff:!active}">
      <span v-show="active">{{chathead[0]}}</span>
      <span v-show="!active" style="color:#333">{{username}}</span>
      <span @click="active = true,$store.state.mainNavShow = true" v-show="!active" style="color:#333" class="fa fa-chevron-left posaLeft posa"></span>
    </div>

    <div class="warp clearfix" @click="active=false,$store.state.mainNavShow = false" v-show="active">
      <div class="dang">
        <div class="fix" :style="{backgroundImage:'url('+user.head+')'}"></div>
      </div>
      <div class="pull-left ml10">
        <span class="uh">{{username}}</span>
        <span class="mtime ml10 grey" style="transform:translateX(2rem)">{{msgTime}}</span>
        <div>
          <p class="grey">{{msg}}</p>
        </div>
      </div>

    </div>
    <isqq v-show="!active"></isqq>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import isqq from '../team/isqq.vue'
export default {
  data() {
    return {
      active:true,
      userhead:'./static/dang.jpg',
      username:'复读鸡',
      msgTime:'2012.01.02  9:12',
      chathead:['聊天'],
      msg:'HelloWorld'
    }
  },

  components: {
    isqq
  },

  computed:{
    ...mapState([
      'user',
      'userwarp'
    ])
  },
}
</script>

<style lang="scss" scoped>

.fix {
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover,100%;
  height: 8rem;
  width: 8rem;
  overflow: hidden;
  margin: 0 auto;
  border-radius: 5rem;
  position: relative;
}
.chat {
  margin-top: 5.5rem
}

.dang {
  width: 8rem;
  height: 8rem;
  float: left;
  border-radius: 10rem;
  overflow: hidden;
}
.bgfff {
  background: #fff;
}

.fa-chevron-left {
  top: 1.6rem;
  left: 1rem;
}

.mtime {
  margin-left: 4rem;
}

.warp {
  background: #fff;
  padding: .7rem;
  img {
    width: 100%;
    border-radius: 15rem
  }
  .uh {
    line-height: 4rem;
  }
}

.grey {
  color: rgb(124, 124, 124)
}

.head {
  color: #fff
}
</style>
