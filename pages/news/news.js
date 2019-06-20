Page({
  data: {
    id: '',
    title: '',
    detail: '',
    paragraphOne: '',
    paragraphTwo: '',
    img: '',
    readcount: ''
  },
  onLoad(options){
    this.setData({
      id: options.id
    })
    console.log(this.data.id)
    this.getNews()
  },
  getNews(){
    wx.request({
      url: 'https://test-miniprogram.com/api/news/detail',
      data: {
        id: this.data.id
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: res => {
        let detail = res.data.result
        console.log(detail)
      },
    })
  }
})