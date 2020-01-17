import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/Home'
import MetroGroup from '@/components/groups/MetroGroup'
import AddRecord from '@/components/questions/AddRecord'
import ListRecord from '@/components/questions/ListRecord'
Vue.use(Router)

export default new Router({
  routes: [

    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/index',
      name: 'metroGroup',
      component: MetroGroup
    },
    {
      path: '/addRecord',
      name: 'AddRecord',
      component: AddRecord
    },
     {
      path: '/listRecord',
      name: 'ListRecord',
      component: ListRecord
    },
  ]
})
