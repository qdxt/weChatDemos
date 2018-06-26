// pages/login/login.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userName: '',
    passWord: '',
    flag:false,
    message:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },
  //获取用户名
  inputText: function (e) {
    this.setData({
      userName: e.detail.value
    })
  },
  //获取密码
  passwordText: function (e) {
    this.setData({
      passWord: e.detail.value
    })
  },
  loginTap:function(){
    if (this.data.userName === ''){
      this.setData({
        flag: true,
        message: '用户名不能为空'
      })
      this.showMessage()
    } else if (this.data.userName != '' && this.data.passWord===''){
      this.setData({
        flag: true,
        message: '密码不能为空'
      })
      this.showMessage()
    }else if (this.data.userName === app.globalData.userName && this.data.passWord === app.globalData.passWord){
      this.setData({
        flag: true,
        message: '登录成功'
      })
      this.showMessage()
      //最后是一个跳转
      wx.redirectTo({
        url: '../personCenter/index'
      })
    }else{
      this.setData({
        flag: true,
        message: '用户名或密码输入错误'
      })
      this.showMessage()
    }
  },
  showMessage: function () {
    var that = this;
    setTimeout(function () {
      that.setData({
        flag: false,
        message: ''
      })
    }, 2000);
  },
  goReg:function(){
    wx.redirectTo({
      url: '../reg/index'
    })
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