Page({
  data: {
    id: '',
    title: '',
    detail: '',
    content: [],
    readcount: 0
  },
  onLoad(options){
    this.setData({
      id: options.id
    })
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
        this.setData ({
          title: detail.title,
          detail: detail.source + '    ' + detail.date.substring(11, 16),
          readcount: '阅读 ' + detail.readCount,
          content: detail.content,
        })
      },
    })
  }
})