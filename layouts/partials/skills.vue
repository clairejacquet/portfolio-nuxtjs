<template lang="html">

	<section id="skills" class="row d-flex flex-wrap skills">
		<div class="col-12">
			<h2 class="skills__section--title"> {{ title }} </h2>
		</div>

		<!-- ..................... front end skills ..................... -->
		<div v-for="frontend in frontend" id="skills-front" class="col-10 col-md-12 col-lg-10 skill-card skills__section_fullstack skills__section--card">
			<i :class=" frontend.icon "></i>
			<h3 class="text-center skills__section--card-title"> {{ frontend.category }} </h3>
			<div class="d-flex justify-content-center skills__section--card-list">
				<p v-for="items in frontend.items" class="text-center skills__section--card-tag">
					{{ items }}
				</p>
			</div>
		</div>

		<!-- ........ skills project mana / web analytics / digital mkt ........ -->
		<div v-for="skill in skills" class="col-10 col-md-4 col-lg-3 skill-card skills__section_secondary skills__section--card">
			<i :class=" skill.icon "></i>
			<h3 class="text-center skills__section--card-title"> {{ skill.category }} </h3>
			<div class="d-flex justify-content-center skills__section--card-list">
				<p v-for="items in skill.items" class="text-center skills__section--card-tag"> {{ items }} </p>
			</div>
		</div>
	</section>

</template>

<script>
export default {
	data() {
		return {
			title: 'Technical Skills',
			frontend: [
				{
					category: 'fullstack',
					icon: 'far fa-file-code',
					items:[
						'html',
						'css',
						'git',
						'sass',
						'javascript',
						'vue js',
						'webpack (vue-cli)',
						'nuxt.js',
						'jquery',
						'wordpress cms',
						'bootstrap',
						'materializecss',
						'bulma',
						'responsive design',
						'node js',
						'express',
						'strapi',
						'sequelize',
						'postgresql',
						'templating ejs'
					]
				}
			],
			skills: [
				{
					category: 'project management tools',
					icon: 'fas fa-clipboard-check',
					items: [
						'github',
						'jira',
						'YouTrack',
						'Trello',
						'Slack',
						'Spark',
						'Google G Suite'
					]
				},
				{
					category: 'web analytics',
					icon:'fas fa-asterisk',
					items:[
						'google analytics',
						'eulerian'
					]
				},
				{
					category: 'digital channels',
					icon: 'fas fa-chart-line',
					items: [
						'SEO',
						'management & optimization of web-marketing campaigns (affiliation, social media, search, emailing etc)'
					]
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


.skills {
	padding: 100px 0;
	background: #DDFFF7;
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-ms-flex-wrap: wrap;
	    flex-wrap: wrap;
	-webkit-box-pack: center;
	    -ms-flex-pack: center;
	        justify-content: center;


	.skills__section--title {
		margin-bottom: 2em;
		text-align: center;
		letter-spacing: 3px;
		font-size: 3em;
	}

	.skills__section_fullstack {
		.skills__section--card-tag {
			letter-spacing: 0.5px;
			font-weight: 400;
			line-height: 2.2em;
			font-size: 16px;
		}
	}

	.skills__section--card {
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
		-webkit-box-pack: start;
		    -ms-flex-pack: start;
		        justify-content: flex-start;

		.skills__section--card-title {
			letter-spacing: 2px;
		}

		.skills__section--card-list {
			padding: 2em 17px 5em;
			display: -webkit-box;
			display: -ms-flexbox;
			display: flex;
			-ms-flex-wrap: wrap;
			    flex-wrap: wrap;
			-webkit-box-pack: center;
			    -ms-flex-pack: center;
			        justify-content: center;
			width: 90%;
		}

		i {
			font-size: 30px;
			margin-bottom: 1em;
		}

	}

	.text-center {
		text-align: center;
	}

	.skills__section--card-tag {
		letter-spacing: 0.5px;
		font-weight: 400;
		line-height: 2.5em;
		padding-right: 1em;
		&:hover {
			cursor: crosshair;
		}
	}

}


</style>
