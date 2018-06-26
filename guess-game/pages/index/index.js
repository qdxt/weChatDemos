//index.js
//获取应用实例
const app = getApp()
var numAi = 0;
var timer

Page({
  data: {
    winnum:0,
    imageUserScr:'/pages/img/wenhao.png',
    imageAsrc:"/pages/img/wenhao.png",
    imagesrcIndex:"",
    message:"",
    flag:true,
    srcobj:[
      {
        index:2,
        imgSrc: "/pages/img/shitou.png"
      },
      {
        index: 1,
        imgSrc: "/pages/img/jiandao.png"
      },
      {
        index: 3,
        imgSrc: "/pages/img/bu.png"
      }
    ]
      
    
   
  },
  onLoad: function () {
    timer = setInterval(this.move, 100);
  },
  move:function(){
    if (numAi>=3){
      numAi = 0;
    }
    this.setData({
      imageAsrc: this.data.srcobj[numAi].imgSrc,
      imagesrcIndex: this.data.srcobj[numAi].index
    })
    numAi++
  },
  userClick:function(e){
    if(this.data.flag){
      clearInterval(timer);
      var dataIndex = this.data.imagesrcIndex,
        userIndex = e.target.dataset.index;
      console.log(dataIndex)
      console.log(userIndex)
      if (dataIndex < userIndex) {
        this.setData({
          message: "您胜利了，恭喜恭喜！",
          winnum: this.data.winnum += 1
        })

      }
      if (dataIndex == userIndex) {
        this.setData({
          message: "平局,请点击再来按钮重新来一句吧",
        })
      }
      if (dataIndex > userIndex) {
        this.setData({
          message: "您输了,请点击再来按钮重新来一句吧"
        })
      }
      this.setData({
        flag: false,
      })
    }
    

  },
  againClick:function(){
    timer = setInterval(this.move, 100);
    this.setData({
      flag: true,
    })
    this.setData({
      message: "",
    })
  }
})
