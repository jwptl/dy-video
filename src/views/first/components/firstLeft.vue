<template>
	<div id="firstLeft">
		<div class="author">
			@{{item.author}}
		</div>
		<div class="title">
			#{{item.title}}#
		</div>
		<div class="music">
			{{item.music}}
		</div>
	</div>
</template>

<script>
export default{
	name:'firstLeft',
	props:['item']
}
</script>

<style lang="stylus" scoped>
#firstLeft
	height 3rem
	margin-left .2rem
	.author
		height .7rem
		line-height .7rem
		font-size .34rem
	.title
		height .7rem
		line-height .7rem
		font-size .34rem
	.music
		height .7rem
		line-height .7rem
		font-size .34rem
</style>
