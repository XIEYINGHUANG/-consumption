/* eslint-disable prettier/prettier */
import axios from 'axios';
const LOTTERY = 'lottery';

// 超时时间 单位: ms
const timeoutCounter = 30000;

// 开发人员在这里输入开发人员和API地址，如果有开发人员，请在vue.config.js里配置新的代理
const Modules = {
    LOTTERY: LOTTERY + '/v1/lottery',
    COUPONS: 'liuyi' + '/v1/members'
}
/**
 * method: 'get' or 'post' , 'post'是默认值
 *
 * @param options
 * @returns {*}
 */
let request = (options) => {
    // const session = sessionManagement.getUserInfo()
    // if (session) {
    //     var {api_token, username} = session
    // }
    //default options, mixin options
    let opt = {
        method: 'post',
        // config: {
        //     headers: {
        //         'X-API-KEY': api_token || 'none',
        //         'X-APP-ID': username || 'none'
        //     }
        // },
        ...options
    }
    // if (opt['urlParameter']) opt.url = opt.url.replace(/\{\w*\}/, opt.urlParameter);
    if(opt['urlParameter']) opt['url'] = _regit(opt['url'], opt['urlParameter']);
    if (opt.method === 'get') opt.params = {...opt.params, ...opt.config};
    if (!opt['port']){ opt['port'] = ''}
    // 超时处理
    let p1 = axios[opt.method](
        process.env.VUE_APP_HOST + opt['port'] + opt['url'],
        opt['params'],
        opt['config'])
    let p_timeout = new Promise((resolve, reject) => {
        setTimeout(() => {
            // console.log('timeout');
            reject({msg: `time out ${timeoutCounter} ms exceeds`});
        }, timeoutCounter, 'time timeout');
    })
    return Promise.race([p1, p_timeout])
}

// let info = (options) => {
//     let opt = {
//         method: 'get',
//         headers: {
//             'authorization':'member YsfrkQGy21BCIvP2aLlqVZjHz9lpLaDfsKldpUmFGEsXRhx4ycd5uOBPS42cm3Yu'
//         },
//         ...options
//     };
//     // 超时处理
//     let p1 = axios[opt.method](
//         process.env.VUE_APP_HOST + opt['url'], {headers:opt['headers'],params:opt['params']})
//     let p_timeout = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             reject({msg: `time out ${timeoutCounter} ms exceeds`});
//         }, timeoutCounter, 'time timeout');
//     })
//     return Promise.race([p1, p_timeout])
// }


/**
 * 请求上传接口
 * @param file - input中选择的文件
 * @returns {*}
 */
let upload = (file) => {
    if (!file['name']) return false;
    return new Promise(resolve => {
        let formdata = new FormData()
        // 先向我们的后台发送要上传的文件名字，返回指定token后才能带着token上传到s3
        request({
            url: Modules.UPLOAD_AUTH, params: {
                feil_path: '',
                file_key: file['name']
            }
        }).then(res => {
            let auth = res.data.msg;
            // console.log('s3 key, res.data.msg.fields:', res.data.msg.url);
            formdata.append('key', auth.fields['key']);
            formdata.append('acl', auth.fields['acl']);
            formdata.append('success_action_status', '201');
            formdata.append('policy', auth.fields['policy']);
            formdata.append('x-amz-algorithm', auth.fields['x-amz-algorithm']);
            formdata.append('x-amz-credential', auth.fields['x-amz-credential']);
            formdata.append('x-amz-date', auth.fields['x-amz-date']);
            formdata.append('x-amz-signature', auth.fields['x-amz-signature']);
            formdata.append('file', file);
            formdata.auth = auth
            resolve(formdata)
        })
    });
};
let address = (options) => {
    let opt = {
        method: 'post',
        ...options
    }
    // 超时处理
    let p1 = axios[opt.method](
        process.env.VUE_APP_HOST + opt['port'] + opt['url'],
        {params:opt['params'],headers: {
            'authorization':"member YsfrkQGy21BCIvP2aLlqVZjHz9lpLaDfsKldpUmFGEsXRhx4ycd5uOBPS42cm3Yu"}})
    let p_timeout = new Promise((resolve, reject) => {
        setTimeout(() => {
            reject({msg: `time out ${timeoutCounter} ms exceeds`});
        }, timeoutCounter, 'time timeout');
    })
    return Promise.race([p1, p_timeout])
}

/**
 * 抽取路由变量： e.g _regit('fjaiwef/{kk}/fjoie/{jj}', {kk: '111111',jj: 'f2222'})
 *              =====>  fjaiwef/111111/fjoie/f2222
 * @param str 要改变的url
 * @param obj 把要替换的变量和值拼成一个对象, 如果Obj是个字符串，仅替换遇到的第一个变量
 * @returns {*}
 * @private
 */
let _regit = (str, obj) => {
    if( typeof obj !== 'object') {
        str = str.replace(/\{\w*\}/, obj)
    }else{
        Object.entries(obj).map( entry=> {
            const replace = '{' + entry[0] + '}'
            var re = new RegExp(replace, "g");
            str = str.replace(re, entry[1])
        })
    }
    return str
}

export {
    request,
    upload,
    Modules,
    address,
    // info
}