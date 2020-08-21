<template lang="html">

		<main class="container-fluid">
			<About />
			<Skills />
		</main>
	</section>



</template>

<script>

import About from '~/layouts/partials/about.vue'
import Skills from '~/layouts/partials/skills.vue'

export default {
	head() {
		return {
			title: 'About page',
			meta: [
				{ name: 'description', content: 'This is an about page about Claire' }
			]
		}
	},
	data() {
		return {
			title: 'About',
			image: 'https://static1.squarespace.com/static/56cb3e0bf85082a807c001fe/t/56cb732d2eeb810b9bf80c59/1456173881998/?format=500w',
			items: [
				'Intensive courses in web developement & personal projects helped me gain multiple skills in Front End developement.',
				'I have a background in digital marketing following over 5 years of working and studying in various international environements.',
				'My portfolio with my latest projects: cookiesandwifi.ovh'
			]
		}
	},
	components: {
		About,
		Skills
	}
}
</script>

<style lang="scss">


@mixin flex-row($horizontal,$vertical) {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-pack: $horizontal;
  -ms-flex-pack: $horizontal;
  justify-content: $horizontal;
  -webkit-box-align: $vertical;
  -ms-flex-align: $vertical;
  align-items: $vertical;
}

// #about {
// 	padding: 100px 0;
// 	div {
// 		padding: 17px;
// 	}
//
// 	figure {
// 		@include flex-row(center,flex-start);
// 	}
//
// 	p {
// 		letter-spacing: 0.5px;
// 		font-weight: 400;
// 		line-height: 1.6em;
// 		margin: 0 0 1.6em;
// 	}
// }






</style>
