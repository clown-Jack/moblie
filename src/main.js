import Vue from "vue";
import App from "./App.vue";
import router from "./router/index";
import store from "./store/index";
import { Lazyload } from "vant";
import "./lib/rem";
import "./assets/styles/reset.scss";
import animate from 'animate.css';

Vue.use(animate);

//全局懒加载
Vue.use(Lazyload, {
  lazyComponent: true
});
Vue.config.productionTip = false;

//路由守卫,判断是否跳转导航页
router.beforeEach((to, from, next) => {
  if (to.path=="/"&&!localStorage.getItem("isguide")) {
    next("/guide");
  } else {
    next();
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
