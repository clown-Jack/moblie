<template>
  <div class="">
      <vant-image width="100" height="100" src="https://img.yzcdn.cn/vant/cat.jpeg" />
      <p class="card-title">{{title}}</p>
      <p class="card-desc">{{desc}}</p>
  </div>
</template>
<script>
import {Image as VanImage } from "vant";
export default {
  components: {
    [VanImage.name]:VanImage
  },
  props:{
      title:{
          type:String,
          default:"111"
      },
      desc:{
          type:String,
          default:"2222"
      }
  }
};
</script>
