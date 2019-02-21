import Vue from 'vue'
import Router from 'vue-router'

import userApi from './store/apis/user'
import commonApis from './store/apis/common'
import { local, session } from './utils/storage'
import store from './store'
// import About from './views/About.vue'
// import Redirect from './views/common/Redirect.vue'
// import addresslist from './views/addresslist.vue'
// import addAddress from './views/addAddress.vue'
// import editAddress from './views/editAddress.vue'
// import bindMobile from './views/bindMobile.vue'
// import promotoCode from './views/promotoCode.vue'
// import Home from './views/Home.vue'
// import Lottery from './views/lottery.vue'
// import Coupons from './views/coupons.vue'
// import VoucherDetails from './views/voucherDetails.vue'
import GoodsDetails from './views/goodsDetails.vue'
import GetRedPacket from './views/getRedPacket.vue'
import BrandVoucher from './views/brandVoucher.vue'
import FriendlyVoucher from './views/friendlyVoucher.vue'
import GoodsExchange from './views/goodsExchange.vue'
import VoucherExchange from './views/voucherExchange.vue'
import daojishi from './views/daojishi.vue'
// import Blessing from './views/blessing.vue'
import Preland from './views/Preland'

//新增
import scanCode from './components/scanCode.vue'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'index',
            redirect: '/lottery'
        },
        {
            path: '/auth/get_access_token',
            name: 'auth',
            redirect: '/lottery'
        },
        {
            path: '/auth/redirect',
            name: 'authRedirect',
            redirect: '/lottery'
        },
        {
            path: '/lottery',
            name: 'lottery',
            component: resolve => require(['./views/lottery/index.vue'], resolve)
        },
        {
            path: '/common/redirect',
            name: 'redirect',
            component: resolve => require(['./views/common/Redirect.vue'], resolve)
        },
        {
            path: '/about',
            name: 'about',
            component: resolve => require(['./views/About.vue'], resolve)
        },
        {
            path: '/addresslist',
            name: 'addresslist',
            component: resolve => require(['./views/addresslist.vue'], resolve)
        },
        {
            path: '/mys',
            name: 'mys',
            component: resolve => require(['./views/mys.vue'], resolve)
        },
        {
            path: '/ewm',
            name: 'ewm',
            component: resolve => require(['./views/ewm.vue'], resolve)
        },
        {
            path: '/coupons',
            name: 'coupons',
            component: resolve => require(['./views/coupons.vue'], resolve)
        },
        {
            path: '/voucherDetails',
            name: 'voucherDetails',
            component: resolve => require(['./views/voucherDetails.vue'], resolve)
        },
        {
            path: '/goodsDetails',
            name: 'goodsDetails',
            component: GoodsDetails
        },
        {
            path: '/getRedPacket',
            name: 'getRedPacket',
            component: GetRedPacket
        },
        {
            path: '/friendlyVoucher',
            name: 'friendlyVoucher',
            component: FriendlyVoucher
        },
        {
            path: '/brandVoucher',
            name: 'brandVoucher',
            component: BrandVoucher
        },
        {
            path: '/goodsExchange',
            name: 'goodsExchange',
            component: GoodsExchange
        },
        {
            path: '/voucherExchange',
            name: 'voucherExchange',
            component: VoucherExchange
        },
        {
            path: '/addAddress',
            name: 'addAddress',
            component: resolve => require(['./views/addAddress.vue'], resolve)
        },
        {
            path: '/editAddress',
            name: 'editAddress',
            component: resolve => require(['./views/editAddress.vue'], resolve)
        },
        {
            path: '/bindMobile',
            name: 'bindMobile',
            component: resolve => require(['./views/bindMobile.vue'], resolve)
        },
        {
            path: '/promotoCode',
            name: 'promotoCode',
            component: resolve => require(['./views/promotoCode.vue'], resolve)
        },
        {
            path: '/cardNum',
            name: 'cardNum',
            component: resolve => require(['./views/cardNum.vue'],resolve)
        },
        {
            path: '/daojishi',
            name: 'daojishi',
            component: daojishi
        },
        {
            path: '/blessing',
            name: 'blessing',
            component: resolve => require(['./views/blessing.vue'], resolve)
        },
        {
            path: '/taskBoard',
            name: 'taskBoard',
            component: resolve => require(['./views/taskBoard.vue'], resolve)
        },
        {
          path: '/couponBoard',
          name: 'couponBoard',
          component: resolve => require(['./views/couponBoard.vue'], resolve)
        },
        {
          path: '/shareActivities/springFestival',
          name: 'springFestivalSharePage',
          component: resolve => require(['./views/shareActivities/springFestival.vue'], resolve)
        },
        {
            path: '/santaWish',
            name: 'santaWish',
            component: resolve => require(['./views/santaWish.vue'], resolve)
        },
        {
            path: '/myWish/:userId',
            name: 'myWish',
            component: resolve => require(['./views/myWish.vue'], resolve)
        },
        {
            path: '/shareWish',
            name: 'shareWish',
            redirect: '/santaWish'
        },
        // {
        //     path: '/shareWish',
        //     name: 'shareWish',
        //     component: resolve => require(['./views/shareWish.vue'], resolve)
        // },
        {
            path: '/err',
            name: 'err',
            component: Error
        },
        {
            name: 'preland',
            path: '/auth/get_access_token',
            component: Preland
        },
        {
        	  name:'sfhome',
        	  path:'/sfhome',
        	  component:resolve=>require(['@/views/springFestival/sfHome'],resolve)
        },
        {
        	  name:'sfcard',
        	  path:'/sfcard',
        	  component:resolve=>require(['@/views/springFestival/sfCard'],resolve)
        },
         {
        	  name:'sfbudao',
        	  path:'/sfbudao',
        	  component:resolve=>require(['@/views/springFestival/sfBudao'],resolve)
        },
         {
        	  name:'sfqingren',
        	  path:'/sfqingren',
        	  component:resolve=>require(['@/views/springFestival/sfQingren'],resolve)
        },
         {
        	  name:'sfjiaozi',
        	  path:'/sfjiaozi',
        	  component:resolve=>require(['@/views/springFestival/sfJiaozi'],resolve)
        },{
        	  name:'sfactive',
        	  path:'/sfactive',
        	  component:resolve=>require(['@/views/springFestival/sfActive'],resolve)
        },
        {
            name:'scanCode',
            path:'/scanCode',
            component:resolve=>require(['./components/scanCode.vue'],resolve)
        },
        
    ]
})

// 初始化请求
const initRequest = (to) => {

    const { myInfo } = store.state.user
    const { source } = to.query
    if (!myInfo.id) {
        store.dispatch('getMyInfo', { source })
        // commonApis.behaveLogs(commonApis.BEHAVIOR_LOGIN)
    }
}

const wechatAuth = (to, next) => {
    if (to.query.source && !session.get(session.KEY_WEBSITE_SOURCE)) {
        session.save(session.KEY_WEBSITE_SOURCE, to.query.source)
    }
    if (to.query.token && to.hash.indexOf('usedToken') === -1) {
        if (!local.get(local.KEY_USER_TOKEN)) {
            local.save(local.KEY_USER_TOKEN, to.query.token)
        }
        initRequest(to)
        next()
    } else if (local.get(local.KEY_USER_TOKEN)) {
        initRequest(to)
        next()
    } else {
        commonApis.behaveLogs(commonApis.BEHAVIOR_REGISTER).then(res => {
            userApi.auth()
        })
    }
}

router.beforeEach((to, from, next) => {
    wechatAuth(to, next)
    next()
});

export default router
