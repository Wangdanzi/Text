const app = getApp()
// pages/tab/index.js
var common = require('./../common/common.js')
Page({
  data: { //页面的初始数据
    text: "Cind",
    data:[1,2,3,4,5],
    item: {
      index: 0,
      msg: 'this is a template',
      time: '2016-09-15'
    },
    // WXS
    array: [1, 2, 3, 4, 5, 1, 2, 3, 4]
  },
  onReady: function () {
    //获得toastedit组件
    this.toastedit = this.selectComponent("#toastedit")

  },
  showToast: function () {
    this.toastedit.showToast('我是传过来的toast内容', 2000)
  },
  onReady: function () {
    //获得dialog组件
    this.dialog = this.selectComponent("#dialog");
  },
  showDialog() {
    this.dialog.showDialog();
  },
  //取消事件
  _cancelEvent() {
    console.log('你点击了取消');
    this.dialog.hideDialog();
  },
  //确认事件
  _confirmEvent() {
    console.log('你点击了确定');
    this.dialog.hideDialog();
  },
  cindy (e) {
    console.log(e)
  },
  tapName(e) {
    console.log(e,'Click')
  },
  helloMINA () {
    common.sayHello('MINA')
  },
  goodbyeMINA () {
    common.sayGoodbye('MINA')
  },
  onTabItemTap(item) {// tab 点击时执行
    this.helloMINA()
    this.goodbyeMINA()
    var app = getApp()
    app.globalData++
    console.log(app.globalData++, app)
  },
  onLoad  (options) {// 页面创建时执行
    this.helloMINA() 
    this.goodbyeMINA() 
    var app = getApp()
    app.globalData++
    console.log(app.globalData++,app)
  },
  onShow  () {// 页面出现在前台时执行
  },
  onReady  () { // 页面首次渲染完毕时执行
  },
  onHide  () {// 页面从前台变为后台时执行
  },
  onUnload  () {// 页面销毁时执行
  },
  onPullDownRefresh  () {// 触发下拉刷新时执行
  },
  onReachBottom  () {// 页面触底时执行
  },
  onShareAppMessage  () {// 页面被用户分享时执行
  },
  onPageScroll  () {// 页面滚动时执行
  },
  onResize  () {// 页面尺寸变化时执行
  }
})