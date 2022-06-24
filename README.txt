// 分别运行subapp 与subapp2

// 主应用配置qiankun app = [
//   {
//     name: 'micro-app1',
//     entry: '//0.0.0.0:8081/',                
//     container: '#micro-app-container',      // 主应用DOM id,可在主应用自定义配置
//     activeRule: '/reactSubApp'
//   },
//   {
//     name: 'micro-app2',
//     entry: '//0.0.0.0:8082/',
//     container: '#micro-app-container',      // 主应用DOM id,可在主应用自定义配置
//     activeRule: '/vueSubApp'
//   }
// ]

// enjoy

// author: Alex-run


## 坑s

# css样式污染
用postcss-plugin-namespace插件，给子应用所有class增加统一的全局前缀，使其与主应用样式名隔离开
