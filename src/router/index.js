import Vue from 'vue'
import Router from 'vue-router'
import PostListComponent from './../components/Posts/PostList.vue'
import PostComponent from './../components/Posts/Post.vue'

import HomePage from './../pages/HomePage'
import ArticlesPage from './../pages/ArticlesPage'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'home',
			component: HomePage
		},

		{
			path: '/articles',
			name: 'articles',
			component: ArticlesPage
		},

		{
			path: '/posts',
			name: 'posts',
			component: PostListComponent
		},

		{
			path: 'posts/:id',
			name: 'posts.show',
			component: PostComponent
		}
	],
	linkExtraActiveClass: 'active',
	mode: 'history'

})
