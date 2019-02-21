<template>
    <div class="voucher-warp">
        <x-header class="voucher-header" :left-options="{backText: ''}">领取说明</x-header>
        <div>
            <div class="voucher-title" v-if="showExchange">
                <div class="title-left">
                    <img src="../assets/wuliangye.png">
                    <span>{{couponName}}</span>
                </div>
                <div class="title-right">
                    <!--<x-button mini plain type="warn" @click.native="exchange">领取说明</x-button>-->
                    <x-button mini plain type="warn" @click.native="exchange" v-if="couponItem===0">领取说明</x-button>
                </div>
            </div>
            <div class="voucher-content">
                 <span class="mark" v-if="!showExchange"
                       :class="{'voucher':couponType ==1,'goods':couponType ==2,'red-packet':couponType ==3,'brand':couponType ==5,'friendly':couponType ==7}">领取说明</span>
                <span class="mark" v-if="showExchange"
                      :class="{'voucher':couponType ==1,'goods':couponType ==2,'red-packet':couponType ==3,'brand':couponType ==5,'friendly':couponType ==7}">红包券</span>
                <div class="content-middle">
                    <img class="logo" src="../assets/icon_info.png">
                    <!--已使用(按钮需隐藏)-->
                    <div class="used-icon" v-if="couponItem===1">
                        <img src="../assets/icon/icon_used.png">
                    </div>
                    <!--已过期(按钮需隐藏)-->
                    <div class="used-icon" v-if="couponItem===2" >
                        <img src="../assets/icon/icon_overdue.png" style="width: 50%">
                    </div>
                </div>
                <div class="content-footer">
                    <p class="coupon-desc">{{desc}}</p>
                    <p class="coupon-warning">{{warning}}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import {XHeader, XButton, Cell, Flexbox} from 'vux'

    export default {
        props:['couponItem','type'],
        components: {
            XHeader,
            XButton,
            Cell,
            Flexbox
        },
        data() {
            return {
                couponType: 3,
                desc: '使用微信扫一扫，扫描芙蓉王（硬）烟包内二维码获取防伪鼓励金。警示：18岁以下敬请离开。',
                warning: '提示：18岁以下敬请离开',
                couponName: '湖南中烟',
                showExchange:true
            }
        },
        methods: {
            exchange() {
                console.log('点击了领取说明');
                this.showExchange=false
            },
            goExchange() {
                console.log('兑换地点');
            },
            getRedPacket() {
                console.log('红包券领取说明');
            }
        },
        mounted  (){
            console.log('红包券this.couponItem,this.type',this.couponItem,this.type);
        }
    }
</script>

<style lang="less" scoped>
    .voucher-warp {
        background: #F5F5F5;
        width: 100%;
        height: 100vh;
        .voucher-header {
            background: #CD2E2E;
        }
        .voucher-title {
            background: #ffffff;
            box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.1);
            display: flex;
            margin: 2vh;
            .title-left {
                display: flex;
                align-items: center;
                flex: 2;
            }
            .title-right {
                display: flex;
                align-items: center;
                padding-right: 3vw;
            }
        }
        .voucher-content {
            background: #ffffff;
            box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.1);
            /*display: flex;*/
            margin: 2vh;
            padding: 3vh 0 0;
            position: relative;
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
            .content-footer {
                margin: 2vh 2vh 0;
                .coupon-desc, .coupon-warning {
                    display: flex;
                    justify-content: space-between;
                    padding: 1vh 0;
                    color: #666666;

                }
                .logo-wrap {
                    display: flex;
                    justify-content: flex-end;
                }
            }
            .weui-cell:before {
                border-top: 0
            }
        }
    }
</style>