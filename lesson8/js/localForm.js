document.getElementById("submit").addEventListener('click', function () {
    localStorage.name = document.getElementById("name").value;
    localStorage.job = document.getElementById("job").value;
    localStorage.email = document.getElementById("email").value;
    localStorage.game = document.getElementById("game").value;
    window.location.assign("localConfirm.html");
})