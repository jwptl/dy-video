<template>
	<div id="frist">
		<frist-header></frist-header>
		<router-view/>
	</div>
</template>

<script>
import fristHeader from './components/firstHeader.vue'
export default{
	name:'frist',
	components:{
		fristHeader
	}
}
</script>

<style lang="stylus" scoped>
#frist
	color #fff
	height 100%
</style>
