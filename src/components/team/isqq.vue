<template lang="html">
  <div class="isqq clearfix" id="chatContainer">
    <div v-for="(all,index) in msgArr"
      class="clearfix posr mt10 mb20 p1">
      <div class="clearfix">
        <div class="uh" id="chatContainer">
          <div class="userh">
            <img :src="$store.state.userhead" alt="" width="100%">
          </div>
          <p class="uhp">{{all.content}}</p>
        </div>
      </div>

      <div class="clearfix p2" v-if="">
        <div class="uhr">
          <div class="userh">
            <img :src="$store.state.p2userhead" alt="" width="100%" class="fa-spin">
          </div>
          <p class="uhp">{{fdj(all.content)}}</p>
        </div>
      </div>

    </div>


    <div class="fdj input-group">
      <span class="input-group-addon"><i class="fa fa-truck"></i></span>
      <input type="text" @keyup.enter="dealMsg" placeholder="说点屁话吧..." v-model.lazy="p1msg" id="ip" class="form-control" aria-label="Amount (to the nearest dollar)">
      <span @click="dealMsg"  class="input-group-addon"><i class="fa fa-paper-plane"></i></span>
    </div>
</div>
  </div>
</template>

<script>
import {mapState,mapMutations} from 'vuex'
export default {
  data () {
    return {
      msgArr:[
        {content:"在吗"},
      ],
      p1msg:'',
      p2msg:'',

    }
  },
  methods: {
    ...mapMutations([

    ]),
    fdj(i) {
      if (i) {
        return i.replace(/\吗？?/g,"您马").replace(/\你/g,"我").replace(/\什么/g,"鸡")+'!'
      }else {
        return '说你🐎呢'
      }
    },

    dealMsg() {
      if (this.p1msg)
        var str = this.p1msg;
        this.msgArr.push({content:str,flag:true})
        this.p1msg = ''
        this.$nextTick(() => {
          var div = document.getElementById('chatContainer')
          div.scrollTop = div.scrollHeight
        })
    },
  },
  computed: {
    ...mapState([

    ])
  },

}

</script>

<style lang="scss" scoped>

.isqq {
  // margin-right: 6rem;
}
.w5 {
  width: 5rem;
}

.p1 {
  .uh {
    float: right;
    .uhp {

      // transform: translateX(-7rem) translateY(-4.2rem);
      background: #fff;
      padding: .5rem 1rem;
      word-break: break-all;
      max-width: 30rem;
      float: right;
      margin-right: 1rem;
      border-radius: .7rem;
    }
    .userh {
      width: 5rem;
      height: 5rem;
      border-radius: 5rem;
      overflow: hidden;
      float: right;
    }
  }
}


.p2 {
  .uhr {
    float: left;
    .uhp {
      // transform: translateX(-7rem) translateY(-4.2rem);
      background: #ff6b6b;
      color: #fff;
      padding: .5rem 1rem;
      word-break: break-all;
      max-width: 30rem;
      border-radius: .7rem;
      margin-left: 6rem;
    }
    .userh {
      width: 5rem;
      height: 5rem;
      border-radius: 5rem;
      overflow: hidden;
      float: left;
    }
  }
}

.fdj {
  position: fixed;
  bottom: 0;
  left: 0;
}

.input-group-addon {
  padding: 6px 12px;
  font-size: 14px;
  font-weight: 400;
  line-height: 1;
  color: #ff2020;
  text-align: center;
  background-color: #fff;
  border: none;
  border-radius: 0px;
}

.form-control {
  display: block;
  width: 100%;
  height: 4rem;
  padding: 6px 12px;
  font-size: 14px;
  line-height: 1.42857143;
  color: #555;
  background-color: #fff;
  background-image: none;
  border: none;
  border-radius: 4px;
  -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
  box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
  -webkit-transition: border-color ease-in-out .15s,-webkit-box-shadow ease-in-out .15s;
  -o-transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
  transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
}
</style>
