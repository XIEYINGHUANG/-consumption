import santaApis from './../apis/santaWish'

const state = {
  gift: '',
  originCode: ''
}

const actions = {
  async getGift ({commit, state}, {type, callback}) {
    let res = await santaApis.receive(type)
    if (res && res.data) {
      commit('setGift', res.data)
      typeof callback === 'function' && callback(res.data)
    } else {
      const { message } = res 
      if (message === 'success') {
        window.alert(`您已领取过礼包`)
      } else {
        window.alert(`领取礼包失败：${message}`)
      }
    }
  },
  async getMyGift ({commit, state}, user_id) {
    let res = await santaApis.wish()
    if (res && res.data) {
      const data = res.data.coupon_records || []
      commit('setGift', data)
    } else {
      commit('setGift', [])
    }
  }
}

const mutations = {
  setGift (state, payload) {
    state.gift = payload
  },
  setShareOrigin (state, payload) {
    state.originCode = payload
    // alert('设置了originCode')
  }
}

export default {
  state, actions, mutations
}