<template>
  <div id="articles-page">
    <div class="row">
      <article-list :max-rows="10" :columns="4" />
    </div>
  </div>
</template>

<script>
import ArticleList from '../components/Articles/ArticleList';

export default {
	components: {ArticleList},
	name: 'articles-page'
}

</script>

<style scoped>

</style>
