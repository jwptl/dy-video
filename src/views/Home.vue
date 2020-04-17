<template>
  <div class="home">
	  <Navigation></Navigation>
	  <router-view/>
  </div>
</template>

<script>
import Navigation from './components/navigation.vue'
export default {
  name: 'Home',
  components:{
	  Navigation
  }
}
</script>
<style lang="stylus">
.home
	height 100%
</style>
