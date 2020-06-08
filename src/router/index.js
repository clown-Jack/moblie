import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
     {
       path:"/guide",
       component:()=>import("@/views/guide")
     }
  ]
})

export const footNavRoute = [
  {
    path:"/home",
    component:()=>{},
    meta:{
      title:"首页",
      iconClass:"icon-yemian-copy",
      iconfont:"iconfont"
    }
  },
  {
    path:"/sort",
    component:()=>{},
    meta:{
      title:"分类",
      iconClass:"icon-fenleixuanzhong",
      iconfont:"iconfont"
    }
  },
  {
    path:"/menu",
    component:()=>{},
    meta:{
      title:"菜谱",
      iconClass:"icon-caipu",
      iconfont:'iconfont'
    }
  },
  {
    path:"/shopcar",
    component:()=>{},
    meta:{
      title:"购物车",
      iconClass:"icon-gouwuche",
      iconfont:'iconfont'
    }
  },
  {
    path:"/mys",
    component:()=>{},
    meta:{
      title:"我的",
      iconClass:"icon-wode",
      iconfont:'iconfont'
    }
  }
]
