const TitleName = {
  'gn': '',
  'gj': '',
  'cj': '',
  'yl': '',
  'js': '',
  'ty': '',
  'other' : ''
}


Page({
  data: {
    title: 'title',
    detail:'detail',
    img: '/img/pic.jpg'
  },
  onLoad() {
    wx.request({
      url: 'https://test-miniprogram.com/api/news/list',
      data: {
        type: 'gn',
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: res => {
        let result = res.data.result
        console.log(result)
      }
    })
  }, 
})