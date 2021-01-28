<template>
  <view>
    <goods-list :goods="goodsitem"></goods-list>
  </view>
</template>

<script>
import { getGoodsItem } from "../../api/api";
import GoodsList from "../../components/goods-list/goods-list";
export default {
  components: { GoodsList },
  data: () => ({
    goodsitem: {},
    page:1
  }),
  computed: {},
  methods: {
    getGoodsItem() {
      getGoodsItem(this.page).then((res) => {
        this.goodsitem = res.data.list;
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

  },
  // 页面处理函数--监听页面滚动(not-nvue)
  /* onPageScroll(event) {}, */
  // 页面处理函数--用户点击右上角分享
  /* onShareAppMessage(options) {}, */
};
</script>

<style>
.goods_list{
  background: #eee;
}
</style>