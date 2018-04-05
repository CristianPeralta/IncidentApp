import Vue from 'vue'
import Router from 'vue-router'
import Example from '@/components/Example'
import Login from '@/components/Login'
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
      path: '/login',
      name: 'Login',
      component: Login
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
