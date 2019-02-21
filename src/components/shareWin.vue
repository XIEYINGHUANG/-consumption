<template>

	<div class="c_maskCnt shareWin">
		<div class="c_paddingV shareTxt textm c_white_txt">
			<slot></slot>
		</div>
		<div class="shareImg c_bg">
		</div>
	</div>
</template>

<script>
	export default {

	}
</script>

<style lang="scss" scoped>
	.shareWin {
		z-index: 110;
	}
	
	.shareTxt {
		padding-top: 90px;
	}
	
	.shareImg {
		position: absolute;
		background-size: 100% 100%;
		background-image: url('~@/assets/sfImg/card/shareArrow.png');
		top: 4px;
		right: 5px;
		width: 70px;
		height: 80px;
	}
</style>