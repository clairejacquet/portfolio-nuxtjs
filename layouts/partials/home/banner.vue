<template lang="">

	<section  class="row home">

		<div class="home__wrapper">

			<div class="home__cover--gradient">
				<div class="home__title_area">
					<h2 class="home__title--name"> Claire J. </h2>
					<p  class="home__title--description"> FrontEnd JS Developer </p>
				</div>

				<div class="home__buttons">
					<a href="/portfolio"  class="home__button--single"> Explore projects </a>
					<a href="/about"  class="home__button--single"> View profile </a>
				</div>

			</div>
		</div>

	</section>

</template>

<script>

export default {
	data() {
		return {
			image: '@/static/img/home.jpg',
		}
	}
}
</script>

<style lang="scss">

// call to actions to page redirection
.home__buttons {
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-orient: horizontal !important;
	-webkit-box-direction: normal !important;
	-ms-flex-direction: row !important;
	flex-direction: row !important;
	-webkit-box-pack: center;
	-ms-flex-pack: center;
	justify-content: center;
	-webkit-box-align: center;
	-ms-flex-align: center;
	align-items: center;

	margin-top: 2em;

	width: 100%;

	.home__button--single {
		padding: 0.5em 20px ;
		margin: auto 20px;
		// border: 2px solid white;
		color: white;
		background: rgba(0,0,0, 0.3);
		letter-spacing: 1px;
		text-transform: lowercase;

		width: 170px;

		&:hover {
			color: #fff;
			// border: 2px solid #ED6B86;
			background: #42b883;
			transition: all 500ms ease;
		}
	}
}


.home__wrapper {
	background-position: bottom right;

	height: 100vh;
	width: 100vw;
	text-align: center;
	background: url(/img/home.jpg);

	// background: url(https://github.com/clairejacquet/portfolio-nuxtjs/blob/master/home.jpg?raw=true);
	// background-repeat: no-repeat;
	// background-size: cover;

	display: -webkit-box;

	display: -ms-flexbox;

	display: flex;
	-webkit-box-orient: vertical;
	-webkit-box-direction: normal;
	-ms-flex-direction: column;
	flex-direction: column;
	-webkit-box-align: center !important;
	-ms-flex-align: center !important;
	align-items: center !important;
	-webkit-box-pack: center !important;
	-ms-flex-pack: center !important;
	justify-content: center !important;
}

.home__cover--gradient {
	height: 100%;
	width: 100%;
	z-index: 10;

	padding: 0;
	margin: 0;

	background-image: -webkit-gradient(linear, left bottom, right top, from(#d16ba5B3), color-stop(#c777b9B3), color-stop(#ba83caB3), color-stop(#aa8fd8B3), color-stop(#9a9ae1B3), color-stop(#8aa7ecB3), color-stop(#79b3f4B3), color-stop(#69bff8B3), color-stop(#52cffeB3), color-stop(#41dfffB3), color-stop(#46eefaB3), to(#5ffbf1B3));
	background-image: -o-linear-gradient(left bottom, #d16ba5B3, #c777b9B3, #ba83caB3, #aa8fd8B3, #9a9ae1B3, #8aa7ecB3, #79b3f4B3, #69bff8B3, #52cffeB3, #41dfffB3, #46eefaB3, #5ffbf1B3);
	background-image: linear-gradient(to right top, #d16ba5B3, #c777b9B3, #ba83caB3, #aa8fd8B3, #9a9ae1B3, #8aa7ecB3, #79b3f4B3, #69bff8B3, #52cffeB3, #41dfffB3, #46eefaB3, #5ffbf1B3);
	display: -webkit-box;
	display: -ms-flexbox;

	display: flex;
	-webkit-box-orient: vertical;
	-webkit-box-direction: normal;
	-ms-flex-direction: column;
	flex-direction: column;
	-webkit-box-align: center !important;
	-ms-flex-align: center !important;
	align-items: center !important;
	-webkit-box-pack: center !important;
	-ms-flex-pack: center !important;
	justify-content: center !important;

	.home__title_area {
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

		.home__title--name {
			font-size: 6em;
			color: white;
			margin: 0 auto;
			padding: 0;
			text-transform: lowercase;
			text-shadow: 1px 1px  rgba(71, 71, 71, 0.8);

		}
		.home__title--description {
			font-size: 3em;
			text-transform: lowercase;
			letter-spacing: 5px;
			color: white;
			margin: 0 auto;
			padding: 1em;
			text-shadow: 1px 1px  rgba(71, 71, 71, 0.8);
		}
	}

}

@media only screen and (min-width : 1200px) {
	.home__wrapper {
		background-repeat: no-repeat;
		background-size: cover;
	}
}

</style>
