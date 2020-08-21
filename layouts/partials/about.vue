<template>

	<section id="about" class="row d-flex about">

		<!-- ..................... introduction text ..................... -->
		<div class="offset-1 col-10 offset-md-2 col-md-8 offset-lg-1 col-lg-5 text about__content">
			<h2 class="about__content__title"> {{ title }} </h2>
			<!-- <h2 class="typeit"></h2> -->
			<p class="about__content__description" v-for="item in items"> {{ item }}</p>

			<!-- ...... Links to portfolio page / download CV / skills area ...... -->
			<p  class="about__content__description">My portfolio with my latest projects: 	<a href="http://cookiesandwifi.ovh/portfolio" class="link about__content__link--projects">cookiesandwifi.ovh/portfolio</a></p>

			<aside class="row d-flex justify-content-start">
				<div class="about__content__link">
					<i class="far fa-file-pdf"></i>
					<a :href="fileURL" download class="document-pdf about__content__link--resume">Download my resume</a>
				</div>
				<div class="about__content__link">
					<i class="fas fa-plus"></i>
					<a href="#skills" class="skills-link about__content__link--skills">List of technical skills</a>
				</div>
			</aside>

		</div>

		<!-- ..................... profile image ..................... -->
		<div class="offset-1 col-10 offset-md-3 col-md-6   offset-lg-1 col-lg-4">
			<figure class="about__img_area">
				<img src="@/static/img/me/profile.jpg" alt="" class="about__profile_img">

				<div class="about__contact_list_links">
					<a v-for="contact in contact" :href="contact.link" class="about__contact_link">
						<i v-bind:class=" contact.icon "></i>
						<p> {{ contact.name }} </p>
					</a>
				</div>

			</figure>



		</div>


	</section>

</template>

<script>

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
			title: 'Hi, I\'m Claire',
			image: '@/static/img/me/profile.jpg',
			fileURL: '/docs/CV-DevFront-Jacquet_EN-FR.pdf',
			items: [
				'Intensive training in web developement & personal projects helped me gain various technical skills to build websites.',
				'I specialise in the front-end side of web developement because I love planning and working on the design part of a project but also enjoy getting involved in the technical side to build a beautiful and user-friendly UI.',
				'Prior to web-developement, I was in web-marketing. I have a background in digital marketing following over 5 years of working and studying in different international environements and countries.'
			],
			contact: [
				{
					name: 'email',
					icon: 'fa fa-envelope',
					link: 'claire.j.jacquet@gmail.com'
				},
				{
					name: 'linkedin',
					icon: 'fab fa-linkedin-in fa-sm',
					link: 'https://www.linkedin.com/in/clairejacquet'
				},
				{
					name: 'github',
					icon: 'fab fa-github fa-sm',
					link: 'https://github.com/clairejacquet'
				}
			]
		}
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

html {
	scroll-behavior: smooth;
}

.about__contact_list_links {
	@include flex-row(center, center);
	width: 100%;
	// background: aliceblue;
	max-width: 350px;
	margin: 0 auto 2em !important;
	padding-top: 20px  !important;
	// position: relative;
	// bottom: 50px;


	.about__contact_link {
		@include flex-row(center, baseline);
		margin: 5px 15px !important;
		color: #5D737E;

		p {
			margin-bottom: 0 !important;
			font-family: 'Roboto', sans-serif;
			font-size: 12px !important;
			letter-spacing: 2px !important;
		}
		i{
			font-size: 15px !important;
			margin-right: 5px !important;
		}
		&:hover {
			color: #C2EABA !important;
		}
	}
}

