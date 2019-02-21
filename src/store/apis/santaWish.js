// 圣诞活动相关
import axios from '../../utils/HttpRequest/axios'
import { 
    SERVER_API_SANTA_GIFT_LIST, 
    SERVER_API_SANTA_GIFT_RECEIVE,
    SERVER_API_SANTA_USER_INVITE,
    SERVER_API_SANTA_USER_WISH
} from '../../config/apis'

export default {
  list () {
    return axios.doGet(SERVER_API_SANTA_GIFT_LIST)
  },
  receive (type) {
    return axios.doPost(SERVER_API_SANTA_GIFT_RECEIVE, {wish_type: type})
  },
  join (id) {
    return axios.doPost(SERVER_API_SANTA_USER_INVITE, {user_id: id})
  },
  wish (id) {
    return axios.doGet(SERVER_API_SANTA_USER_WISH, {})
  }
}