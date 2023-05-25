// app.js
App({
  globalData: {
    userInfo: null,
    screenWidth: 375,
    screenHeight: 667,
    statusHeight: 20,
    contentHeight:500
  },
  onLaunch() {
    wx.getSystemInfo({
        success:(res)=>{
            this.globalData.statusHeight = res.statusBarHeight
            this.globalData.contentHeight=res.screenHeight -res.statusBarHeight - 44
        }
    })


    // 展示本地存储能力
    // const logs = wx.getStorageSync('logs') || []
    // logs.unshift(Date.now())
    // wx.setStorageSync('logs', logs)

    // 登录
    // wx.login({
    //   success: res => {
    //     // 发送 res.code 到后台换取 openId, sessionKey, unionId
    //   }
    // })
  }
})
