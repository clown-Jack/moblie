<template>
  <van-tabs>
    <van-tab v-for="(item,index) in tabArr" :title="item.title" :key="index">
      <slot ></slot>
    </van-tab>
  </van-tabs>
</template>
<script>
import { Tab, Tabs } from "vant";
export default {
  components: {
    [Tab.name]: Tab,
    [Tabs.name]: Tabs
  },
  props:{
     tabArr:{
         type:Array,
         default:()=>{}
     }
  }
};
</script>
