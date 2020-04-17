<template>
	<div id="videoList">
		<swiper ref="mySwiper" :options="swiperOptions">
		  <swiper-slide class="swiper" v-for="(item,index) of list">
			  <videos ref="videos" :videos="item" :index="index"></videos>
			 <div v-if="pages-1==index" class="left">
				  <first-left :item="item"></first-left>
			 </div>
			 <div v-if="pages-1==index" class="right">
					<first-right :item="item"></first-right>
			 </div>
		  </swiper-slide>
		</swiper>
	</div>
</template>

<script>
import {swiper,swiperSlide} from 'vue-awesome-swiper'
import {videoPlayer} from 'vue-video-player'
import firstLeft from './firstLeft.vue'
import firstRight from './firstRight.vue'
import videos from './video.vue'
import axios from 'axios'
export default{
	name:'videoList',
	components:{
		videoPlayer,
		firstLeft,
		firstRight,
		videos
	},
	data() {
	  return {
		pages:1,
	    swiperOptions: {
		  direction:'vertical',
	      autoHeight:true,
		  mousewhell:false,
		  mousewhellControl:false,
		  height:window.innerHeight,
		  on:{
			  tap:(event)=>{
				this.player(this.pages-1)
			  },
			  slideNextTransitionStart:(event)=>{
				this.pages+=1
				this.next(this.pages-1)
			  },
			  slidePrevTransitionStart:(event)=>{
				if(this.pages>1){
					  this.pages-=1
				}
				this.prev(this.pages-1)
			  }
		  }
	    },
		list:[]
	  }
	},
	mounted(){
		this.getVideos()
	},
	methods:{
		getVideos(){
			axios.get('api/video.json')
			.then(res=>{
				this.list = res.data.list
			})
		},
		player(val){
			this.$refs.videos[val].judge()
		},
		next(val){
			this.$refs.videos[val-1].pause()
			this.$refs.videos[val].play()
		},
		prev(val){
			this.$refs.videos[val+1].pause()
			this.$refs.videos[val].play()
		}
	}
}
</script>

<style lang="stylus" scoped>
#videoList
	width 100%
	height 100%
	.swiper
		color #FFFFFF
		font-size 2rem
		position relative
		.left
			position absolute
			z-index 999
			bottom 1rem
			left .2rem
			font-size .5rem
		.right
			position absolute
			z-index 999
			bottom 1rem
			right .2rem
			font-size .5rem
</style>
