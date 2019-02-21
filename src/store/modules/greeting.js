import greetingApis from './../apis/greeting'

const state = {
  list: [],
  total: 0,
  page: 1
}

const actions = {
  getCurrentGreetings ({commit, state}, page) {
    const nextPage = typeof page === 'number' ? page : state.page
    greetingApis.list({ page: nextPage }).then(res => {
      commit('setCurrentGreetings', res.data)
    }).catch(err => {
      console.log('ERROR')
    })
  }
}

const mutations = {
  setCurrentGreetings (state, data) {
    if (data.page === 1) {
      state.list = data.items
    } else {
      state.list = state.list.concat(data.items)
    }
    state.total = data.total
    if (data.items.length !== 0) {
      state.page++
    }
  }
}

export default {
  state, actions, mutations
}