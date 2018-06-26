//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
   array:[1,2,3],
   condition:false,
   flag:true

  },
  addList: function () {
    var num = parseInt(Math.random(1,10)*10)
    this.data.array.push(num)
    this.data.condition = false
    this.data.flag = true
    this.setData({
      array: this.data.array,
      condition: this.data.condition
    })
    
  },
  editList:function(e){
    console.log(e)
    var num = parseInt(Math.random(1, 10) * 100)
    var index = e.target.dataset.index
    this.data.array[index] = num
    this.setData({
      array: this.data.array
    })
  },
  locationPop:function(){
    wx.navigateTo({
      url: '../pop/index'
    })

  },
  removeList:function(){
    if(this.data.flag){
      if (this.data.array.length == 0) {
        this.data.condition = true
        this.setData({
          condition: this.data.condition
        })
        this.data.flag = false
      } else {
        this.data.array.pop()
        this.setData({
          array: this.data.array
        })
        this.data.flag = true
      }
    }

    
  },
  
  onLoad: function () {
  console.log('world')
  },

})
