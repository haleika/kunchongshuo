import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home/home'
import classList from '@/components/list/list'
import user from '@/components/user/user'
import login from '@/components/user/components/login'
import regist from '@/components/user/components/regist'
import search from '@/components/search/search'
import detailed from '@/components/detailed/detailed'
import Mu from '@/components/muDetailed/Mu'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/classList/:name',
      name: 'classList',
      component: classList
    },
    {
      path: '/user',
      name: 'user',
      component: user,
      redirect:'/user/login',
      children:[
        {
          path:"login",
          name:login,
          component: login
        },
        {
          path:"regist",
          name:regist,
          component: regist
        }
      ]
    },
    {
      path: '/search',
      name: 'search',
      component: search
    },
    {
      path: '/detailed',
      name: 'detailed',
      component: detailed
    },
    {
      path:'/Mu/:name',
      name:'Mu',
      component:Mu
    }
  ]
})
