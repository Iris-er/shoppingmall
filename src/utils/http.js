import axios from 'axios'
// import router from './router'
import { getToken, setToken } from './storage'
// 创建axios实例
const service = axios.create({
    baseURL: process.env.VUE_APP_VERSION, // api 的 base_url
    timeout: 5000 // 请求超时时间
})
//拦截request请求
axios.interceptors.request.use(
    config => {
        // console.log(config.data)
        config.headers['Authorization'] = getToken()
        config.headers['Cache-Control'] = 'no-cache'
        return config
    },
    error => {
        // Toast('网络繁忙，请稍后再试...')
        console.log('网络繁忙，请稍后再试...')
        Promise.reject(error)
    }
)

//拦截response回调
axios.interceptors.response.use(
    response => response.data,
    // response => {
    // if (response.status === 200) {
    // const data = response.data
    // if (data.code === 400){
    //     //登录过期,权限不足
    //     console.warn("登陆过期");
    //     //清除token
    //     store.commit('setToken','')
    //     window.localStorage.removeItem('token')
    //     //跳转登录
    //     router.replace({
    //         path:"/login"
    //     })
    // }

    // }
    error => {
        let str = '网络繁忙，请稍后再试...'
        if (error.response.status === 500) {
            str = '服务器内部出错...'
        } else if (error.response.status === 404) {
            str = '服务不存在...'
        } else {
            str = msg
        }
        // Toast(str)
        console.log(str)
        return Promise.reject(error)
    }
    // return response
    // }
)
export default service