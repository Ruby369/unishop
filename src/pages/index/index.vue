<template>
  <view class="index">
    <swiper
      class="swiper"
      :indicator-dots="indicatorDots"
      :autoplay="autoplay"
      :interval="interval"
      :duration="duration"
    >
      <swiper-item v-for="item in swipers" :key="item.goods_id">
        <image :src="item.image_src" mode="" />
      </swiper-item>
    </swiper>
  </view>
</template>

<script>
export default {
  data() {
    return {
      swipers: [],
      indicatorDots: true,
      autoplay: true,
      interval: 2000,
      duration: 500,
    };
  },
  onLoad() {
    this.getSwipers();
  },
  methods: {
    getSwipers() {
      this.$request({
        url: "/home/swiperdata",
      }).then((res) => {
        console.log(res);
        this.swipers = res.message;
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
</style>
