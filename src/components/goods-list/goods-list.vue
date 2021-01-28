<template>
  <view class="goods_list">
    <view class="goods_item" v-for="item in goods" :key="item.goods_id">
      <image :src="item.show.img" mode="" />
      <view class="price">
        <text>￥{{ item.price }}</text>
        <text>{{ item.orgPrice }}</text>
      </view>
      <view class="name">{{ item.title }}</view>
    </view>
  </view>
</template>

<script>
export default {
  props: {
    goods: {},
  },
  data: () => ({}),
  computed: {},
  methods: {},
  watch: {},

  // 组件周期函数--监听组件挂载完毕
  mounted() {},
  // 组件周期函数--监听组件数据更新之前
  beforeUpdate() {},
  // 组件周期函数--监听组件数据更新之后
  updated() {},
  // 组件周期函数--监听组件激活(显示)
  activated() {},
  // 组件周期函数--监听组件停用(隐藏)
  deactivated() {},
  // 组件周期函数--监听组件销毁之前
  beforeDestroy() {},
};
</script>

<style lang="scss">
.goods_list {
  padding: 0 15rpx;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .goods_item {
    background-color: #fff;
    width: 355rpx;
    margin: 10rpx 0;
    padding: 15rpx;
    box-sizing: border-box;
    image {
      display: flex;
      margin: auto;
      width: 95%;
      height: 420rpx;
    }
    .price {
      color: $shop-color;
      font-size: 36rpx;
      padding: 10rpx 0 5rpx;
      text:nth-child(2) {
        color: #ccc;
        font-size: 26rpx;
        margin-left: 17rpx;
        text-decoration: line-through;
      }
    }
    .name {
      font-size: 28rpx;
      line-height: 50rpx;
      padding: 5rpx 0 10rpx;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
}
</style>
