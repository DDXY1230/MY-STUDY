import Vue from 'vue'
// 引用axios
import axios from 'axios'

axios.defaults.withCredentials = true
axios.defaults.timeout = 30000

const pending = [] // 声明一个数组用于存储每个ajax请求的取消函数和ajax标识
const removePending = (config) => {
  for (const p in pending) {
    if (pending[p].u === `${config.url}&${config.method}`) { // 当当前请求在数组中存在时执行函数体
      pending[p].f() // 执行取消操作
      pending.splice(p, 1) // 把这条记录从数组中移除
    }
  }
}
const whiteList = []
// 请求拦截
axios.interceptors.request.use((config) => {
  // 设置白名单不拦截
  for (const i of whiteList) {
    if (config.url.indexOf(i) !== -1) {
      return config
    }
  }
  removePending(config) // 在一个ajax发送前执行一下取消操作
  config.cancelToken = new axios.CancelToken((c) => {
    // 添加ajax标识
    pending.push({
      u: `${config.url}&${config.method}`,
      f: c
    })
  })
  // 使用了loading组件
  if (config.loading) {
    config.loading = Vue.prototype.$loading({
      lock: true,
      text: '加载中...',
      background: 'rgba(0, 0, 0, 0.7)'
    })
  }
  return config
}, function(error) {
  return Promise.reject(error)
})
// 回调拦截
axios.interceptors.response.use((res) => {
    res.config.loading && res.config.loading.close()
    return res
  }, (err) => {
    if (err && err.response) {
      err.response.config.loading && err.response.config.loading.close()
      switch (err.response.status) {
        case 400:
          err.message = '错误请求'
          break
        case 401:
          err.message = '未授权，请重新登录'
          break
        case 403:
          err.message = '没有权限，拒绝访问'
          break
        case 404:
          err.message = '请求错误,未找到该资源'
          break
        case 405:
          err.message = '请求方法未允许'
          break
        case 408:
          err.message = '请求超时'
          break
        case 500:
          err.message = '服务器端出错'
          break
        case 501:
          err.message = '网络未实现'
          break
        case 502:
          err.message = '网络错误'
          break
        case 503:
          err.message = '服务不可用'
          break
        case 504:
          err.message = '网络超时'
          break
        case 505:
          err.message = 'http版本不支持该请求'
          break
        default:
          err.message = `连接错误${err.response.status}`
      }
    }
    // 错误处理
    if (err.message) {
      Vue.prototype.$message.success(err.message)
      if (err.response.status === 401) {
        window.$router.push('/login')
      }
    }
    return Promise.reject(err)
  })
  // 自定义判断元素类型JS
function toType(obj) {
  return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
}
// 参数过滤函数，移除前后空格
function filterNull(o) {
  for (const key in o) {
    if (o[key] === null) { delete o[key] }
    if (toType(o[key]) === 'string') {
      o[key] = o[key].trim()
    } else if (toType(o[key]) === 'object') {
      o[key] = filterNull(o[key])
    } else if (toType(o[key]) === 'array') {
      o[key] = filterNull(o[key])
    }
  }
  return o
}
function apiAxios(method, url, params, option) {
    if (!option) option = {}
    // 根据URL地址对象确定使用什么方式请求
    if (option.type === 'json') {
      if (params) {
        params = filterNull(params)
      }
    } else if (option.type === 'formData') {
      const _params = new URLSearchParams()
      if (params) {
        params = filterNull(params)
        // JSON 转换为 FormData
        Object.keys(params).forEach(key => _params.append(key, params[key]))
        params = _params
      }
    }
    // 封装headers
  const CONTENT_TYPE = {
    json: 'application/json; charset=UTF-8',
    formData: 'application/x-www-form-urlencoded; charset=UTF-8',
    multipart: 'multipart/form-data; charset=UTF-8'
  }
  const headers = {
    'Content-Type': CONTENT_TYPE[option.type]
    // Authorization: sessionStorage.getItem('token') || '',
  }
  if (localStorage.getItem('currentSelectedOrgRole') && localStorage.getItem('currentSelectedOrgRole') !== 'undefined') {
    let orgId = null
    try {
      orgId = JSON.parse(localStorage.getItem('currentSelectedOrgRole')).orgId
    } catch (error) {
      new Error('没有获取的当前公司的orgId')
    }
    headers['Current-Selected-Org-Id'] = orgId
  }
  const localAuth = process.env.VUE_APP_LOCAL_AUTH
  const localUserInfo = process.env.VUE_APP_LOCAL_INFO
  if (localAuth) {
    headers.Authorization = localAuth
    headers.userInfo = localUserInfo
  }
  if (option.headers) Object.assign(headers, option.headers)
  return new Promise((resolve, reject) => {

    const axiosOptions = {
      method: method,
      url: url,
      headers: headers,
      data: method === 'POST' || method === 'PUT' ? params : null,
      dataType: 'json',
      params: method === 'GET' || method === 'DELETE' ? params : null,
      withCredentials: true
    }
    if ('responseType' in option) {
      axiosOptions['responseType'] = option['responseType']
    }

    axios(axiosOptions).then((res) => {
      let success = false
      let data = res.data
      const message = res.data.message
      if (
        data &&
        Number(data.code) === 0
      ) {
        success = true
        data = res.data.data
      }
      // debugger
      resolve({
        success,
        data,
        message,
        response: res
      })
    }).catch((err) => {
      throw new Error(err)
    })
  })
}



// 返回在vue模板中的调用接口
export default {
    get(url, params, option) {
      return apiAxios('GET', url, params, option)
    },
    post(url, params, option) {
      return apiAxios('POST', url, params, option)
    },
    put(url, params, option) {
      return apiAxios('PUT', url, params, option)
    },
    delete(url, params, option) {
      return apiAxios('DELETE', url, params, option)
    }
  }