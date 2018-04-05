<template>
  <div  class="articles">
    <div class="card-deck" v-for="(chunk,index) in articlesChunk" :key="index">
      <card v-for="article in chunk" v-if="maxRows-1 >= index" :key="article.id" className="text-center article">
        <img class="card-img-top" :src="article.thread.main_image" alt="">

        <div class="card-body">
          <h4 class="card-title">{{article.title}}</h4>
          <p class="card-text">{{article.text}}</p>
          <a :href="article.url" target="_blank" class="card-link">Read more...</a>
        </div>
        <div class="card-footer text-muted">
          Published at: {{ article.published | moment("from", "now") }}
        </div>
      </card>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-mixed-spaces-and-tabs */

import Card from './../mdb/Card'
import { mapGetters } from 'vuex'

import _ from 'lodash'

export default {
	props: {
		columns: {
			type: Number,
			required: false,
			default: 4
		},
		maxRows: {
			type: Number,
			required: false,
			default: 5
		}
	},

	data () {
		return {
			loading: false,
			errors: [],
			articlesChunk: []
		}
	},

	components: { Card },
	computed: {
		...mapGetters({
			articles: 'getLatestArticles'
		})
	},
	watch: {
		articles: function (newArticles, oldArticles) {
			this.articlesChunk = _.chunk(newArticles, this.columns);
		}
	},
	created () {
		this.$store.dispatch('getLatestArticles')
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
