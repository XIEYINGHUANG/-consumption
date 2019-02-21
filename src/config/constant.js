// 用于存放魔法数的地方
export const couponStatus = {
  UNUSED: 1,
  USED: 2,
  EXPIRED: 	3
}

export const couponUsage = {
  NONE: 0,
  OFFLINE_POS: 1, // 线下到店POS核销
  ONLINE_MINI: 2, // 线上小程序核销
  THIRD_PARTY_URL: 3 // 线上小程序URL核销
}

export const couponType = {
  DEDUCTION: 1, // 全部可用的抵扣券
  GOODS: 2, // 商品券
  DISCOUNT: 3,  // 打折券
  DEDUCTION_LIMITED: 4,  // 限制商品的抵扣券
  RED_PACKET: 5,  // 红包券
  THANKS: 6, // 谢谢惠顾
  PIECE: 7, // 和气券
  BRAND: 8, // 品牌券
}


export const couponTypeArray = [
  { value: couponType.DEDUCTION, text: '抵扣券', className: '抵扣券' },
  { value: couponType.GOODS, text: '商品券', className: 'goods' },
  { value: couponType.DISCOUNT, text: '打折券', className: '' },
  { value: couponType.DEDUCTION_LIMITED, text: '抵扣券', className: '抵扣券' },
  { value: couponType.RED_PACKET, text: '红包券', className: 'red-packet' },
  { value: couponType.THANKS, text: '谢谢惠顾', className: '' },
  { value: couponType.PIECE, text: '和气券', className: 'friendly' },
  { value: couponType.BRAND, text: '品牌券', className: 'brand' }
]
export const couponTypeFilter = (value) => {
  const array = couponTypeArray.filter(v => v.value == value)
  if (array.length) {
    return array[0].text
  }
  return value
}

export const santaWish = ['减肥成功', '开特斯拉', '环游世界', '畅饮茅台', '变身网红', '住上豪宅', '年轻十岁', '爱情钻戒', '中彩票', '带名表']
export const santaCard = ['loseWeights.png', 'driveTeslas.png', 'travelWorlds.png', 'drinkMoutais.png',
  'becomeStars.png', 'liveMansions.png', 'tenYoungers.png', 'loveRings.png', 'winLotterys.png', 'wearWatchs.png'
]