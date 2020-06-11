<template>
  <van-grid :square="square" :column-num="colnum">
    <van-grid-item v-for="item in content" :key="item.text" icon="photo-o" :text="item.text" />
  </van-grid>
</template>
<script>
import { Grid, GridItem } from "vant";
export default {
  name: "grid",
  components:{
      [Grid.name]:Grid,
      [GridItem.name]:GridItem
  },
  props:{
      content:{
          type:Array,
          default:()=>[]
      },
      square:{
          type:Boolean,
          default:true

      },
      colnum:{
          type:Number,
          default:4
      }
  }
};
</script>
<style lang="scss">
.van-grid-item__content{
    padding: 0;
}
</style>