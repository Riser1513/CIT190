document.getElementById("submit").addEventListener('click', function () {
    sessionStorage.name = document.getElementById("name").value;
    sessionStorage.job = document.getElementById("job").value;
    sessionStorage.email = document.getElementById("email").value;
    sessionStorage.game = document.getElementById("game").value;
    window.location.assign("sessionConfirm.html");
})