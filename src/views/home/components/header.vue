<template>
  <div class="header">
    <div class="div-header-top">
      <div class="div-header-top-position flex">
        <div class="top-positon">当前定位不在配送范围></div>
        <div class="iconfont icon-lingdang"></div>
      </div>
      <div class="header-search">
        <van-icon name="search" class="search-icon" />
        <span>西瓜</span>
      </div>
    </div>
    <Swiper
      :images="images"
      :autoplay="autoplay"
      :loop="loop"
      :width="width"
      :height="height"
      :zIndex="zIndex"
    ></Swiper>
  </div>
</template>
<script>
import { Icon } from "vant";
import Swiper from "@/components/swiper";
export default {
  name: "home",
  data() {
    return {
      images: [
        require("@/assets/image/banner/banner1.png"),
        require("@/assets/image/banner/banner2.png"),
        require("@/assets/image/banner/banner3.png")
      ],
      loop: true,
      width: "100%",
      height: "200",
      autoplay: 2000,
      zIndex: 99
    };
  },
  components: {
    Swiper,
    [Icon.name]: Icon
  }
};
</script>
<style lang="scss" scoped>
.header {
  position: relative;
  .div-header-top {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 100;
    width: 100%;
  }
}
.div-header-top-position {
  width: 100%;
  font-size: 16px;
  color: #fff;
  padding: 5px 10px;
  box-sizing: border-box;
  .top-positon {
    font-size: 12px;
  }
  .iconfont {
    font-size: 16px;
  }
}
.flex {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.header-search {
  background: #fff;
  box-sizing: border-box;
  height: 20px;
  line-height: 20px;
  margin: 5px 10px;
  border-radius: 10px;
  font-size: 12px;
  span {
    margin-left: 5px;
    display: inline-block;
    line-height: 20px;
  }
  .search-icon {
    line-height: 20px;
  }
}
</style>
