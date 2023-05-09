import axios from 'axios'
import { Toast } from 'vant'

const http = axios.create({
  baseURL: 'https://m.maizuo.com',
  timeout: 10000,
  headers: {
    'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"16347397853235755346362369","bc":"110100"}'
  }
})

// 在发送请求之前
http.interceptors.request.use(function (config) {
  // 显示加载中的提示
  Toast.loading({
    message: '加载中...',
    forbidClick: true,
    duration: 0
  })
  return config
}, function (error) {
  return Promise.reject(error)
})

// 在请求完成之后
http.interceptors.response.use(function (response) {
  // 关闭提示
  Toast.clear()
  return response
}, function (error) {
  // 关闭提示
  Toast.clear()
  return Promise.reject(error)
})

export default http
