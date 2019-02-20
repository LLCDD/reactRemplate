module.exports = {
    // 基本路径
    baseUrl: './',
    devServer: {
        host: '0.0.0.0',
        port: 8080,
        https: false,
        proxy: {
            '/api': {
                // target: 'http://min.frqrjg.top',
                target: 'http://mi.frqrjg.top',
                // target: 'http://www.xh356.com',
                // target: 'http://www.xp5.top',
                // target: 'http://hongbao.567nm.cn:81',
                // target: 'http://192.168.0.111',
                // target: "http://192.168.0.193",
                changeOrigin: true
            }
        } // 设置代理
    },

}