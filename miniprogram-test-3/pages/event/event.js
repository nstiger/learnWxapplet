// pages/event/event.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  tapname:function(event) {
    console.log(event),
    console.log(event.currentTarget.dataset.hi),
    console.log(event.target.dataset.element)
  },

  handletap1:function(e) {
    console.log(e)
  },
  handletap2:function(e){
    console.log(e)
  },
  handletap3:function(e) {
    console.log(e)
  },

  showMusic:function(){
    console.log("showmusic")
    wx.playBackgroundAudio({
      dataUrl: 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46',
      });
    wx.seekBackgroundAudio({
      position: 0
    });
  },

  pauseMusic:function(){
    var THIS = this;
    wx.pauseBackgroundAudio();
    wx.getBackgroundAudioPlayerState({
      success:function(res){
        var currentPosition = res.currentPosition;
        THIS.setData({
          position:currentPosition
        });
      }
    });
  },

  stopMusic:function(){
    wx.stopBackgroundAudio();
  },

  chooseVideo:function(){
    console.log("chooseVideo");
      wx.chooseVideo({

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