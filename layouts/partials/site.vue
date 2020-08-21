<template lang="html">

	<main id="site1" class="container-fluid">

		<section v-for="item in items" class="row">

			<div class="col-12 col-md-4">
				<h2 class="col-12"> {{ item.name }} </h2>
				<div class="col-12 d-flex icons">
					<div v-for="link in item.links" class="">
						<i :class="link.icon"></i>
						<a :href="link.url" target="_blank"> {{ link.text }} </a>
					</div>
				</div>
				<div class="col-12 d-flex tags">
					<p v-for="tags in item.tags" > {{ tags }} </p>
				</div>
				<div class="col-12 description">
					<p v-for="description in item.description" class=""> {{ description }} </p>
				</div>
			</div>

			<div class="col-12  col-md-8 image">
				<img :src="item.image" class="" alt="">
			</div>








		</section>

		<!-- <img src="@/static/img/dentist.png" alt=""> -->


	</main>



</template>

<script>
export default {
	data() {
		return {
			title: 'Portfolio',
			items: [
				{
					name: 'Dental Practice - showcase website',
					links: [
						{
							url: 'https://github.com/clairedonut/cabinet-dentaire-vuejs',
							text: 'github',
							icon: 'fab fa-github'
						},
						{
							url: 'http://cookiesandwifi.ovh/dentist-vuejs',
							text: 'website',
							icon: 'fas fa-code'
						}
					],
					image: '_nuxt/static/img/dentist.png',
					// image: '@/static/img/dentist.png',
					description: [
						'This project is a website developed for a fictional Dental practice. The essential elements of the page include: a home page, a team page, an emergency page, our services page and a page with a contact form.',
						'The main focus of this project was to practice Vue.js and Vue-CLI 3 .'
					],
					tags: ['vue.js','vue-cli 3','node.js','sass','SEO']
				}
			]
		}
	}
}
</script>

<style lang="scss">

#site1 {


padding-top: 3em;



h2 {
	font-size: 1.2em;
	text-transform: uppercase;
	font-weight: 400;
	letter-spacing: 2px;
	text-align: center;
	margin-bottom: 1em;

}

	p {
		margin: 1em 0;
	}

	.icons {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		i {
			margin: auto 0.5em;
			font-size: 13px;
		}
	}

	.tags {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		p {
			margin-right: 1em;

		}
	}

	.description {
		text-align: left;
		display: flex;
		flex-direction: column;
		align-items: center;

		margin-top: 3em;
		p {
			margin: 1em 2em;
		}
	}

	.image {
		// display: flex;
		// justify-content: center;

 		height: 500px;
		overflow: hidden;


		img {
			width: 100%;
			height: auto;
			// min-height: 100%;

		}


	}


}

</style>
