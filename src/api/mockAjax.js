// 对于axios进行二次封装
import axios from 'axios'
// 引入进度条
import nprogress from 'nprogress'
// 引入进度条样式
import "nprogress/nprogress.css"
// start:进度条开始     done:进度条结束

// 1.利用axios对象的方法create，去创建一个axios实例
const requests = axios.create({
    // 配置对象
    baseURL:"/mock",
    timeout: 5000, // 代表请求超时的时间为 5s
})

// 请求拦截器
requests.interceptors.request.use((config)=>{
    // config里有一个属性很重要，headers请求头
    nprogress.start()
    return config;
})

// 响应拦截器
requests.interceptors.response.use((res)=>{
    // 响应成功的回调函数
    nprogress.done()
    return res.data
},(error)=>{
    // 响应失败的回调函数
    // console.log(error)
    // return Promise.reject(new Error('fail'))
    alert("服务器响应数据失败")
})

// 对外暴露
export default requests