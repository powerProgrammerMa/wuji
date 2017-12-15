
import Vue from "vue"


import VueRouter from "vue-router"
Vue.use(VueRouter)

// 单文件组件

import Layout from "./layout.vue"
import Home from "./home.vue"
import Main from "./main.vue"
import Login from "./login.vue"
import Register from "./register.vue"
import Share from "./share.vue"


import Diary from "../components/diary.vue"
import My from "../components/my.vue"
import Passer from "../components/passer.vue"


var routes = [
    {
        path:"/index",
        component:Layout,
    },
    {
        path:"/main",
        name:"main",
        component:Main,
        redirect:{name:"diary"},
        children:[
            {path:"diary",name:"diary",component:Diary},
            {path:"my",name:"my",component:My},
            {path:"passer",name:"passer",component:Passer},
        ]
    },
    {
        path:"/login",
        component:Login,
        name:"login"
    },
    {
        path:"/register",
        component:Register,
        name:"register"
    },
    {
        path:"/share",
        component:Share,
        name:"share",
    },
   
    {
         path: '*', redirect: "/index" 
    }
]

const router = new VueRouter({
    mode:"hash",
    routes,
    
});


export default router;