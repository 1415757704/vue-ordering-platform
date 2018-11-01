import axios from 'axios'
import { Message } from 'element-ui'
import store from '../store'

const request = axios.create({
  baseURL: process.env.BASE_API,
  timeout: 5000
})

request.interceptors.request.use(
  config => {
    // console.log('store.getters.loadingState before', store.getters.loadingState)
    store.dispatch('showLoading')

    // console.log('store.getters.loadingState after', store.getters.loadingState)
    return config
  },
  error => {
    console.log(error) // for debug
    Promise.reject(error)
  })

request.interceptors.response.use(
  response => {
    setTimeout(() => {
      store.dispatch('hideLoading')
    }, 5000)

    return response
  },
  error => {
    console.log('err' + error) // for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  })

export default request
