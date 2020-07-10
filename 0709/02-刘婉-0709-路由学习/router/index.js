import VueRouter from 'vue-router'
import routertest from '../routertest.vue'
import login from '../login.vue'
import daymasg from '../daymsag.vue'

let router=new VueRouter({
    mode: 'history',
    routes:[
        {path:'/',redirect:'/login'},
        {path: '/routertest',
         component:routertest,
         name:'routertest',
         meta:{islogin:false}
        },
        {path: '/day',
        component:daymasg,
        meta:{islogin:true}
    },
        {path: '/login', 
        component:login,
        name:'login',
        meta:{islogin:false}
    },
    ]
})

router.beforeEach((to, from, next) => {  
        let iflogin=sessionStorage.getItem('islogin');
        if (iflogin) {  //已经登陆
            next()
        }
        else {
            if(to.meta.islogin){  //需要登陆
                next({
                    path:'/login'
                })
            }else{     //不需要登录
                next()
            } 
}})



  export default router;

