/**
 * Created by lxhfight on 2018/7/26.
 * Email: lxhfight1@gmail.com
 * Description:
 *   用于发起http/https请求的 工具方法
 */

import axios from 'axios'
import { local } from './../storage'
import { serverUrl, prefix } from './../../config'
import userApis from '../../store/apis/user'
axios.defaults.timeout = 6000

axios.interceptors.response.use(function(response) {
	if(response.data != null && typeof response.data == 'object') {
		if(response.data.code != null && response.data.code != 200 &&response.data.code!=4001) { //4001不当做错误处理，进行正常的验证逻辑
			return Promise.reject(response.data.message || response.data.code)
		}

	}
	return response
}, function(error) {

	if(error.response) { //token is expired
		//		localStorageEx.remove('token')
		//		location.href = domain.redirectUrl
	}

	var temp = error
	if(error.response) {
		if(error.response.data) { //有data的时候
			if(typeof error.response.data == 'object') { //data是对象的时候
				temp = error.response.data.message || error.response.data.code
			} else temp = error.response.data
		} else {
			temp = error.response.statusText || error.response.status || error.response
		}
	}

	return Promise.reject(temp)
})

/**
 * 检查返回数据是否有问题
 * @param res 响应数据
 */
const checkResponse = (res) => {
	if(res.data.code === 4001) {
		local.remove(local.KEY_USER_TOKEN)
		userApis.auth()
	}
	return res.data
}

const queryString = (obj) => {
	if(typeof obj !== 'object') {
		return ''
	}
	let result = '?'
	for(let param in obj) {
		result += `${param}=${encodeURI(obj[param])}&`
	}
	return result.substr(0, result.length - 1)
}

/**
 * 统一处理错误信息
 * @param err 请求返回的错误信息
 */
const handleError = (err) => {
	console.error(err)
	throw err;
}

const fetch = (method, path, data) => {
	if(data == null) data = {};

	let token = local.get(local.KEY_USER_TOKEN)
	token && (axios.defaults.headers.common['Authorization'] = `Bearer ${token}`)
	const contentType = 'application/json'
	const headers = {
		'Content-Type': contentType,
		'Authorization': `Bearer ${token}`
	}
	const url = `${serverUrl}${prefix}${path}`
	const bundle = (method === 'get' || method === 'delete') ? {
		params: data
	} : data
	return axios[method](url, bundle, {
			headers
		})
		.then(res => {
			return checkResponse(res)
		})
		.catch(err => {
			handleError(err)
		})
}

const upload = (path, data) => {
	let token = session.get(session.KEY_USER_TOKEN)
	const contentType = 'multipart/form-data'
	const url = `${serverUrl}${prefix}${path}`
	const headers = {
		'Content-Type': contentType,
		'Authorization': `Bearer ${token}`
	}
	return axios['post'](url, data, {
			headers
		})
		.then(res => {
			return checkResponse(res)
		})
		.catch(err => {
			handleError(err)
		})
}

export default {
	doOpen(path, data = {}, mode = '_self') {
		const url = `${serverUrl}${prefix}${path}${queryString(data)}`
		window.open(url, mode)
	},
	doPost(path, data) {
		return fetch('post', path, data)
	},
	doGet(path, data) {
		return fetch('get', path, data)
	},
	doPut(path, data) {
		return fetch('put', path, data)
	},
	doDelete(path) {
		return fetch('delete', path, {})
	},
	doUpload(path, formData) {
		return upload(path, formData)
	}
}