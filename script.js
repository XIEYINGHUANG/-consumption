
var appID = 'wx97f3627602dd905b';
var redirect_uri = 'https://heplus.esmart365.com/#/auth/get_access_token?';
var scope = 'snsapi_userinfo';
var state = '';

var encoded_uri = encodeURIComponent(redirect_uri);
// console.log('encoded_uri', encoded_uri);
var request_uri = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appID}&redirect_uri=${encoded_uri}&response_type=code&scope=${scope}#wechat_redirect`;

console.log(request_uri)

var appID2 = 'wxc1559574a231a480';
var redirect_uri2 = 'https://heplus-test.esmart365.com/#/auth/get_access_token?';
var scope2 = 'snsapi_userinfo';
var state2 = '';

var encoded_uri2 = encodeURIComponent(redirect_uri2);
// console.log('encoded_uri', encoded_uri);
var request_uri2 = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appID2}&redirect_uri=${encoded_uri2}&response_type=code&scope=${scope2}#wechat_redirect`;

console.log(request_uri2)

const fs = require('fs')

fs.createReadStream('MP_verify_aq51HNiPKQaBt4LW.txt').pipe(fs.createWriteStream('dist/MP_verify_aq51HNiPKQaBt4LW.txt'))
fs.createReadStream('MP_verify_GkZmXQO4fkL3mJUl.txt').pipe(fs.createWriteStream('dist/MP_verify_GkZmXQO4fkL3mJUl.txt'))