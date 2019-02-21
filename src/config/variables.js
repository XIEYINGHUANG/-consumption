// 用于配置项目中涉及的业务常量
import { ossPrefix } from './../config'
export const banners = [
  {
    url: '/shareActivities/springFestival',
    img: `${ossPrefix}banner/banner-share-festival.jpg`,
    from: '2019/2/5 00:00:00',
    to: '2019/2/6 23:59:59'
  },
  { 
    url: '/sfhome', 
    img: `${ossPrefix}banner/img-banner-1.png?v=12232`,
    from: '2019/1/31 00:00:00',
    to: '2019/2/20 23:59:59'
  },
  { 
    url: '/sfbudao',
    img: `${ossPrefix}banner/img-banner-2.png`,
    from: '2019/2/4 00:00:00',
    to: '2019/2/8 23:59:59'
  },
  { 
    url: '/sfjiaozi',
    img: `${ossPrefix}banner/img-banner-4.png`,
    from: '2019/2/9 00:00:00',
    to: '2019/2/13 23:59:59'
  },
  { 
    url: '/sfqingren',
    img: `${ossPrefix}banner/img-banner-3.png`,
    from: '2019/2/14 00:00:00',
    to: '2019/2/17 23:59:59'
  }
]
export const partners = [
  {   
    img: `${ossPrefix}zhongyan-logo.png`, 
    name: '湖南中烟'
  },
  {
    img: `${ossPrefix}logo.png`,
    name: '橙杏防伪平台',
    // url: 'https://www.nise.cn/hunan?scan=false'
    url: 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxdf6beab327a59abc&redirect_uri=http%3A%2F%2Fwww.nise.cn%2Fapi%2Fwx_redirect&response_type=code&scope=snsapi_userinfo&state=#wechat_redirect'
  },
  {
    img: `${ossPrefix}brand/yunnanbaiyao.png`,
    name: '云南白药',
    url: 'https://j.youzan.com/cyGGN9'
  },
  {
    img: `${ossPrefix}brand/wuliangye.png`,
    name: '五粮液',
    url: 'https://wxy.blzaixian.com/mall/static/wlyshow.html'
  },
  {
    img: `${ossPrefix}cj-4.png`,
    name: '中国联通',
    url: 'https://m.10010.com/scaffold-show/prew/ttxscard?randomCode=n30SsV'
  },
  {
    img: `${ossPrefix}cj-3.png`,
    name: '远大集团',
    url: 'https://mall.jd.com/index-63022.html'
  },
  {
    img: `${ossPrefix}brand/nongyeyinhang.png`,
    name: '农业银行',
    // url: '/ewm?brand=1'
    url: 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxdf6beab327a59abc&redirect_uri=http%3A%2F%2Fwww.nise.cn%2Fapi%2Fwx_redirect&response_type=code&scope=snsapi_userinfo&state=#wechat_redirect'
  },
  {
    img: `${ossPrefix}brand/henganjituan.png`,
    name: '恒安集团'
  },
  {
    img: `${ossPrefix}hqsc.png`,
    name: '和气生财',
    url: 'https://he.1lishou.com/'
  },
  {
    img: `${ossPrefix}cj-2.png`, 
    name: '中国邮政'
  },
  {
    img: `${ossPrefix}cj-1.png`, 
    name: '中国石油'
  },
  {
    img: `${ossPrefix}brand/mengniu.png`, 
    name: '蒙牛'
  },
  {
    img: `${ossPrefix}dyc.png`,
    name: '大益茶',
    // url: '/ewm?brand=2'
    url: 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxdf6beab327a59abc&redirect_uri=http%3A%2F%2Fwww.nise.cn%2Fapi%2Fwx_redirect&response_type=code&scope=snsapi_userinfo&state=#wechat_redirect'
  },
  {
    img: `${ossPrefix}txlogo.jpg`,
    name: '腾讯'
  },
  {
    img: `${ossPrefix}brand/manguotv.png`,
    name: '芒果TV'
  },
  {
    img: `${ossPrefix}brand/guizhoumaotai.png`,
    name: '贵州茅台'
  },
  {
    img: `${ossPrefix}brand/guizhouxijiu.png`,
    name: '贵州习酒',
    url: 'https://h5.youzan.com/v2/feature/wiqrhq05'
  },
  {
    img: `${ossPrefix}brand/yulinguchafang.png`,
    name: '雨林古茶坊',
    url: 'https://yulinchaye.m.tmall.com/'
  },
  {
    img: `${ossPrefix}brand/yuncha.png`,
    name: '云茶',
    url: 'https://shop19002388.youzan.com/v2/showcase/homepage?kdt_id=18810220&scan=3&from=kdt&redirect_count=1&sf=wx_sm&is_share=1'
  },
  {
    img: `${ossPrefix}brand/chaxiangji.png`,
    name: '茶香记'
  },
  {
    img: `${ossPrefix}brand/tianqing.png`,
    name: '添庆'
  }
]
export const wishes = [
  {text:'祝和＋消费共享平台越办越好！',id:1},
  {text:'给和+消费共享平台点个赞！',id:2},
  {text:'平台活动给予了真实惠~',id:3},
  {text:'永远支持和＋消费共享平台~',id:4},
  {text:'为和＋消费共享平台打call！',id:5},
  {text:'祝和＋消费共享平台红红火火，顺顺利利！',id:6},
  {text:'雄心创大业，壮志写春秋',id:7},
  {text:'一条小小祝福，愿你人气旺旺旺',id:8},
  {text:'祝和+消费共享平台口碑越来越好~',id:9},
  {text:'愿和+消费共享平台的用心赢得崭新；',id:10},
]
export const pigYearPredictions = {
  aab: { text: '一个没有灵魂的躯壳，继续躺过一年', title: '等待救赎' },
  aac: { text: '今年薛微有人生醒悟的苗头，请加油', title: '醒悟人生' },
  aaa: { text: '需要有人带你走出曾经的生活模式！', title: '等待救赎' },
  aad: { text: '一分不花走遍全球，极其有天赋', title: '人生赢家' },
  aba: { text: '一个没有灵魂的躯壳，继续躺过一年', title: '等待救赎' },
  abb: { text: '今年薛微有人生醒悟的苗头，请加油', title: '醒悟人生' },
  abc: { text: '今年就一个字：稳', title: '奋斗拼搏' },
  abd: { text: '一分不花走遍全球，极其有天赋', title: '人生赢家' },
  aca: { text: '无本万利是做买卖的终极目标', title: '等待救赎' },
  acb: { text: '没有高要求，就没有大失望', title: '醒悟人生' },
  acc: { text: '无本万利是做买卖的终极目标', title: '人生赢家' },
  acd: { text: '金钱上只进不出，走完全球可以走向太空', title: '人生赢家' },
  ada: { text: '家里有矿，秒杀众生', title: '多金矿主' },
  adb: { text: '家里有矿，秒杀众生', title: '多金矿主' },
  adc: { text: '家里有矿，秒杀众生', title: '多金矿主' },
  add: { text: '家里有矿，秒杀众生', title: '多金矿主' },
  baa: { text: '一个没有灵魂的躯壳，继续躺过一年', title: '等待救赎' },
  bab: { text: '今年薛微有人生醒悟的苗头，请加油', title: '醒悟人生' },
  bac: { text: '今年薛微有人生醒悟的苗头，请加油', title: '醒悟人生' },
  bad: { text: '不要沉浸在梦境里，现实问题仍需面对', title: '醒悟人生' },
  bba: { text: '一个没有灵魂的躯壳，继续躺过一年', title: '等待救赎' },
  bbb: { text: '一个没有灵魂的躯壳，继续躺过一年', title: '等待救赎' },
  bbc: { text: '今年薛微有人生醒悟的苗头，请加油', title: '醒悟人生' },
  bbd: { text: '不要沉浸在梦境里，现实问题仍需面对', title: '人生赢家' },
  bca: { text: '精神上有分裂的预兆，需要谨慎对待', title: '精分达人' },
  bcb: { text: '精神上有分裂的预兆，需要谨慎对待', title: '精分达人' },
  bcc: { text: '精神上有分裂的预兆，需要谨慎对待', title: '精分达人' },
  bcd: { text: '精神上有分裂的预兆，需要谨慎对待', title: '精分达人' },
  bda: { text: '精神上有分裂的预兆，需要谨慎对待', title: '精分达人' },
  bdb: { text: '精神上有分裂的预兆，需要谨慎对待', title: '精分达人' },
  bdc: { text: '精神上有分裂的预兆，需要谨慎对待', title: '精分达人' },
  bdd: { text: '精神上有分裂的预兆，需要谨慎对待', title: '精分达人' },
  caa: { text: '无本万利是做买卖的终极目标', title: '人生赢家' },
  cab: { text: '切勿麻木对待周围的消极事物', title: '醒悟人生' },
  cac: { text: '无本万利是做买卖的终极目标', title: '人生赢家' },
  cad: { text: '金钱上只进不出，走完全球可以走向太空', title: '多金矿主' },
  cba: { text: '今年会有个很好的起点，切勿放纵', title: '奋斗拼搏' },
  cbb: { text: '今年会有个很好的起点，切勿放纵', title: '奋斗拼搏' },
  cbc: { text: '今年薛微有人生醒悟的苗头，请加油', title: '醒悟人生' },
  cbd: { text: '学会控制，未来不是梦', title: '规划未来' },
  cca: { text: '今年会有个很好的起点，切勿放纵', title: '奋斗拼搏' },
  ccb: { text: '今年会有个很好的起点，切勿放纵', title: '奋斗拼搏' },
  ccc: { text: '稳定的一年，平淡就是幸福', title: '人生赢家' },
  ccd: { text: '精神上有分裂的预兆，需要谨慎对待', title: '精分达人' },
  cda: { text: '今年会有个很好的起点，切勿放纵', title: '奋斗拼搏' },
  cdb: { text: '今年会有个很好的起点，切勿放纵', title: '奋斗拼搏' },
  cdc: { text: '稳定的一年，平淡就是幸福', title: '人生赢家' },
  cdd: { text: '潇洒多金的一年，不需要解释', title: '多金矿主' },
  daa: { text: '潇洒多金的一年，不需要解释', title: '极简生活' },
  dab: { text: '钱多到花不完，有些空虚的一年', title: '无欲无求' },
  dac: { text: '人生赢家，今年注意提升理财能力', title: '人生赢家' },
  dad: { text: '人生赢家，今年注意提升理财能力', title: '人生赢家' },
  dba: { text: '不要沉浸在梦境里，现实问题仍需面对', title: '认清现实' },
  dbb: { text: '不要沉浸在梦境里，现实问题仍需面对', title: '认清现实' },
  dbc: { text: '不要沉浸在梦境里，现实问题仍需面对', title: '认清现实' },
  dbd: { text: '不要沉浸在梦境里，现实问题仍需面对', title: '认清现实' },
  dca: { text: '精神上有分裂的预兆，需要谨慎对待', title: '精分达人' },
  dcb: { text: '精神上有分裂的预兆，需要谨慎对待', title: '精分达人' },
  dcc: { text: '今年会成为下一个华人首富', title: '人生赢家' },
  dcd: { text: '精神上有分裂的预兆，需要谨慎对待', title: '精分达人' },
  dda: { text: '钱多到花不完，有些空虚的一年', title: '多金矿主' },
  ddb: { text: '钱多到花不完，有些空虚的一年', title: '多金矿主' },
  ddc: { text: '奋斗不懈的一年，有颜有实力说的就是你', title: '人生赢家' },
  ddd: { text: '潇洒多金的一年，不需要解释', title: '人生赢家' },
};
export const business = {
  hotline: '4008386580',
  publicAccount: 'gongxiangpingtai1'
}

export const Brands = {
  WU_LIANG_YE: '五粮液'
}