// pages/reg/index.js
let app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userName:'',
    passWord:'',
    confirmPassword:'',
    flag:false,
    message:'',
    condition:false,
    sex:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  
  },
  //获取用户名
  inputText:function(e){
    this.setData({
      userName:e.detail.value
    })
  },
  // 获取密码
  passwordText:function(e){
    this.setData({
      passWord:e.detail.value
    })
  },
  confirmPasswordText:function(e){
    this.setData({
      confirmPassword: e.detail.value
    })
  },
  regTap: function (e) {
    let reg = /^1\d{10}$/
    //判断手机号空弹窗
      if (this.data.userName === '') {
        this.setData({
          flag: true,
          message: '手机号不能为空'
        })
        this.showMessage()
        app.globalData.userName = null;
        app.globalData.passWord = null;
      }
      //判断密码是否为空
      else if (this.data.userName != '' && this.data.passWord === '') {
        this.setData({
          flag: true,
          message: '密码不能为空'
        })
        this.showMessage()
        app.globalData.userName = null;
        app.globalData.passWord = null;
      }
      //判断两次输入密码是否一致
      else if (this.data.passWord != this.data.confirmPassword) {
        this.setData({
          flag: true,
          message: '两次密码输入不一致'
        })
        this.showMessage()
        app.globalData.userName = null;
        app.globalData.passWord = null;
      }
      //验证手机号
      else if (!reg.test(this.data.userName)) {
        this.setData({
          flag: true,
          message: '手机号码输入不合法'
        })
        this.showMessage()
        app.globalData.userName = null;
        app.globalData.passWord = null;
      } else if (this.data.sex===null){
        this.setData({
          flag: true,
          message: '请选择性别'
        })
        this.showMessage()
        app.globalData.userName = null;
        app.globalData.passWord = null;
      }else{
        //存储用户名 和密码
        app.globalData.userName = this.data.userName;
        app.globalData.passWord = this.data.passWord;
        wx.redirectTo({
          url: '../login/login'
        })
       
      }
  },
showMessage:function() {
  var that = this;
    setTimeout(function () {
      that.setData({
            flag: false,
            message: ''
          })
    }, 2000);
  },
radioChange:function(e){
  this.setData({
    sex: e.detail.value
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