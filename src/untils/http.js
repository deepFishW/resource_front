import axios from 'axios'
import qs from 'qs'
import store from '../store/store'
import router from '../router'


// 环境切换
if (process.env.NODE_ENV === 'development') {
  axios.defaults.baseURL = '//localhost:8091'
} else if (process.env.NODE_ENV === 'debug') {
  axios.defaults.baseURL = '测试环境'
} else if (process.env.NODE_ENV === 'production') {
  axios.defaults.baseURL = '生产环境'
}

// 请求超时时间
axios.defaults.timeout = 10000

let Base = '/api'
function headerUrl (url) {
  url = Base + url
  return url
}

// post请求头
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'


/*const instance = axios.create({
  headers: {
    'content-type': 'application/json;charset=UTF-8',
    'token': 'one'
  },
  baseURL: 'https://easy-mock.com/mock/5c01e1f6f221b94c907213d6/',
  timeout: 10000,
  withCredentials: true
})*/

// 添加请求拦截器
axios.interceptors.request.use(
  config => {
  // 在发送请求之前做某事，比如说 设置token
    const token = store.state.token
    token && (config.headers.Authorization = token)
  return config;
}, error => {
  // 请求错误时做些事
  return Promise.error(error);
});

// 添加响应拦截器
axios.interceptors.response.use(
  response => {
    if (response.status === 200) {
      return Promise.resolve(response)
    } else {
      return Promise.reject(response)
    }
  },
  // 服务状态码不是200的情况
  error => {
    if (error.response.status) {
      switch (error.response.status) {
        // 401 未登录
        // 未登录则跳转登录页面，并携带当前页面的路径
        // 在登录成功后返回当前页面，这一步需要在登录页操作。
        case 401:
          router.replace({
            path: '/login',
            query: {redirect: router.currentRoute.fullPath}
          })
          break
        // 403 token过期
        // 登录过期对用户进行提示
        // 清除本地token和清空vuex中token对象
        // 跳转登录页面
        case 403:
          this.$message({
            message: '登录过期，请重新登录',
            type: 'warning'
          });
          localStorage.removeItem('token')
          store.commit('loginSuccess', null)
          // 跳转登录页面，并将要浏览的页面fullpath传过去，登录成功后跳转到要访问的页面
          setTimeout(() => {
            router.replace({
              path: '/login',
              query: {
                redirect: router.currentRoute.fullPath
              }
            })
          }, 1000)
          break
        // 404 请求不存在
        case 404:
          this.$message({
            message: '网络请求不存在',
            type: 'warning'
          });
          break
        // 其他错误直接抛出错误提示
        default:
          this.$message({
            message: error.response.data.message,
            type: 'warning'
          });
      }
      return Promise.reject(error.response)
    }
  }
)

export default {
  /**
   * get方法对应get请求
   * @param {String}url 请求地址
   * @param {Object}params携带参数
   * @returns {Promise}
   */
  get (url, params) {
    return new Promise((resolve, reject) => {
      axios.get(headerUrl(url), {
        params: params
      })
        .then(res => {
          resolve(res.data)
        })
        .catch(err => {
          reject(err.data)
        })
    })
  },
  /**
   * post方法对应post请求
   * @param {String} url 请求地址
   * @param {Object} params 携带参数
   * @returns {Promise}
   */
  post (url, params) {
    return new Promise((resolve, reject) => {
      console.log(headerUrl(url))
      axios.post(headerUrl(url), qs.stringify(params))
        .then(res => {
          resolve(res.data)
        })
        .catch(err => {
          reject(err.data)
        })
    })
  }
}



