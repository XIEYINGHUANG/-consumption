<template>
    <div class="goods-warp">
        <div v-transfer-dom class="tip">
            <confirm v-model="show"
                     :show-cancel-button="false"
                     @on-confirm="onConfirm">
                <p>{{briefTitle}}</p>
            </confirm>
        </div>
        <div v-if="!convert">
            <x-header class="goods-header" :left-options="{backText: ''}" @on-click-back="goBack">兑换商品</x-header>
            <flexbox orient="vertical">
                <flexbox-item>
                    <div class="goods-title" @click="addSite" v-if="!added&&couponItem===0">
                        <div class="addr-img"><img id="addr-pic" class="addr-pic"
                                                   src="../assets/icon/icon_add_address@2x.png"></div>
                        <p>添加收货地址</p>
                    </div>
                    <div class="goods-addr" v-if="added&&couponItem===0">
                        <div class="bg-wrap"><img class="bg-img" src="../assets/develop3.png"></div>
                        <p class="user-info"><span class="user-name">{{name}}</span><span
                                class="uesr-tel">{{tel}}</span></p>
                        <p class="user-addr">{{detail}}</p>
                    </div>
                    <div class="notice" v-if="!pay&&couponItem===0">{{desc}}</div>
                    <div class="notice" v-if="pay&&couponItem===0">注：工作人员确认后，会将兑换的商品邮寄到你所填地址（*港澳台地区暂时不支持邮寄）</div>
                    <div class="goods-content">
                <span class="mark"
                      :class="{'voucher':couponType ==1,'goods':couponType ==2,'red-packet':couponType ==3,'brand':couponType ==5,'friendly':couponType ==7}">商品券</span>
                        <div class="content-middle">
                            <p class="coupon-name">{{coupon}}</p>
                            <!--已使用(按钮需隐藏)-->
                            <div class="used-icon" v-if="couponItem===1">
                                <img src="../assets/icon/icon_used.png">
                            </div>
                            <!--已过期(按钮需隐藏)-->
                            <div class="used-icon" v-if="couponItem===2">
                                <img src="../assets/icon/icon_overdue.png" style="width: 50%">
                            </div>
                        </div>
                        <div class="content-footer">
                            <p class="coupon-date"><span class="footer-title">有效期</span><span class="validity-date">{{validityDate}}</span>
                            </p>
                            <p class="coupon-desc"><span class="footer-title">重要说明</span><span
                                    class="desc">{{desc}}</span>
                            </p>
                            <p class="service-condition"><span class="footer-title">使用条件</span><span class="condition">{{condition}}</span>
                            </p>
                            <div class="logo-wrap">
                                <img src="../assets/wuliangye.png">
                                <img src="../assets/wuliangye.png">
                                <img src="../assets/wuliangye.png">
                            </div>
                            <div class="pay-wrap" v-if="pay">
                                <p class="coupon-date"><span class="footer-title">商品金额</span><span
                                        class="validity-date">￥77</span>
                                <p class="coupon-date"><span class="footer-title">抵扣券</span><span
                                        class="validity-date color-red">-7</span>
                                <p class="coupon-date"><span class="footer-title">邮费</span><span class="validity-date">￥77</span>
                                <p class="coupon-date"><span class="footer-title">减邮费</span><span
                                        class="validity-date color-red">-17</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </flexbox-item>
                <div class="pay" v-if="pay&&couponItem===0">
                    <div class="pay-left">
                        <icon type="success"></icon>
                        <span>微信支付</span><span>￥77</span>
                    </div>
                    <div class="pay-right" @click="payment"><span>支付尾款</span></div>
                </div>
                <div class="btn" v-if="!pay&&couponItem===0">
                    <x-button plain type="primary" class="custom-primary-red" @click.native="goExchange">确定兑换</x-button>
                </div>
            </flexbox>
        </div>
        <div v-if="convert">
            <x-header class="goods-header" :left-options="{backText: ''}">券详情</x-header>
            <flexbox orient="vertical">
                <flexbox-item>
                    <div class="content-header">
                        <div class="header-left">
                            <img src="../assets/wuliangye.png">
                            <span>{{couponName}}</span>
                        </div>
                        <div class="header-right">
                            <x-button mini plain type="warn" disabled>已兑换</x-button>
                        </div>
                    </div>
                    <div class="goods-content">
                        <div class="info-content">
                            <p class="order-info">
                                <span class="footer-title">订单信息</span>
                                <x-icon type="ios-arrow-down" size="30"></x-icon>
                            </p>
                        </div>
                        <div class="content-footer" style="border-bottom: none">
                            <div class="pay-wrap">
                                <p class="coupon-date"><span class="footer-title">兑换时间</span><span
                                        class="validity-date">2018-10-10</span>
                                <p class="coupon-date"><span class="footer-title">商品金额</span><span
                                        class="validity-date">￥77</span>
                                <p class="coupon-date"><span class="footer-title">抵扣券</span><span
                                        class="validity-date color-red">-7</span>
                                <p class="coupon-date"><span class="footer-title">邮费</span><span class="validity-date">￥77</span>
                                <p class="coupon-date"><span class="footer-title">减邮费</span><span
                                        class="validity-date color-red">-17</span>
                                </p>
                                <p class="coupon-date"><span class="footer-title">支付方式</span><span
                                        class="validity-date">微信支付</span>
                                </p>
                                <p class="coupon-date"><span class="footer-title">总金额</span><span
                                        class="validity-date color-red">￥77</span>
                                </p>
                            </div>
                        </div>
                        <div class="content-footer">
                            <div class="pay-wrap">
                                <p class="coupon-date"><span class="footer-title">收货人姓名</span><span class="validity-date">果然是个</span></p>
                                <p class="coupon-date"><span class="footer-title">联系电话</span><span class="validity-date">12345678</span></p>
                                <p class="coupon-desc"><span class="footer-title">收货人地址</span><span
                                        class="desc">{{desc}}</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="goods-content">
                        <span class="mark"
                              :class="{'voucher':couponType ==1,'goods':couponType ==2,'red-packet':couponType ==3,'brand':couponType ==5,'friendly':couponType ==7}">抵扣券</span>
                        <div class="content-middle">
                            <p class="coupon-name">{{coupon}}</p>
                        </div>
                        <div class="content-footer">
                            <p class="coupon-date"><span class="footer-title">有效期</span><span class="validity-date">{{validityDate}}</span>
                            </p>
                            <p class="coupon-desc"><span class="footer-title">重要说明</span><span
                                    class="desc">{{desc}}</span>
                            </p>
                        </div>
                    </div>
                </flexbox-item>
            </flexbox>
        </div>
    </div>
