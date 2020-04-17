<template>
	<div id="navigation">
		<router-link to="/">
			<div class="nav-box">
				首页
			</div>
		</router-link>
		<router-link to="/follow">
			<div class="nav-box">
				关注
			</div>
		</router-link>
		<div class="nav-box">
			加好
		</div>
		<div class="nav-box">
			消息
		</div>
		<div class="nav-box">
			我
		</div>
	</div>
</template>

<script>
	export default{
		name:'navigation'
	}
</script>

<style lang="stylus" scoped>
#navigation
	width 100%
	height 1rem
	position fixed
	bottom 0
	left 0
	z-index 999
	.nav-box
		float left
		width 20%
		color #fff
		text-align center
		height 1rem
		line-height 1rem
		font-size .4rem
	   
</style>
