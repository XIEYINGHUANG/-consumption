import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from './utils/HttpRequest/axios'
import './registerServiceWorker'
import './global.scss'
import ToastPlugin from 'vux/src/plugins/toast'
import ConfirmPlugin from 'vux/src/plugins/confirm'
import initFilters from './filters'
import VueScroller from 'vue-scroller'
import VueLazyload from 'vue-lazyload'
import localStorageEx from 'localstorageex'

Vue.config.productionTip = false
Vue.prototype.$http = axios
Vue.use(ToastPlugin, { position: 'bottom' })
Vue.use(ConfirmPlugin)
Vue.use(VueScroller)
Vue.use(VueLazyload, {
  preLoad: 1.3,
  attempt: 5
})
Vue.use({
	install:function(Vue,options){
		Vue.prototype.$storage=localStorageEx
		Vue.prototype.$toast=function(text,pos='middle'){
			Vue.$vux.toast.text(text,pos)
		}
		Vue.prototype.$Err=function(obj){
			var msg=obj.message||obj.error||obj.code||JSON.stringify(obj);
			Vue.prototype.$toast(msg)
		}
		Vue.prototype.$isStrEmpty=function(str){
			return str==null||(str+'').trim()==='';
		}
		
	}
})



initFilters(Vue) // 用于注册全局的过滤器

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
