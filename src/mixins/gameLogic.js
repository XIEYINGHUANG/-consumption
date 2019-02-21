import report from '@/utils/statistics'
import { mapState, mapActions, mapMutations } from 'vuex'
import { session, local } from '@/utils/storage'
import Wechat from '@/utils/wechat'
import bdWin from '@/components/bdWin'
import sfApi from '@/store/apis/sfFestival'
import shareWin from '@/components/shareWin'

var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;

export default {
	components: {
		bdWin,
		shareWin
	},
	data() {
		return {
			winType: 0, //0 千杯不倒背景，1 情人节背景，2千杯不倒介绍 3 情人节介绍, 4 饺子背景 5 饺子介绍
			showWin: 0, //0 不显示，1 有复活机会，2无复活机会, 3 成绩不达标，4有奖品，5奖品拿完，6 介绍
			showFooter: false,
			showShareMask: false,
			passScores: 20,
			giftObj: {}, //答题返回的信息

			zhaiArr: [{
				type: 'z1',
				scores: 1
			}, {
				type: 'z2',
				scores: 1
			}],

			life: 0,
			share_rebirth_count: 0, //分享重新获取生命值
			prise_count: 0, //获取产品的奖励次数

			scores: 0, //总分
			sfInfo: {},
			dataLoaded: false, //游戏数据是否加载完成了
			stopGame: false, //是否停止游戏

			moveLeft: false,
			moveRight: false,
			crashed: false,
			aniArr: [] //{top:40,pos:'pos1',type:'z1',scores:1,speed:1}
		};
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
		getWxConfig(cb) {
			if(this.wxShareCB == null) this.wxShareCB = cb;
			this.refreshShare()

		},

		refreshShare() {
			var obj = {
				link: location.href,
				title: '玩游戏，瓜分百万礼品！',
				desc: '和+给你发新年福利拉~'
			}

			if(this.showWin == 2 || this.showShareMask) { //分享增加次数
				obj.link = location.origin + '/sfcard'
				obj.title = '据说世上只有10%的人能一次通关'
				var scores = this.scores;
				obj.desc = '我的成绩是“' + scores + '”分，无敌太寂寞求挑战！'
			}

			Wechat.initShare(obj, this.wxShareCB)
		},
		left(val) {
			this.moveLeft = val
		},
		right(val) {
			this.moveRight = val
		},
		isCross(obj1, obj2, n) { //判断矩形是否交叉
			if(n == null) n = 0;
			var cross = false

			if(obj1.left > obj2.left && obj1.left < obj2.right && obj1.top > obj2.top && obj1.top < obj2.bottom) cross = true;

			if(obj1.right > obj2.left && obj1.right < obj2.right && obj1.top > obj2.top && obj1.top < obj2.bottom) cross = true;

			if(obj1.left > obj2.left && obj1.left < obj2.right && obj1.bottom > obj2.top && obj1.bottom < obj2.bottom) cross = true;

			if(obj1.right > obj2.left && obj1.right < obj2.right && obj1.bottom > obj2.top && obj1.bottom < obj2.bottom) cross = true;

			if(!cross && n == 0) cross = this.isCross(obj2, obj1, n + 1);

			return cross;
		},
		hasCollision() {
			var cls = false
			if(this.$refs.zhaiMain) {
				var zhaiArr = this.$refs.zhaiMain.querySelectorAll('.obj')
				var zhuArr = this.$refs.zhaiMain.querySelectorAll('.zhu')

				outerLoop: for(var i = 0; i < zhuArr.length; i++) {
					var zhu = zhuArr[i]
					var zhuRect = zhu.getBoundingClientRect()
					var zhuRectN = { //降低灵敏度
						left: zhuRect.left + 6,
						right: zhuRect.right - 6,
						top: zhuRect.top + 6,
						bottom: zhuRect.bottom - 6
					}
					for(var j = 0; j < zhaiArr.length; j++) {
						var zhai = zhaiArr[j]
						var zhaiRect = zhai.getBoundingClientRect()

						var zhaiRectN = { //减低灵敏度
							left: zhaiRect.left + 6,
							right: zhaiRect.right - 6,
							top: zhaiRect.top + 6,
							bottom: zhaiRect.bottom - 6
						}

						if(this.isCross(zhuRectN, zhaiRectN)) {
							cls = true;
							break outerLoop;
						}
					}
				}

			}

			return cls;
		},
		playAnim() {
			if(this.crashed || this.stopGame) return;
			if(this.hasCollision()) {
				this.crashed = true
				this.stopAction()
				return;
			}
			this.aniArr.forEach((item) => {
				item.top += item.speed;

				if(!item.scoresAdded && item.top > 95) {
					var scores = item.scores * 1
					if(isNaN(scores)) scores = 0
					this.scores += scores;
					item.scoresAdded = true
				}
				if(item.top > 120) item.dead = true;
			})

			this.aniArr = this.aniArr.filter(item => {
				return !item.dead;
			})

			requestAnimationFrame(this.playAnim.bind(this))
		},

		autoGenerateObj() {
			if(this.stopGame || this.crashed) return;
			var randIndex = Math.floor(Math.random() * this.zhaiArr.length)
			var randObj = this.zhaiArr[randIndex]


			if(this.tmpNum == null) this.tmpNum = 0;

			if(this.tmpNum == null) this.tmpNum = 0;
edec116a69bcb34c17d962b79cce20c0b4962284
			this.tmpNum += 1;
			//	0.32		15  var otherS = Math.random() * 1 / 20;

			var increaseRate=0.18
			var deductNum=0
			
			var ir=0;
			var dn=0;
			var deltaTime=0;
			var genDeltaTime=0;
			if(this.scores>20){ //用于增加速度
				ir=increaseRate
				dn=deductNum
				genDeltaTime=-450
				if(this.speedup==null){//加速度的时候停顿，避免突然加速导致障碍物挤到一起
					this.speedup=true
					deltaTime=3500
				}
				
			}
			
			
			this.aniArr.push({
				type: randObj.type,
				top: 0,
				pos: 'pos' + (1 + Math.floor(Math.random() * 4)),
				scores: randObj.scores,
				speed: 0.32 +ir
			})
			// (Math.random() * 1 / (15-dn))
			// + Math.floor(Math.random() * 1000)
			//
			setTimeout(this.autoGenerateObj.bind(this), 1600 +Math.floor(Math.random() * 300+genDeltaTime) +deltaTime);
		},

		pauseGame() {
			this.stopGame = true
		},
		playAnimAgain() {
			this.crashed = false
			this.stopGame = false
			this.aniArr = []
			setTimeout(() => {
				this.playAnim()
				this.autoGenerateObj()
			}, 300)

		},
		fuhuoChild(keepScores) {
			sfApi.consumeOneLife().then(data => {
				this.life--;
				this.startGame(keepScores)
			}).catch(this.$Err)
		},
		fuhuo() { //复活
			this.fuhuoChild(true)
			report(this.getChildTypeName(), '点击', '复活按钮')
		},
		noFuhuo() { //不复活
			this.showCorrectWin(3) //成绩不达标
			report(this.getChildTypeName(), '点击', '不复活按钮')
		},
		seePrise() { //查看奖品 ，已被废弃

		},
		seeMore() { //查看更多
			this.$router.push('/sfhome')
			this.timeEllapsedRP()
		},
		tapClick(tab) { //窗口底部点击的动作
			if(tab == 0) { //重新开始
				if(this.life > 0) {
					this.fuhuoChild(false) //不保存分数
				} else {
					this.showCorrectWin(2);
					this.refreshShare()
				}
				report(this.getChildTypeName(), '点击', '再玩一次')
			} else if(tab == 1) { //
				this.$router.push('/sfhome')
				report(this.getChildTypeName(), '点击', '更多活动')
				//				this.seeMore()
			} else if(tab == 2) {
				this.showShareMask = true
				this.refreshShare()
				report(this.getChildTypeName(), '点击', '炫耀成绩')
			}
		},
		closeShareMask() {

		},
		startGame(keepScores) { //开始游戏
			if(!this.dataLoaded) {
				this.$toast('游戏数据还没加载完成')
				return;
			}
			if(this.life <= 0) {
				//				this.$toast('生命值已经为0')
				this.showCorrectWin(2) // 显示分享页面
				return;
			}

			if(!keepScores) { //不保存剩下分数
				this.scores = 0;
			}

			this.showCorrectWin(0)
			this.showShareMask = false
			this.playAnimAgain()

			this.timeEllapsedRP()

		},
		timeEllapsedRP() {
			var end_time = Date.now()
			var diffTime = Math.floor((end_time - this.cal_start_time) / 1000)

			var rpName = this.getChildTypeName()
			report(rpName, '停留时间', diffTime + 's')
		},

		getChildTypeName() {
			var childType = this.getChildType() //由具体的继承者实现 0 千杯不倒 1 饺子大作战 2 躲避情人劫

			var rpName = '未知'
			if(childType == 0) rpName = '千杯不倒';
			if(childType == 1) rpName = '饺子大作战';
			if(childType == 2) rpName = '躲避情人劫';

			return rpName;
		},

		showStopActionWin(passed) { //passed 表示是否及格了
			if(passed) {
				if(this.prise_count > 0) {
					sfApi.getGameReward({
						score: this.scores
					}).then(resData => {
						var data = resData.data
						if(!data) {
							console.log('no data in')
							this.showCorrectWin(5) //意外情况奖品发放完
							return;
						}
						this.giftObj = data
						this.showCorrectWin(4) //奖励页
						this.prise_count--;
					}).catch(e => {
						this.showCorrectWin(5) //意外情况奖品发放完
						this.$Err(e)
					})
				} else {
					this.showCorrectWin(5) //奖品发放完
				}
			} else {
				if(this.life > 0) {
					this.showCorrectWin(1) //复活弹窗
				} else { //分享获得生命值弹窗
					this.showCorrectWin(2) //这个方法由具体的游戏实现
					this.refreshShare()
				}

			}
		},
		stopAction() { //游戏结束的后续逻辑

			//			this.aniArr=[] //结束后马上清空，避免下一次复活又判断出有碰撞
			if(this.scores < this.passScores) {
				this.showStopActionWin(false)
				return;
			}

			this.showStopActionWin(true)

		},
		loadSFData() {
			sfApi.sfInfo().then(data => {
				if(!data.data) return;
				this.sfInfo = data.data
				this.life = this.sfInfo.remain_revive_count * 1;
				this.share_rebirth_count = this.sfInfo.share_revive_count * 1
				this.prise_count = this.sfInfo.remain_reward_count * 1
				if(isNaN(this.life)) {
					console.errror('life is NaN')
					this.life = 0
				}

				if(isNaN(this.share_rebirth_count)) {
					console.error('share_rebirth_count is NaN')
					this.share_rebirth_count = 0
				}
				if(isNaN(this.prise_count)) {
					console.error('prise_count is NaN')
					this.prise_count = 0
				}

				this.dataLoaded = true

			}).catch(this.$Err)
		}

	},
	created() {
		this.getWxConfig(() => {
			if(this.showWin == 2 || this.showShareMask) { //分享页面分享才有效
				sfApi.getOneLife().then(data => { //分享后继续游戏
					this.life += 3;
					this.startGame(true)
				}).catch(this.$Err)
			}

			var rpName = '';
			if(this.showWin == 2) rpName = '复活页面分享';
			else rpName = '炫耀成绩页面分享';
			report(this.getChildTypeName(), '点击', rpName)
		});
		this.loadSFData()

	},
	mounted() {
		this.showCorrectWin(6)
		this.cal_start_time = Date.now()

		document.body.oncontextmenu = function(e) { //避免右键的菜单弹出
			e.preventDefault()
			e.stopPropagation()
		}
	},
	computed: {
		...mapState({
			myInfo: state => state.user.myInfo,
			mySource: state => state.user.mySource
		}),
		calRewardObj() {
			var obj = {
				type: 0
			}
			var data = this.giftObj
			if(data.giftType == 0) { //卡片
				var cardType = data.data.cardType * 1 + 1
				if(isNaN(cardType)) {
					console.error('cardType is NaN')
					cardType = 0;
				}
				if(cardType == 5) cardType = 0;

				var name = '';
				if(cardType == 0) name = 'H.png';
				if(cardType == 1) name = 'P.png';
				if(cardType == 2) name = 'L.png';
				if(cardType == 3) name = 'U.png';
				if(cardType == 4) name = 'S.png';

				obj.url = require('@/assets/sfImg/home/' + name)
			} else { //优惠券
				obj.url = data.data.imageUrl
				obj.type = 1
			}
			return obj;
		}

	}
}