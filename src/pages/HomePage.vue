<template>
  <div id="home-page">
    <row>
      <slides />
    </row>
    <row>
      <article-list :max-rows="1" :columns="4" />
    </row>
  </div>

</template>

<script>
import ArticleList from '../components/Articles/ArticleList';
import Slides from '../components/Slider/Slides';
import Row from '../components/mdb/Row';
export default {
	components: {
		Row,
		Slides,
		ArticleList}

}
</script>

<style scoped>

</style>
