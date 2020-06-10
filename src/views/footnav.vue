<template>
  <footer>
    <van-tabbar v-model="active" active-color="#07c160" inactive-color="#000" route>
      <van-tabbar-item v-for="item in footNavRoute" :key="item.meta.title" :to="item.path" replace>
        <span>{{ item.meta.title }}</span>
        <template #icon>
          <span :class="[item.meta.iconClass, item.meta.iconfont]"></span>
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </footer>
</template>
<script>
import { Tabbar, TabbarItem } from "vant";
import { footNavRoute } from "../router/index";
export default {
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem
  },
  data() {
    return {
      active: 0
    };
  },
  computed: {
    footNavRoute() {
      console.log(this);
      return footNavRoute;
    }
  }
};
</script>
<style lang="scss" scoped>
footer {
  span {
    font-size: 14px;
  }
}
</style>
