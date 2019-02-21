<style lang="scss" scoped>
	body {}
	
	.cnt {
		width: 249px;
		min-height: 269px;
		background-size: 100% 100%;
		bottom: 10%;
		padding-bottom: 7px;
		border-radius: 5px;
		/*overflow: hidden;*/
	}
	
	.c_mask {
		/*background: transparent;*/
		background-color: transparent;
	}
	
	.winHeader {
		height: 80px;
	}
	
	.bodyCnt {
		min-height: 180px;
	}
	
	.footer {
		padding: 0 23px;
		/*padding-bottom: 5px;*/
	}
	
	.footerItem {
		width: 38px;
	}
	
	.winOuter {
		position: absolute;
		left: 0px;
		right: 0px;
		/*text-align: right;*/
		top: -25px;
	}
	
	.disabled {
		opacity: 0.6;
	}
</style>

<template>
	<div class="c_maskCnt">

		<div class="c_mask cnt c_bg" :class="{disabled:disabled}" @touchstart.capture="capture" :style="{backgroundImage:'url('+require('@/assets/sfImg/bdwin/'+calBg)+')'}">
			<div class="winOuter">
				<slot name="outerHeader"></slot>
			</div>
			<div class="winHeader">
				<slot name="header">

				</slot>
			</div>
			<div class="bodyCnt">
				<slot></slot>
			</div>
			<div class="c_flexRow footer textm c_alignItemEnd" v-if="showFooter">
				<div class="footerItem" @click="tap(0)">
					<img src="~@/assets/sfImg/bdwin/again.png" alt="" />
					<!--<div></div>-->
				</div>
				<div class="footerItem" @click="tap(1)">
					<img src="~@/assets/sfImg/bdwin/more.png" alt="" />
					<!--<div></div>-->
				</div>
				<div class="footerItem" @click="tap(2)">
					<img src="~@/assets/sfImg/bdwin/xuan.png" alt="" />
					<!--<div></div>-->
				</div>

			</div>
			<div>
				<slot name="behindFooter"></slot>
			</div>
		</div>
	</div>

</template>

<script>
	//    import 'https://res.wx.qq.com/open/js/jweixin-1.3.2.js'
	import '@/common/css/common.css'
	import '@/common/css/self.css'

	import { mapState, mapActions, mapMutations } from 'vuex'
	import { session, local } from '@/utils/storage'
	import Wechat from '@/utils/wechat'
	import {
		Toast,
		Loading,
		XDialog,
		XButton,
		Divider,
		Confirm,
		TransferDom
	} from 'vux'

	// import "./../assets/libs/jq.snow.js" // 只有在圣诞活动中需要引入

	export default {
		directives: {
			TransferDom
		},
		components: {
			Divider,
			XButton,
			Confirm,
			XDialog,
			Loading,
			Toast
		},
		props: {
			type: { //0 千杯不倒背景，1 情人节背景，2千杯不倒介绍 3 情人节介绍, 4 饺子背景 5 饺子介绍, 6答题游戏
				type: Number,
				default: 0
			},
			showFooter: {
				type: Boolean,
				default: false
			},
			disabled: {
				type: Boolean,
				default: false
			}
		},
		data() {
			return {

			}
		},
		beforeRouteLeave(to, from, next) {
			next()
		},
		beforeDestroy() {},
		methods: {
			...mapActions({

			}),
			...mapMutations({

			}),
			getWxConfig() {
				Wechat.initHomeShare()
			},
			tap(tab) {
				this.$emit('tap', tab)
			},
			capture(e) {
				if(this.disabled) {
					e.preventDefault()
					e.stopPropagation()
				}
			}

		},
		created() {
			//			this.getWxConfig()

		},
		mounted() {

		},
		computed: {
			...mapState({
				myInfo: state => state.user.myInfo,
				mySource: state => state.user.mySource
			}),
			calBg() {
				var name = ''
				if(this.type == 0) name = 'bg1.png';
				if(this.type == 1) name = 'bg2.png';
				if(this.type == 2) name = 'gameIntro.png';
				if(this.type == 3) name = 'gameIntro1.png';
				if(this.type == 4) name = 'bg1.png';
				if(this.type == 5) name = 'gameIntro2.png';
				if(this.type == 6) name = 'bg3.png';

				return name;
			}

		},

	}
</script>