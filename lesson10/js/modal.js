$('.accordion').on('click', '.accordion-control', function(e){
    e.preventDefault();
    $(this)
        .next('.accordion-panel')
        .not(':animated')
        .slideToggle();
});

var dragonModal = document.getElementById("dragonModal");

var dragon = document.getElementById("enderDragon");
var dragonImg = document.getElementById("img01");
var caption1Text = document.getElementById("caption1");
dragon.onclick = function() {
    dragonModal.style.display = "block";
    dragonImg.src = this.src;
    caption1Text.innerHTML = this.alt;
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
    dragonModal.style.display = "none";
}

var witherModal = document.getElementById("witherModal");

var wither = document.getElementById("wither");
var witherImg = document.getElementById("img02");
var caption2Text = document.getElementById("caption2");
wither.onclick = function() {
    witherModal.style.display = "block";
    witherImg.src = this.src;
    caption2Text.innerHTML = this.alt;
}

var span1 = document.getElementsByClassName("close")[1];

span1.onclick = function() {
    witherModal.style.display = "none";
}

var wardenModal = document.getElementById("wardenModal");

var warden = document.getElementById("warden");
var wardenImg = document.getElementById("img03");
var caption3Text = document.getElementById("caption3");
warden.onclick = function() {
    wardenModal.style.display = "block";
    wardenImg.src = this.src;
    caption3Text.innerHTML = this.alt;
}

var span2 = document.getElementsByClassName("close")[2];

span2.onclick = function() {
    wardenModal.style.display = "none";
}