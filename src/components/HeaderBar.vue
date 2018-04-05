<template>
  <header class="row menu-links">
    <b-navbar toggleable="md" type="dark" variant="primary">

      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

      <b-navbar-brand  to="/">Blog</b-navbar-brand>

      <b-collapse is-nav id="nav_collapse">

        <b-navbar-nav class="mr-auto">
          <b-nav-item to="/" exact>Home</b-nav-item>
          <b-nav-item to="/articles">Articles</b-nav-item>
          <b-nav-item to="/posts" >Find Posts</b-nav-item>
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

  </header>
</template>

<script>

export default {
	data: function () {
		return {

			errors: [],
			keyword: ''
		}
	},
	methods: {
		findSomething: function (e) {
			let keyword = this.keyword;

			this.$store.dispatch('getSearchedPosts', keyword);
			this.keyword = '';
		},

		afterSearching: function () {
			this.loading = false;
			this.keyword = ''
		}
	}

}
</script>

<style lang="scss">
  #nav_collapse{
    .active{

    }
  }
  .menu-links {
    a {
      display: inline-block;
      text-decoration: none;
      color: #555;
      margin-right: 30px;

    }

    nav {
      width: 100%;
    }

  }
</style>
