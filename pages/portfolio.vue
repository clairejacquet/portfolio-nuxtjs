<template lang="html">

	<main id="portfolio" class="container projects">
		<section class="row projects__gallery">
			<div id="projects-display" class="projects__gallery--display-area">

				<!-- ........... project card ................... -->

				<a :href="item.url" v-for="item in items" class="col-6 col-lg-4 project-image project_card">
						<figure class="project_card--img">
							<img :src="item.image" class="" alt="">
						</figure>
						<div class="project_card--text">
							<h2 class="project_card--title"> {{ item.name }} </h2>
							<div class="tags d-flex flex-nowrap project_card--list-tags">
								<p v-for="tag in item.tags" class="project_card--tag"> {{ tag }} </p>
							</div>
						</div>
				</a>

			</div>
		</section>
	</main>

</template>

<script>

export default {
	head() {
		return {
			// title: 'Claire Portfolio',
			meta: [
				// { name: 'description', content: 'All my Portfolio projects' }
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
					url: '/projects/portfolio-nuxt',
					tags: ['nuxt.js', 'vue']
				},
				{
					name: 'The Noise Who Runs - live',
					image: '/img/thenoisewhoruns-1.png',
					url: '/projects/thenoisewhoruns-wordpress',
					tags: ['wordpress', 'cms']
				},
				{
					name: 'Dental practice showcase site',
					image: '/img/dentist-2.png',
					tags: ['vue.js','vue cli'],
					url: '/projects/dentist'
				},
				{
					name: 'Bobún Café',
					image: '/img/bobuncafe-5.png',
					tags: ['vue.js','vue-cli'],
					url: '/projects/bobuncafe'
				},
				{
					name: 'Tees & Tigers',
					image: '/img/teesandtigers.png',
					tags: ['jquery', 'javascript'],
					url: '/projects/teesandtigers'
				},
				{
					name: 'Quotes generator',
					image: '/img/strategiesobliques.png',
					url: '/projects/strategies-obliques',
					tags: ['vue js', 'javascript'],
				},
				{
					name: 'Tees & Tigers newsletter',
					image: '/img/teestiger-nl.png',
					url: '/projects/teesandtigers-nl',
					tags: ['newsletter', 'javascript'],
				},
				{
					name: 'french stranding - coming soon',
					image: '/img/frenchstranding.png',
					url: '/projects/frenchstranding',
					tags: ['mail chimp'],
				},
				{
					name: 'posters - json',
					image: '/img/posters.png',
					url: '/projects/posters',
					tags: ['php', 'json data'],
				},
				{
					name: 'wordpress blog',
					image: '/img/wp-blog.png',
					url: '/projects/wordpress',
					tags: ['wordpress'],
				},
				{
					name: 'kawaii icecream',
					image: '/img/kawaiiicecream.png',
					url: '/projects/kawaii-icecream',
					tags: ['bootstrap', 'animations'],
				},
				{
					name: 'Airbnb homepage',
					image: '/img/airbnb-desktop.png',
					url: '/projects/airbnb',
					tags: ['javascript', 'flexbox'],
				}
			]
		}
	},
	components: {
	}
}
</script>

<style lang="scss">

#portfolio {

	.projects__gallery {
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-pack: center;
		    -ms-flex-pack: center;
		        justify-content: center;
		-webkit-box-align: center;
		    -ms-flex-align: center;
		        align-items: center;
		-ms-flex-wrap: wrap;
		    flex-wrap: wrap;

		padding-top: 6em;

		.projects__gallery--display-area {
			display: -webkit-box;
			display: -ms-flexbox;
			display: flex;
			-ms-flex-wrap: wrap;
			    flex-wrap: wrap;
		}

	}

	.project_card {
		cursor: crosshair;

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

		margin: 0;
		overflow: hidden;

		.project_card--img {
			overflow: hidden;
			position: relative;
			width: 100%; /* The size you want */

			&:after {
				content: "";
				display: block;
				padding-bottom: 100%;
			}

			img {
				position: absolute; /* Take your picture out of the flow */
				top: 0;
				bottom: 0;
				left: 0;
				right: 0; /* Make the picture taking the size of it's parent */
				width: 100%; /* This if for the object-fit */
				height: 100%; /* This if for the object-fit */
				-o-object-fit: cover;
					 object-fit: cover; /* Equivalent of the background-size: cover; of a background-image */
				-o-object-position: top;
					 object-position: top;

				&:hover {
					opacity: 0.8;
					-webkit-transition: opacity .3s ease-out;
					-o-transition: opacity .3s ease-out;
					transition: opacity .3s ease-out;
				}
			}
		}

		.project_card--text {
			// padding: 2em auto;
			margin: 1em auto 2.5em ;

			.project_card--title {
				font-size: 14px;
				line-height: 1.6em;
				text-transform: lowercase;
				text-decoration: none;
				letter-spacing: .06em;
				text-align: center;
				font-weight: 300;
				font-style: normal;
				color: #404040;
			}

			.project_card--list-tags {
				display: flex;
				justify-content: center;

				.project_card--tag {
					margin: 0 5px;
					padding: 2px 5px;
					background-color: #C5F4E0;
					font-size: 12px;
					text-transform: lowercase;
					color: grey;
				}
			}
		}
	}
}
</style>
