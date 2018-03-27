import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from './../components/HelloWorld.vue'
import PostListComponent from './../components/Posts/PostList.vue'
import About from './../components/About.vue'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			component: HelloWorld
		},
		{
			path: '/posts',
			component: PostListComponent
		},
		{
			path: '/about',
			component: About
		}
		// {
		// 	path: 'posts/:id',
		// 	component: PostListComponent
		// }
	],
	mode: 'history'
	
})
