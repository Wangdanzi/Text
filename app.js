//app.js
App({
  globalData: 1,
  onLaunch(options) { // Do something initial when launch.
    // console.log(options)
  },
  onPageNotFound(res) {
    // console.log(res)
  },
  onShow(options) {// Do something when show.
    // console.log(options) 
  },
  onHide() { // Do something when hide.
  },
  onError(msg) {
    console.log(msg)
  },
})
