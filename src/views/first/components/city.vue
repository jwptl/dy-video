<template>
	<div id="city">
		<div class="colation">
			<div class="colation-left">
				自动定位
			</div>
			<div class="colation-right">
				切换
			</div>
		</div>
	</div>
</template>

<script>
export default{
	name:'city'
}
</script>

<style lang="stylus" scoped>
#city
	padding .02rem
	width 100%
	box-sizing border-box
	.colation
		width 100%
		height .8rem
		line-height .8rem
		margin-top 1.2rem
		border-bottom .1rem solid #c3c3c3
		overflow hidden
		.colation-left
			float left
			margin-left .3rem
		.colation-right
			float right
			margin-left .3rem
</style>
