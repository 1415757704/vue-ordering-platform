import axios from 'axios'
import { Message } from 'element-ui'

const request = axios.create({
  baseURL: process.env.BASE_API,
  timeout: 5000
})

// request.interceptors.request.use(
//   config => {
//   },
//   error => {
//     console.log(error) // for debug
//     Promise.reject(error)
//   })

request.interceptors.response.use(
  response => response,
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
