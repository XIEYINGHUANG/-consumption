(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-41852b3c"],{"18a0":function(e,n){!function(n,i){e.exports=i(n)}(window,function(e,n){function i(n,i,t){e.WeixinJSBridge?WeixinJSBridge.invoke(n,o(i),function(e){c(n,e,t)}):d(n,t)}function t(n,i,t){e.WeixinJSBridge?WeixinJSBridge.on(n,function(e){t&&t.trigger&&t.trigger(e),c(n,e,i)}):d(n,t||i)}function o(e){return e=e||{},e.appId=P.appId,e.verifyAppId=P.appId,e.verifySignType="sha1",e.verifyTimestamp=P.timestamp+"",e.verifyNonceStr=P.nonceStr,e.verifySignature=P.signature,e}function a(e){return{timeStamp:e.timestamp+"",nonceStr:e.nonceStr,package:e.package,paySign:e.paySign,signType:e.signType||"SHA1"}}function r(e){return e.postalCode=e.addressPostalCode,delete e.addressPostalCode,e.provinceName=e.proviceFirstStageName,delete e.proviceFirstStageName,e.cityName=e.addressCitySecondStageName,delete e.addressCitySecondStageName,e.countryName=e.addressCountiesThirdStageName,delete e.addressCountiesThirdStageName,e.detailInfo=e.addressDetailInfo,delete e.addressDetailInfo,e}function c(e,n,i){"openEnterpriseChat"==e&&(n.errCode=n.err_code),delete n.err_code,delete n.err_desc,delete n.err_detail;var t=n.errMsg;t||(t=n.err_msg,delete n.err_msg,t=s(e,t),n.errMsg=t),(i=i||{})._complete&&(i._complete(n),delete i._complete),t=n.errMsg||"",P.debug&&!i.isInnerInvoke&&alert(JSON.stringify(n));var o=t.indexOf(":");switch(t.substring(o+1)){case"ok":i.success&&i.success(n);break;case"cancel":i.cancel&&i.cancel(n);break;default:i.fail&&i.fail(n)}i.complete&&i.complete(n)}function s(e,n){var i=e,t=S[i];t&&(i=t);var o="ok";if(n){var a=n.indexOf(":");"confirm"==(o=n.substring(a+1))&&(o="ok"),"failed"==o&&(o="fail"),-1!=o.indexOf("failed_")&&(o=o.substring(7)),-1!=o.indexOf("fail_")&&(o=o.substring(5)),"access denied"!=(o=(o=o.replace(/_/g," ")).toLowerCase())&&"no permission to execute"!=o||(o="permission denied"),"config"==i&&"function not exist"==o&&(o="ok"),""==o&&(o="fail")}return i+":"+o}function u(e){if(e){for(var n=0,i=e.length;n<i;++n){var t=e[n],o=h[t];o&&(e[n]=o)}return e}}function d(e,n){if(!(!P.debug||n&&n.isInnerInvoke)){var i=S[e];i&&(e=i),n&&n._complete&&delete n._complete,console.log('"'+e+'",',n||"")}}function l(e){if(!(w||k||P.debug||C<"6.0.2"||E.systemType<0)){var n=new Image;E.appId=P.appId,E.initTime=b.initEndTime-b.initStartTime,E.preVerifyTime=b.preVerifyEndTime-b.preVerifyStartTime,B.getNetworkType({isInnerInvoke:!0,success:function(e){E.networkType=e.networkType;var i="https://open.weixin.qq.com/sdk/report?v="+E.version+"&o="+E.isPreVerifyOk+"&s="+E.systemType+"&c="+E.clientVersion+"&a="+E.appId+"&n="+E.networkType+"&i="+E.initTime+"&p="+E.preVerifyTime+"&u="+E.url;n.src=i}})}}function p(){return(new Date).getTime()}function f(n){T&&(e.WeixinJSBridge?n():I.addEventListener&&I.addEventListener("WeixinJSBridgeReady",n,!1))}function m(){B.invoke||(B.invoke=function(n,i,t){e.WeixinJSBridge&&WeixinJSBridge.invoke(n,o(i),t)},B.on=function(n,i){e.WeixinJSBridge&&WeixinJSBridge.on(n,i)})}function g(e){if("string"==typeof e&&e.length>0){var n=e.split("?")[0],i=e.split("?")[1];return n+=".html",void 0!==i?n+"?"+i:n}}if(!e.jWeixin){var h={config:"preVerifyJSAPI",onMenuShareTimeline:"menu:share:timeline",onMenuShareAppMessage:"menu:share:appmessage",onMenuShareQQ:"menu:share:qq",onMenuShareWeibo:"menu:share:weiboApp",onMenuShareQZone:"menu:share:QZone",previewImage:"imagePreview",getLocation:"geoLocation",openProductSpecificView:"openProductViewWithPid",addCard:"batchAddCard",openCard:"batchViewCard",chooseWXPay:"getBrandWCPayRequest",openEnterpriseRedPacket:"getRecevieBizHongBaoRequest",startSearchBeacons:"startMonitoringBeacons",stopSearchBeacons:"stopMonitoringBeacons",onSearchBeacons:"onBeaconsInRange",consumeAndShareCard:"consumedShareCard",openAddress:"editAddress"},S=function(){var e={};for(var n in h)e[h[n]]=n;return e}(),I=e.document,v=I.title,_=navigator.userAgent.toLowerCase(),y=navigator.platform.toLowerCase(),w=!(!y.match("mac")&&!y.match("win")),k=-1!=_.indexOf("wxdebugger"),T=-1!=_.indexOf("micromessenger"),M=-1!=_.indexOf("android"),A=-1!=_.indexOf("iphone")||-1!=_.indexOf("ipad"),C=function(){var e=_.match(/micromessenger\/(\d+\.\d+\.\d+)/)||_.match(/micromessenger\/(\d+\.\d+)/);return e?e[1]:""}(),b={initStartTime:p(),initEndTime:0,preVerifyStartTime:0,preVerifyEndTime:0},E={version:1,appId:"",initTime:0,preVerifyTime:0,networkType:"",isPreVerifyOk:1,systemType:A?1:M?2:-1,clientVersion:C,url:encodeURIComponent(location.href)},P={},V={_completes:[]},L={state:0,data:{}};f(function(){b.initEndTime=p()});var x=!1,R=[],B={config:function(e){P=e,d("config",e);var n=!1!==P.check;f(function(){if(n)i(h.config,{verifyJsApiList:u(P.jsApiList)},function(){V._complete=function(e){b.preVerifyEndTime=p(),L.state=1,L.data=e},V.success=function(e){E.isPreVerifyOk=0},V.fail=function(e){V._fail?V._fail(e):L.state=-1};var e=V._completes;return e.push(function(){l()}),V.complete=function(n){for(var i=0,t=e.length;i<t;++i)e[i]();V._completes=[]},V}()),b.preVerifyStartTime=p();else{L.state=1;for(var e=V._completes,t=0,o=e.length;t<o;++t)e[t]();V._completes=[]}}),m()},ready:function(e){0!=L.state?e():(V._completes.push(e),!T&&P.debug&&e())},error:function(e){C<"6.0.2"||(-1==L.state?e(L.data):V._fail=e)},checkJsApi:function(e){var n=function(e){var n=e.checkResult;for(var i in n){var t=S[i];t&&(n[t]=n[i],delete n[i])}return e};i("checkJsApi",{jsApiList:u(e.jsApiList)},(e._complete=function(e){if(M){var i=e.checkResult;i&&(e.checkResult=JSON.parse(i))}e=n(e)},e))},onMenuShareTimeline:function(e){t(h.onMenuShareTimeline,{complete:function(){i("shareTimeline",{title:e.title||v,desc:e.title||v,img_url:e.imgUrl||"",link:e.link||location.href,type:e.type||"link",data_url:e.dataUrl||""},e)}},e)},onMenuShareAppMessage:function(e){t(h.onMenuShareAppMessage,{complete:function(n){"favorite"===n.scene?i("sendAppMessage",{title:e.title||v,desc:e.desc||"",link:e.link||location.href,img_url:e.imgUrl||"",type:e.type||"link",data_url:e.dataUrl||""}):i("sendAppMessage",{title:e.title||v,desc:e.desc||"",link:e.link||location.href,img_url:e.imgUrl||"",type:e.type||"link",data_url:e.dataUrl||""},e)}},e)},onMenuShareQQ:function(e){t(h.onMenuShareQQ,{complete:function(){i("shareQQ",{title:e.title||v,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},onMenuShareWeibo:function(e){t(h.onMenuShareWeibo,{complete:function(){i("shareWeiboApp",{title:e.title||v,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},onMenuShareQZone:function(e){t(h.onMenuShareQZone,{complete:function(){i("shareQZone",{title:e.title||v,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},updateTimelineShareData:function(e){i("updateTimelineShareData",{title:e.title,link:e.link,imgUrl:e.imgUrl},e)},updateAppMessageShareData:function(e){i("updateAppMessageShareData",{title:e.title,desc:e.desc,link:e.link,imgUrl:e.imgUrl},e)},startRecord:function(e){i("startRecord",{},e)},stopRecord:function(e){i("stopRecord",{},e)},onVoiceRecordEnd:function(e){t("onVoiceRecordEnd",e)},playVoice:function(e){i("playVoice",{localId:e.localId},e)},pauseVoice:function(e){i("pauseVoice",{localId:e.localId},e)},stopVoice:function(e){i("stopVoice",{localId:e.localId},e)},onVoicePlayEnd:function(e){t("onVoicePlayEnd",e)},uploadVoice:function(e){i("uploadVoice",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},downloadVoice:function(e){i("downloadVoice",{serverId:e.serverId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},translateVoice:function(e){i("translateVoice",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},chooseImage:function(e){i("chooseImage",{scene:"1|2",count:e.count||9,sizeType:e.sizeType||["original","compressed"],sourceType:e.sourceType||["album","camera"]},(e._complete=function(e){if(M){var n=e.localIds;try{n&&(e.localIds=JSON.parse(n))}catch(e){}}},e))},getLocation:function(e){},previewImage:function(e){i(h.previewImage,{current:e.current,urls:e.urls},e)},uploadImage:function(e){i("uploadImage",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},downloadImage:function(e){i("downloadImage",{serverId:e.serverId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},getLocalImgData:function(e){!1===x?(x=!0,i("getLocalImgData",{localId:e.localId},(e._complete=function(e){if(x=!1,R.length>0){var n=R.shift();wx.getLocalImgData(n)}},e))):R.push(e)},getNetworkType:function(e){var n=function(e){var n=e.errMsg;e.errMsg="getNetworkType:ok";var i=e.subtype;if(delete e.subtype,i)e.networkType=i;else{var t=n.indexOf(":"),o=n.substring(t+1);switch(o){case"wifi":case"edge":case"wwan":e.networkType=o;break;default:e.errMsg="getNetworkType:fail"}}return e};i("getNetworkType",{},(e._complete=function(e){e=n(e)},e))},openLocation:function(e){i("openLocation",{latitude:e.latitude,longitude:e.longitude,name:e.name||"",address:e.address||"",scale:e.scale||28,infoUrl:e.infoUrl||""},e)},getLocation:function(e){e=e||{},i(h.getLocation,{type:e.type||"wgs84"},(e._complete=function(e){delete e.type},e))},hideOptionMenu:function(e){i("hideOptionMenu",{},e)},showOptionMenu:function(e){i("showOptionMenu",{},e)},closeWindow:function(e){i("closeWindow",{},e=e||{})},hideMenuItems:function(e){i("hideMenuItems",{menuList:e.menuList},e)},showMenuItems:function(e){i("showMenuItems",{menuList:e.menuList},e)},hideAllNonBaseMenuItem:function(e){i("hideAllNonBaseMenuItem",{},e)},showAllNonBaseMenuItem:function(e){i("showAllNonBaseMenuItem",{},e)},scanQRCode:function(e){i("scanQRCode",{needResult:(e=e||{}).needResult||0,scanType:e.scanType||["qrCode","barCode"]},(e._complete=function(e){if(A){var n=e.resultStr;if(n){var i=JSON.parse(n);e.resultStr=i&&i.scan_code&&i.scan_code.scan_result}}},e))},openAddress:function(e){i(h.openAddress,{},(e._complete=function(e){e=r(e)},e))},openProductSpecificView:function(e){i(h.openProductSpecificView,{pid:e.productId,view_type:e.viewType||0,ext_info:e.extInfo},e)},addCard:function(e){for(var n=e.cardList,t=[],o=0,a=n.length;o<a;++o){var r=n[o],c={card_id:r.cardId,card_ext:r.cardExt};t.push(c)}i(h.addCard,{card_list:t},(e._complete=function(e){var n=e.card_list;if(n){for(var i=0,t=(n=JSON.parse(n)).length;i<t;++i){var o=n[i];o.cardId=o.card_id,o.cardExt=o.card_ext,o.isSuccess=!!o.is_succ,delete o.card_id,delete o.card_ext,delete o.is_succ}e.cardList=n,delete e.card_list}},e))},chooseCard:function(e){i("chooseCard",{app_id:P.appId,location_id:e.shopId||"",sign_type:e.signType||"SHA1",card_id:e.cardId||"",card_type:e.cardType||"",card_sign:e.cardSign,time_stamp:e.timestamp+"",nonce_str:e.nonceStr},(e._complete=function(e){e.cardList=e.choose_card_info,delete e.choose_card_info},e))},openCard:function(e){for(var n=e.cardList,t=[],o=0,a=n.length;o<a;++o){var r=n[o],c={card_id:r.cardId,code:r.code};t.push(c)}i(h.openCard,{card_list:t},e)},consumeAndShareCard:function(e){i(h.consumeAndShareCard,{consumedCardId:e.cardId,consumedCode:e.code},e)},chooseWXPay:function(e){i(h.chooseWXPay,a(e),e)},openEnterpriseRedPacket:function(e){i(h.openEnterpriseRedPacket,a(e),e)},startSearchBeacons:function(e){i(h.startSearchBeacons,{ticket:e.ticket},e)},stopSearchBeacons:function(e){i(h.stopSearchBeacons,{},e)},onSearchBeacons:function(e){t(h.onSearchBeacons,e)},openEnterpriseChat:function(e){i("openEnterpriseChat",{useridlist:e.userIds,chatname:e.groupName},e)},launchMiniProgram:function(e){i("launchMiniProgram",{targetAppId:e.targetAppId,path:g(e.path),envVersion:e.envVersion},e)},miniProgram:{navigateBack:function(e){e=e||{},f(function(){i("invokeMiniProgramAPI",{name:"navigateBack",arg:{delta:e.delta||1}},e)})},navigateTo:function(e){f(function(){i("invokeMiniProgramAPI",{name:"navigateTo",arg:{url:e.url}},e)})},redirectTo:function(e){f(function(){i("invokeMiniProgramAPI",{name:"redirectTo",arg:{url:e.url}},e)})},switchTab:function(e){f(function(){i("invokeMiniProgramAPI",{name:"switchTab",arg:{url:e.url}},e)})},reLaunch:function(e){f(function(){i("invokeMiniProgramAPI",{name:"reLaunch",arg:{url:e.url}},e)})},postMessage:function(e){f(function(){i("invokeMiniProgramAPI",{name:"postMessage",arg:e.data||{}},e)})},getEnv:function(n){f(function(){n({miniprogram:"miniprogram"===e.__wxjs_environment})})}}},U=1,O={};return I.addEventListener("error",function(e){if(!M){var n=e.target,i=n.tagName,t=n.src;if(("IMG"==i||"VIDEO"==i||"AUDIO"==i||"SOURCE"==i)&&-1!=t.indexOf("wxlocalresource://")){e.preventDefault(),e.stopPropagation();var o=n["wx-id"];if(o||(o=U++,n["wx-id"]=o),O[o])return;O[o]=!0,wx.ready(function(){wx.getLocalImgData({localId:t,success:function(e){n.src=e.localData}})})}}},!0),I.addEventListener("load",function(e){if(!M){var n=e.target,i=n.tagName;if(n.src,"IMG"==i||"VIDEO"==i||"AUDIO"==i||"SOURCE"==i){var t=n["wx-id"];t&&(O[t]=!1)}}},!0),n&&(e.wx=e.jWeixin=B),B}})},"18d2":function(e,n,i){"use strict";i("cadf"),i("551c"),i("097d");var t=function(e,n,i){window._hmt&&(console.log("%c statistics event: ".concat(e,", ").concat(n,", ").concat(i),"background:#343639;color:#bada55; padding: 0 10px"),window._hmt.push(["_trackEvent",e,n,i]))};n["a"]=t},4901:function(e,n,i){"use strict";i("b54a"),i("cadf"),i("551c"),i("097d");var t=i("3f83"),o=i("f121"),a=i("5d2d"),r=i("18a0"),c=i.n(r),s=(i("358c"),i("18d2")),u="".concat(location.origin,"/lottery"),d="".concat(location.origin,"/santaWish");n["a"]={initConfig:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=location.href;return new Promise(function(i,o){t["a"].getJSConfig({url:n,api:e}).then(function(e){console.log("data:",e);var n=e.data,t=n.timestamp,a=n.nonceStr,r=n.signature,s=n.appId,u=n.jsApiList;c.a.config({debug:!1,appId:s,timestamp:t,nonceStr:a,signature:r,jsApiList:u}),c.a.ready(function(){i(e)}),c.a.error(function(e){o(e)})}).catch(function(e){o("请求授权获取access_token出错，联系后台开发人员：".concat(e))})})},toScanQrcode:function(){this.initConfig(["scanQRCode"]).then(function(e){c.a.scanQRCode({needResult:0,scanType:["qrCode","barCode"],success:function(e){var n=e.resultStr;console.log("Getting ",n)}})})},initShare:function(e,n){var i=e.link||u,a=["onMenuShareAppMessage","onMenuShareTimeline"];this.initConfig(a).then(function(a){c.a.onMenuShareAppMessage({title:e.title||"和+消费共享平台",desc:e.desc,link:i,imgUrl:"".concat(o["d"],"springFestial/img-share.jpg"),dataUrl:"",type:"",success:function(){console.log("分享成功"),t["a"].behaveLogs(t["a"].BEHAVIOR_SHARE),n&&n()}}),c.a.onMenuShareTimeline({title:e.title||"和+消费共享平台",link:i,imgUrl:"".concat(o["e"],"%E5%92%8C%2Bplus+logo.jpg"),success:function(){console.log("分享成功"),t["a"].behaveLogs(t["a"].BEHAVIOR_SHARE),n&&n(),_share_statistic()}})}).catch(function(e){console.error("微信分享Config失败！",e)})},initHomeShare:function(e,n){var i=e||u,r=["getLocation","onMenuShareAppMessage","onMenuShareTimeline","hideMenuItems"];this.initConfig(r).then(function(e){c.a.getLocation({type:"wgs84",success:function(e){var n=e.latitude,i=e.longitude;a["b"].save(a["b"].KEY_USER_LAT,n),a["b"].save(a["b"].KEY_USER_LON,i)}}),c.a.onMenuShareAppMessage({title:"和+消费共享平台",desc:"拼人品，快来和+平台抽奖吧！",link:i,imgUrl:"".concat(o["e"],"%E5%92%8C%2Bplus+logo.jpg"),dataUrl:"",type:"",success:function(){console.log("分享成功"),t["a"].behaveLogs(t["a"].BEHAVIOR_SHARE),"function"===typeof n&&n()}}),c.a.onMenuShareTimeline({title:"和+消费共享平台",link:i,imgUrl:"".concat(o["e"],"%E5%92%8C%2Bplus+logo.jpg"),success:function(){console.log("分享成功"),t["a"].behaveLogs(t["a"].BEHAVIOR_SHARE),_share_statistic(),"function"===typeof n&&n()}}),c.a.hideMenuItems({menuList:["menuItem:refresh","menuItem:share:qq","menuItem:share:weiboApp","menuItem:share:facebook","menuItem:share:QZone","menuItem:editTag","menuItem:delete","menuItem:copyUrl","menuItem:originPage","menuItem:openWithQQBrowser","menuItem:openWithSafari","menuItem:share:email","menuItem:share:brand"]})}).catch(function(e){console.error("微信Config失败！",e)})},initSantaShare:function(e,n,t){var o=d,r="年终奖还没发呢？ 快来做年终总结领大礼";console.log("SHARE LINK: ",o,e,n);var u=function(e){var n=e?"成功分享朋友圈":"成功分享好友";Object(s["a"])("年终总结活动分享","微信分享",n)},l=["onMenuShareAppMessage","onMenuShareTimeline","hideMenuItems"],p=i("be1b");this.initConfig(l).then(function(i){c.a.onMenuShareAppMessage({title:r,desc:n,link:o,imgUrl:"".concat(location.origin).concat(p),dataUrl:"",type:"",success:function(){a["a"].save(a["a"].KEY_USER_VISITED,!0),u(),"function"===typeof t&&t(e)}}),c.a.onMenuShareTimeline({title:r,link:o,imgUrl:"".concat(location.origin).concat(p),success:function(){a["a"].save(a["a"].KEY_USER_VISITED,!0),u(!0),"function"===typeof t&&t(e)}}),c.a.hideMenuItems({menuList:["menuItem:refresh","menuItem:share:qq","menuItem:share:weiboApp","menuItem:share:facebook","menuItem:share:QZone","menuItem:editTag","menuItem:delete","menuItem:copyUrl","menuItem:originPage","menuItem:openWithQQBrowser","menuItem:openWithSafari","menuItem:share:email","menuItem:share:brand"]})}).catch(function(e){console.error("微信Config失败！",e)})},initSmartShare:function(e){var n=this;return new Promise(function(i,a){var r=e.link||u,s=e.title||"和+消费共享平台",d=e.desc||"",l=e.imgUrl||"".concat(o["e"],"%E5%92%8C%2Bplus+logo.jpg"),p=["onMenuShareAppMessage","onMenuShareTimeline"];n.initConfig(p).then(function(e){c.a.onMenuShareAppMessage({title:s,desc:d,link:r,imgUrl:l,dataUrl:"",success:function(){console.log("分享成功"),t["a"].behaveLogs(t["a"].BEHAVIOR_SHARE),i()}}),c.a.onMenuShareTimeline({title:s,link:r,imgUrl:l,success:function(){console.log("分享成功"),t["a"].behaveLogs(t["a"].BEHAVIOR_SHARE),_share_statistic(),i()}})}).catch(function(e){console.error("微信分享Config失败！",e),a(e)})})}}},be1b:function(e,n,i){e.exports=i.p+"img/img-wechat-share.0af63479.png"}}]);
//# sourceMappingURL=chunk-41852b3c.805a42ce.js.map