</template>
<script>
    import {
        XHeader,
        XButton,
        Confirm,
        Cell,
        Flexbox,
        FlexboxItem,
        AlertModule,
        Icon,
        AlertPlugin,
        TransferDomDirective as TransferDom,
    } from 'vux'
    import { ossPrefix } from './../config'
    export default {
        props: ['couponItem', 'type'],
        directives: {
            TransferDom
        },
        components: {
            XHeader,
            XButton,
            Cell,
            Flexbox,
            FlexboxItem,
            AlertModule,
            Confirm,
            Icon,
            AlertPlugin
        },
        data() {
            return {
                convert: false,
                couponType: 1,
                coupon: '五粮液免费兑换',
                validityDate: '2018.10.11-2019.10.10',
                desc: '注：工作人员确认后，会将兑换的商品邮寄到你所填地址',
                condition: '指定商品',
                added: false,
                name: '关熙潮',
                tel: 13718412243,
                detail: '广东省珠海市香洲区拱北街道办昌平社区居民委员会桂圆城堡小区1号楼3单元301',
                pay: false,
                show: false,
                briefTitle: '',
                couponName: '云南白药',
            }
        },
        methods: {
            goBack(){
                console.log('返回');
                this.$router.push({path: '/coupons',query:{index:2}});
            },
            onConfirm(msg) {
                console.log('确定', msg);
                this.convert = true;
                this.show = false;
                console.log(1, this.show);
                // this.$router.push({path: '/usedDetails'});
            },
            // 添加收货地址
            addSite() {
                console.log('添加收获地址');
                this.added = true;
                // this.$router.push({path: '/addresslist'});
            },
            goExchange() {
                if (this.added) {
                    this.show = true;
                    this.briefTitle = '兑换成功'
                    // this.pay=true;
                    // AlertModule.show({
                    //     title: '提示',
                    //     content: '兑换成功',
                    // onShow () {
                    //     console.log('Module: I\'m showing')
                    // },
                    // onHide () {
                    //     console.log('Module: I\'m hiding now')
                    // }
                    // });
                } else {
                    AlertModule.show({
                        title: '提示',
                        content: '请先添加收货地址',
                        // onShow () {
                        //     console.log('Module: I\'m showing')
                        // },
                        // onHide () {
                        //     console.log('Module: I\'m hiding now')
                        // }
                    })
                }
            },
            payment() {
                AlertModule.show({
                    // title: '提示',
                    content: `<img style="width: 100%;height: 100%" 
                                src="${ossPrefix}btn_ok.png">
                                <p>恭喜您，已成功兑换！</p>
                                <p>请注意查收货品！</p>`,
                    // onShow () {
                    //     console.log('Module: I\'m showing')
                    // },
                    // onHide () {
                    //     console.log('Module: I\'m hiding now')
                    // }
                });
            }
        },
        mounted() {
            // console.log('红包券this.couponItem,this.type', this.couponItem, this.type);
        }

    }
</script>

