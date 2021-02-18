<template>
  <view>
    <goods-list :goods="goodsitem"></goods-list>
    <view class="isOver" v-if="flag">-----我是有底线的-----</view>
  </view>
</template>

<script>
import { getGoodsItem } from "../../api/api";
import GoodsList from "../../components/goods-list/goods-list";
export default {
  components: { GoodsList },
  data: () => ({
    goodsitem: [],
    page:1,
    flag:false
  }),
  computed: {},
  methods: {
    getGoodsItem() {
      getGoodsItem(this.page).then((res) => {
        this.goodsitem.push(...res.data.list);
        this.page += 1;
      });
    },
  },
  watch: {},

  // 页面周期函数--监听页面加载
  onLoad() {
    this.getGoodsItem();
  },
  // 页面周期函数--监听页面初次渲染完成
  onReady() {},
  // 页面周期函数--监听页面显示(not-nvue)
  onShow() {},
  // 页面周期函数--监听页面隐藏
  onHide() {},
  // 页面周期函数--监听页面卸载
  onUnload() {},
  // 页面处理函数--监听用户下拉动作
  onPullDownRefresh() {
    uni.stopPullDownRefresh();
  },
  // 页面处理函数--监听用户上拉触底
  onReachBottom() {
    // console.log('触底了');
    this.getGoodsItem();
  },
  // 页面处理函数--监听页面滚动(not-nvue)
  /* onPageScroll(event) {}, */
  // 页面处理函数--用户点击右上角分享
  /* onShareAppMessage(options) {}, */
};
</script>

<style>
.goods_list{
  background-color: #eee;
}
.isOver{
  width: 100%;
  height: 50px;
  line-height: 50px;
  text-align: center;
  font-size: 28rpx;
  background-color: #eee;
}
</style>