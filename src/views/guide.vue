<template>
  <div class="guide-contant">
    <div class="guide-gonum" @click="leaveGuide">
      <span>{{ num }}</span
      >跳过
    </div>
    <van-swipe :autoplay="autoplay" :loop="false" indicator-color="red" style="z-index:99">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" height="100%" width="100%" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>
<script>
import Vue from "vue";
import { Swipe, SwipeItem } from "vant";
export default {
  name: "guide",
  data() {
    return {
      images: [
        require("@/assets/image/guide/guideOne.png"),
        require("@/assets/image/guide/guideTwo.png"),
        require("@/assets/image/guide/guideThree.png")
      ],
      autoplay: 3000,
      num: 5,
      timer:null
    };
  },
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem
  },
  mounted() {
    this.initGuide();
  },
  methods: {
    initGuide() {
      this.timer = setInterval(() => {
        this.num--;
        if (this.num == -1) {
           this.leaveGuide();
        }
      }, 1800);
    },
    leaveGuide(){
        clearInterval(this.timer);
        localStorage.setItem("isguide",true);
        this.$router.push("/")
    }
  }
};
</script>
<style lang="scss" scoped>
.van-swipe__indicators >>> .van-swipe__indicator {
  border-color: #cccccc;
}
.guide-contant {
  position: relative;
  .guide-gonum {
    position: absolute;
    right: 10px;
    top: 10px;
    z-index: 100;
    font-size: 14px;
    width: 60px;
    height: 20px;
    line-height: 20px;
    border-radius: 10px;
    border: 1px solid #e5e5e5;
    background: rgba($color: #000000, $alpha: 0.1);
    span {
      margin-right: 5px;
    }
  }
}
</style>
