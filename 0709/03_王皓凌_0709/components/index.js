import Vue from 'vue'
import VueRouter from 'vue-router'
// import Login from "../components/Login/Login";
// import child from "../components/Test/child";
// import parent from "../components/Test/parent";
// import Index from "../components/Index/Index";
// import User from "../components/User/User";
// import Right from "../components/Right/Right";
// import Role from "../components/Role/Role";
// import Reports from "../components/Reports/Reports";
// import Echart1 from "../components/Echart1/Echart1";
// import Echart2 from "../components/Echart2/Echart2";
// import Echart3 from "../components/Echart3/Echart3";
// import Echart4 from "../components/Echart4/Echart4";
// import Echart5 from "../components/Echart5/Echart5";
// import Echart6 from "../components/Echart6/Echart6";
// import demo1 from "../components/Test2/demo1.vue"
// import demo2 from "../components/Test2/demo2.vue"
// import demo3 from "../components/Test2/demo3.vue"
// import demo4 from "../components/Test2/demo4.vue"
// import demo5 from "../components/Test2/demo5.vue"
// import demo6 from "../components/Test2/demo6.vue"
// import demo7 from "../components/Test2/demo7.vue"
// import demo8 from "../components/Test2/demo8.vue"
import { from } from 'core-js/fn/array';
const Login = () => import("../components/Login/Login");
const child = () => import("../components/Test/child");
const parent = () => import("../components/Test/parent");
const Index = () => import("../components/Index/Index");
const User = () => import("../components/User/User");
const Right = () => import("../components/Right/Right");
const Role = () => import("../components/Role/Role");
const Reports = () => import("../components/Reports/Reports");
const Echart1 = () => import("../components/Echart1/Echart1");
const Echart2 = () => import("../components/Echart2/Echart2");
const Echart3 = () => import("../components/Echart3/Echart3");
const Echart4 = () => import("../components/Echart4/Echart4");
const Echart5 = () => import("../components/Echart5/Echart5");
const Echart6 = () => import("../components/Echart6/Echart6");
const demo1 = () => import("../components/Test2/demo1.vue");
const demo2 = () => import("../components/Test2/demo2.vue");
const demo3 = () => import("../components/Test2/demo3.vue");
const demo4 = () => import("../components/Test2/demo4.vue");
const demo5 = () => import("../components/Test2/demo5.vue");
const demo6 = () => import("../components/Test2/demo6.vue");
const demo7 = () => import("../components/Test2/demo7.vue");
const demo8 = () => import("../components/Test2/demo8.vue");
Vue.use(VueRouter);
const routes = [
  {
    path: '/',
    redirect: '/login',

  },
  {
    name: 'login',
    path: '/login',
    component: Login,
    meta: {
      title: 'login'
    },

  },

  {
    name: 'index',
    path: '/index',
    component: Index,
    meta: {
      title: 'index'
    },
    beforeEnter: (to, from, next) => {
      // console.log(from)
      // console.log(to)
      if (to.params.password !== '123456'&&to.params.userId==='whl') {
        next(false)
        alert('密码错误！！！')
      }
      else {
        next()
      }
    },

    children: [
      {
        name: 'user',
        path: 'user',
        component: User,
        meta: {
          title: 'user'
        },
      },
      {
        name: 'right',
        path: 'right',
        component: Right,
        meta: {
          title: 'right'
        },
      },
      {
        name: 'role',
        path: 'role',
        component: Role,
        meta: {
          title: 'role'
        },
      },
      {
        name: 'reports',
        path: 'reports',
        component: Reports,
        meta: {
          title: 'reports'
        },
      },
      {
        name: 'echart1',
        path: 'echart1',
        component: Echart1,
        meta: {
          title: 'echart1'
        },
      },
      {
        name: 'echart2',
        path: 'echart2',
        component: Echart2,
        meta: {
          title: 'echart2'
        },
      }, {
        name: 'echart3',
        path: 'echart3',
        component: Echart3,
        meta: {
          title: 'echart3'
        },
      },
      {
        name: 'echart4',
        path: 'echart4',
        component: Echart4,
        meta: {
          title: 'echart4'
        },
      },
      {
        name: 'echart5',
        path: 'echart5',
        component: Echart5,
        meta: {
          title: 'echart5'
        },
      },
      {
        name: 'echart6',
        path: 'echart6',
        component: Echart6,
        meta: {
          title: 'echart6'
        },
      },
      {
        name: 'parent',
        path: 'parent',
        component: parent,
        meta: {
          title: 'parent'
        },
      },
      {
        name: 'child',
        path: 'child',
        component: child,
        meta: {
          title: 'child'
        },
      },
      {
        name: 'demo1',
        path: 'demo1',
        component: demo1,
        meta: {
          title: 'demo1'
        },
        beforeEnter: (to, from, next) => {
          next(false)
          alert('没有权限')
        }
      },
      {
        name: 'demo2',
        path: 'demo2',
        component: demo2,
        meta: {
          title: 'demo2'
        }
      }, {
        name: 'demo3',
        path: 'demo3',
        component: demo3,
        meta: {
          title: 'demo3'
        }
      }, {
        name: 'demo4',
        path: 'demo4',
        component: demo4,
        meta: {
          title: 'demo4'
        }
      }, {
        name: 'demo5',
        path: 'demo5',
        component: demo5,
        meta: {
          title: 'demo5'
        }
      }, {
        name: 'demo6',
        path: 'demo6',
        component: demo6,
        meta: {
          title: 'demo6'
        }
      }, {
        name: 'demo7',
        path: 'demo7',
        component: demo7,
        meta: {
          title: 'demo7'
        }
      }, {
        name: 'demo8',
        path: 'demo8',
        component: demo8,
        meta: {
          title: 'demo8'
        }
      },
    ]
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});


// router.beforeEach((to, from, next) => {
//   console.log(to)
//   if((to.path==='/index')&&(to.params.passwords!=='123456')){
//     next(false)
//   }
//   else
//   {next()}
// })

export default router
