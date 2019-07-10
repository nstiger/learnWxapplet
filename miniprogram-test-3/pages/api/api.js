// pages/api/api.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

//异步设置缓存
  setStorage: function () {
    wx.setStorage({
      key: 'name',
      data: '张老三',
      success: function (res) {
        console.log(1)
      },
      fail: function (res) { },
      complete: function (res) { },
    });
    wx.setStorage({
      key: 'age',
      data: '18',
      success: function (res) {
        console.log(1)
      },
      fail: function (res) { },
      complete: function (res) { },
    });

    console.log(2)
  },
  
  getStorage:function(){
  wx.getStorage({
    key: 'name',
    success: function(res) {console.log("data:" + res.data )},
    fail: function(res) {},
    complete: function(res) {},
  })
  },

  removeStorage:function(){
  wx.removeStorage({
    key: 'name',
    success: function(res) {
      console.log("data: " + res.data)},
    fail: function(res) {},
    complete: function(res) {},
  })
  },

  clearStorage:function(){
    wx.clearStorage();
  },

  getStorageInfo:function(){
    wx.getStorageInfo({
      success: function(res) {
        console.log(res.keys)
        console.log(res.currentSize)
        console.log(res.limitSize)
      },
      fail: function(res) {},
      complete: function(res) {},
    })
  },

  //同步设置
  setStorageSync: function () {
    wx.setStorageSync("name", "李小四");
    wx.setStorageSync("sex", "男");
    wx.setStorageSync("age", 45)
  },

  getStorageSync: function () {
    var name = wx.getStorageSync("name");
    console.log(name)
  },

  getStorageInfoSync:function(){
    wx.getStorageInfoSync()
  },

//交互反馈api
  showToast:function(){
    wx.showToast({
      title: '成功',
      icon: 'successed',
      image: '',
      duration: 1500,
      mask: true,
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },

showModal:function(){
wx.showModal({
  title: '消息提示框',
  content: '这是消息提示的主要内容',
  showCancel: true,
  cancelText: '取消',
  cancelColor: '',
  confirmText: '确认',
  confirmColor: '',
  success: function(res) {if (res.confirm) {console.log("用户点击确认")}},
  fail: function(res) {},
  complete: function(res) {},
})
},

  showLoading:function(){
    wx.showLoading({
      title: 'downloading',
      mask: true,
      success: function (res) {
        setTimeout(function () {
          wx.hideLoading()
        }, 2000)},
      fail: function(res) {},
      complete: function(res) {},
    })
  },

  showActionSheet: function () {
    wx.showActionSheet({
      itemList: ["一是。。。", "二是。。。", "三是。。。", "四是。。。",],
      itemColor: '',
      success: function (res) { console.log(res.tapIndex) },
      fail: function (res) { },
      complete: function (res) { },
    })
  },



  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})