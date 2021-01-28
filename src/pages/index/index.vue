<template>
  <view class="index">
    <swiper
      class="swiper"
      :indicator-dots="indicatorDots"
      :autoplay="autoplay"
      :interval="interval"
      :duration="duration"
    >
      <swiper-item v-for="(item,index) in swipers" :key="index">
        <image :src="item.image" mode="" />
      </swiper-item>
    </swiper>
    <view class="nav">
      <view
        class="nav-item"
        v-for="(item, index) in navs"
        :key="index"
        @click="navItemClick(item.path)"
      >
        <view :class="item.icon"></view>
        <text>{{ item.title }}</text>
      </view>
    </view>
    <view class="hot_goods">
      <view class="tit">推荐商品</view>
      <goods-list :goods="goodsitem"></goods-list>
    </view>
  </view>
</template>

<script>
import { getGroomList, getGoodsItem } from "../../api/api";
import GoodsList from "../../components/goods-list/goods-list";
export default {
  data() {
    return {
      swipers: {},
      indicatorDots: true,
      autoplay: true,
      interval: 2000,
      duration: 500,
      goodsitem: {},
      navs: [
        {
          icon: "iconfont icon-ziyuan",
          title: "黑马超市",
          path: "/pages/goods/goods",
        },
        {
          icon: "iconfont icon-guanyuwomen",
          title: "联系我们",
          path: "/pages/contact/contact",
        },
        {
          icon: "iconfont icon-tupian",
          title: "社区图片",
          path: "/pages/pics/pics",
        },
        {
          icon: "iconfont icon-shipin",
          title: "学习视频",
          path: "/pages/videos/videos",
        },
      ],
      page:1
    };
  },
  components: { GoodsList },
  onLoad() {
    this.getSwipers();
    this.getGoodsItem();
  },
  methods: {
    getSwipers() {
      // 使用了事件总线
      // this.$request({
      //   url: "/home/swiperdata",
      // }).then((res) => {
      //   console.log(res);
      //   this.swipers = res.message;
      // });
      getGroomList().then((res) => {
        console.log(res);
        this.swipers = res.data.banner.list;
      });
    },
    getGoodsItem() {
      getGoodsItem(this.page).then((res) => {
        console.log(res);
        this.goodsitem = res.data.list;
      });
    },
    navItemClick(url) {
      uni.navigateTo({
        url,
      });
    },
  },
};
</script>

<style lang="scss">
.swiper {
  width: 750rpx;
  height: 380rpx;
  image {
    height: 100%;
    width: 100%;
  }
}
.nav {
  display: flex;
  margin: 5rpx;
  .nav-item {
    text-align: center;
    flex: 1;
    view {
      width: 120rpx;
      height: 120rpx;
      background-color: $shop-color;
      border-radius: 120rpx;
      color: #fff;
      margin: 10rpx auto;
      line-height: 120rpx;
      font-size: 50rpx;
    }
    .icon-tupian {
      font-size: 45rpx;
    }
    text {
      font-size: 30rpx;
    }
  }
}
.hot_goods {
  background-color: #eee;
  overflow: hidden;
  margin-top: 20rpx;
  .tit {
    height: 100rpx;
    line-height: 100rpx;
    text-align: center;
    background-color: #fff;
    letter-spacing: 40rpx;
    text-indent: 1em;
    margin: 5rpx 0;
    color: $shop-color;
  }
}
</style>
