import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/login/login'
import Home from '@/views/Home.vue'
import HomePage from '@/views/homePage/homePage.vue'
import ResCatalog from '@/views/resCatalog/resCatalog.vue'
import APIData from '@/views/APIData/APIData.vue'
import API from '@/views/API/API.vue'
import MicroService from '@/views/microService/microService.vue'
import DepartDemand from '@/views/departDemand/departDemand.vue'
import ShareIndex from '@/views/shareIndex/shareIndex.vue'
import PolicyInfo from '@/views/policyInfo/policyInfo.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login,
      hidden: true,
      meta: {title: '首页'},

    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      hidden: true,
      meta: {title: '首页'},
      children: [
        {path: '', name: '首页', component: HomePage,meta: { requireAuth: true}},
        {path: '/HomePage', name: '首页', component: HomePage,meta: { requireAuth: true}},
        {path: '/ResCatalog', name: '资源目录', component: ResCatalog,meta: { requireAuth: true}},
        {path: '/APIData', name: '云数据', component: APIData,meta: { requireAuth: true}},
        {path: '/API', name: '云接口', component: API,meta: { requireAuth: true}},
        {path: '/MicroService', name: '云服务', component: MicroService,meta: { requireAuth: true}},
        {path: '/DepartDemand', name: '部门需求', component: DepartDemand,meta: { requireAuth: true}},
        {path: '/ShareIndex', name: '共享指数', component: ShareIndex,meta: { requireAuth: true}},
        {path: '/PolicyInfo', name: '政策资讯', component: PolicyInfo,meta: { requireAuth: true}},
      ]
    }
  ]
})
