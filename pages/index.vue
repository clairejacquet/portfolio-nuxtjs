<template>

	<main class="container-fluid">

		<Banner/>

	</main>

</template>

<script>
import Logo from '~/components/Logo.vue'
import Banner from '~/layouts/partials/home/banner.vue'
import Cover from '~/layouts/partials/home/cover.vue'
import Portfolio from '~/layouts/partials/home/projects.vue'


export default {
	data() {
		return {
			// image: 'https://raw.githubusercontent.com/claire-jacquet/week-10-portfolio/master/images/parallax/main-8.jpg',
			image: '@/static/img/home.jpg',
		}
	},
	components: {
		Logo,
		Banner,
		Cover,
		Portfolio
	}
}
</script>

<style lang="scss">

#home {

	min-height: 600px;
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	padding: 0;

	.cover {
		height: 100%;
		width: 100%;
		z-index: 10;

		padding: 0;
		margin: 0;

		background-color: rgba(142, 56, 194, 0.7);

		display: -webkit-box;

		display: -ms-flexbox;

		display: flex;
		-webkit-box-orient: vertical;
		-webkit-box-direction: normal;
		    -ms-flex-direction: column;
		        flex-direction: column;
		-webkit-box-align: center;
		    -ms-flex-align: center;
		        align-items: center;
		-webkit-box-pack: center;
		    -ms-flex-pack: center;
		        justify-content: center;

		div {
			height: 80%;

			display: -webkit-box;

			display: -ms-flexbox;

			display: flex;
			-webkit-box-orient: vertical;
			-webkit-box-direction: normal;
			    -ms-flex-direction: column;
			        flex-direction: column;
			-webkit-box-align: start;
			    -ms-flex-align: start;
			        align-items: flex-start;
			-ms-flex-pack: distribute;
			    justify-content: space-around;

			h2, p {
				margin: 0;
				padding: 0;
			}

			h2 {
				font-size: 8em;
				color: white;
			}
			p {
				font-size: 3.5em;
				color: white;

			}
		}

	}

}

</style>
