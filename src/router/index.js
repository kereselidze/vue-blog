import Vue from 'vue'
import Router from 'vue-router'
import PostListComponent from './../components/Posts/PostList.vue'
import PostComponent from './../components/Posts/Post.vue'
import Welcome from './../components/Welcome'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			component: Welcome
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
