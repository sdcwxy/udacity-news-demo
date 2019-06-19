const TitleName = {
  'gn': '国内',
  'gj': '国际',
  'cj': '财经',
  'yl': '娱乐',
  'js': '军事',
  'ty': '体育',
  'other' : '其他'
}

Page({
  data: {
    newsList: [],
    title: 'gn',
  },
  onLoad() {
    this.getNews()
  },
  getNews(){
    wx.request({
      url: 'https://test-miniprogram.com/api/news/list',
      data: {
        type: this.data.title,
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: res => {
        console.log(this.title)
        let result = res.data.result
        console.log(result)
        let newsList = []
        for (let i = 0; i < result.length; i++) {
          newsList.push({
            id: i,
            title: result[i].title,
            detail: result[i].source + '    ' + result[i].date.substring(11, 16),
            img: result[i].firstImage
          })
        }
        console.log(newsList)
        this.setData({
          newsList: newsList
        })
      }
    })
  }
})