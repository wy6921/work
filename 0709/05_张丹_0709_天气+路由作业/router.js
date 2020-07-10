import Vue from "vue";
import VueRouter from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
import Weather  from "./components/weather.vue";
import Details from "./components/details.vue";
import Login from "./components/login.vue"

Vue.use(VueRouter)

const routes = [
    {
        path:"/helloworld",
        component:HelloWorld
    },
    {
        name:'weather',
        path:"/weather",
        component:Weather,
        meta:{
            keepAlive:true
        }
    },
    {
        name:'details',
        path:"/details",
        component:Details,
        meta:{
            isLogin:true
        }
    },
    {
        name:'login',
        path:"/login",
        component:Login
    }
    // { path: '*', component: NotFoundComponent }

]

var router = new VueRouter({
    routes
})

export default router;

router.beforeEach((to,from,next)=>{
    // let logStatus=sessionStorage.getItem('isLogin')
    // if(logStatus){
    //     next()
    // }else if(to.meta.isLogin){
    //     alert('您还没有登录，请先登录');
    //     next('/login');
    // }
    if(to.path == '/details' && sessionStorage.getItem('isLogin')==null){
      alert('您还没有登录，请先登录');
      next('/login');
    }else{
       next();
    }
  })
