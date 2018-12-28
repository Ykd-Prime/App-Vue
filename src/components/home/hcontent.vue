<template lang="html">
  <div class="homeofc" >
    <div class="mainBox mb5 pb30" v-for="(list,index) in hotmsg">
      <div class="user pb10 pt10" >
          <div class="fox">
            <img id="userh" :src="list.head" alt="" >
          </div>
          <span style="line-height:3rem">{{ list.name }}</span>
        <span class="time pull-right">8分钟前</span>
      </div>
      <div class="main">
        <p>{{ list.msg }}</p>
        <div class="userimg thumbnail clearfix">
          <div class="oh">
            <div class="xs8 "
              v-show="list.src[0]"
              :class="{xs2:list.src[1],xs3:list.src[2]}"
            >
              <img :src="list.src[0]" alt="" v-show="!list.src[1]">
              <div v-show="list.src[1]" class="userhot":style="{backgroundImage:'url('+list.src[0]+')'}"></div>
            </div>
            <div
              v-show="list.src[1]"
              :class="{xs2:list.src[1],xs3:list.src[2]}"
            >
              <div class="userhot":style="{backgroundImage:'url('+list.src[1]+')'}"></div>
            </div>
            <div class="xs3"
              v-show="list.src[2]"
            >
              <div class="userhot":style="{backgroundImage:'url('+list.src[2]+')'}"></div>
            </div>
          </div>
          <div class="oh">
            <div class="xs3"
              v-show="list.src[3]"
            >
              <div class="userhot":style="{backgroundImage:'url('+list.src[3]+')'}"></div>
            </div>
            <div class="xs3"
              v-show="list.src[4]"
            >
              <div class="userhot":style="{backgroundImage:'url('+list.src[4]+')'}"></div>
            </div>
            <div class="xs3"
              v-show="list.src[5]"
            >
              <div class="userhot":style="{backgroundImage:'url('+list.src[5]+')'}"></div>
            </div>
          </div>
        </div>
        <div class="gps pull-right">
          <span class="fa fa-map-marker"></span>
          <span>广州宝岗体育中心</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState,mapMutations} from 'vuex'
export default {

  data () {
    return {
      samil:"",
      htab: true,
      username:"whh",
      usertime:"8",
      usergps:"广州宝岗体育中心",
      // all:[]
    }
  },
  computed: {
    ...mapState([
      'user',
      'hotmsg'
    ])
  },
  methods: {
    ...mapMutations([
      'saveMsg'
    ]),
  },
}



</script>

<style lang="scss" scoped>
@import '../../css/home.css';
.homeofc {
  margin: 0 .5rem;
  padding-bottom: 5rem;
}


.userimg {
  img {
    max-width: 100%;
  }
}

.fox {
  float: left;
  width: 3rem;
  border-radius: 5rem;
  overflow: hidden;
  margin-right: 1rem;
}


.xs8 {
  text-align: center;
  width: 80%;
  overflow: hidden;
  img {
    width: 100%;
  }
}

.xs2 {
  width: 8rem;
  height: 8rem;
  float: left;
  margin:0 .2rem .2rem 0
}

.xs3 {
  width: 8rem;
  height: 8rem;
  float: left;
  margin:0 .2rem .2rem 0
}

@media (max-width: 350px) {
  .xs3 {
    width: 6rem;
    height: 6rem;
  }
}

@media (min-width: 768px) {
  .xs3 {
    width: 12rem;
    height: 12rem;
  }
}

.userhot {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center center;
}

</style>
