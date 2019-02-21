// 抽奖模块相关的接口
import axios from '../../utils/HttpRequest/axios'
import { 
  SERVER_API_LUCKY_ITEMS, 
  SERVER_API_LUCKY_ITEM_LOTTERY,
  SERVER_API_LUCKY_COUNT
} from '../../config/apis'

export default {
  list () {
    return axios.doGet(SERVER_API_LUCKY_ITEMS, {})
  },
  count () {
    return axios.doGet(SERVER_API_LUCKY_COUNT)
  },
  lottery (bundle) {
    return axios.doGet(SERVER_API_LUCKY_ITEM_LOTTERY, bundle)
  }
}