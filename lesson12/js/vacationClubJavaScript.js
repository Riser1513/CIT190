document.getElementById('sub').addEventListener('click', function(event) {
    event.preventDefault()
    document.getElementById('firstNameError').innerHTML = ''
    document.getElementById('lastNameError').innerHTML = ''
    document.getElementById('emailError').innerHTML = ''
    document.getElementById('seasonError').innerHTML = ''
    document.getElementById('accomodationError').innerHTML = ''

    firstName = document.getElementById('firstname')
    lastName = document.getElementById('lastname')
    email = document.getElementById('email')

    season = document.getElementById('seasonList').value

    star5 = document.getElementById('star5').checked
    rentalHouse = document.getElementById('rentalhouse').checked
    pool = document.getElementById('pool').checked
    fitness = document.getElementById('fitness').checked
    dining = document.getElementById('dining').checked
    golf = document.getElementById('golf').checked
    roomAmmenities = document.getElementById('roomammenities').checked
    beach = document.getElementById('beach').checked

    errorFlag = false

    if (firstName == '') {
        document.getElementById('firstNameError').innerHTML = 'First name is empty. First name cannot be empty.'
        errorFlag = true
    }
    if (lastName == '') {
        document.getElementById('firstNameError').innerHTML = 'First name is empty. First name cannot be empty.'
        errorFlag = true
    }
    if (email == ''){
		document.getElementById('emailError').innerHTML = 'Email is empty. Email cannot be empty.'
		errorFlag = true
	}
	if (email) {
		atPosition = email.indexOf("@");  
		dotPosition = email.lastIndexOf(".");  
		if (atPosition < 1 || dotPosition < atPosition + 2 || dotPosition + 2 >= email.length) {  
	 	    document.getElementById('emailError').innerHTML = 'The email address you entered is invalid. Please enter a valid address.'
	        errorFlag = true		  
		}
  	}
    if (season == '') {
        document.getElementById('seasonError').innerHTML = 'Season has not been selected. Please select a season.'
        errorFlag = true
    }
    if (!star5 && !rentalHouse && !pool && !fitness && !dining && !golf && !roomAmmenities && !beach) {
        document.getElementById('accomodationError').innerHTML = 'An acoomodation has not been selected. Please select an accomodation.'
        errorFlag = true
    }

    if (errorFlag == false) {
		localStorage.firstname = firstName
		localStorage.lastname = lastName
		localStorage.email = email
		window.location.assign("vacationConfirm.html")
    }
})