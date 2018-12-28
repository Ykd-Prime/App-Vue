import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
//home
import homepage from '../components/home/home.vue'
//macth
import macthpage from '../components/macth/macth.vue'
import inviteFull from '../components/macth/inviteFull.vue'
//team
import teampage from '../components/team/team.vue'
import trainManage from '@/components/team/trainManage'
import trainDetail from '@/components/team/trainDetail'
import trainEdit from '@/components/team/trainEdit'
import trainHot from '@/components/team/trainHot'
import goldManage from '@/components/team/goldManage'
import isqq from '@/components/team/isqq'
import macthManage from '@/components/team/macthManage'
import taskManage from '@/components/team/taskManage'
import menberManage from '@/components/team/menberManage'
//mainNav
import indexpage from '../components/mainNav.vue'
//chat
import chatpage from '../components/chat/chat.vue'
//user
import userpage from '../components/user/user.vue'
import userEdit from '../components/user/userEdit.vue'
//login
import loginpage from '../components/login/login.vue'

Vue.use(Router)

export default new Router({
  // mode: 'history',//单独页面单独路径
  // base: __dirname,
  // linkActiveClass: 'active', // 更改激活状态的Class值
  routes: [
    {
      path: '/',
      name: 'login',
      component: loginpage
      // component:resolve => require(['../components/home.vue'], resolve) 懒加载
    },
    {
      path: '/home',
      name: 'home',
      component: homepage
      // component:resolve => require(['../components/home.vue'], resolve) 懒加载
    },
    {
      path: '/team',
      name: 'team',
      component:teampage,
      // component: resolve => require(['../components/teampage.vue'], resolve)
      children: [
        {
          path: 'trainManage',
          name: 'trainManage',
          component:trainManage,
          children:[
            {
              path: 'trainDetail',
              name: 'trainDetail',
              component: trainDetail,
              children:[
                {
                  path: 'trainEdit',
                  name: 'trainEdit',
                  component:trainEdit
                }
              ]
            }
          ]
        },
        {
          path: 'goldManage',
          name: 'goldManage',
          component: goldManage
        },
        {
          path: 'isqq',
          name: 'isqq',
          component: isqq
        },
        {
          path: 'macthManage',
          name: 'macthManage',
          component: macthManage
        },
        {
          path: 'menberManage',
          name: 'menberManage',
          component: menberManage
        },
        {
          path: 'taskManage',
          name: 'taskManage',
          component: taskManage
        },
        {
          path: 'trainHot',
          name: 'trainHot',
          component: trainHot,
        },
      ]
    },
    {
      path: '/macth',
      name: 'macth',
      component: macthpage,
      children:[{
        path:'inviteFull',
        name:'inviteFull',
        component:inviteFull,
      }]
    },
    {
      path: '/chat',
      name: 'chat',
      component: chatpage
    },
    {
      path: '/user',
      name: 'user',
      component: userpage,
      children:[
        {
          path:'userEdit',
          name:'userEdit',
          component: userEdit
        }
      ]
    }
  ]
})
