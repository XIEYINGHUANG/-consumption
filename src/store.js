import Vue from 'vue'
import Vuex from 'vuex'
import {request, Modules} from "./utils/HttpRequest/request";
import user from './store/modules/user'
import greeting from './store/modules/greeting'
import coupon from './store/modules/coupon'
import lottery from './store/modules/lottery'
import santaWish from './store/modules/santaWish'
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

export default new Vuex.Store({
    plugins: process.env.NODE_ENV !== 'production' ? [createLogger()]: [],
    modules: {
        user,
        greeting,
        coupon,
        lottery,
        santaWish
    },
    state: {
        coupon_code:'',
        times: 0,
    },
    mutations: {
        changeCouponCode(state,code){
            state.coupon_code=code;
        },
        updateTimes(state, times) {
            state.times = times
        }
    },
    actions: {
        updateTimes({commit, state}, member_id) {
            request({
                method: 'get',
                url: Modules.LOTTERY + '/member_times' + member_id,
            }).then(res => {
                console.log('抽奖次数', res.data);
                if (res.data.errno == 0) {
                    // this.times = res.data.lottery_times;
                    commit('updateTimes', res.data.lottery_times);
                } else {
                    commit('updateTimes', 0)
                }
            })
        }
    }
})
