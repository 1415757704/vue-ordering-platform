// 引入mockjs
import Mock from 'mockjs'
import { POST_METHOD, API_RESULT } from '../config/apiConfig'

Mock.mock('/register', POST_METHOD, Object.assign({}, API_RESULT,
  {
    data: {
      user: {
        name: 'test'
      },
      token: 'e1241902cs1324r'
    }
  }
))

Mock.mock('login', POST_METHOD, {

})
