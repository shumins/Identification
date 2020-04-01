//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    code:'0',
    motto: '防伪标识码:',
    userInfo: {},
    hasUserInfo: false,
 
  },
  //事件处理函数
  bindViewTap: function() {
  },
  onLoad: function (options) {
     if (options.scene != undefined) {   //微信直接扫码
      var scan_url = decodeURIComponent(options.scene);
       this.setData({
         code: scan_url
       })
      }
      if(options.q != undefined){
        var scan_url = decodeURIComponent(options.q).split('=')[1];
        this.setData({
          code: scan_url
        })
      }
    // } else {    //微信内部扫一扫
    //   this.setData({
    //     // goods_id: options.goodsid, 
    //     code: options.gcode
    //   })
    // }

   

  }

})
