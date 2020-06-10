<template>
  <van-search v-model="value" placeholder="请输入搜索关键词" />
</template>
<script>
import { Search } from "vant";
export default {
  name: "search",
  components: {
    [Search.name]: Search
  },
  data() {
    return {
      value: ""
    };
  }
};
</script>