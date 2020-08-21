<template lang="html">

	<main id="portfolio" class="container">

		<!-- <Site /> -->

		<section class="row">

			<h1 class="col-12"> {{ title }} </h1>

			<div id="projects-display" class="">



				<a :href="item.url" v-for="item in items" class="col-6 col-lg-4 project-image">
						<figure class="">
							<img :src="item.image" class="" alt="">
						</figure>
						<div class="text">
							<h2> {{ item.name }} </h2>
						</div>
				</a>


			</div>

			<div class="col-12 ">

				<!-- <img src="@/static/img/airbnb-desktop.png" alt="">
				<img src="@/static/img/strategiesobliques.png" alt="">
				<img src="@/static/img/bobuncafe.png" alt="">
				<img src="@/static/img/dentist.png" alt="">
				<img src="@/static/img/frenchstranding.png" alt="">
				<img src="@/static/img/teesandtigers.png" alt="">
				<img src="@/static/img/kawaiiicecream.png" alt="">
				<img src="@/static/img/strategiesobliques.png" alt="">
				<img src="@/static/img/teesandtigers.png" alt="">
				<img src="@/static/img/teestiger-nl.png" alt="">
				<img src="@/static/img/posters.png" alt="">
				<img src="@/static/img/wp-blog.png" alt="">
				<img src="@/static/img/wp-blog-article.png" alt=""> -->



				<!-- <img src="//img/profile.jpg" class=" col-6 img-fluid" alt="">
				<img src="//img/img1.png" class="col-6 img-fluid" alt="">
				<img src="@/static/img/bobuncafe.png" class="img-fluid" alt="">
				<img src="@/static/img/teesandtigers.png" class="img-fluid" alt=""> -->

			</div>

		</section>
	</main>

</template>

<script>

import Site from '~/layouts/partials/site.vue'

export default {
	head() {
		return {
			title: 'Portfolio',
			meta: [
				{ name: 'description', content: 'Portfolio projects' }
			]
		}
	},
	data() {
		return {
			title: 'Portfolio',
			items: [
				{
					name: 'This Portfolio',
					image: '/img/portfolio.png',
					url: 'project/portfolio'
				},
				{
					name: 'Showcase Dental practice website',
					image: '/img/dentist.png',
					tags: ['vue.js','vue-cli 3','node.js','sass','SEO'],
					url: 'project/dentist'
				},
				{
					name: 'Bobún Café',
					image: '/img/bobuncafe.png',
					tags: ['vue.js','vue-cli 3','node.js','sass','SEO'],
					url: 'project/bobuncafe'
				},
				{
					name: 'Tees & Tigers',
					image: '/img/teesandtigers.png',
					tags: ['vue.js','vue-cli 3','node.js','sass','SEO'],
					url: 'project/teesandtigers'
				},
				{
					name: 'Quotes generator',
					image: '/img/strategiesobliques.png',
					url: 'project/strategies-obliques'
				},
				{
					name: 'Tees & Tigers LP',
					image: '/img/teestiger-nl.png',
					url: 'project/teesandtigers-nl'
				},
				{
					name: 'french stranding',
					image: '/img/frenchstranding.png',
					url: 'project/frenchstranding'
				},
				{
					name: 'posters json',
					image: '/img/posters.png',
					url: 'project/posters'

				},
				{
					name: 'Wordpress CMS',
					image: '/img/wp-blog.png',
					url: 'project/wordpress'
				},
				{
					name: 'kawaii icecream',
					image: '/img/kawaiiicecream.png',
					url: 'project/kawaii-icecream'
				},
				{
					name: 'Airbnb homepage',
					image: '/img/airbnb-desktop.png',
					url: 'project/airbnb'
				}
			]
		}
	},
	components: {
		Site
	}
}
</script>

<style lang="scss">



#portfolio {


	margin-bottom: 3em;




	section {
		display: flex;
		justify-content: center;
		align-items: center;

		flex-wrap: wrap;
	}

	h1 {
		text-align: center;
		margin: 3em 0;
		text-align: center;
		letter-spacing: 3px;
		font-size: 3em;
	}



	.project-image {
		cursor: pointer;

		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		margin: 0;

		overflow: hidden;


		figure {
			overflow: hidden;
			position: relative;
			width: 100%; /* The size you want */

			&:after {
				content: "";
				display: block;
				padding-bottom: 100%; /* The padding depends on the width, not on the height, so with a padding-bottom of 100% you will get a square */
			}

			img {
				position: absolute; /* Take your picture out of the flow */
				top: 0;
				bottom: 0;
				left: 0;
				right: 0; /* Make the picture taking the size of it's parent */
				width: 100%; /* This if for the object-fit */
				height: 100%; /* This if for the object-fit */
				object-fit: cover; /* Equivalent of the background-size: cover; of a background-image */
				object-position: top;

				&:hover {
					opacity: 0.8;
					-webkit-transition: opacity .3s ease-out;
					-moz-transition: opacity .3s ease-out;
					-o-transition: opacity .3s ease-out;
					transition: opacity .3s ease-out;

				}
			}

		}


	}





	.tags {
		display: flex;
		flex-wrap: nowrap;

		margin: 1em 0;
	}

	.tag {
		padding: 1em 0.2em 1em 0 ;
		margin-right: 0.5em;

		text-transform: lowercase;
		// background: grey;
		color: grey;
		font-weight: 700;

		// border-radius: 2px;
	}

	.text {
		padding: 2em auto;
		margin: 2em auto;

		h2 {
			font-size: 14px;
			line-height: 1.6em;
			text-transform: uppercase;
			text-decoration: none;
			letter-spacing: .06em;
			text-align: center;
			font-weight: 300;
			font-style: normal;
			color: #404040;

		}

		.links {
			font-size: 0.8em;
			text-transform: lowercase;

			// font-family: 'Proxima Nova Lt';
			font-weight: 400;
			font-style: normal;
		}
	}



}

#projects-display {
	display: flex;
	flex-wrap: wrap;
}

// @media #{$min-break-medium} {
//
//   #portfolio {
//
// 	figure {
// 		max-height: 200px;
// 		max-width: 200px;
//
// 	}
//   }
//
// }


</style>
