<template>
  <div>
    <div class="articles row">
      
      <div class="card article"  v-for="post in posts" :key="post.id">
        <div class="card-body">
          <h4 class="card-title">{{post.title}}</h4>
          <p class="card-text">{{post.body}}</p>
          <a :href="'posts/'+post.id" class="card-link">Another link</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PostResource from './../../api/post'

export default {
	data () {
		return {
			posts: [],
			errors: []
		}
	},
	created () {
		
		PostResource.all()
			.then(response => {
				this.posts = response.data
			})
			.catch(e => {
				this.errors.push(e)
			})
	}
}
</script>
