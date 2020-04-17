<template>
	<div id="videos">
		<video-player  class="video-player-box"
		               ref="videoPlayer"
		               :options="playerOptions">
		</video-player>
	</div>
</template>

<script>
export default{
	name:'videos',
	props:['videos','index'],
	data(){
		return{
			state:false,
			playerOptions: {
			  controls:false,
			  fluid:true,
			  muted:false,
			  loop:true,
			  sources:[{
					 type:"video/mp4",
					 src:'http://localhost/'+this.videos.src
				}]
			}
		}
	},
	created(){
		this.autoplay()
	},
	computed:{
		player(){
			return this.$refs.videoPlayer.palyer
		}
	},
	methods:{
		judge(){
			if(this.state==false){
				this.$refs.videoPlayer.player.play()
				this.state=true
			}
			else{
				this.$refs.videoPlayer.player.pause()
				this.state=false
			}
		},
		play(){
			this.$refs.videoPlayer.player.load()
			this.$refs.videoPlayer.player.play()
			this.state=true
		},
		pause(){
			this.$refs.videoPlayer.player.load()
			this.$refs.videoPlayer.player.pause()
			this.state=false
		},
		autoplay(){
			if(this.index==0){
				this.playerOptions.autoplay="muted"
			}
		}
	}
}
</script>

<style lang="stylus" scoped>
#videos
	height 100%
	.video-player-box
		height 100%
		display flex
		margin 0 auto
		overflow hidden
		align-items center
</style>
