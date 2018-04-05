<template>
  <div id="home-carousel" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
      <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    </ol>
    <div class="carousel-inner">
      <div class="carousel-item" :class="{active:index===0}" v-for="(source,index) in images" :key="index">
        <img class="d-block w-100" :src="source">
      </div>
    </div>
    <a class="carousel-control-prev" href="#home-carousel" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#home-carousel" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</template>

<script>
export default {
	props: {
		images: {
			type: Array,
			required: false,
			default: () => {
				return [
					require('./../../assets/img/slides/sl.jpg'),
					require('./../../assets/img/slides/sl1.jpg'),
					require('./../../assets/img/slides/sl3.jpg'),
					require('./../../assets/img/slides/sl4.jpg')
				]
			}
		}
	},
	name: 'slides'
}
</script>

<style scoped lang="scss">
    #home-carousel{
      width: 100%;
    }
</style>
