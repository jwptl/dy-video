<template>
	<div id="firstRight">
		<div class="author-img">
			<img class="img" src="../../../../public/img/author.jpg" alt="">
			<div class="iconfont iconjia add"></div>
		</div>
		<div class="right-icon iconfont iconbqxin"></div>
		<div class="number">{{item.loveNum}}</div>
		<div class="right-icon iconfont iconpinglun"></div>
		<div class="number">{{item.commnetNum}}</div>
		<div class="right-icon iconfont iconzhuanfa"></div>
		<div class="number">{{item.shareNum}}</div>
		<div class="around"><img class="img" src="../../../../public/img/music.jpg" alt=""></div>
	</div>
</template>

<script>
export default{
	name:'firstRight',
	props:['item']
}
</script>

<style lang="stylus" scoped>
@keyframes changDeg{
	0%{
		transform :rotate(0deg);
	}
	100%{
		transform :rotate(360deg);
	}
}
#firstRight
	width 1rem
	margin 0 auto
	.author-img
		border .02rem solid #FFFFFF
		border-radius 50%
		width 1rem
		height 1rem
		position relative
		.img
			width 1rem
			height 1rem
			border-radius 50%
		.add
			background-color red
			width .35rem
			height .35rem
			border-radius 50%
			position absolute
			bottom -.175rem
			left .325rem
			color #fff
			text-align center
			line-height .35rem
	.around
		border-radius 50%
		width 1rem
		height 1rem
		margin-top .2rem
		position relative
		animation changDeg 2s linear 0.2s infinite
		.img
			width 1rem
			height 1rem
			border-radius 50%	
	.right-icon
		width 1rem
		height 1rem
		margin-top .2rem
		text-align center
		line-height 1rem
		color #fff
		font-size .6rem
	.number
		font-size .3rem
		text-align center
</style>
