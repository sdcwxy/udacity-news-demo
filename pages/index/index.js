const TitleName = {
  '国内': 'gn',
  '国际': 'gj',
  '财经': 'cj',
  '娱乐': 'yl',
  '军事': 'js',
  '体育': 'ty',
  '其他': 'other' 
}
const Titles = ['国内','国际','财经','娱乐','军事','体育','其他']

Page({
  data: {
    newsList: [],
    currentTitle: '国内',
    titles: Titles,
    titleFontStyle: 'bold'
  },
  onLoad() {
    this.getNews()
  },
  onPullDownRefresh() {
    this.getNews(() => {
      wx.stopPullDownRefresh()
    })
  },
  onTabTap: function(event){
    let title = event.currentTarget.dataset.item
    this.setData({
      currentTitle: title
    })
    this.getNews()
  },
  onDetailTap(event){
    let items = event.currentTarget.dataset.item
    wx.navigateTo({
      url: '/pages/news/news?id=' + items.id,
    })
  },
  getNews(callback){
    wx.request({
      url: 'https://test-miniprogram.com/api/news/list',
      data: {
        type: TitleName[this.data.currentTitle],
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: res => {
        let result = res.data.result
        this.setNewsData(result)
      }, 
      complete: () => {
        callback && callback()
      }
    })
  },
  setNewsData(result){
    let newsList = []
    for (let i = 0; i < result.length; i++) {
      newsList.push({
        index: i,
        title: result[i].title,
        detail: result[i].source + '    ' + result[i].date.substring(11, 16),
        img: result[i].firstImage,
        id: result[i].id
      })
    }
    this.setData({
      newsList: newsList
    })
  }
})