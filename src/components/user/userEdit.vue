<template lang="html">
  <div class="userEdit">
    <div class="pop" v-show="pop">
      <div class="input">
        <div class="form-group">
          <label for="inputEmail3" class="col-sm-2 control-label">新名字</label>
          <div class="col-sm-10">
            <input type="text" class="form-control" placeholder="name" v-model.lazy="newName">
          </div>
        </div>
        <div class="form-group">
          <label for="inputPassword3" class="col-sm-2 control-label">性别</label>
          <div class="col-sm-10">
            <input type="text" class="form-control" placeholder="sex" v-model.lazy="newSex">
          </div>
        </div>
        <div class="form-group">
          <label for="inputPassword3" class="col-sm-2 control-label">手机号</label>
          <div class="col-sm-10">
            <input type="text" class="form-control" placeholder="phone" v-model="newPhone">
          </div>
        </div>
        <button class="btn btn-default" @click="editOpen(newName,newSex,newPhone)">提交</button>
      </div>
    </div>
    <div class="head">
      <span class="h4">我的资料</span>
      <span class="fa fa-chevron-left posaLeft posa" @click="backUser"></span>
    </div>

    <div class="warp clearfix">
      <div class="userh">
        <label for="removeHead">
          <div class="fix" :style="{backgroundImage:'url('+user.head+')'}">
            <!-- <img :src="user.head" alt=""> -->
          </div>
        </label>
        <input type="file" id="removeHead"  accept="image/*" capture="camera" style="display:none" @change="getBg($event)">
        <!-- <div class="posr">
          <i class="fa fa-cog"></i>
        </div> -->
      </div>

      <ul class="msg"  @click="editOpen()">
        <li class="clearfix">
          <p>昵称</p>
          <span class="pull-right">
            {{user.name}}
            <i class="fa fa-chevron-right"></i>
          </span>
        </li>
        <li class="clearfix">
          <p>性别</p>
          <span class="pull-right">
            {{user.sex}}
            <i class="fa fa-chevron-right"></i>
          </span>
        </li>
        <li class="clearfix">
          <p>手机号码</p>
          <span class="pull-right">
            {{user.phone}}
            <i class="fa fa-chevron-right"></i>
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import {mapState,mapMutations} from 'vuex'
export default {
  data () {
    return {
      pop:false,
      newName:'',
      newSex:'',
      newPhone:'',
    }
  },
  methods: {
    ...mapMutations([
      'upUserDate'
    ]),
    backUser() {
      this.$router.push({name:'user'});
      this.$store.state.mainNavShow = true;
      this.$store.state.userwarp = 0;
    },
    getBg(event) {
      let _this = this;
      var file = event.target.files[0];
      var reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function () {
          var data64 = reader.result;
          _this.user.head = data64;
      }
    },
    editOpen(n,s,p) {
      this.newName = this.user.name
      this.newSex = this.user.sex
      this.newPhone = this.user.phone
      this.upUserDate({n,s,p});
      this.pop = !this.pop
    }
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
.userEdit {
  height: 100%;
  width: 100%;
  background: #fff;
}

.form-group {
  overflow: hidden;
}

.pop {
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(14, 14, 14, 0.74);
  z-index: 999;
  .input {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    width: 65%;
    background: #fff;
    margin: auto;
    height: 50%;
    padding: 2rem;
    border-radius: 1rem;
    .btn {
      width: 100%;
    }
    .control-label {
      // color: #fff
    }
  }
}

.head {
  background: #fff;
  box-shadow: 0px -6px 18px #0b0b0b;
  z-index: 9;
  .fa-chevron-left {
    top: 1.5rem;
    font-size: 2rem;
    left: .5rem;
  }
}
.userh {
  position: relative;
  text-align: center;
  .fix {
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover,100%;
    height: 8rem;
    width: 8rem;
    overflow: hidden;
    margin: 8rem auto 2rem auto;
    border-radius: 5rem;
    position: relative;
  }
  .posr {
    width: 8rem;
    margin: 0 auto;
    height: 8rem;
    i {
      position: absolute;
      z-index: 2;
      top: 5rem;
      left: 5.5rem;
      font-size: 3rem;
      color: rgba(#000000, 0.67)
    }
  }

  p {
    text-align: center;
    margin: 0;
  }
  .grey {
    font-size: 1.5rem;
    color: rgb(130, 130, 130);
  }
}

.msg {
  li {
    padding: 1rem;
    margin: 0 1rem;
    border-bottom: 1px solid #ededed;
    p {
      float: left;
      margin: 0;
      font-size: 1.5rem;
      color: #858383
    }
  }
}
</style>