.about {
	padding: 100px 0 0 0;
	padding-bottom: 10px !important;

	.about__content {
		margin-bottom: 3em;
	}

	.about__content__title {
		font-size: 2.5em;
		margin-bottom: 1em;
	}

	div {
		padding: 17px;
		margin-top: 2em;
	}

	.about__img_area {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		// max-height: 400px;


		// overflow: hidden;
		// position: relative;
		width: 100%; /* The size you want */
		height: auto;
		// &:after {
		// 	content: "";
		// 	display: block;
		// 	padding-bottom: 100%; /* The padding depends on the width, not on the height, so with a padding-bottom of 100% you will get a square */
		// }
		img {
			// position: absolute; /* Take your picture out of the flow */
			width: 80%; /* This if for the object-fit */
			height: 80%; /* This if for the object-fit */
			// -o-object-fit: cover;
			// object-fit: cover; /* Equivalent of the background-size: cover; of a background-image */
			// -o-object-position: top;
			// object-position: top;
			max-width: 350px;
			max-height: 350px;
			z-index: -10;
		}
	}

	.about__content__description, a {
		letter-spacing: 0.5px;
		font-weight: 400;
		line-height: 1.6em;
		margin: 0 0 1.6em;
	}

	.about__content__link--projects {
		border-bottom: 2px solid #1C7C54 !important;
		padding-bottom: 2px;
		font-weight: bold;
		&:hover {
			border-bottom: 2px solid #ED6B86 !important;
			transition: all 2s ease;
		}
	}

	// document pdf and skills area
	.about__content__link {
		padding: 10px;
		i{
			-webkit-animation: bounce-top 1.5s both;
			animation: bounce-top 1.5s both;
		}
		&:hover {
			// font-weight: bold;
			// color: #C2EABA ;
			-webkit-transition: all 2s ease;
			-moz-transition: all 2s ease;
			-o-transition: all 2s ease;
			transition: all 2s ease;
			background: #C2EABA;
		}
	}

	.about__content__link a {
		font-size: 14px;
		color: black;
		letter-spacing: 2px;

		&:hover {
			// font-weight: bold;
			// color: #C2EABA ;
			// transition:all 0.3s ease;
			// background: aliceblue;
		}
	}

	.about__content__link:hover {
		// color: #E6EFE9 ;
		// -webkit-transition: background 0.3s ease;
		//  -moz-transition: background 0.3s ease;
		//  -o-transition: background 0.3s ease;
		//  transition: background 0.3s ease;
		//  background: #E6EFE9;
	}
}

/* ----------------------------------------------
* Generated by Animista on 2020-8-18 8:20:19
* Licensed under FreeBSD License.
* See http://animista.net/license for more info.
* w: http://animista.net, t: @cssanimista
* ---------------------------------------------- */

/**
* ----------------------------------------
* animation bounce-top
* ----------------------------------------
*/
@-webkit-keyframes bounce-top {
	0% {
		-webkit-transform: translateY(-45px);
		transform: translateY(-45px);
		-webkit-animation-timing-function: ease-in;
		animation-timing-function: ease-in;
		opacity: 1;
	}
	24% {
		opacity: 1;
	}
	40% {
		-webkit-transform: translateY(-24px);
		transform: translateY(-24px);
		-webkit-animation-timing-function: ease-in;
		animation-timing-function: ease-in;
	}
	65% {
		-webkit-transform: translateY(-12px);
		transform: translateY(-12px);
		-webkit-animation-timing-function: ease-in;
		animation-timing-function: ease-in;
	}
	82% {
		-webkit-transform: translateY(-6px);
		transform: translateY(-6px);
		-webkit-animation-timing-function: ease-in;
		animation-timing-function: ease-in;
	}
	93% {
		-webkit-transform: translateY(-4px);
		transform: translateY(-4px);
		-webkit-animation-timing-function: ease-in;
		animation-timing-function: ease-in;
	}
	25%,
	55%,
	75%,
	87% {
		-webkit-transform: translateY(0px);
		transform: translateY(0px);
		-webkit-animation-timing-function: ease-out;
		animation-timing-function: ease-out;
	}
	100% {
		-webkit-transform: translateY(0px);
		transform: translateY(0px);
		-webkit-animation-timing-function: ease-out;
		animation-timing-function: ease-out;
		opacity: 1;
	}
}
@keyframes bounce-top {
	0% {
		-webkit-transform: translateY(-45px);
		transform: translateY(-45px);
		-webkit-animation-timing-function: ease-in;
		animation-timing-function: ease-in;
		opacity: 1;
	}
	24% {
		opacity: 1;
	}
	40% {
		-webkit-transform: translateY(-24px);
		transform: translateY(-24px);
		-webkit-animation-timing-function: ease-in;
		animation-timing-function: ease-in;
	}
	65% {
		-webkit-transform: translateY(-12px);
		transform: translateY(-12px);
		-webkit-animation-timing-function: ease-in;
		animation-timing-function: ease-in;
	}
	82% {
		-webkit-transform: translateY(-6px);
		transform: translateY(-6px);
		-webkit-animation-timing-function: ease-in;
		animation-timing-function: ease-in;
	}
	93% {
		-webkit-transform: translateY(-4px);
		transform: translateY(-4px);
		-webkit-animation-timing-function: ease-in;
		animation-timing-function: ease-in;
	}
	25%,
	55%,
	75%,
	87% {
		-webkit-transform: translateY(0px);
		transform: translateY(0px);
		-webkit-animation-timing-function: ease-out;
		animation-timing-function: ease-out;
	}
	100% {
		-webkit-transform: translateY(0px);
		transform: translateY(0px);
		-webkit-animation-timing-function: ease-out;
		animation-timing-function: ease-out;
		opacity: 1;
	}
}

</style>
