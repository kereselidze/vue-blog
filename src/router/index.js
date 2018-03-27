import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from './../components/HelloWorld.vue'
import PostListComponent from './../components/Posts/PostList.vue'
import PostComponent from './../components/Posts/Post.vue'

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
			path: 'posts/:id',
			component: PostComponent
		}
	],
	mode: 'history'
	
})
