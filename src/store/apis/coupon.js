import axios from './../../utils/HttpRequest/axios'
import { 
  SERVER_API_MY_COUPONS,
  SERVER_API_EXCHANGE_COUPONS
} from './../../config/apis'

export default {
  /**
   * 
   * @param {Object} searchInfo 搜索项
   * @param {Number} searchInfo.status 搜索项
   */
  list (searchInfo) {
    return axios.doGet(SERVER_API_MY_COUPONS, searchInfo)
  },
  // 商品券兑换
  exchangeGood (coupon_id, address_id) {
    const url = SERVER_API_EXCHANGE_COUPONS.replace('{id}', coupon_id)
    return axios.doPost(url, { address_id })
  }
}