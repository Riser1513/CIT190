﻿$(function() {
	$('#calc').on('click', function() {

		var $wind = eval(parseFloat($("#wind").val()))
		var $temp = eval(parseFloat($("#temp").val()))
		
		if(isNaN($wind) || $wind===0)
			$("results").html("<p id='error'>Please enter a number greater than zero for the wind speed!</p>")
		else if (isNaN($temp))
			$("results").html("<p id='error'>Please enter a number for the temperature!</p>")
		else {
			var $chill = (0.0817*(3.71*(Math.pow($wind, 0.5))+5.81-0.25*$wind)*($temp-91.4)+91.4)
		
		if ($chill < 0)
			$("results").html("<p id='cold'>The windchill factor is: " + Math.round($chill) + " degrees</p>")
		else if ($chill > 80)
			$("results").html("<p id='hot'>There is no windchill factor.  Your temp is: " + Math.round($temp) + " degrees</p>")
		else	
			$("results").html("<p id='normal'>The windchill factor is: " + Math.round($chill) + " degrees</p>")
		}	

	})
	// function windChill() {

	// 	var wind=parseFloat(document.getElementById("wind").value)
	// 	var temp=parseFloat(document.getElementById("temp").value)
		
	// 	if(isNaN(wind) || wind===0)
	// 		document.getElementById("results").innerHTML = "<p id='error'>Please enter a number greater than zero for the wind speed!</p>"
	// 	else if (isNaN(temp))
	// 		 document.getElementById("results").innerHTML = "<p id='error'>Please enter a number for the temperature!</p>"
	// 	else {
	// 		var chill=(0.0817*(3.71*(Math.pow(wind, 0.5))+5.81-0.25*wind)*(temp-91.4)+91.4)
		
	// 	if (chill < 0)
	// 		document.getElementById("results").innerHTML="<p id='cold'>The windchill factor is: " + Math.round(chill) + " degrees</p>"
	// 	else if (chill > 80)
	// 		document.getElementById("results").innerHTML="<p id='hot'>There is no windchill factor.  Your temp is: " + Math.round(temp) + " degrees</p>"
	// 	else	
	// 		document.getElementById("results").innerHTML="<p id='normal'>The windchill factor is: " + Math.round(chill) + " degrees</p>"
	// 	}	

	// }
	function getFocus(){
		$("wind").focus()
		$("results").html(" ")
	}

	$("#reset").on("click", function() {getFocus()})

	// document.getElementById('calc').onclick = windChill()

	$('#body').on("click", function() {getFocus()})
})

$(function() {
	getFocus()
})