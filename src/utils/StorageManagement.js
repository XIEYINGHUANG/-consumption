export default {
    getOpenId: () => {
        return localStorage.getItem('openId')
    },

    setOpenId: (openId) => {
        localStorage.setItem('openId', openId)
    },

    getAccessToken: () => {
        return localStorage.getItem('access_token')
    },

    setAccessToken: (value) => {
        localStorage.setItem('access_token', value)
    },

    setMemberId: (member_id) => {
        localStorage.setItem('member_id', member_id)
    },
    getMemberId: () => {
      return localStorage.getItem('member_id');
    },
    setPhone: (val) => {
        localStorage.setItem('phone', val)
    },
    getPhone: () => {
        return localStorage.getItem('phone')
    },
    getLocation: () => {
        return JSON.parse(localStorage.getItem('Location'))
    },
    setLocation: (location) => {
        localStorage.setItem('Location', JSON.stringify(location))
    },
    setPromoto: (num) => {
        localStorage.setItem('promoto', num)
    },
    getPromoto: () => {
        return localStorage.getItem('promoto')
    },
    setSource: (source) => {
        localStorage.setItem('source', source)
    },
    getSource: () => {
        return localStorage.getItem('source')
    },
    setSN: (sn) => {
        localStorage.setItem('sn', sn)
    },
    getSN: () => {
        return localStorage.getItem('sn')
    },
    setName: (name) => {
        localStorage.setItem('name', name)
    },
    getName: () => {
        return localStorage.getItem('name')
    }
}