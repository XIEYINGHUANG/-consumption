import userApis from './../apis/user'
import commonApis from './../apis/common'
import { local } from '../../utils/storage'
const state = {
  myQrcode: {},
  addressList: [],
  mySource: '',
  myInfo: {
    lucky_count: 0
  },
  santaOpen: true
}

const actions = {
  getMyInfo ({commit, state}, { source }) {
    userApis.myInfo().then(res => {
      if (res.code === 4001) {
        // userApis.auth()
        return
      }
      if (res.data) {
        commit('setMyInfo', res.data)
        local.save(local.KEY_USER_ID, res.data.id)
        // alert(local.get(local.KEY_USER_ID))
        commonApis.behaveLogs(commonApis.BEHAVIOR_LOGIN)
        return userApis.registeSource(source)
      }
    }).then(res => {
      console.log('SOURCE REQUEST: ', res)
      commit('setMySource', source)
    }) 
  },
  async getInviteCode ({commit}) {
    try {
      let res = await userApis.myInviteCode()
      console.log(res)
      if (res && res.data) {
        commit('setMyInviteCode', res.data)
      }
    } catch (err) {
      console.log(err)
    }
  },
  async getAddressList ({commit}) {
    try {
      let res = await userApis.AddressList()
      console.log(res)
      if (res && res.data) {
        commit('setMyAddressList', res.data.items)
      }
    } catch (err) {
      console.log(err)
    }
  },
  async createNewAddress ({commit}, addressInfo) {
    try {
      let res = await userApis.createAddress(addressInfo)
      console.log(res)
      if (res && res.data) {
        commit('addMyAddressList', res.data)
      }
    } catch (err) {
      console.log(err)
    }
  },
  async updateAddress ({commit}, addressInfo) {
    try {
      let res = await userApis.updateAddress(addressInfo)
      if (res && res.data) {
        commit('updateMyAddressList', res.data)
      }
    } catch (err) {
      console.log(err)
    }
  },
  async deleteAddress ({commit}, id) {
    try {
      let res = await userApis.deleteAddress(id)
      if (res && res.message === 'success') {
        commit('deleteMyAddressList', id)
      }
    } catch (err) {
      console.log(err)
    }
  }
}

const mutations = {
  setMyInfo (state, myInfo) {
    state.myInfo = myInfo
  },
  setMySource (state, source) {
    source && (state.mySource = source)
  },
  setMyInviteCode (state, inviteCode) {
    state.myQrcode = inviteCode
  },
  setMyAddressList (state, address) {
    state.addressList = address
  },
  addMyAddressList (state, address) {
    state.addressList.push(address)
  },
  updateMyAddressList (state, address) {
  },
  deleteMyAddressList (state, id) {
    const newList = state.addressList.filter(item => {
      return item.id !== id
    })
    state.addressList = newList
  },
  updateMyPhone (state, phone) {
    state.myInfo.phone = phone
  },
  setSantaDialog (state, payload) {
    state.santaOpen = payload
  }
}

export default {
  state, actions, mutations
}