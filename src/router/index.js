import Vue from 'vue'
import Router from 'vue-router'
import Example from '@/components/Example'
import SignUp from '@/components/SignUp'
import NewDependence from '@/components/NewDependence'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Example',
      component: Example
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/dependence/new',
      name: 'NewDependence',
      component: NewDependence
    }
  ],
})
