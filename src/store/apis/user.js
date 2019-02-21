import axios from './../../utils/HttpRequest/axios'
import { 
  SERVER_API_MY_INFO,
  SERVER_API_MY_QRCODE,
  SERVER_API_WECHAT_AUTH,
  SERVER_API_ADDRESS_LIST,
  SERVER_API_ADDRESS_CREATE,
  SERVER_API_ADDRESS_UPDATE,
  SERVER_API_ADDRESS_DELETE,
  SERVER_API_GET_VALICODE,
  SERVER_API_VALIDATE_PHONE,
  SERVER_API_REGISTE_SOURCE
} from './../../config/apis'
export default {
  auth () {
    const { href } = window.location
    let redirect = ''
    if (href.indexOf('token') !== -1) {
      redirect = encodeURI(href.substr(0, href.indexOf('?')))
    } else {
      if (href.indexOf('#') !== -1) {
        redirect = encodeURI(href.substr(0, href.indexOf('#')))
      } else {
        redirect = encodeURI(href)
      }
    }
    axios.doOpen(SERVER_API_WECHAT_AUTH, { redirect })
  },
  myInfo () {
    return axios.doGet(SERVER_API_MY_INFO, {})
  },
  registeSource (source) {
    return axios.doPost(SERVER_API_REGISTE_SOURCE, { source })
  },
  myInviteCode () {
    return axios.doGet(SERVER_API_MY_QRCODE)
  },
  AddressList () {
    return axios.doGet(SERVER_API_ADDRESS_LIST)
  },
  createAddress (addressInfo) {
    const {districtId, name, phone, address} = addressInfo
    return axios.doPost(SERVER_API_ADDRESS_CREATE, {
      district_id: districtId,
      name,
      phone,
      address
    })
  },
  updateAddress (addressInfo) {
    console.log(this.addressInfo)
    const {districtId, name, phone, address, id} = addressInfo
    return axios.doPut(SERVER_API_ADDRESS_UPDATE + id, {
      district_id: districtId,
      name,
      phone,
      address
    })
  },
  deleteAddress (id) {
    return axios.doDelete(SERVER_API_ADDRESS_DELETE + id)
  },
  // 获取手机验证码
  getValiCode (phone) {
    return axios.doPost(SERVER_API_GET_VALICODE, { phone })
  },
  /** 
   * @param {Object} bundle
   * @param {String} bundle.phone 手机号码
   * @param {String} bundle.code 验证短信
   */
  validatePhone (bundle) {
    return axios.doPost(SERVER_API_VALIDATE_PHONE, bundle)
  }
}