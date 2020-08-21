<template lang="html">

	<footer class="container-fluid footer">
		<p class="footer__title"> {{ title }} </p>
		<div class="footer__list_links">
			<a v-for="footer in footers" :href="footer.link" class="footer__link">
				<i v-bind:class=" footer.icon "></i>
			</a>
		</div>
	</footer>

</template>

<script>
export default {
	data() {
		return {
			title: 'Claire | Frontend javascript developer',
			footers: [
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
					link: 'https://github.com/clairedonut'
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

.footer {
	position: fixed !important;
	width: 100%;
	bottom: 0;
	left: 0;
	z-index: 100;

	@include flex-row(space-between,flex-end);
	padding: 0.5em  3em;
	// background-color: #DAFFEF;
	background-color: #76eec6;

	.footer__title {
		color: #5D737E;
		font-weight: 200;
		margin: 0;
		text-transform: lowercase;
	}
	.footer__list_links {
		@include flex-row(flex-end,flex-end);
	}
	.footer__link {
		i {
			color: #5D737E;
			font-size: 12px;
			margin: 0 5px ;
			&:hover {
				color: #ED6B86;
				text-decoration: none;
			}

		}
	}
}
</style>
