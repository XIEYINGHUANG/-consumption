import axios from './../../utils/HttpRequest/axios'
import { 
  SERVER_API_GET_JSCONFIG,
  SERVER_API_USER_BEHAVIOR,
  SERVER_API_ENCRYPT_PHONE
} from './../../config/apis'
import { session } from './../../utils/storage'

// 公共模块相关请求
export default {
  BEHAVIOR_SHARE: 'user_share', // 用户分享
  // BEHAVIOR_JUMP: 'user_jump', // 用户跳转（忽略）
  BEHAVIOR_LOGIN: 'user_login', // 用户登录
  BEHAVIOR_REGISTER: 'user_register', // 用户注册
  BEHAVIOR_AUTH_MOBILE: 'user_auth_mobile', // 用户手机认证
  BEHAVIOR_LOTTERY: 'user_lottery', // 用户抽奖
  getJSConfig (bundle) {
    return axios.doPost(SERVER_API_GET_JSCONFIG, bundle)
  },
  encryptPhone (content) {
    return axios.doGet(SERVER_API_ENCRYPT_PHONE, { content })
  },
  behaveLogs (type_name) {
    const latitude = session.get(session.KEY_USER_LAT)
    const longitude = session.get(session.KEY_USER_LON)
    const source = session.get(session.KEY_WEBSITE_SOURCE)
    const bundle = { 
      type_name,
      latitude,
      longitude,
      source,
    }
    return axios.doPost(SERVER_API_USER_BEHAVIOR, bundle)
  }
}