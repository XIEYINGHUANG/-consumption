// 用户模块相关接口
export const SERVER_API_WECHAT_AUTH = '/officialAccount/auth'
export const SERVER_API_MY_INFO = '/my/info'
export const SERVER_API_REGISTE_SOURCE = '/my/login'
export const SERVER_API_MY_QRCODE = '/my/qrCode'
export const SERVER_API_PHONE_VERIFY = '/phone/verification/verify'
export const SERVER_API_ADDRESS_LIST = '/my/addresses'
export const SERVER_API_ADDRESS_CREATE = '/addresses'
export const SERVER_API_ADDRESS_UPDATE = '/addresses/'
export const SERVER_API_ADDRESS_DELETE = '/addresses/'
export const SERVER_API_GET_VALICODE = '/phone/verification/send'
export const SERVER_API_VALIDATE_PHONE = '/phone/verification/verify'

// 抽奖模块相关接口
export const SERVER_API_LUCKY_ITEMS = '/luckyItems'
export const SERVER_API_LUCKY_ITEM_LOTTERY = '/luckyItem/random'
export const SERVER_API_LUCKY_COUNT = '/my/luckyCount'

// 优惠券相关接口
export const SERVER_API_MY_COUPONS = '/my/coupons'
export const SERVER_API_EXCHANGE_COUPONS  = '/coupons/{id}/exchange'

// 用户祝福相关接口
export const SERVER_API_GREETINGS = '/greetings'
export const SERVER_API_RANDOM_GREETING = '/greeting/random'

// 公共模块接口
export const SERVER_API_GET_JSCONFIG = '/officialAccount/jsConfig'
export const SERVER_API_ENCRYPT_PHONE = '/aes/wuliangye'

// 特别活动相关接口
export const SERVER_API_SANTA_GIFT_LIST = '/activity/friendsCouponList'
export const SERVER_API_SANTA_GIFT_RECEIVE = '/activity/getActivityCoupon'
export const SERVER_API_SANTA_USER_INVITE = '/activity/inviteUserEnter'
export const SERVER_API_SANTA_USER_WISH = '/activity/userWish'

export const SERVER_API_USER_BEHAVIOR = '/behavior/logs'
