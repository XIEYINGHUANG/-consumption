import { isBetweenDate } from "../utils/object";

// 用于配置项目中的技术常量

const { href } = location
export const isDev = (href.indexOf('heplus.esmart365.com') === -1)
export const serverUrl = isDev ? 'https://heplus.developer.shengxintech.com' : 'https://heplus.esmart365.com'
export const prefix = '/api'
export const frontendUrl = isDev ? 'https://heplus.developer.shengxintech.com' : 'https://heplus.esmart365.com'
// 是否在活动期间，注意: 这里的日期请严格按照 ‘YYYY/MM/DD HH:MM:SS’格式，确保iOS和android均支持
// 每次调整活动的时候，修改一下活动名，已确保用户首次正确弹出活动框
// 项目中有两处使用该字段： 1. 活动是否弹框的缓存  2、阿里云活动相关图片存储的存储桶名
export const activityName = 'spring_festival'
export const activity = {
  name: 'spring_festival',
  isDuringActivity: isBetweenDate('2019/1/31 00:00:00', '2019/2/20 23:59:59'),
  route: '/sfhome',
  bgImage: ''
}

// OSS 存储桶资源前缀
const ossPrefixProd = 'http://image-cdn.heplus.shengxintech.com/static/wechat/'
export const ossPrefix = ossPrefixProd
export const santaPicture = 'http://image-cdn.heplus.shengxintech.com/static/wechat/christmas/' // 后续将弃用该字段
export const activityOssPrefix = `${ossPrefixProd}${activityName}/`
export var nOssPrefix='https://heplus-core.oss-cn-hangzhou.aliyuncs.com/static/wechat/'
