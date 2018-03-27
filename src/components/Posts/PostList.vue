<template>
  <div>
    <div class="articles row">
      
      <div class="card-group" v-for="chunk in articlesChunk" >
        
        <div class="card" v-for="article in chunk" :key="article.id">
        <img class="card-img-top" :src="article.urlToImage" alt="">

        <div class="card-body">
          <h4 class="card-title">{{article.title}}</h4>
          <p class="card-text">{{article.description}}</p>
          <a :href="article.url" target="_blank" class="card-link">Read more...</a>
        </div>
        <div class="card-footer text-muted">
            Published at: {{ article.publishedAt }}
        </div>
      </div>
      </div>
      
    </div>
  </div>
</template>

<script>
import PostResource from './../../api/post'
import _ from 'lodash'

export default {
	data () {
		return {
			articles: [],
			errors: []
		}
	},
	created () {
		PostResource.all()
			.then(response => {
				this.articles = response.data.articles
			})
			.catch(e => {
				this.errors.push(e)
			})
	},
	computed: {
		articlesChunk: function () {
			return _.chunk(this.articles, 4);
		}
	}
}
</script>
