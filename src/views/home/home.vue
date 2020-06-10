<template>
  <div class="header">
    <Search class="search"></Search>
    <Swiper
      :images="images"
      :autoplay="autoplay"
      :loop="loop"
      :width="width"
      :height="height"
      :zIndex="zIndex
    "
    ></Swiper>
  </div>
</template>
<script>
import Swiper from "@/components/swiper";
import Search from "@/components/search";
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
    Search
  }
};
</script>
<style lang="scss">
.header {
  position: relative;
  .search {
    position: absolute;
    left: 0;
    top: 10px;
    width: 100%;
    z-index: 100;
  }
}
</style>