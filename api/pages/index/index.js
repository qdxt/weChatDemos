//index.js
//获取应用实例
const app = getApp()

Page({
  viewClick:function(){
    wx.navigateTo({
      url: '../view/view',
    })
  },
  scrollClick:function(){
    wx.navigateTo({
      url: '../scroll/scroll-view',
    })
  },
  swiperClick:function(){
    wx.navigateTo({
      url: '../swiper/swiper',
    })
  },
  textClick:function(){
    wx.navigateTo({
      url: '../text/index',
    })
  },
  iconClick: function () {
    wx.navigateTo({
      url: '../icon/index',
    })
  },
  progClick: function () {
    wx.navigateTo({
      url: '../progress/index',
    })
  },
  buttonClick: function () {
    wx.navigateTo({
      url: '../button/index',
    })
  },
  checkboxClick: function () {
    wx.navigateTo({
      url: '../checkbox/index',
    })
  },
  formClick: function () {
    wx.navigateTo({
      url: '../form/index',
    })
  },
  inputClick: function () {
    wx.navigateTo({
      url: '../input/index',
    })
  },
  pickerClick: function () {
    wx.navigateTo({
      url: '../picker/index',
    })
  },
  sliderClick: function () {
    wx.navigateTo({
      url: '../slider/index',
    })
  },
  textareaClick: function () {
    wx.navigateTo({
      url: '../textarea/index',
    })
  },
  navigaterClick: function () {
    wx.navigateTo({
      url: '../navigater/index',
    })
  },
  audioClick: function () {
    wx.navigateTo({
      url: '../audio/index',
    })
  },
  videoClick: function () {
    wx.navigateTo({
      url: '../video/index',
    })
  },
  cameraClick: function () {
    wx.navigateTo({
      url: '../camera/index',
    })
  }
  
  
  
  
  
  
  
})
