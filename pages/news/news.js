Page({
  data: {
    id: '',
    title: '',
    detail: '',
    paragraph: [],
    img: '',
    readcount: 0
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
        this.setData ({
          title: detail.title,
          detail: detail.source,
          readcount: detail.readCount,
          paragraph: detail.content,
          img: detail.firstImage
        })
      },
    })
  }
})