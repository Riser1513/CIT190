function Game(name,platform,price,discount){
    this.name = name;
    this.platform = platform;
    this.price = price;
    this.discount = discount;
    this.cost = function(){
        var totalCost = parseInt(this.price) - parseInt(this.discount);
        return "$" + totalCost;
    }
    this.message = function(){
        var discountPercent = "You received a " + Math.round(parseInt(this.discount)/parseInt(this.price) * 100 * 100) / 100 + "% discount!";
        return discountPercent;
    }
}

let name1 = "a" // prompt("enter a game name: ")
var platform1 = "a" // prompt("enter the platform its on (ex. xbox, playstation): ")
var price1 = 1 // prompt("enter the retail price of the game: ")
let firstGame = new Game(name1,platform1,price1,5)

document.getElementById("gameName1"    ).innerHTML = firstGame.name;
document.getElementById("gamePlatform1").innerHTML = firstGame.platform;
document.getElementById("gameRetail1"  ).innerHTML = firstGame.price;
document.getElementById("gameDiscount1").innerHTML = firstGame.discount;
document.getElementById("gameTotal1"   ).innerHTML = firstGame.cost();
document.getElementById("discount1"    ).innerHTML = firstGame.message();

var secondGame = new Game('Minecraft','XBox X|S',30,5)

document.getElementById("gameName2"    ).innerHTML = secondGame.name;
document.getElementById("gamePlatform2").innerHTML = secondGame.platform;
document.getElementById("gameRetail2"  ).innerHTML = secondGame.price;
document.getElementById("gameDiscount2").innerHTML = secondGame.discount;
document.getElementById("gameTotal2"   ).innerHTML = secondGame.cost();
document.getElementById("discount2"    ).innerHTML = secondGame.message();

var today = new Date();
var weekFromToday = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);

document.getElementById("date").innerHTML = weekFromToday;