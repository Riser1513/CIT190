var computer = new Number;
var tries=new Number(0);

document.getElementById("getNumber").addEventListener("click", function(){
	tries=0;
	document.getElementById("guess").value="";
	document.getElementById("tries").value=tries;
    computer= Math.floor((Math.random() *100) + 1);
    document.getElementById("comments").value="I have a number and I am waiting for you to guess it";
});

document.getElementById("checkGuess").addEventListener("click", function() {
	var guessRaw = document.getElementById("guess").value
    var guess = new Number(guessRaw);
	try {
		if (isNaN(guess) || guess == "") {
			throw "The number entered is not a number. Please enter a number between 1 and 100.";
		}
		if (guess < 1) {
			throw "The number entered is less than 1. Please enter a number between 1 and 100."
		}
		if (guess > 100) {
			throw "The number entered is greater than 100. Please enter a number between 1 and 100."
		}
		if (computer==guess){
			document.getElementById("comments").value = "You guessed correctly - congratulations! It only took " + tries + " tries!";
		} else if (computer<guess) {
			document.getElementById("comments").value = "Your guess is too high, try again!";
			tries++;
			document.getElementById("tries").value = tries;
			console.count()
			console.info("User's Guess: " + guess)
		}
		else {
			document.getElementById("comments").value = "Your guess is too low, try again!";
			tries++;
			document.getElementById("tries").value = tries;
			console.count()
			console.info("User's Guess: " + guess)
		}
	}
	catch(msg) {
		document.getElementById("guess").value = ""
		tries++
		document.getElementById("tries").value = tries
		console.count()
		console.info("User's Guess: " + guess)
		document.getElementById("comments").value = msg
	}
});
     


