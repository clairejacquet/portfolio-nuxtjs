<template lang="html">

	<section id="contact" class="container">


		<div class="form-container row">

			<!-- ..................... introduction text ..................... -->

			<div class="col-10 col-lg-6">
				<!-- <h2> {{ title }} </h2> -->
				<p class="intro">
					If you would like to get in touch, feel free to send a message here or contact me <a href="mailto:claire.j.jacquet@gmail.com">by email</a>.
					I am also available on <a href="https://www.linkedin.com/in/clairejacquet/">Linkedin</a>
				</p>
			</div>

			<!-- ..................... contact form ..................... -->

			<form method="post" action="contactengine.php" class=" col-12 col-lg-8 floating-form" id="contact-form">

				<div class="floating-label">
					<input class="floating-input" type="text" name="Name" placeholder=" " required>
					<span class="highlight"></span>
					<label>Name</label>
				</div>

				<div class="floating-label">
					<input class="floating-input" type="text" name="Email" placeholder=" " required>
					<span class="highlight"></span>
					<label>Email</label>
				</div>

				<div class="floating-label">
					<textarea class="floating-input floating-textarea" name="Message" placeholder=" " required></textarea>
					<span class="highlight"></span>
					<label>Your message ...</label>
				</div>


				<input data-callback='onSubmit' type="submit" name="submit" value="send" class="submit-button btn btn-primary" />

			</form>

		</div>

		<!-- <script src="https://www.google.com/recaptcha/api.js?render=6LdcBZ4UAAAAAM41wKroJS2AJsNLCKVOWKwIoP-h"></script> -->

	</section>


</template>

<script>
// grecaptcha.ready(function() {
// 		grecaptcha.execute('6LdcBZ4UAAAAAM41wKroJS2AJsNLCKVOWKwIoP-h', {action: 'homepage'});
// });
export default {
	data () {
		return {
			title: 'Contactez nous',
			text: 'Ipsum fugiat in do eiusmod minim culpa elit Lorem sint enim sint amet commodo.'
		}
	}
}
</script>

<style lang="scss">

#contact {

	display: -webkit-box;

	display: -ms-flexbox;

	display: flex;
	-webkit-box-pack: center;
	-ms-flex-pack: center;
	justify-content: center;
	-webkit-box-align: center;
	-ms-flex-align: center;
	align-items: center;

	.form-container {
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-pack: center;
		-ms-flex-pack: center;
		justify-content: center;
		-webkit-box-align: center;
		-ms-flex-align: center;
		align-items: center;

		margin-top: 10em;
	}


	h2 {
		font-size: 3em;
		font-weight: 700;
		letter-spacing: -2px;
	}

	.intro {
		line-height: 2em;

		a {
			border-bottom: 1px solid grey;
			&:hover {
				border-bottom: 1px solid green;
			}
		}
	}

	form {

		display: -webkit-box;

		display: -ms-flexbox;

		display: flex;
		-webkit-box-orient: vertical;
		-webkit-box-direction: normal;
		-ms-flex-direction: column;
		flex-direction: column;
		-webkit-box-pack: center;
		-ms-flex-pack: center;
		justify-content: center;
		-webkit-box-align: center;
		-ms-flex-align: center;
		align-items: center;


		margin: 5em 0;
		input, textarea {
			margin: 1.5em 0;
		}
		.floating-label {
			width: 80%;
		}
		input, textarea {
			border: 0;
			border-bottom: 2px solid #8a8c8b;
			padding: 0.5em 1em;
		}
		input:focus, textarea:focus {
			outline:none;
			border-bottom: 2px solid rgb(0, 182, 133);
		}
		textarea {
			min-height: 100px;
		}
		.submit-button {
			width: 250px;

			background-color: rgb(0, 182, 133);
			border-radius: 2px;
			border-bottom: 0;

			font-size: 12px;
			letter-spacing: 2px;
			text-transform: uppercase;

			&:hover {
				outline:none;
				border: none;
				background-color: rgba(0, 182, 133, 0.3);

			}
		}
	}
}




/****  floating-Lable style start ****/
.floating-label {
	position:relative;
	margin-bottom:20px;
}
.floating-input , .floating-select {
	font-size:14px;
	padding:4px 4px;
	display:block;
	width:100%;
	height:30px;
	background-color: transparent;
	border:none;
	border-bottom:1px solid #757575;
}
.floating-input:focus , .floating-select:focus {
	outline:none;
	border-bottom:2px solid #C2EABA;
}
label {
	color:#999;
	font-size:14px;
	font-weight:normal;
	position:absolute;
	pointer-events:none;
	left:5px;
	top:5px;
	-o-transition:0.2s ease all;
	transition:0.2s ease all;
	-moz-transition:0.2s ease all;
	-webkit-transition:0.2s ease all;
}
.floating-input:focus ~ label, .floating-input:not(:placeholder-shown) ~ label {
	top:-18px;
	font-size:14px;
	color:#C2EABA;
}
.floating-select:focus ~ label , .floating-select:not([value=""]):valid ~ label {
	top:-18px;
	font-size:14px;
	color:#C2EABA;
}
/* active state */
.floating-input:focus ~ .bar:before, .floating-input:focus ~ .bar:after, .floating-select:focus ~ .bar:before, .floating-select:focus ~ .bar:after {
	width:50%;
}
*, *:before, *:after {
	-webkit-box-sizing: border-box;
	box-sizing: border-box;
}
.floating-textarea {
	min-height: 30px;
	max-height: 260px;
	overflow:hidden;
	overflow-x: hidden;
}
/* highlighter */
.highlight {
	position:absolute;
	height:50%;
	width:100%;
	top:15%;
	left:0;
	pointer-events:none;
	opacity:0.5;
}
/* active state */
.floating-input:focus ~ .highlight , .floating-select:focus ~ .highlight {
	-webkit-animation:inputHighlighter 0.3s ease;
	animation:inputHighlighter 0.3s ease;
}
/* animation */
@-webkit-keyframes inputHighlighter {
	from { background:#C2EABA; }
	to 	{ width:0; background:transparent; }
}
@keyframes inputHighlighter {
	from { background:#C2EABA; }
	to 	{ width:0; background:transparent; }
}
/****  floating-Lable style end ****/

</style>
