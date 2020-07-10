<template>
  <div class="shopCard">
    <van-image fit="contain" src="https://img.yzcdn.cn/vant/cat.jpeg" />
    <p class="card-title">{{ title }}</p>
    <p class="card-desc">{{ desc }}</p>
    <div class="card-bottom">
      <div class="card-price">
        <div class="now-price">
          <em class="card-currency">{{currency}}</em>
          <span class="card-money">{{price}}</span>
        </div>
        <div class="origin-price">
          <em class="card-currency">{{currency}}</em>
          <span class="card-money">{{originPrice}}</span>
        </div>
      </div>
      <van-icon name="add-o" color="#27fa19" size="20" />
    </div>
  </div>
</template>
<script>
import { Image as VanImage, Icon } from "vant";
export default {
  components: {
    [VanImage.name]: VanImage,
    [Icon.name]: Icon
  },
  props: {
    title: {
      type: String,
      default: "111"
    },
    desc: {
      type: String,
      default: "2222"
    },
    currency:{
      type:String,
      default:"￥"
    },
    price:[String,Number],
    originPrice:[String,Number],
  }
};
</script>
<style lang="scss" scoped>
.shopCard {
  width: calc(50% - 20px);
  box-sizing: border-box;
  padding: 10px;
  background: #ffff;
  border-radius: 10px;
  margin: 10px;
}
.card-title {
  text-align: left;
  color: #000;
}
.card-desc {
  text-align: left;
  color: chocolate;
  font-size: 12px;
}
.card-bottom ,.card-price{
   display: flex;
} 
.card-bottom{
  margin-top:10px ;
  justify-content:space-between;
}
.card-price {
  justify-content: flex-start;
}
.now-price {
  .card-currency {
    font-size: 12px;
  }
  color: red;
  line-height: 20px;
  font-size: 14px;
}
.origin-price {
  .card-currency {
    font-size: 12px;
  }
  margin-left: 5px;
  line-height: 20px;
  text-decoration: line-through;
  font-size: 12px;
  color: #e2e2e2;
}
</style>
