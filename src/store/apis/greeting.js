// 用户祝福模块相关接口
import axios from './../../utils/HttpRequest/axios'
import { 
  SERVER_API_GREETINGS,
  SERVER_API_RANDOM_GREETING
} from './../../config/apis'
export default {
  // 获取祝福列表
  list (searchInfo) {
    return axios.doGet(SERVER_API_GREETINGS, searchInfo)
  },
  create (content) {
    return axios.doPost(SERVER_API_GREETINGS, { content })
  },
  random () {
    return axios.doGet(SERVER_API_RANDOM_GREETING, {})
  }
}