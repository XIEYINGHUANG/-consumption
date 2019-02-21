import commonApis from './../store/apis/common'
import { ossPrefix ,nOssPrefix} from './../config'
import { session, local } from './../utils/storage'
import wx from 'weixin-js-sdk'
import {santaWish} from '../config/constant'
import report from './statistics'
const homeLink = `${location.origin}/lottery`
const shareLink = `${location.origin}/santaWish`
export default {
  initConfig (api = []) {
    const url = location.href;
    return new Promise((resolve, reject) => {
      commonApis.getJSConfig({ url, api: api }).then(res => {
        console.log('data:', res)
        let { timestamp, nonceStr, signature, appId, jsApiList } = res.data
        wx.config({
            debug: false,
            appId,
            timestamp,
            nonceStr,
            signature,
            jsApiList
        })
        wx.ready(function () {   //需在用户可能点击分享按钮前就先调用
          resolve(res)
        })
        wx.error(function(err){
          reject(err)
        })
      }).catch(err => {
        reject(`请求授权获取access_token出错，联系后台开发人员：${err}`)
      })
    })
  },
  // 调起微信扫一扫功能
  toScanQrcode () {
    this.initConfig(['scanQRCode']).then(res => {
      wx.scanQRCode({
        needResult: 0, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
        scanType: ["qrCode","barCode"], // 可以指定扫二维码还是一维码，默认二者都有
        success: function (res) {
          var result = res.resultStr; // 当needResult 为 1 时，扫码返回的结果
          console.log('Getting ', result)
        }
      });
    })
  },
  initShare(data,cb){
  	const link = data.link || homeLink
    const apis = ['onMenuShareAppMessage', 'onMenuShareTimeline']
    this.initConfig(apis).then(res => {
        wx.onMenuShareAppMessage({
            title: data.title||'和+消费共享平台', // 分享标题
            desc: data.desc, // 分享描述
            // link: process.env.VUE_APP_REDIRECT,
            link:link,
            imgUrl: `${nOssPrefix}springFestial/img-share.jpg`, // 分享图标
            dataUrl: '',
            type: '',
            success: function () {
                // 设置成功
                console.log('分享成功')
                commonApis.behaveLogs(commonApis.BEHAVIOR_SHARE) // 记录用户分享行为
                cb&&cb();
            }
        })
        wx.onMenuShareTimeline({
            title: data.title|| '和+消费共享平台', // 分享标题
            // link: process.env.VUE_APP_REDIRECT, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
            link:link,
            imgUrl: `${ossPrefix}%E5%92%8C%2Bplus+logo.jpg`, // 分享图标
            success: function () {
                // 设置成功
                console.log('分享成功')
                commonApis.behaveLogs(commonApis.BEHAVIOR_SHARE) // 记录用户分享行为
               cb&&cb();
                _share_statistic()
            }
        })
      
    }).catch(err => {
        console.error('微信分享Config失败！', err)
    })
  },
  initHomeShare (targetLink, callback) {
    const link = targetLink || homeLink
    const apis = ['getLocation', 'onMenuShareAppMessage', 'onMenuShareTimeline', 'hideMenuItems']
    this.initConfig(apis).then(res => {
        wx.getLocation({
          type: 'wgs84', // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
          success: function (res) {
              var latitude = res.latitude; // 纬度，浮点数，范围为90 ~ -90
              var longitude = res.longitude; // 经度，浮点数，范围为180 ~ -180。
              session.save(session.KEY_USER_LAT, latitude)
              session.save(session.KEY_USER_LON, longitude)
          }
        })
        wx.onMenuShareAppMessage({
            title: '和+消费共享平台', // 分享标题
            desc: '拼人品，快来和+平台抽奖吧！', // 分享描述
            // link: process.env.VUE_APP_REDIRECT,
            link,
            imgUrl: `${ossPrefix}%E5%92%8C%2Bplus+logo.jpg`, // 分享图标
            dataUrl: '',
            type: '',
            success: function () {
                // 设置成功
                console.log('分享成功')
                commonApis.behaveLogs(commonApis.BEHAVIOR_SHARE) // 记录用户分享行为
                // _share_statistic()
                typeof callback === 'function' && callback()
            }
        })
        wx.onMenuShareTimeline({
            title: '和+消费共享平台', // 分享标题
            // link: process.env.VUE_APP_REDIRECT, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
            link,
            imgUrl: `${ossPrefix}%E5%92%8C%2Bplus+logo.jpg`, // 分享图标
            success: function () {
                // 设置成功
                console.log('分享成功')
                commonApis.behaveLogs(commonApis.BEHAVIOR_SHARE) // 记录用户分享行为
                _share_statistic()
                typeof callback === 'function' && callback()
            }
        })
        wx.hideMenuItems({
            menuList: [ 'menuItem:refresh', 'menuItem:share:qq', 'menuItem:share:weiboApp', 'menuItem:share:facebook',
            'menuItem:share:QZone', 'menuItem:editTag', 'menuItem:delete', 'menuItem:copyUrl', 'menuItem:originPage', 'menuItem:openWithQQBrowser'
            , 'menuItem:openWithSafari', 'menuItem:share:email', 'menuItem:share:brand'] 
            // 要隐藏的菜单项，只能隐藏“传播类”和“保护类”按钮，所有menu项见附录3
        })
    }).catch(err => {
        console.error('微信Config失败！', err)
    })
  },
  initSantaShare (index, desc, successCall) {
    const link = shareLink
    const title = '年终奖还没发呢？ 快来做年终总结领大礼'
    console.log('SHARE LINK: ', link, index, desc)
    const _initAcitivityShareReport = (isTimeline) => {
        const content = isTimeline ? '成功分享朋友圈' : '成功分享好友'
        report('年终总结活动分享', '微信分享', content)
    }
    const apis = ['onMenuShareAppMessage', 'onMenuShareTimeline', 'hideMenuItems']
    // alert(link)
    const ss = require('../assets/pigyear/img-wechat-share.png');
    this.initConfig(apis).then(res => {
        // alert('初始化jsdk')
        wx.onMenuShareAppMessage({
            title, // 分享标题
            desc, // 分享描述
            // link: process.env.VUE_APP_REDIRECT,
            link,
            imgUrl: `${location.origin}${ss}`, // 分享图标
            dataUrl: '',
            type: '',
            success: function () {
                // 设置成功
                // alert('进入设置')
                local.save(local.KEY_USER_VISITED, true)
                _initAcitivityShareReport()
                typeof successCall === 'function' && successCall(index)
                // alert('执行到jsdk')
            }
        })
        wx.onMenuShareTimeline({
            title, // 分享标题
            // link: process.env.VUE_APP_REDIRECT, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
            link,
            imgUrl: `${location.origin}${ss}`, // 分享图标
            success: () => {
                local.save(local.KEY_USER_VISITED, true)
                _initAcitivityShareReport(true)
                typeof successCall === 'function' && successCall(index)
            }
        })
        wx.hideMenuItems({
            menuList: [ 'menuItem:refresh', 'menuItem:share:qq', 'menuItem:share:weiboApp', 'menuItem:share:facebook',
            'menuItem:share:QZone', 'menuItem:editTag', 'menuItem:delete', 'menuItem:copyUrl', 'menuItem:originPage', 'menuItem:openWithQQBrowser'
            , 'menuItem:openWithSafari', 'menuItem:share:email', 'menuItem:share:brand'] 
            // 要隐藏的菜单项，只能隐藏“传播类”和“保护类”按钮，所有menu项见附录3
        })
    }).catch(err => {
        console.error('微信Config失败！', err)
    })
  },
  /**
   * 用于处理所有分享情况的方法， 并支持Promise
   * @param {object} options分享对象
   * @param {object} options.link 分享链接
   * @param {object} options.link 分享链接
   */
  initSmartShare (data) {
    return new Promise((resolve, reject) => {
      const link = data.link || homeLink
      const title = data.title || '和+消费共享平台'
      const desc = data.desc || ''
      const imgUrl = data.imgUrl || `${ossPrefix}%E5%92%8C%2Bplus+logo.jpg`
      const apis = ['onMenuShareAppMessage', 'onMenuShareTimeline']
      this.initConfig(apis).then(res => {
          wx.onMenuShareAppMessage({
              title, // 分享标题
              desc, // 分享描述
              link,
              imgUrl, // 分享图标
              dataUrl: '',
              success: function () {
                // 设置成功
                console.log('分享成功')
                commonApis.behaveLogs(commonApis.BEHAVIOR_SHARE) // 记录用户分享行为
                resolve()
              }
          })
          wx.onMenuShareTimeline({
              title, // 分享标题
              // link: process.env.VUE_APP_REDIRECT, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
              link,
              imgUrl, // 分享图标
              success: function () {
                // 设置成功
                console.log('分享成功')
                commonApis.behaveLogs(commonApis.BEHAVIOR_SHARE) // 记录用户分享行为
                _share_statistic()
                resolve()
              }
          })
      }).catch(err => {
        console.error('微信分享Config失败！', err)
        reject(err)
      })
    })
  }
}