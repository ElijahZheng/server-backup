module.exports = { 
    serverPort: '8765', 

    // 小程序 appId 和 appSecret 
    // 请到 https://mp.weixin.qq.com 获取 AppID 和 AppSecret
    appId: 'wx71a1d8a959a3637e', 
    appSecret: '54c09680708f5b42a5517f1a59390480', 

    // mongodb 连接配置，生产环境请使用更复杂的用户名密码
    mongoHost: '127.0.0.1', 
    mongoPort: '27017', 
    mongoUser: 'weapp', 
    mongoPass: 'weapp-dev', 
    mongoDb: 'weapp'
};
