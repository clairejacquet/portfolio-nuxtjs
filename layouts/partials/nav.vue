<template lang="html">

	<header class="conatiner-fluid">

		<nuxt-link to="/" id="branding">Portfolio</nuxt-link>

		<!-- ....... translation project EN - FR ....... -->
		<!-- <div class="">
		<nuxt-link to="/">EN</nuxt-link>
		<nuxt-link to="fr/home">FR</nuxt-link>
	</div> -->

	<!-- ..................... Nav for large format ..................... -->

	<div id="menu-lg" class="">

		<nav>
			<nuxt-link to="/">Home</nuxt-link>
			<nuxt-link to="/portfolio">Projects</nuxt-link>
			<nuxt-link to="/about">About me</nuxt-link>
			<nuxt-link to="/contact">Contact</nuxt-link>
		</nav>


	</div>


	<!-- ..................... Nav for mobile format..................... -->

	<div id="menu-mobile" class="">
		<div class="hamburger">
			<i class="fas fa-bars" v-on:click="isHidden = !isHidden"></i>
		</div>

		<transition name="slide-fade">

			<div id="nav" v-if="isHidden" class="">
				<div v-on:click="isHidden = !isHidden">
					<i class="fas fa-times"></i>
				</div>

				<div class="list">
					<nuxt-link to="/">Home</nuxt-link>
					<nuxt-link to="/portfolio">Projects</nuxt-link>
					<nuxt-link to="/about">About me</nuxt-link>
					<nuxt-link to="/about#skills">Technical Skills</nuxt-link>
					<nuxt-link to="/contact">Contact</nuxt-link>
				</div>

			</div>

		</transition>
	</div>
</header>

</template>

<script>
export default {
	data() {
		return {
			isHidden: false
		}
	},
	methods: {
		toggleNav: function() {
			this.open = !this.open
			this.$emit('toggle', this.open)
		}
	}
}

</script>

<style lang="scss">

/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
	-webkit-transition: all 1s ease;
	-o-transition: all 1s ease;
	transition: all 1s ease;
}
.slide-fade-leave-active {
	-webkit-transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
	-o-transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
	transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
-webkit-transform: translateX(200px);
    -ms-transform: translateX(200px);
        transform: translateX(200px);
opacity: 0;
}

/* -------- mobile nav -------- */


#menu-mobile {

	height: 100%;


	.hamburger {
		z-index: 0;
	}
	#nav {
		z-index: 500;
		background-color: #E6EFE9;
		position: absolute;
		top: 0;
		right: 0;
		padding: 2em;
		margin: 0;
		width: 100%;

		display: -webkit-box;

		display: -ms-flexbox;

		display: flex;
		-webkit-box-orient: vertical;
		-webkit-box-direction: normal;
		    -ms-flex-direction: column;
		        flex-direction: column;
		-webkit-box-align: end;
		    -ms-flex-align: end;
		        align-items: flex-end;

		i {
			font-size: 35px;
		}


		.list {
			display: -webkit-box;
			display: -ms-flexbox;
			display: flex;
			-webkit-box-orient: vertical;
			-webkit-box-direction: normal;
			    -ms-flex-direction: column;
			        flex-direction: column;
			padding: 3em;
			width: 100%;

			a {
				margin: 1em 5em;
				color: #484848 !important;
				&:hover {
					color: #ED6B86 !important;
				}
			}
		}

		div {
			background: #E6EFE9;
		}
	}
}

/* -------- large nav -------- */

header {
	padding: 1em 2em ;
	background: rgba(255,255,255,0);
	z-index: 300;

	a {
		color: #484848 !important;
	}

	position: absolute;

	display: -webkit-box;

	display: -ms-flexbox;

	display: flex;
	-webkit-box-pack: justify;
	    -ms-flex-pack: justify;
	        justify-content: space-between;
	-webkit-box-align: center;
	    -ms-flex-align: center;
	        align-items: center;

	width: 100%;

	nav a {
		padding-right: 1em;
		text-decoration: none;

		font-size: 15px;
		text-transform: none;
		letter-spacing: 1px;
		font-weight: 400;
		font-style: normal;
		line-height: 1.5em;
		cursor: pointer;

		&:hover {
			color: #ED6B86 !important;
		}

	}
	a {
		text-decoration: none;
	}

}

/* ------ mobile nav  ---------------------*/

@media screen and (min-width: 769px) {
	#menu-mobile {
		display: none;
	}
}

@media screen and (max-width: 768px) {
	#menu-lg {
		display: none;
	}
}


</style>
