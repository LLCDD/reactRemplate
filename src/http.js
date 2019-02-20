import axios from 'axios'
import qs from 'qs'
import config from './config'
console.log(config)

const http = axios.create({
    baseURL: config.api_base,
    timeout: 3000,
    transformRequest: [
        function (data, headers) {
            data = data || {}
            // data = qs.stringify(data)
            headers['token'] = localStorage.getItem('token')
            return data
        }
    ]
})


// request 拦截器
http.interceptors.request.use(config => {
    config.data = config.data ? config.data : {}
    if (localStorage.getItem('token') === '') {
        return Promise.reject('请登录后操作')
    } else {
        return config
    }

})


// respone拦截器
http.interceptors.response.use(
    response => {
        let data = response.data

        let msg = data.message || ''
        if (data.code == 401) {
            // 账号禁用
            localStorage.clear()
            //    这里是一个弹框的提示   ---------------
            //     这里是一个路由的跳转  ----------
            // router.replace({ name: 'login' })
            return Promise.reject(new Error(msg))
        } else if (data.code == 403) {
            // 登录失效 需重新登录
            localStorage.clear()
            // Vue.toasted.error('登录失效 需重新登录', { icon: 'error' }).goAway(2000)
            // router.replace({ name: 'login' })
            return Promise.reject(new Error(msg))
        } else if (data.code == 400) {
            return Promise.reject(new Error(msg))
        }
        return data
    },
    error => {
        return Promise.reject(error)
    }
)

export default http