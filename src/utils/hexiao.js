import {request, Modules} from "./HttpRequest/request";
import stroge from './StorageManagement'

/**
 * 根据不同券类型跳转卡券详情页
 * @param 表单数据
 * @return 接口需要的参数
 */
const goDetails = (param,num,router) => {
    const type = parseInt(param.type)
    if (type === 1|| type === 4) {
        router.push({path: '/voucherDetails', query: { dataDetail: param, source: num }})
    } else if (type === 2) {
        // router.push({path: '/goodsDetails',query:{dataDetail :param,source:num}});
        router.push({path: '/voucherDetails', query: { dataDetail :param, source:num }})
    } else if (type === 5) {
        // router.push({path: '/getRedPacket',query:{dataDetail :param,source:num}});
        router.push({path: '/voucherDetails', query: { dataDetail :param, source:num }})
    } else if (type === 8){
        // router.push({path: '/brandVoucher',query:{dataDetail :param,source:num}});
        router.push({path: '/voucherDetails', query: { dataDetail :param, source:num }})
    }else if (type === 7){
        // router.push({path: '/friendlyVoucher',query:{dataDetail :param,source:num}});
        router.push({path: '/voucherDetails', query: { dataDetail :param, source:num }})
    }
}

/**
 * 根据不同券类型核销券
 * @param 表单数据
 * @goods 转换商品时全部的商品信息
 * @return 接口需要的参数
 */
const emitChengxingApi = (card) => {
    if (card.amount_type == 5 || (card.brand_business_name == '五粮液' && card.amount_type == 4)) {
        let data = {
            member_id: stroge.getMemberId(),
            coupon_code: card.coupon_rule_id,
            mobile: stroge.getPhone(),
            company_id: card.amount_type === 5 ? 1 : 2
        };
        request({
            url:Modules.COUPONS +'/lottery/bind',
            params:data
        }).then(res=>{
            console.log('兑奖>>>', res);
            let mm = res.data;
            if (mm.result === 0) {
                // alert('成功')
            } else {
                // alert('失败')
                // this.toastType='cancel';
                // this.toastText='卡券过期，领取失败';
                // this.showToast=true;
            }
        });
    }
}



// 点击按钮调取接口
const postData = (card) => {
    let data = {
        "member_id": stroge.getMemberId(),
        "brand_name": card.brand_name,
        "coupon_name": card.coupon_name,
        "jump_url": card.jump_url,
        "operation_type": 2
    };
    
    // request({
    //     url:Modules.COUPONS +'/operation/record',
    //     params:data,
    //     config: {
    //         headers: {
    //             'authorization':'member YsfrkQGy21BCIvP2aLlqVZjHz9lpLaDfsKldpUmFGEsXRhx4ycd5uOBPS42cm3Yu'
    //         }
    //     },
    // }).then(res=>{
    //     console.log('点击按钮>>>', res);
    //     let mm = res.data;
    //     if (mm.result === 0) {
    //         // alert('获取成功')
    //     } else {
    //         // alert('获取失败')
    //     }
    // });
}

export {
    goDetails,
    emitChengxingApi,
    postData
}