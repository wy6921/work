import VueRouter from 'vue-router'

import List from '../Day03/List.vue'
import Login from './Login.vue'
import Detail from './Detail.vue'

let router = new VueRouter({
     routes: [
         { path: '/', redirect: '/list' },
         {
             path: '/login',
             component: Login,
             meta: { isLogin: false } //不需要验证权限即可进入的页面
         },
         {
             path: '/list',
             component: List,
             meta: { 
                 isLogin: false,  //不需要登录权限验证  
                 keepAlive: true //是否缓存 
            } 
         },
         {
             path: '/list/detail',
             component: Detail,             
             meta: { isLogin: true } //需要登录权限验证
         }
     ]
})

router.beforeEach((to, from, next) => {
    let isLogin = sessionStorage.getItem('isLogin') 
    if (isLogin) { //已经登录
        next()
    } else { //未登录
        if (to.meta.isLogin) {  //需要登录才能进入
            next({
                    path: '/Login'
                })
        } else {
            next()
        }
    }
})

export default router;