<style lang="scss" scoped>
    .goods-warp {
        background: #F5F5F5;
        width: 100%;
        height: 100%;
        .goods-header {
            background: #CD2E2E;
        }
        .goods-title {
            background: #ffffff;
            box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.1);
            display: flex;
            margin: 2vh;
            padding: 2vh;
            text-align: center;
            flex-direction: column;
            color: #B3B3B3;
            .addr-img {
                margin: 0 auto;
            }
        }
        .content-header {
            background: #ffffff;
            box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.1);
            display: flex;
            margin: 2vh;
            .header-left {
                display: flex;
                align-items: center;
                flex: 2;
            }
            .header-right {
                display: flex;
                align-items: center;
                padding-right: 3vw;
            }
        }
        .goods-addr {
            position: relative;
            background: #ffffff;
            box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.1);
            display: flex;
            margin: 2vh;
            padding: 2vh 0;
            text-align: center;
            flex-direction: column;
            color: #B3B3B3;
            .bg-wrap {
                position: absolute;
                top: -10px;
                .bg-img {
                    width: 100%;
                    height: 100%;
                }
            }
            .user-info {
                display: flex;
                justify-content: space-between;
                padding: 2vh;
            }
            .user-addr {
                text-align: left;
                padding: 0 2vh;
            }
        }
        .notice {
            margin: 2vh;
            padding: 2vh;
            color: #999999;
        }
        .goods-content {
            position: relative;
            background: #ffffff;
            box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.1);
            /*display: flex;*/
            margin: 2vh;
            padding: 3vh 0 0;
            .mark {
                color: #ffffff;
                background: linear-gradient(0deg, rgba(251, 181, 70, 1), rgba(255, 149, 103, 1));
                border-radius: 0 2.67vh 2.67vh 0;
                padding: 1vh 2vh;
                margin-top: 3vh;
            }
            .red-packet {
                background: linear-gradient(0deg, rgba(255, 122, 76, 1), rgba(255, 34, 49, 1));
            }
            .brand {
                background: linear-gradient(0deg, rgba(255, 76, 244, 1), rgba(129, 15, 245, 1));
            }
            .friendly {
                background: linear-gradient(0deg, rgba(184, 135, 64, 1), rgba(238, 204, 156, 1));
            }
            .goods {
                background: linear-gradient(0deg, rgba(255, 79, 133, 1), rgba(255, 67, 80, 1));
            }
            .voucher {
                background: linear-gradient(0deg, rgba(251, 181, 70, 1), rgba(255, 149, 103, 1));
            }
            .content-middle {
                text-align: center;
                padding: 3vh;
                .coupon-name {
                    font-size: 3.06vh;
                    font-weight: bold;
                    color: #333333;
                    /*text-align: center;*/
                    padding: 3vh;
                }
                .barcode-img, .logo {
                    width: 100%;
                    height: 100%;
                }
                .used-icon {
                    position: absolute;
                    right: 7vw;
                    top: 2vh;
                }
            }
            .info-content{
                margin: 2vh;
            }
            .order-info{
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 1vh 0;
                width: 100%;
            }
            .content-footer {
                margin: 2vh;
                border-top: 1px solid #E6E6E6;
                border-bottom: 1px solid #E6E6E6;
                .coupon-date, .coupon-desc, .service-condition{
                    display: flex;
                    justify-content: space-between;
                    padding: 1vh 0;
                    width: 100%;
                    .validity-date, .desc, .condition {
                        color: #999999;
                    }
                    .color-red {
                        color: #CD2E2E;
                    }
                    .footer-title {
                        width: 30%;
                    }
                    .desc, .condition {
                        width: 70%;
                        text-align: right;
                    }
                }
                .logo-wrap {
                    display: flex;
                    justify-content: flex-end;
                }
                .pay-wrap {
                    display: flex;
                    justify-content: space-between;
                    border-top: 1px solid #E6E6E6;
                    flex-direction: column;
                    /*padding: 2vh 0;*/
                }
            }
        }
        .btn {
            width: 80vw;
            height: 7.5vh;
            margin: 17vh 0 2vh;
            /*position: fixed;*/
            /*bottom: 0;*/
            /*left: 50%;*/
            /*margin-left: -40vw;*/
            .custom-primary-red {
                border-radius: 99px !important;
                background: #CD2E2E !important;
                color: #FFFFFF !important;
            }
            .weui-btn_plain-primary {
                border: none;
            }
        }
        .pay {
            width: 100%;
            height: 7.5vh;
            position: fixed;
            bottom: 0;
            background: #FFFFFF;
            display: flex;
            align-items: center;
            padding-left: 2vh;
            justify-content: space-between;
            .pay-right {
                background: #CD2E2E;
                padding: 2vh;
                color: #FFFFFF;
            }
        }
        .weui-dialog__btn_primary {
            color: #ffffff;
            background: #CD2E2E;
        }
    }

    .tip /deep/ {
        .weui-dialog__ft {
            background: #CD2E2E;
            .weui-dialog__btn_default {
                color: #ffffff;
            }
        }
    }

</style>