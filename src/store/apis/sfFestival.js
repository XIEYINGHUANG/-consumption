// 春节活动相关
import axiosMain from '@/utils/HttpRequest/axios'
const RESOURCE = '/springFestival'
export default {
	getFuCards() {
		return axiosMain.doGet('/springFestival/userLuckyCard')
	},

	//开奖
	kaijiang(){
		return axiosMain.doPost('/springFestival/win');	
	},
	//游戏信息
	sfInfo() {
		return axiosMain.doGet('/springFestival/userSpringFestival');
	},
	//游戏完成后拿卡片
	getGameReward(data){
		return axiosMain.doPost('/springFestival/gameReward',data);
	},
	//分享获得额外生命
	getOneLife(){
		return axiosMain.doPost('/springFestival/gameShare');
	},
	consumeOneLife(){
		return axiosMain.doPost('/springFestival/gameRevive');
	},
	

	//卡片 获取随机logo 信息
	getRandomBrand() {
		return axiosMain.doGet('/springFestival/firstRandomBrand');
	},
	//获取随机卡片信息
	getRandomCard() {
		return axiosMain.doGet('/springFestival/getUserFirstRandomCard');
	},
	//赠送或索取福卡
	sendCard(data) {
		return axiosMain.doPost('/springFestival/luckyCardRequest',data);
	},
	//获取外来卡片详情
	getSendCardDetail(uuid) {
		return axiosMain.doGet(`/springFestival/luckyCardRequestDetail/${uuid}`);
	},
	//接受别人发送过来的卡片操作信息
	agreeSend(uuid) {
		return axiosMain.doPost(`/springFestival/luckCardAgree/${uuid}`);
	},
	//接受系统第一次派发的卡片
	acceptFirstCard(){
		return axiosMain.doPost('/springFestival/userFirst');	
	},
	//活动
	getBrandList() {
		return axiosMain.doGet('/springFestival/brands');
	},
	startAnswer(id) {
		return axiosMain.doPost('/springFestival/questionStart', {
			brand_id: id
		});
	},
	submitAns(data) {
		return axiosMain.doPost('/springFestival/userAnswer', data);
	},
	answerActiveShare(){
		return axiosMain.doPost('/springFestival/answerShare');
	},

  // 分享获得春节福利
  getRewardByShare () {
    return axiosMain.doPost(`${RESOURCE}/getRewardByShare`, {})
  }
}