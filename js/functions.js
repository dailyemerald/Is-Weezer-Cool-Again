$(document).ready(function(){

	<!--QUOTE BUTTONS-->

	$('#pp1').click(function() {
		$('#Quote1').show();
		$('#Quote2').hide();
		$('#Quote3').hide();
		$('#Quote4').hide();
		$('#Quote5').hide();
		$('#Quote6').hide();
		$('#Quote7').hide();
		$('#Quote8').hide();
		$('#Quote9').hide();
	});

	$('#pp2').click(function() {
		$('#Quote1').hide();
		$('#Quote2').show();
		$('#Quote3').hide();
		$('#Quote4').hide();
		$('#Quote5').hide();
		$('#Quote6').hide();
		$('#Quote7').hide();
		$('#Quote8').hide();
		$('#Quote9').hide();
	});

	$('#pp3').click(function() {
		$('#Quote1').hide();
		$('#Quote2').hide();
		$('#Quote3').show();
		$('#Quote4').hide();
		$('#Quote5').hide();
		$('#Quote6').hide();
		$('#Quote7').hide();
		$('#Quote8').hide();
		$('#Quote9').hide();
	});

	$('#pp4').click(function() {
		$('#Quote1').hide();
		$('#Quote2').hide();
		$('#Quote3').hide();
		$('#Quote4').show();
		$('#Quote5').hide();
		$('#Quote6').hide();
		$('#Quote7').hide();
		$('#Quote8').hide();
		$('#Quote9').hide();
	});

	$('#pp5').click(function() {
		$('#Quote1').hide();
		$('#Quote2').hide();
		$('#Quote3').hide();
		$('#Quote4').hide();
		$('#Quote5').show();
		$('#Quote6').hide();
		$('#Quote7').hide();
		$('#Quote8').hide();
		$('#Quote9').hide();
	});

	$('#pp6').click(function() {
		$('#Quote1').hide();
		$('#Quote2').hide();
		$('#Quote3').hide();
		$('#Quote4').hide();
		$('#Quote5').hide();
		$('#Quote6').show();
		$('#Quote7').hide();
		$('#Quote8').hide();
		$('#Quote9').hide();
	});

	$('#pp7').click(function() {
		$('#Quote1').hide();
		$('#Quote2').hide();
		$('#Quote3').hide();
		$('#Quote4').hide();
		$('#Quote5').hide();
		$('#Quote6').hide();
		$('#Quote7').show();
		$('#Quote8').hide();
		$('#Quote9').hide();
	});

	$('#pp8').click(function() {
		$('#Quote1').hide();
		$('#Quote2').hide();
		$('#Quote3').hide();
		$('#Quote4').hide();
		$('#Quote5').hide();
		$('#Quote6').hide();
		$('#Quote7').hide();
		$('#Quote8').show();
		$('#Quote9').hide();
	});

	$('#pp9').click(function() {
		$('#Quote1').hide();
		$('#Quote2').hide();
		$('#Quote3').hide();
		$('#Quote4').hide();
		$('#Quote5').hide();
		$('#Quote6').hide();
		$('#Quote7').hide();
		$('#Quote8').hide();
		$('#Quote9').show();
	});

<!--QUOTE BUTTONS-->

	$("#quote1").click(function(){
	var x = $('#q1').hasClass('sho');

	if(x == true){
		$('#q1').removeClass("sho").addClass('animated bounceInRight').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
			$(this).removeClass("animated bounceInRight")
    	});
	}
	else{
    	$('#q1').addClass("animated lightSpeedOut").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
			$(this).removeClass("animated lightSpeedOut").addClass('sho')});
    }

  	});


		$("#quote2").click(function(){
		var x = $('#q2').hasClass('sho');

		if(x == true){
			$('#q2').removeClass("sho").addClass('animated bounceInRight').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
				$(this).removeClass("animated bounceInRight")
				});
		}
		else{
				$('#q2').addClass("animated lightSpeedOut").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
				$(this).removeClass("animated lightSpeedOut").addClass('sho')});
			}

			});

			$("#quote3").click(function(){
			var x = $('#q3').hasClass('sho');

			if(x == true){
				$('#q3').removeClass("sho").addClass('animated bounceInRight').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
					$(this).removeClass("animated bounceInRight")
					});
			}
			else{
					$('#q3').addClass("animated lightSpeedOut").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
					$(this).removeClass("animated lightSpeedOut").addClass('sho')});
				}

				});




});
