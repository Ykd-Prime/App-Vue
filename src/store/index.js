import {getStore, setStore, removeStore} from '../components/user/utils.js'
export const STORAGE_KEY = 'aki';
import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex);
// state
//  modules: {
//     dialog: dialog_store,
//     other: other,//其他组件
// }
export default new vuex.Store({
  state:{
    navshow:true,
    show:false,
    loadShow:false,
    msg: "成功！",
    // nshow: 0
    nshow: 0,
    mainNavShow:true,
    // h0x x(team页头)
    teamFlag:0,
    h0xToggle:0,
    h1xToggle:0,
    h2xToggle:0,
    h3xToggle:0,
    h4xToggle:false,
    h5xToggle:false,
    h5xToggle:false,

    // h0c c(macth页头)
    macthHeadFlag:0,
    macthFlag:0,
    h0cToggle:0,
    h1cToggle:0,
    h2cToggle:0,
    h3cToggle:0,

    active:true,

    lv:0,
    //聊天数据


    //用户数据
    userwarp:0,
    user:{
      name:'当当当',
      password:'',
      id:'10241',
      sex:'男',
      head:'./static/dang.jpg',
      phone:'17421133233',
      background:'./static/13qpv8blvw3xex6sgnvouqqi0.jpg',
      summary:'朱亚文作为一个射手，不仅有极高的的机动性，而且一技能配合普攻可以打出爆炸性的伤害，使得他前期非常强势，4级之后更是可以单挑.',
    },
    menber:[
      {
        name:'路人A',
        head:'./static/dang.jpg',
        img:'./static/da.jpg'
      },
      {
        name:'路人b',
        head:'./static/logo.png',
        img:'./static/qw.gif'
      },
      {
        name:'路人v',
        head:'./static/13qpv8blvw3xex6sgnvouqqi0.jpg',
        img:'./static/4x.jpg'
      },
    ],
    hotmsg:[{
      name:"default",
      head:'./static/4x.jpg',
      src:['./static/13qpv8blvw3xex6sgnvouqqi0.jpg'],
      msg:'default Copyright (c) 2018 Copyright Holder All Rights Reserved.;'
    }],
    username:'复读鸡',
    userid:'123456',
    userhead:'./static/4x.jpg',
    p2userhead:'./static/dang.jpg',
  },
  mutations: {
    //登陆
    login(state, {username, password}) {
      state.user.name = username;
      state.user.password = password;
      let storage = getStore(STORAGE_KEY);
      // storage.user = state.user;
      setStore(STORAGE_KEY, storage);
    },
    register(state, {username, password}) {
      state.user.name = username;
    },

    //发布动态页 发送数据到hotmsg
    info(state,i) {
      state.hotmsg.push(i)
    },

    // //home页刷新时保存用户动态数据
    // saveMsg(state) {
    //   setStore('biu',a)
    // },
    //
    // infoed(state) {
    //   let date = getStore('biu')
    //   // state.hotmsg.push(date)
    //   console.log(date);
    // },
    upUserDate(state,{n,s,p}) {
      state.user.name = n
      state.user.sex = s
      state.user.phone = p
    },
    // p1聊天数据传输

    // 头部标题联动内容左右切换（滑块）
    headToggle (state, {i,flag}) {
      if (flag === 'h0x') {
        state.h0xToggle = i
      }
      if (flag === 'h1x') {
        state.h1xToggle = i
      }
      if (flag === 'h2x') {
        state.h2xToggle = i
      }
      if (flag === 'h3x') {
        state.h3xToggle = i
      }
      if (flag === 'h0c') {
        state.h0cToggle = i
      }
    },

    //管理页面切换 头部变化
    flag(state,{i}) {
      if (!i){
        state.teamFlag = 0
      }
      state.active = false
      state.teamFlag = i
      state.mainNavShow = false
      if (i === 1) {

      }
      if (i === 2) {

      }
    },

    //返回到team
    backTeam(state, {i}) {
      state.mainNavShow = true;
      state.teamFlag = 0;
    },

    //返回上i级
    back(state,{i}) {
      state.teamFlag = i
    },

    pushitvite(state,{i}) {
      state.macthHeadFlag = i
    },

    pushMacth(state,{i}) {
      state.macthHeadFlag = i
    },

    //去到队伍管理页
    pushNext(state) {
      state.teamFlag = 11;
    },

    //跳转到队伍编辑页
    pushEdit(state) {
      state.teamFlag = 12
    }
  }

})
