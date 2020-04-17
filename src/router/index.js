import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import first from '../views/first/first.vue'
import follow from '../views/follow/follow.vue'
import videoList from '../views/first/components/videoList.vue'
import city from '../views/first/components/city.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
	children:[
		{
			path: '/',
			name: 'first',
			component: first,
			children:[
				{
					path: '/',
					name: 'videoList',
					component: videoList,
				},
				{
					path: '/city',
					name: 'city',
					component: city,
				}
			]
		},
		{
			path: '/follow',
			name: 'follow',
			component: follow,
		}
	]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
