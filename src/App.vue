<template>
    <div id="app">
        <router-view/>
        <tabbar id="nav" v-if="tabbar.indexOf($route.path) > -1">
            <tabbar-item :selected="$route.path == tabbar[0]||$route.path == '/'" link="/lottery">
                <img slot="icon" src="./assets/icon-home.png">
                <img slot="icon-active" src="./assets/icon-home-selected.png">
                <span slot="label">首页</span>
            </tabbar-item>
            <tabbar-item :selected="$route.path == tabbar[1]" link="/coupons">
                <img slot="icon" src="./assets/icon-coupon.png">
                <img slot="icon-active" src="./assets/icon-coupon-selected.png">
                <span slot="label">券包</span>
            </tabbar-item>
            <tabbar-item :selected="$route.path == tabbar[2]" link="/mys">
                 <img slot="icon" src="./assets/icon-me.png">
                <img slot="icon-active" src="./assets/icon-me-selected.png">
                <span slot="label">我的</span>
            </tabbar-item>
        </tabbar>
          <!-- 新增底部二维码 -->
        <!-- <scanCode></scanCode> -->
    </div>
</template>
<script>
import {Tabbar, TabbarItem, Group, Cell} from 'vux'
import {request, Modules} from './utils/HttpRequest/request'
import sessionMenagement from './utils/StorageManagement'
import { ossPrefix } from './config'
//新增
//  import scanCode from './components/scanCode.vue'
export default {
    components: {
        Tabbar,
        TabbarItem,
        Group,
        Cell
        // scanCode
    },
    data() {
        return {
            tabbar: ['/lottery', '/coupons', '/mys', '/'],
            message: window.location.search,
            nickname: '',
        }
    },
    methods: {
        // 获取会员id与手机号
        getMember (info) {
            if (sessionMenagement.getMemberId() === 'null'||sessionMenagement.getMemberId()){
                this.$store.dispatch('updateTimes', sessionMenagement.getMemberId());
                return false
            }
            console.log('source:', sessionMenagement.getSource());
            let source = 1
            if(sessionMenagement.getSource() !== 'False') source = 2
            request({
                url: '/v1/members/official/create',
                port:'liuyi',
                params: {
                    "open_id": info.openid,
                    "full_name": info.nickname,
                    "gender":info.sex,
                    "avatar":info.headimgurl,
                    'source': source
                },
                config: {
                    headers: {
                        'authorization': "member YsfrkQGy21BCIvP2aLlqVZjHz9lpLaDfsKldpUmFGEsXRhx4ycd5uOBPS42cm3Yu"
                    }
                },
            }).then(res => {
                console.log('获取会员id与手机号:', res.data);
                if (res.data.result === 0) {
                    sessionMenagement.setMemberId(res.data.data.member_id);
                    sessionMenagement.setPhone(!res.data.data.mobile?'':res.data.data.mobile);
                    sessionMenagement.setPromoto(res.data.data.promo_code);
                    this.$store.dispatch('updateTimes', sessionMenagement.getMemberId());
                    sessionMenagement.setName(res.data.data.name);
                }
            })
        }
    },
    mounted () {
        setTimeout(() => {
            if (this.$route.query.token) {
                location.href = location.href + '#usedToken=1'
            }
        }, 500)
    }
}

let _abstractOpenId = (search) => {
    let args = search.split('&')
    let openId, source, sn
    console.log('args:', args)
    args.map(arg => {
        if(arg.indexOf('open_id=') >= 0){
            let start = arg.indexOf('open_id=') + 8
            openId = arg.substring(start)
        } else if (arg.indexOf('source=') >= 0) {
            let start = arg.indexOf('source=') + 7
            source = arg.substring(start)
        } else if (arg.indexOf('sn=') >= 0) {
            let start = arg.indexOf('sn=') + 3
            sn = arg.substring(start)
        }
    })
    console.log(`openId ${openId}, source ${source} sn ${sn}`)
    sessionMenagement.setOpenId(openId);
    sessionMenagement.setSource(source);
    sessionMenagement.setSN(sn);
    return openId
}

let _share_statistic = () => {
    let member_id = sessionMenagement.getMemberId()
    request({
        url: '/operation/record',
        port: Modules.COUPONS,
        params: {
            member_id: member_id,
            brand_name: '',
            coupon_name: '',
            jump_url: '',
            operation_type: 1
        },
        config: {
            headers: {
                'authorization': 'member YsfrkQGy21BCIvP2aLlqVZjHz9lpLaDfsKldpUmFGEsXRhx4ycd5uOBPS42cm3Yu'
            }
        },
    }).then(res => {
    }).catch(e => {
    })
}
</script>

<style lang="scss">
    #nav {
        position: fixed;
        bottom: 0;
    }
    body {
        width: 100%;
        height: 100%;
        overflow-x: hidden;
    }
</style>
