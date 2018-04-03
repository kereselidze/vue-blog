<template>
  <row className="articles">
    <div class="card-deck" v-for="(chunk,index) in articlesChunk" :key="index">
      <card v-for="article in chunk" :key="article.id" className="text-center article">
        <img class="card-img-top" :src="article.urlToImage" alt="">

        <div class="card-body">
          <h4 class="card-title">{{article.title}}</h4>
          <p class="card-text">{{article.description}}</p>
          <a :href="article.url" target="_blank" class="card-link">Read more...</a>
        </div>
        <div class="card-footer text-muted">
          Published at: {{ article.publishedAt }}
        </div>
      </card>
    </div>
  </row>
</template>

<script>
/* eslint-disable no-mixed-spaces-and-tabs */

import Row from './../mdb/Row'
import Card from './../mdb/Card'
import {mapGetters} from 'vuex'

import _ from 'lodash'

export default {
	data () {
		return {
			loading: false,
			errors: [],
			articlesChunk: []
		}
	},

	components: {Row, Card},
	computed: {
		...mapGetters({
			articles: 'getSearchedPosts'
		})
	},
	watch: {
    articles: function (newArticles, oldQuestion) {
			this.articlesChunk = _.chunk(newArticles, 4);
		}
	},
	methods: {
		logArticles () {
			console.log(this.articles);
		}
	}
}
</script>

<style scoped lang="scss">
  .articles {
    .article {
      margin-top: 40px;
    }
  }
</style>
