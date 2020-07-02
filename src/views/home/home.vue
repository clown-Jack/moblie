<template>
  <div class="home">
    <mobile-header></mobile-header>
    <div class="container">
      <grid :content="content" :colnum="5"></grid>
      <div class="content-small-banner">
        <div
          v-for="(item, index) in smallBanner"
          :key="item.title + index"
          class="small-banner-item"
        >
          <span class="span-weight">{{ item.title }}</span>
          <span class="span-noweight">{{ item.remark }}</span>
          <img src="" />
        </div>
      </div>
      <ul class="content-spike">
        <li class="spkie-li">
          <div class="spike-head">
            <span class="spike-span">秒杀</span>
            <div class="spike-time">
              <span class="spike-time-title">距结束</span>
              <p class="spkie-time-p">
                <timeDown></timeDown>
              </p>
            </div>
          </div>
          <ul class="spike-content">
            <li>
              <img src="" alt="" class="spike-img" />
              <p class="spkie-price">
                <strong>￥<span>5.8</span></strong>
                <span class="spike-no">￥9.9</span>
              </p>
            </li>
            <li>
              <img src="" alt="" class="spike-img" />
              <p class="spkie-price">
                <strong>￥<span>5.8</span></strong>
                <span class="spike-no">￥9.9</span>
              </p>
            </li>
          </ul>
        </li>
        <li class="spike-right-li">
          <div class="spike-right-div">
            <p class="spike-right-p">应季新品</p>
            <span class="spike-right-span-left">初夏享清凉</span>
            <img src="" alt="" class="spike-img" />
          </div>
          <div class="spike-right-div">
            <p class="spike-right-p">品牌肉蛋</p>
            <span class="spike-right-span-right">鸡小胸9.9元</span>
            <img src="" alt="" class="spike-img" />
          </div>
        </li>
      </ul>
    </div>
    <container-tab :tabArr="tabArr">
       <shop-card></shop-card>
    </container-tab>
  </div>
</template>
<script>
import mobileHeader from "./components/header";
import grid from "@/components/grid";
import timeDown from '@/components/timeDown';
import containerTab from './components/containertab';
import shopCard from '@/components/shopCard';
export default {
  name: "home",
  components: {
    mobileHeader,
    grid,
    timeDown,
    containerTab,
    shopCard
  },
  data() {
    return {
      content: [
        {
          id: 1,
          text: "蔬菜豆制品"
        },
        {
          id: 2,
          text: "肉禽蛋"
        },
        {
          id: 3,
          text: "鱼虾贝蟹"
        },
        {
          id: 4,
          text: "水果"
        },
        {
          id: 5,
          text: "乳品早餐"
        },
        {
          id: 6,
          text: "粮油调味"
        },
        {
          id: 7,
          text: "熟食冻品"
        },
        {
          id: 8,
          text: "零食雪糕"
        },
        {
          id: 9,
          text: "酒水饮料"
        },
        {
          id: 10,
          text: "家庭个护"
        }
      ],
      smallBanner: [
        { title: "会员特权", remark: "专享礼包" },
        { title: "天天领钱", remark: "领现金" },
        { title: "精选菜谱", remark: "跟着做" },
        { title: "清凉一夏", remark: "解馋实惠" }
      ],
      tabArr:[
        {
          id:1,
          title:"猜你喜欢"
        },
         {
          id:2,
          title:"家常小炒"
        },
        {
          id:3,
          title:"特价促销"
        },
        {
          id:4,
          title:"菜谱甄选"
        },
        {
          id:4,
          title:"解馋火锅"
        },
        {
          id:4,
          title:"零食加油站"
        },
        {
          id:4,
          title:"当家大菜"
        }
      ]
    };
  }
};
</script>
<style lang="scss">
.container {
  box-sizing: border-box;
  padding: 0px 10px 10px 10px;
  background: linear-gradient(#fff, #f2f3f5, #edeff3);

  #{"/deep/"} .van-grid-item__content::after {
    border: 0px;
  }
  .content-small-banner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
  }
  .small-banner-item {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    background: #fff;
    padding: 5px 10px;
    border-radius: 5px;
    .span-weight {
      font-weight: bold;
      font-size: 14px;
    }
    .span-noweight {
      font-size: 12px;
    }
  }
}
.content-spike {
  margin-top: 10px;
  background: #fff;
  border-radius: 5px;
  display: flex;
  align-items: center;
  flex-direction: row;
  .spike-head {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 5px;
    box-sizing: border-box;
    .spike-span {
      font-weight: bolder;
      font-size: 16px;
    }
    .spike-time {
      display: flex;
      align-items: center;
      margin-left: 10px;
      font-size: 12px;
      .spike-time-title {
        background: linear-gradient(to right, #ea691d, #d4440d, #e80404);
        color: #fff;
        display: inline-block;
        height: 15px;
        line-height: 15px;
        border: 1px solid #ea691d;
        border-bottom-left-radius: 10px;
        border-top-left-radius: 10px;
      }
      .spkie-time-p {
        font-size: 12px;
        border: 1px solid #ea691d;
        border-bottom-right-radius: 10px;
        border-top-right-radius: 10px;
        height: 15px;
        line-height: 15px;
        padding: 0px 2px;
      }
    }
  }
  .spike-content {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    li{
      flex: 1;
    }
  }
  .spike-img {
    width: 50px;
    height: 50px;
    display: block;
  }
  .spkie-li {
    border-right: 1px solid #edeff3;
    flex: 1;
    .spkie-price {
      strong {
        color: red;
        font-size: 12px;
        span {
          font-size: 14px;
          font-weight: bolder;
        }
      }
      .spike-no {
        font-size: 12px;
        text-decoration: line-through;
        color: #ccc;
      }
    }
  }
  .spike-right-li {
    display: flex;
    flex-direction: row;
    flex: 1;
    .spike-right-div {
      border-right: 1px solid #edeff3;
      flex: 1;
      .spike-right-p{
        font-size: 14px;
      }
      .spike-right-span-left{
            font-size: 12px;
            color:green;
        }
        .spike-right-span-right{
            font-size: 12px;
            color: orange;
        }
    }
  }
}
</style>
