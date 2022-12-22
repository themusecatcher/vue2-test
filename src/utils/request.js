import axios from 'axios'
import { VueAxios } from './axios'
import { appkey, getSigncode } from './signaturePro'

// 创建 axios 实例
const request = axios.create({
  // API 请求的默认前缀
  baseURL: process.env.VUE_APP_API_BASE_URL,
  timeout: 6000 // 请求超时时间
})

// 异常拦截处理器
const errorHandler = error => {
  if (error.response) {
    const data = error.response.data
    console.log(data)
  }
  return Promise.reject(error)
}

// 请求拦截器
request.interceptors.request.use(config => {
  console.log('request:', config)
  const now = new Date().getTime()
  if (config.method === 'get') {
    config.params = {
      appkey: appkey,
      timestamp: now,
      platformId: 25,
      ...config.params
    }
    config.params.signcode = getSigncode(config.params, config.method)
  }
  return config
}, errorHandler)

// request interceptor
// request.interceptors.request.use(config => {
//   let signcode = ''
//   const time = new Date().getTime()
//   console.log('request config:', config)
//   const token = storage.get('TOKEN') || ''
//   const uid = storage.get('UID') || ''
//   function addToken (data) {
//     return {
//       token: token,
//       uid: uid,
//       ...data
//     }
//   }
//   if (config.method === 'get') {
//     config.params = {
//       appkey: appkey,
//       timestamp: time,
//       platformId: 25,
//       ...config.params
//     }
//     if (token) {
//       config.params = addToken(config.params)
//     }
//     signcode = getSigncode(config.params, config.method)
//     config.params.signcode = signcode
//   }
//   if (config.method === 'post') {
//     if (Object.prototype.toString.call(config.data) === '[object FormData]') {
//       config.data.set('platformId', 25)
//       config.data.set('appkey', appkey)
//       config.data.set('timestamp', time)
//       if (token) {
//         config.data.set('token', token)
//         config.data.set('uid', uid)
//       }
//       signcode = getSigncode(config.data, config.method)
//       config.data.set('signcode', signcode)
//     } else {
//       config.data = {
//         appkey: appkey,
//         timestamp: time,
//         platformId: 25,
//         ...config.data
//       }
//       if (token) {
//         config.data = addToken(config.data)
//       }
//       signcode = getSigncode(config.data, config.method)
//       config.data.signcode = signcode
//     }
//   }
//   return config
// }, errorHandler)

// response interceptor
request.interceptors.response.use(response => {
  return response.data
}, errorHandler)

const installer = {
  vm: {},
  install (Vue) {
    Vue.use(VueAxios, request)
  }
}

export default request

export { installer as VueAxios, request }
