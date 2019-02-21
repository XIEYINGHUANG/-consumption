// 用于存放各种全局过滤器
import { couponTypeArray } from './config/constant'

const _getText = (array, value) => {
  let data = array.filter(v => v.value == value)
  if (!(data && data[0])) {
    return '-'
  }
  return data[0].text || '-'
}
const _getClassName = (array, value) => {
  let data = array.filter(v => v.value == value)
  if (!(data && data[0])) {
    return '-'
  }
  return data[0].className || '-'
}

const initFilters = (Vue) => {
  Vue.filter('encrypted',(phone) => {
    let mphone = phone.substr(0, 3) + '****' + phone.substr(7);
    return mphone;
  })



  Vue.filter('date', (dateStr) => {
    if (!dateStr) {
      return '-'
    }
    // let date = new Date(dateStr.replace(/\-/g, '/'))
    return dateStr.split(' ')[0]
  })

  Vue.filter('couponType', (value) => _getText(couponTypeArray, value))
  Vue.filter('couponTypeClassname', (value) => _getClassName(couponTypeArray, value))
}

export default initFilters