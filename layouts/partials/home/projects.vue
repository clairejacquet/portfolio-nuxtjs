<template>

	<section id="projects" class="row">
		<div class="Iam col-12">
			<p>Check out my portfolio here</p>

			<b>
				<div class="innerIam">
					<br />
					vue<br />
					bootstrap<br />
					javascript<br />
					jquery<br />
					a<br />
					b<br />
					c<br />
					d<br />
				</div>
			</b>


		</div>

	</section>

</template>

<script>
export default {
}
</script>

<style lang="scss">

#projects {


	.Iam {
		// padding: 2em 5em;
		font-size: 30px;
		// color: #999;

		display: flex;
		flex-direction: column ;
		justify-content: space-between;
		align-items: center;

		width: 100%;

		background: yellow;
		color: black;
		height: 400px;

		p {
			letter-spacing: -1px;
			text-transform: lowercase;
			font-size: 2em;

		}
	}
	.Iam p {
		height: 50px;
		float: left;
		width: 40%;
		margin-right: 0.3em;
	}
	.Iam b {
		width: 40%;

		float: right;
		overflow: hidden;
		position: relative;
		height: 100px;
		// top: 40px;
	}


	.Iam .innerIam {
		// display: inline-block;
		color: #484848;
		font-size: 3em;
		position: relative;
		white-space: nowrap;
		top: 0;
		left: 0;


		/*animation*/
		-webkit-animation:move 5s;
		-moz-animation:move 5s;
		-ms-animation:move 5s;
		-o-animation:move 5s;
		animation:move 5s;
		/*animation-iteration-count*/
		-webkit-animation-iteration-count:infinite;
		-moz-animation-iteration-count:infinite;
		-ms-animation-iteration-count:infinite;
		-o-animation-iteration-count:infinite;
		animation-iteration-count:infinite;
		/*animation-delay*/
		-webkit-animation-delay:2s;
		-moz-animation-delay:2s;
		-ms-animation-delay:2s;
		-o-animation-delay:2s;
		animation-delay:2s;
	}
	@keyframes move{
		0%  { top: 0px; }
		20% { top: -50px; }
		40% { top: -100px; }
		60% { top: -150px; }
		80% { top: -200px; }
	}

	@-webkit-keyframes move {
		0%  { top: 0px; }
		20% { top: -50px; }
		40% { top: -100px; }
		60% { top: -150px; }
		80% { top: -200px; }
	}
	@-moz-keyframes move {
		0%  { top: 0px; }
		20% { top: -50px; }
		40% { top: -100px; }
		60% { top: -150px; }
		80% { top: -200px; }
	}
	@-o-keyframes move {
		0%  { top: 0px; }
		20% { top: -50px; }
		40% { top: -100px; }
		60% { top: -150px; }
		80% { top: -200px; }
	}
	@keyframes move {
		0%  { top: 0px; }
		20% { top: -50px; }
		40% { top: -100px; }
		60% { top: -150px; }
		80% { top: -200px; }
	}

}



</style>
