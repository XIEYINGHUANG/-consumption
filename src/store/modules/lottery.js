import lotteryApis from './../apis/luckyItem'

const state = {
  count: ''
}

const actions = {
  async getLotteryCount ({commit}) {
    try {
      let res = await lotteryApis.count()
      console.log(res)
      if (res && res.data) {
        commit('setLotteryCount', res.data)
      }
    } catch (err) {
      console.log(err)
    }
  },
  async drawLottery ({commit}, {source}) {
    try {
      let res = await lotteryApis.lottery({source})
      console.log('REQUIRING DATA:', res)
      if (res.code === 200) {
        commit('minusLotteryCount', res.data)
        return res
      }
    } catch (err) {
      console.log(err)
    }
  }
}

const mutations = {
  setLotteryCount (state, count) {
    state.count = count
  },
  minusLotteryCount (state) {
    state.count = Number(state.count) - 1
  }
}

export default {
  state, actions, mutations
}