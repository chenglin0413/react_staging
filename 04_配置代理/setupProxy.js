const proxy = require('http-proxy-middleware')

module.exports = function(app){
    app.use(
        proxy('/api1',{ //遇見/api1 前墜的請求，就觸發該代理配置
            target:'http://localhost:5000',//請求轉發給誰(port)
            changeOrigin:true,//控制服務器收到的請求頭中host中字段的值
            pathRewrite:{'^/api1':''} //重寫請求路徑
        }),
        proxy('/api2',{
            target:'http://localhost:5001',
            changeOrigin:true,
            pathRewrite:{'^/api2':''}
        })
    )
}