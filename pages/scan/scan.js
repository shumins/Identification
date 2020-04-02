//scan.js
//获取应用实例
const app = getApp()

Page({
    data:{
        result:''
    },
    onLoad:function(){},
    // 扫一扫
    getScancode:function(){
        let that = this
        wx.scanCode({
            success:(res) =>{
                // console.log('res',res)
                let result = res.result
                that.setData({
                    result:result
                })
                wx.navigateTo({
                    url: "/pages/list/list"
                })
            }
            
        })
    }
})