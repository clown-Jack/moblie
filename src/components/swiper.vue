<template>
  <van-swipe
    :autoplay="autoplay"
    :loop="loop"
    :indicator-color="color"
    :width="width"
    :height="height"
    :style="{zIndex}"
  >
    <van-swipe-item v-for="(image, index) in images" :key="index">
      <img v-lazy="image" height="100%" width="100%" />
    </van-swipe-item>
  </van-swipe>
</template>
<script>
import { Swipe, SwipeItem } from "vant";
export default {
  name: "swiper",
  props: {
    zIndex: [String, Number],
    height: [String, Number],
    width: [String, Number],
    autoplay: {
      type: Number,
      default: 0
    },
    color: {
      type: String,
      default: "block"
    },
    images: {
      type: Array,
      default: []
    },
    loop: {
      type: Boolean,
      default: false
    }
  },

  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem
  }
};
</script>