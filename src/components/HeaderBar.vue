<template>
  <header class="menu-links">
    <b-navbar toggleable="md" type="dark" variant="primary">

      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

      <b-navbar-brand href="#">Blog</b-navbar-brand>

      <b-collapse is-nav id="nav_collapse">

        <b-navbar-nav>
          <b-nav-item to="/">Home</b-nav-item>
          <b-nav-item to="/posts">Posts</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">

          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" type="text" v-model="keyword" placeholder="Search"/>
            <b-button size="sm" class="my-2 my-sm-0" @click="findSomething">Search</b-button>
          </b-nav-form>

          <b-nav-item-dropdown text="Lang" right>
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">ES</b-dropdown-item>
            <b-dropdown-item href="#">RU</b-dropdown-item>
            <b-dropdown-item href="#">FA</b-dropdown-item>
          </b-nav-item-dropdown>

        </b-navbar-nav>

      </b-collapse>
    </b-navbar>

    <div class="grid-overlay" v-show="loading">
      <ring-loader :loading="loading" :color="'#c25369'" :size="'100px'"></ring-loader>
    </div>

  </header>
</template>

<script>
import RingLoader from 'vue-spinner/src/RingLoader.vue'

export default {
	data: function () {
		return {
			loading: false,

			errors: [],
			keyword: ''
		}
	},
	components: {RingLoader},
	methods: {
		findSomething: function (e) {
			let keyword = this.keyword;
			// this.loading = true;
			this.$store.dispatch('getSearchedPosts', keyword);
			// this.loading = false;
		},

		afterSearching: function () {
			this.loading = false;
			this.keyword = ''
		}
	}

}
</script>

<style>
  .menu-links a {
    display: inline-block;
    text-decoration: none;
    color: #555;
    margin-right: 30px;
  }
</style>
