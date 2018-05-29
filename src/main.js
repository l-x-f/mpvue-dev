import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()

export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: ['pages/login/main','pages/logs/main', '^pages/index/main','pages/counter/main'],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: '微信',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      list: [
        {
          pagePath: "pages/index/main",
          text: "活动",
          iconPath: 'images/index.png',
          selectedIconPath: 'images/index.png',
        },  
        {
          pagePath: "pages/logs/main",
          text: "社群",
          iconPath: 'images/log.png',
          selectedIconPath: 'images/log.png',
        },
        {
          pagePath: "pages/counter/main",
          text: "我",
          iconPath: 'images/log.png',
          selectedIconPath: 'images/log.png',
        }
      ],
      color: '#ccc',
      selectedColor: '#f4d020',
    },
  }
}
