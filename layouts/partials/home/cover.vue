<template lang="">

  <section  class="row">

    <div class="wrapper">

      <h2> CLAIRE </h2>
      <!-- <p> Front End Web Developer </p> -->


    </div>

  </section>

</template>

<script>

// $(document).ready(function(){
//   var mouseX, mouseY;
//   var ww = $( window ).width();
//   var wh = $( window ).height();
//   var traX, traY;
//   $(document).mousemove(function(e){
//     mouseX = e.pageX;
//     mouseY = e.pageY;
//     traX = ((4 * mouseX) / 570) + 40;
//     traY = ((4 * mouseY) / 570) + 50;
//     console.log(traX);
//     $(".title").css({"background-position": traX + "%" + traY + "%"});
//   });
// });


export default {
}
</script>

<style lang="scss" scoped>

  .wrapper {
  	height: 100vh;
  	width: 100vw;
  	text-align: center;
  	background: url(https://raw.githubusercontent.com/claire-jacquet/week-10-portfolio/master/images/parallax/main-8.jpg);
  	background-size: 160% 160%;
  	overflow: hidden;
  	animation: sp 40s linear infinite;
  	h2 {
  		margin: 0;
  		line-height: 100vh;
  		font-size: 35vw;
  		background: white;
  		color: black;
  		mix-blend-mode: lighten;
  		$text-shadow: ();
  		@for $i from 1 through 25 {
  			$text-shadow: $text-shadow, 1px * $i 1px * $i black;
  		}
  		text-shadow: 0px 0px 0px, $text-shadow;
  		-webkit-text-stroke: 1px white;
  		letter-spacing: 1vw;
  		&::before {
  			color: white;
  			content: "CLAIRE";
  			position: absolute;
  			margin-left: -1%;
  			margin-top: -1%;
  			font-size: 35vw;
  		}
  	}
  }
  @keyframes sp {
  	0%, 100% {
  		background-position: 0% 40%;
  	}
  	50% {
  		background-position: 100% 40%;
  	}
  }

</style>
