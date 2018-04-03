<template>
  <div class="grid-overlay">
    <ring-loader :loading="loading" :color="color" :size="size"></ring-loader>
  </div>
</template>

<script>
import RingLoader from 'vue-spinner/src/RingLoader.vue'

export default {
	name: 'overlay-loading',
	data () {
		return {
			loading: true,
			color: '#c25a42',
			size: '12px'
		}
	},
	components: {RingLoader}
}

</script>
