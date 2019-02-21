import {request} from './request'
import wx from 'weixin-js-sdk'

const weConfig = {
    /**
     * 微信配置接口
     * 在需要使用微信功能的页面初始化时，调用这个接口，把你想用的微信接口以字符串数组的形式传参进来。
     * @param functions
     * @returns {Promise<any>}
     */
    getConfig: (functions) => {
        return new Promise((resolve, reject) => {
            let url = location.href.split('#')[0];
            console.log('current url:', url)
            request({
                url: 'auth/get_jsdk_sign',
                method: 'post',
                params: {
                    url: url
                }
            }).then(res => {
                console.log(JSON.stringify(res.data.data))
                let appId = 'wxc1559574a231a480'
                let {timestamp, nonceStr, signature} = res.data.data
                wx.config({
                    debug: false,
                    appId,
                    timestamp,
                    nonceStr,
                    signature,
                    jsApiList: functions
                }).then(res => resolve(res))
                    .catch(err => reject(err))
            }).catch(err => {
                reject(`请求授权获取access_token出错，联系后台开发人员（孔）：${err}`)
            })
        });
    }
}

export {
    wx, weConfig
}