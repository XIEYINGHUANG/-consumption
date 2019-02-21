<template>
    <!-- 底部导航栏 -->
    <div id="nav">
        <tabbar v-if="tabbar.indexOf($route.path) > -1" >
            <tabbar-item :selected="$route.path == tabbar[0]" link="/lottery">
                <img slot="icon" src="./assets/footer-icon-02.png">
                <img slot="icon-active" src="./assets/footer-icon-02-active.png">
                <span slot="label">抽奖</span>
            </tabbar-item>
            <tabbar-item :selected="$route.path == tabbar[1]" link="/about">
                <img slot="icon" src="./assets/icon-card-gray.png">
                <img slot="icon-active" src="./assets/icon-card-red.png">
                <span slot="label">券包</span>
            </tabbar-item>
            <tabbar-item :selected="$route.path == tabbar[2]" link="/my">
                <img slot="icon" src="./assets/footer-icon-04.png">
                <img slot="icon-active" src="./assets/footer-icon-04-active.png">
                <span slot="label">我的</span>
            </tabbar-item>
        </tabbar>
    </div>
</template>

<script>
    import { Tabbar, TabbarItem } from 'vux'

    export default {
        components: {
            Tabbar,
            TabbarItem,
        },
        data (){
            return {
                tabbar:['/lottery','/about','/my'],
            }
        }
    }
</script>

<style lang="scss">
    #nav{
        position: fixed;
        bottom:0;
    }
</style>
