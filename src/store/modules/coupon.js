import couponApis from './../apis/coupon'
import { couponStatus } from './../../config/constant'
const state = {
  couponsData: [
    { 
      status: couponStatus.UNUSED, 
      data: {
        list: [],
        total: 0,
        page: 1
      }
    },
    {
      status: couponStatus.USED,
      data: {
        list: [],
        total: 0,
        page: 1
      }
    },
    {
      status: couponStatus.EXPIRED,
      data: {
        list: [],
        total: 0,
        page: 1
      }
    }
  ]
}
const actions = {
  getMyCoupons ({state, commit}, { status, page }) {
    const couponData = state.couponsData.filter(v => v.status === status)[0]
    if (!couponData) {
      console.log('传入status有问题，请留意：', status)
    }
    return couponApis.list({ page: (page || couponData.data.page), status }).then((res) => {
      console.log('GETTTING DATA: ', res.data)
      if (page) {
        console.log('CHANGING PAGE:', page)
        commit('updateCouponPage', { status, page })
      }
      commit('setMyCoupons', { status, listData: res.data })
    })
  }
}
const mutations = {
  setMyCoupons (state, data) {
    const { status, listData } = data
    if (!listData) {
      return
    }
    const { items, total, page } = listData
    let index = 0
    for (let i = 0; i < state.couponsData.length; i++) {
      if (state.couponsData[i].status === status) {
        index = i
        break
      }
    }
    (page === 1)
    ? state.couponsData[index].data.list = items
    : state.couponsData[index].data.list = state.couponsData[index].data.list.concat(items)
    console.log('DATA LENGTH', items.length, state.couponsData[index].data.list.length)
    state.couponsData[index].data.total = total
    if (items.length !== 0) {
      state.couponsData[index].data.page ++
    }
    console.log('DATA PAGE', state.couponsData[index].data.page)
  },
  updateCouponPage (state, data) {
    const { page, status } = data
    let index = 0
    for (let i = 0; i < state.couponsData.length; i++) {
      if (state.couponsData[i].status === status) {
        index = i
        break
      }
    }
    state.couponsData[index].data.page = page
  }
}

export default {
  state, actions, mutations
}