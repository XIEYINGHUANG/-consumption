import { local } from './../utils/storage'
export default {
  data () {
    return {
      couponDetail: local.get(local.KEY_TEMP_COUPON_INFO, true)
    }
  },
  created() {
    this.couponDetail.type = parseInt(this.couponDetail.type)
    this.couponDetail.usage = parseInt(this.couponDetail.usage)
  }
}