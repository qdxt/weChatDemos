//index.js
//获取应用实例
const app = getApp()
let randomArr = [1,2,3,4,5,6,7,8].sort(function(){
  return 0.5-Math.random();
})
console.log(randomArr)
Page({
  data: { // 参与页面渲染的数据
    array: randomArr
  },
  onLoad: function () {
    // 页面渲染后 执行
  }
})
